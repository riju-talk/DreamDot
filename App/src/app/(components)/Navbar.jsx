import { 
    Home, 
    Search, 
    Notifications, 
    Mail, 
    Group, 
    AddBox,
    AccountCircle
  } from '@mui/icons-material';
  import { 
    AppBar, 
    Toolbar, 
    IconButton, 
    Avatar, 
    InputBase, 
    Badge
  } from '@mui/material';
  import { 
    Button, 
    Dropdown, 
    Space,
    Typography
  } from 'antd';
  import { styled, alpha } from '@mui/material/styles';
  
  const SearchBar = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 20,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(1)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  
  export default function Navbar() {
    const items = [
      { key: '1', label: 'Profile' },
      { key: '2', label: 'Settings' },
      { key: '3', label: 'Logout', danger: true },
    ];
  
    return (
      <AppBar 
        position="sticky" 
        color="transparent"
        sx={{ 
          backdropFilter: 'blur(12px)',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          bgcolor: 'rgba(255,255,255,0.8)'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: 3 }}>
          {/* Left Section - Branding */}
          <Space align="center" className="cursor-pointer">
            <Avatar 
              variant="rounded"
              sx={{ 
                bgcolor: 'primary.main', 
                width: 36, 
                height: 36,
                mr: 1
              }}
            >
              📚
            </Avatar>
            <Typography.Title 
              level={4} 
              className="hidden md:block"
              style={{ margin: 0, color: '#1a1a1a' }}
            >
              Dreamdot
            </Typography.Title>
          </Space>
  
          {/* Center Section - Search/Navigation */}
          <SearchBar>
            <StyledInputBase
              placeholder="Search posts, people, topics..."
              inputProps={{ 'aria-label': 'search' }}
              startAdornment={
                <Search sx={{ color: 'text.secondary', ml: 1.5, mr: 1 }} />
              }
            />
          </SearchBar>
  
          {/* Right Section - Actions */}
          <Space size="middle" align="center">
            <IconButton className="hidden sm:inline-flex">
              <Home sx={{ color: 'text.primary' }} />
            </IconButton>
            
            <IconButton>
              <Badge badgeContent={4} color="error">
                <Mail sx={{ color: 'text.primary' }} />
              </Badge>
            </IconButton>
  
            <IconButton>
              <Badge badgeContent={12} color="error">
                <Notifications sx={{ color: 'text.primary' }} />
              </Badge>
            </IconButton>
  
            <Button 
              type="primary" 
              shape="round" 
              icon={<AddBox sx={{ mr: 1 }} />}
              className="hidden md:flex"
            >
              Create Post
            </Button>
  
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