import React from 'react';
import { AuthProvider } from './components/context/AuthContext';

const Layout: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <div>
        <header>
          <h1>Task Management App</h1>
        </header>
        <main>{children}</main>
        <footer>© 2024 Task Management App</footer>
      </div>
    </AuthProvider>
  );
};

export default Layout;
