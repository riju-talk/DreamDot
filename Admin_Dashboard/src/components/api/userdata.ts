import axios from 'axios';

export async function getUsersData() {
    try {
        const response = await fetch('http://127.0.0.1:8000/users/');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const usersData = await response.json();
        console.log(usersData); 
        return usersData;
    } catch (error) {
        console.error('Failed to fetch users data:', error);
    }
}


export async function getBlacklistedUsers() {
    try {
        const response = await fetch('http://127.0.0.1:8000/blacklisted-users/');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const blacklistedUsers = await response.json();
        console.log("Blacklisted users:", blacklistedUsers);
        return blacklistedUsers;
    } catch (error) {
        console.error('Failed to fetch blacklisted users:', error);
    }
}


export const blockUser = async (userId: string) => {
    return axios.post(`http://127.0.0.1:8000/block_user/`, { user_id: userId });
  };
  
  export const unblockUser = async (userId: string) => {
    return axios.post(`http://127.0.0.1:8000/unblock_user/`, { user_id: userId });
  };

  export const make_creator = async (userId: string) => {
    return axios.put(`http://127.0.0.1:8000/make_creator/`, { user_id: userId });
  };
  
  export const revoke_creator = async (userId: string) => {
    return axios.put(`http://127.0.0.1:8000/revoke_creator/`, { user_id: userId });
  };