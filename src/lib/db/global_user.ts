// /home/r0b1n/Desktop/dreamdot/App/src/lib/db/global_user.ts

class GlobalUser {
    private static instance: GlobalUser;
    private userData: Record<string, any> | null = null;

    private constructor() {
        this.loadFromStorage();
    }

    // Singleton instance getter
    public static getInstance(): GlobalUser {
        if (!GlobalUser.instance) {
            GlobalUser.instance = new GlobalUser();
        }
        return GlobalUser.instance;
    }

    // Set user data
    public setUser(data: Record<string, any>): void {
        this.userData = data;
        this.saveToStorage();
    }

    // Get user data
    public getUser(): Record<string, any> | null {
        return this.userData;
    }

    // Clear user data
    public clearUser(): void {
        this.userData = null;
        this.clearStorage();
    }

    // Save user data to localStorage
    private saveToStorage(): void {
        if (this.userData) {
            localStorage.setItem('globalUser', JSON.stringify(this.userData));
        }
    }

    // Load user data from localStorage
    private loadFromStorage(): void {
        const storedData = localStorage.getItem('globalUser');
        if (storedData) {
            this.userData = JSON.parse(storedData);
        }
    }

    // Clear user data from localStorage
    private clearStorage(): void {
        localStorage.removeItem('globalUser');
    }
}

// Export the singleton instance
export const globalUser = GlobalUser.getInstance();