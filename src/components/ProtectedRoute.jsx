/**
 * مكون ProtectedRoute - حماية الصفحات
 * يتحقق من تسجيل دخول المستخدم
 * إذا لم يكن مسجل دخول، يحوله لصفحة تسجيل الدخول
 */

import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-triply/5 via-triply-teal/5 to-triply-accent/5 dark:from-dark-bg dark:via-dark-surface dark:to-dark-elevated">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-triply mx-auto mb-4"></div>
          <p className="text-triply-dark dark:text-dark-text-primary font-semibold">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    // Redirect to login but save the attempted location
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
