"use client";
import { useState, useEffect, useMemo } from "react";
import Fuse from "fuse.js";
import Link from "next/link";
import { AppBar, Toolbar, IconButton, Avatar, InputBase, Badge } from "@mui/material";
import { Button, Dropdown, Space, Typography } from "antd";
import { styled, alpha } from "@mui/material/styles";
import { Home, Search, Notifications, Mail, Chat } from "@mui/icons-material";
import { useUnmountEffect } from "framer-motion";
import { useParams } from "next/navigation";

const SearchBar = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "20px",
  backgroundColor: "#ffffff",
  border: "1px solid #e0e0e0",
  "&:hover": { backgroundColor: "#f8f9fa" },
  marginLeft: theme.spacing(2),
  width: "100%",
  maxWidth: "600px",
  flex: 1,
  [theme.breakpoints.up("sm")]: { 
    marginLeft: theme.spacing(4),
    marginRight: theme.spacing(4),
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: theme.palette.text.primary,
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.5, 1, 1.5, 0),
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

// Logout handler
const handleLogout = async () => {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch("/api/logout", { method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        // uuid: uuid
      },
     });
    if (response.ok) {
      window.location.href = "/"; // Redirect to home page after logout
    } else {
      console.error("Logout failed:", await response.json());
    }
  } catch (error) {
    console.error("Logout error:", error);
  }
};



// Navbar component accepting userId as prop
export default function Navbar({ userId }) {
  // const uuid = useParams();
  const handleChatClick = () => {
    // console.log(uuid);
    const uuid=userId
    window.location.href = `/chat/${uuid}`;
  }

  // Build menu items dynamically
  const items = [
    { key: '1', label: <Link href={`/profile/${userId}`}>Profile</Link> },
    { key: '2', label: <Link href={`/settings/${userId}`}>Settings</Link> },
    { key: '3', label: <span onClick={handleLogout} style={{ color: 'red', cursor: 'pointer' }}>Logout</span>, danger: true },
  ];

  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Debounced search API call
  useEffect(() => {
    const controller = new AbortController();
    
    const fetchUsers = async () => {
      if (!searchInput.trim()) {
        setAllData([]);
        return;
      }
      
      setLoading(true);
      try {
        const res = await fetch(`/api/profile?query=${encodeURIComponent(searchInput)}`, {
          signal: controller.signal
        });
        const data = await res.json();
        setAllData(data);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error("Search error:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchUsers, 300);
    return () => {
      controller.abort();
      clearTimeout(debounceTimer);
    };
  }, [searchInput]);

  // Fuse.js configuration for instant search
  const fuse = useMemo(() => new Fuse(allData, {
    keys: ["username", "display_name"],
    threshold: 0.2,
    minMatchCharLength: 1,
    ignoreLocation: true,
    includeMatches: true,
  }), [allData]);

  // Update search results
  useEffect(() => {
    if (!searchInput.trim()) {
      setSearchResults([]);
      return;
    }
    
    const results = fuse.search(searchInput).map(({ item }) => item);
    setSearchResults(results.length > 0 ? results : allData);
  }, [searchInput, fuse, allData]);


  return (
    <AppBar
      position="sticky"
      sx={{
        backdropFilter: "blur(12px)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        bgcolor: "rgba(255,255,255,0.9)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", px: 3, gap: 2 }}>
        {/* Left Section */}
        <Space align="center" style={{ minWidth: 120 }}>
          <Link href={`/feed/${userId}`}>
            <IconButton sx={{ p: 0, mr: 1 }}>
              <Home sx={{ color: "text.primary", fontSize: 28 }} />
            </IconButton>
          </Link>
          <Link href={`/feed/${userId}`} style={{ display: "flex", alignItems: "center" }}>
            <Avatar variant="rounded" sx={{ bgcolor: "primary.main", width: 36, height: 36, mr: 1 }}>
              📚
            </Avatar>
            <Typography.Title level={4} className="hidden md:block" style={{ margin: 0, color: "#1a1a1a" }}>
              Dreamdot
            </Typography.Title>
          </Link>
        </Space>

        {/* Search Section */}
        <SearchBar>
          <StyledInputBase
            placeholder="Search posts, people, topics..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            inputProps={{ "aria-label": "search" }}
            startAdornment={<Search sx={{ color: "text.secondary", ml: 2, mr: 1, fontSize: 24 }} />}
          />
          {searchInput && (
            <div style={{
              position: "absolute",
              top: "calc(100% + 8px)",
              left: 0,
              right: 0,
              backgroundColor: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              padding: "8px 0",
              zIndex: 10,
              border: "1px solid #eee",
              maxHeight: "400px",
              overflowY: "auto"
            }}>
              {loading ? (
                <div style={{ padding: 16, textAlign: "center" }}>
                  <CircularProgress size={24} />
                </div>
              ) : searchResults.length > 0 ? (
                searchResults.map((user) => (
                  <Link 
                    key={user.username} 
                    href={`/profile/${userId}/accounts/${user.user_id}`} 
                    style={{ textDecoration: "none" }}
                    onClick={() => setSearchInput("")}
                  >
                    <div style={{ 
                      padding: "12px 16px",
                      borderBottom: "1px solid #eee",
                      cursor: "pointer",
                      color: "#333",
                      "&:hover": {
                        backgroundColor: "#f8f9fa"
                      }
                    }}>
                      <div style={{ fontWeight: 500 }}>{user.display_name || user.username}</div>
                      {user.display_name && (
                        <div style={{ fontSize: 14, color: "#666" }}>@{user.username}</div>
                      )}
                    </div>
                  </Link>
                ))
              ) : (
                <div style={{ padding: "16px", textAlign: "center", color: "#999" }}>
                  No results found for "{searchInput}"
                </div>
              )}
            </div>
          )}
        </SearchBar>

        {/* Right Section */}
        <Space sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <IconButton sx={{ p: 1 }}>
            <Badge badgeContent={4} color="error">
              <Mail sx={{ color: "text.primary", fontSize: 24 }} />
            </Badge>
          </IconButton>
          <IconButton sx={{ p: 1 }}>
            <Badge badgeContent={12} color="error">
              <Notifications sx={{ color: "text.primary", fontSize: 24 }} />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge badgeContent={0} color="error">
              <Chat sx={{ color: 'text.primary' }} onClick={handleChatClick}/>
            </Badge>
          </IconButton>
            
          <Dropdown menu={{ items }} trigger={['click']}>
            <Avatar
              src="https://i.pravatar.cc/150?img=3"
              sx={{
                width: 36,
                height: 36,
                cursor: 'pointer',
                border: '2px solid #eee'
              }}
            />
          </Dropdown>
        </Space>
      </Toolbar>
    </AppBar>
  );
}