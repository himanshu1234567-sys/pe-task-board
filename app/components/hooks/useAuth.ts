import { useEffect } from 'react';
import { useRouter } from 'next/router';
import  useAuth  from '../context/AuthContext';

const useAuth = (redirectTo: string):any => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push(redirectTo);
    }
  }, [isAuthenticated, router, redirectTo]);
};

export default useAuth;
