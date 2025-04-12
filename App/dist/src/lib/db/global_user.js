// /home/r0b1n/Desktop/dreamdot/App/src/lib/db/global_user.ts
class GlobalUser {
    static instance;
    userData = null;
    constructor() {
        this.loadFromStorage();
    }
    // Singleton instance getter
    static getInstance() {
        if (!GlobalUser.instance) {
            GlobalUser.instance = new GlobalUser();
        }
        return GlobalUser.instance;
    }
    // Set user data
    setUser(data) {
        this.userData = data;
        this.saveToStorage();
    }
    // Get user data
    getUser() {
        return this.userData;
    }
    // Clear user data
    clearUser() {
        this.userData = null;
        this.clearStorage();
    }
    // Save user data to localStorage
    saveToStorage() {
        if (this.userData) {
            localStorage.setItem('globalUser', JSON.stringify(this.userData));
        }
    }
    // Load user data from localStorage
    loadFromStorage() {
        const storedData = localStorage.getItem('globalUser');
        if (storedData) {
            this.userData = JSON.parse(storedData);
        }
    }
    // Clear user data from localStorage
    clearStorage() {
        localStorage.removeItem('globalUser');
    }
}
// Export the singleton instance
export const globalUser = GlobalUser.getInstance();
//# sourceMappingURL=global_user.js.map