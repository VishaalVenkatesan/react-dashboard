import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { PieChart, Pie, Cell, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Table, Row, Col, Statistic, Button } from 'antd';
import Loading from './Loading';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const query = new URLSearchParams(location.search);
  const country = query.get('country');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://react-dashboard-vishaal-backend.vercel.app/api/drivers?country=${country}`);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [country]);

  if (loading) return <Loading />;

  const COLORS = ['#3366CC', '#DC3912', '#FF9900', '#109618', '#990099', '#3B3EAC', '#0099C6', '#DD4477', '#66AA00', '#B82E2E'];

  const columns = [
    { title: 'Driver ID', dataIndex: 'driver_id', key: 'driver_id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Address', dataIndex: 'address', key: 'address' },
    { title: 'Car Type', dataIndex: 'car_type', key: 'car_type' },
    { title: 'Cab Details', dataIndex: 'cab_details', key: 'cab_details', render: details => `${details.make} ${details.model} (${details.year}) - ${details.color}` },
    { title: 'Location', dataIndex: 'location', key: 'location', render: loc => `Lat: ${loc.latitude}, Lon: ${loc.longitude}` },
    { title: 'Average Earnings/Month', dataIndex: 'average_earnings_per_month', key: 'average_earnings_per_month' },
  ];

  const totalEarnings = data.reduce((acc, driver) => acc + driver.average_earnings_per_month, 0);
  const averageEarnings = (totalEarnings / data.length).toFixed(2);

  return (
    <div className='flex flex-col w-full p-8 text-center bg-gradient-to-r from-blue-300 to-indigo-400 gap-y-8'>
  <h1 className='p-6 text-3xl font-extrabold text-gray-800'>Dashboard for {country}</h1>
  <Row gutter={16} className='pt-[20px]' justify="center">
    <Col span={8} className='flex justify-center'>
      <Statistic title="Total Earnings" value={`$${totalEarnings}`} className='bg-white w-[200px] rounded-lg'/>
    </Col>
    <Col span={8} className='flex justify-center'>
      <Statistic title="Average Earnings" value={`$${averageEarnings}`} className='bg-white w-[200px] rounded-lg'/>
    </Col>
  </Row>
      <div className="flex justify-center items-center h-[500px] pt-[100px]">
        <PieChart width={500} height={600}>
          <Pie
            data={data}
            dataKey="average_earnings_per_month"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={200}
            fill="#8884d8"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={({ payload }) => {
            if (payload && payload.length) {
              const driver = payload[0].payload;
              return (
                <div>
                  <div className="p-4 bg-white rounded-md shadow-md">
                    <p><strong>{driver.name}</strong></p>
                    <p>Car: {driver.cab_details.make} {driver.cab_details.model} ({driver.cab_details.year})</p>
                    <p>Earnings: ${driver.average_earnings_per_month}</p>
                  </div>
                </div>
              );
            }
            return null;
          }} />
          <Legend />
        </PieChart>
      </div>
      <div className="pt-[200px] flex justify-center items-center">
        <BarChart width={700} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="average_earnings_per_month" fill="#109618" />
        </BarChart>
      </div>
        <div className="pt-[100px] flex justify-center items-center">
        <RadarChart outerRadius={250} width={800} height={700} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis />
          <Radar name="Age" dataKey="age" stroke="#000080" fill="#000080" fillOpacity={0.3} />
          <Tooltip />
          <Legend />
        </RadarChart>
      </div>
      <div className="pt-[100px]">
        <Table dataSource={data} columns={columns} rowKey="driver_id" />
      </div>
      <div className="">
        <Link to="/select">
          <Button type="primary" size="large" icon={<ArrowLeftOutlined />} className="mb-4">
            Change Country
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
