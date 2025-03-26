// components/UsersTable.jsx
import { Table } from 'antd';

import itemData from '../data/items.json'; // Adjust the path to your JSON file

// Define the columns for the data grid
const columns = [
    {
        title: 'Item Name',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
    },
];

export default function UsersTable() {
    // Map your data to include a "key" (antd requires this)
    const dataSource = itemData.map((item) => ({
        ...item,
        key: item.item_id,
    }));

    return (
        <div className="p-4">
            <Table
                columns={columns}
                dataSource={dataSource}
                pagination={false}
                className="rounded shadow-sm"  // Tailwind for subtle rounding and shadow
            />
        </div>
    );
}
