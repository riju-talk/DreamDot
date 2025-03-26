import { useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

// Dummy data for demonstration purposes
const fetchCollectionStats = () => {
    return Promise.resolve({
        totalProducts: 120,
        totalRevenue: 56000,

        // Line chart data (Revenue Over Time)
        revenueData: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'Revenue',
                    data: [8000, 9000, 7500, 9500, 11000, 10000],
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    fill: true,
                },
            ],
        },

        // Bar chart data (New Products Per Month)
        monthlyNewProductsData: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'New Products',
                    data: [10, 12, 9, 15, 20, 18],
                    backgroundColor: 'rgba(255,99,132,0.6)',
                },
            ],
        },

        // Doughnut chart data (Top Countries by Revenue)
        topCountriesData: {
            labels: ['USA', 'Canada', 'UK', 'Australia', 'Germany'],
            datasets: [
                {
                    data: [30000, 8000, 7000, 4000, 3000],
                    backgroundColor: [
                        'rgba(54,162,235,0.6)',
                        'rgba(255,206,86,0.6)',
                        'rgba(75,192,192,0.6)',
                        'rgba(153,102,255,0.6)',
                        'rgba(255,159,64,0.6)',
                    ],
                },
            ],
        },
    });
};

interface CollectionStats {
    totalProducts: number;
    totalRevenue: number;
    revenueData: any;              // Simplified for brevity
    monthlyNewProductsData: any;   // Simplified for brevity
    topCountriesData: any;         // Simplified for brevity
}

export default function Collections() {
    const [stats, setStats] = useState<CollectionStats | null>(null);

    useEffect(() => {
        fetchCollectionStats().then((data) => {
            setStats(data);
        });
    }, []);

    if (!stats) return <p>Loading stats...</p>;

    return (
        <div className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-bold mb-4">Collections Overview</h2>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-gray-100 rounded">
                    <p className="text-gray-600">Total Products</p>
                    <p className="text-2xl font-semibold">{stats.totalProducts}</p>
                </div>
                <div className="p-4 bg-gray-100 rounded">
                    <p className="text-gray-600">Total Revenue</p>
                    <p className="text-2xl font-semibold">
                        ${stats.totalRevenue.toLocaleString()}
                    </p>
                </div>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Line Chart (Revenue Over Time) */}
                <div className="bg-white p-4 shadow rounded">
                    <h3 className="text-lg font-bold mb-2">Revenue Over Time</h3>
                    <Line data={stats.revenueData} />
                </div>

                {/* Bar Chart (Monthly New Products) */}
                <div className="bg-white p-4 shadow rounded">
                    <h3 className="text-lg font-bold mb-2">New Products Per Month</h3>
                    <Bar data={stats.monthlyNewProductsData} />
                </div>
            </div>

            {/* Doughnut Chart (Top Countries) */}
            <div className="mt-8 bg-white p-4 shadow rounded">
                <h3 className="text-lg font-bold mb-2">Top Countries by Revenue</h3>
                <Doughnut data={stats.topCountriesData} />
            </div>
        </div>
    );
}
