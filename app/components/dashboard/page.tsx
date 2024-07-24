import React from 'react';
import { useAuth } from '../context/AuthContext';
import TaskList from '../TaskList';

const DashboardPage: React.FC = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={logout}>Logout</button>
      <TaskList />
    </div>
  );
};

export default DashboardPage;
