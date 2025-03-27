import React, { useEffect, useState } from 'react';
import { Table, message } from 'antd';
import { getBlacklistedUsers} from './api/userdata'; // Adjust path as needed


// The BlacklistRequests component handles fetching and displaying blacklisted users
export const BlacklistRequests: React.FC = () => {
    // Empty function for future unblock logic
    const removeFromBlacklist = (userId: number) => {
        // To be implemented
    };

    // Define table columns with a dynamic action for unblocking users
    const columns = (onUnblock: (userId: number) => void) => [
        {
            title: 'User ID',
            dataIndex: 'user_id',
            key: 'user_id',
        },
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Full Name',
            dataIndex: 'full_name',
            key: 'full_name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phone_number',
            key: 'phone_number',
        },
        {
            title: 'Bio',
            dataIndex: 'bio',
            key: 'bio',
        },
        {
            title: 'Joined On',
            dataIndex: 'date_joined',
            key: 'date_joined',
        },
    ];

    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchBlacklistedUsers = async () => {
        setLoading(true);
        try {
            const data = await getBlacklistedUsers();
            if (data) {
                setUsers(data);
            } else {
                message.error("No data received.");
            }
        } catch (err) {
            message.error("Error fetching blacklisted users.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlacklistedUsers();
    }, []);

    return (
        <Table
            columns={columns(removeFromBlacklist)}
            dataSource={users.map((u) => ({ ...u, key: u.user_id }))}
            loading={loading}
            pagination={false}
        />
    );
};

// The Requests component now simply renders BlacklistRequests
export const Requests: React.FC = () => {
    return (
        <div>
            <BlacklistRequests />
        </div>
    );
};
