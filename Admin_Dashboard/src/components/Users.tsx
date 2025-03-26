// components/UsersTable.jsx
import { Switch, Table } from 'antd';

import usersData from '../data/user.json'; // Adjust the path to your JSON file

// Define the columns for the data grid
const columns = [
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
        dataIndex: 'full name',
        key: 'display_name',
    },
    {
        title: '',
        dataIndex: 'display_name',
        key: 'display_name',
    },
    {
        title: 'Blacklisted',
        key: 'blacklisted',
        render: (text: any, record: any) => (
            <span>
                <Switch defaultChecked={record.blacklisted} />
            </span>
        ),
    },
    {
        title: 'Creator',
        key: 'Creator',
        render: (text: any, record: any) => (
            <span>
                <Switch defaultChecked={record.user_type!="user"} />
            </span>
        ),
    },
];

export default function UsersTable() {
    // Map your data to include a "key" (antd requires this)
    const dataSource = usersData.map((user) => ({
        ...user,
        key: user.user_id,
    }));

    return (
        <div>
            <Table
                columns={columns}
                dataSource={dataSource}
                pagination={false}
                className="rounded shadow-sm"  // Tailwind for subtle rounding and shadow
            />
        </div>
    );
}
