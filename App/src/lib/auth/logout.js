// /home/r0b1n/Desktop/dreamdot/App/src/lib/auth/logout.js

// Function to simulate fetching token from the database
async function getTokenFromDatabase(userId) {
    // Simulate a database call
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('database-token');
        }, 1000);
    });
}

// Function to get token from local storage
function getTokenFromLocalStorage() {
    return localStorage.getItem('authToken');
}

// Function to logout user
async function logout(userId) {
    const dbToken = await getTokenFromDatabase(userId);
    const localToken = getTokenFromLocalStorage();

    if (dbToken === localToken) {
        // Tokens match, proceed with logout
        localStorage.removeItem('authToken');
        console.log('User logged out successfully');
    } else {
        // Tokens do not match, handle error
        console.error('Token mismatch. Logout failed.');
    }
}

// Example usage
const userId = 'user123';
logout(userId);