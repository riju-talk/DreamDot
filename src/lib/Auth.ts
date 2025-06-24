// hooks/useAuth.js

export function useAuth() {
  return {
    user: null, // no user when not authenticated
    isAuthenticated: false,
    signOut: () => {
      console.log("Mock signOut called");
    },
    message: "TestTubeDiagonal", 
  };
}
