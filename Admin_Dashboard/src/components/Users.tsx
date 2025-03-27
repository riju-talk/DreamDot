// components/UsersTable.jsx
import { useEffect, useState } from 'react';
import { Switch, Table } from 'antd';
import { getUsersData, make_creator, revoke_creator } from './api/userdata';

import { blockUser, unblockUser } from './api/userdata';
const columns = [
    {
        title: 'User ID',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Username',
        dataIndex: 'username',
        key: 'username',
    },
    {
        title: 'Full Name',
        dataIndex: 'full_name',
        key: 'display_name',
    },
    {
        title: 'Blacklisted',
        key: 'blacklisted',
        render: (_: any, record: any) => (
            <Switch defaultChecked={record.blacklisted} onChange={()=>{
                // Add the logic to block/unblock the user
                const new_status = !record.blacklisted;
                console.log(`User ${record.id} is now ${new_status ? 'blacklisted' : 'unblacklisted'}`);
                
                if(new_status){
                    blockUser(record.id);
                }
                else{
                    unblockUser(record.id);
                }
            }}/>
        ),
    },
    {
        title: 'Creator',
        key: 'creator',
        render: (_: any, record: any) => (
            <Switch 
                defaultChecked={record.user_type === 'creator'}
                onChange={(checked) => {
                    if(checked){
                        make_creator(record.id);
                    } else {
                        console.log(`User ${record.id} is no longer a creator`);
                        revoke_creator(record.id);
                    }
                }}
            />
        ),
    },
];

export default function UsersTable() {
    const [usersData, setUsersData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getUsersData();
                const mappedData = data.map(user => ({
                    ...user,
                    key: user.user_id,
                }));
                setUsersData(mappedData);
            } catch (error) {
                console.error("Error fetching users:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="rounded shadow-sm p-4">
            <Table
                columns={columns}
                dataSource={usersData}
                loading={loading}
                pagination={false}
            />
        </div>
    );
}
