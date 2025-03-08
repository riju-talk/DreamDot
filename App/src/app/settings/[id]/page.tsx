"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const SettingsPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (id) {
      const idString = Array.isArray(id) ? id[0] : id;
      fetchData(idString);
    }
  }, [id]);

  const fetchData = async (id: string) => {
    // Replace with your data fetching logic
    const response = await fetch(`/api/settings/${id}`);
    const result = await response.json();
    setData(result);
  };

  if (!id) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Settings Page for ID: {id}</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading data...</p>}
    </div>
  );
};

export default SettingsPage;
