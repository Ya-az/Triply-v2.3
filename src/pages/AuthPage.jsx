import { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';
import { BrandLogo } from '../components/BrandLogo.jsx';
import ThemeToggle from '../components/ui/ThemeToggle.jsx';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const { login, register } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (isLogin) {
        const result = await login(formData.email, formData.password);
        if (result.success) {
          navigate(from, { replace: true });
        } else {
          setError(result.error);
        }
      } else {
        // Validation
        if (formData.password !== formData.confirmPassword) {
          setError('كلمة المرور غير متطابقة');
          setIsLoading(false);
          return;
        }

        if (formData.password.length < 6) {
          setError('كلمة المرور يجب أن تكون 6 أحرف على الأقل');
          setIsLoading(false);
          return;
        }

        const result = await register({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password
        });

        if (result.success) {
          navigate(from, { replace: true });
        } else {
          setError(result.error);
        }
      }
    } catch (err) {
      setError('حدث خطأ. حاول مرة أخرى');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-triply/5 via-triply-teal/5 to-triply-accent/5 dark:from-dark-bg dark:via-dark-surface dark:to-dark-elevated relative">
      {/* Theme Toggle - في أعلى اليمين */}
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>

      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <Link to="/" className="inline-flex flex-col items-center justify-center gap-3">
            <BrandLogo size="lg" showText={false} className="animate-bounce" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-triply via-triply-teal to-triply-accent bg-clip-text text-transparent">
              Triply
            </h1>
          </Link>
          <h2 className="mt-6 text-3xl font-bold text-triply-dark dark:text-dark-text-primary">
            {isLogin ? 'تسجيل الدخول' : 'إنشاء حساب جديد'}
          </h2>
          <p className="mt-2 text-sm text-triply-slate/70 dark:text-dark-text-secondary">
            {isLogin ? 'مرحباً بعودتك! سجل دخولك لإدارة حجوزاتك' : 'انضم إلينا وابدأ رحلتك القادمة'}
          </p>
        </div>

        {/* Form */}
        <div className="glass-card p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300 px-4 py-3 rounded-lg text-sm text-right">
                {error}
              </div>
            )}

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-triply-dark dark:text-dark-text-primary mb-2 text-right">
                  الاسم الكامل
                </label>
                <div className="relative">
                  <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 text-triply-slate/40 dark:text-dark-text-muted" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <input
                    type="text"
                    name="name"
                    required={!isLogin}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pr-10 pl-4 py-3 rounded-lg border border-triply-slate/20 dark:border-dark-border bg-white dark:bg-dark-surface text-triply-dark dark:text-dark-text-primary focus:ring-2 focus:ring-triply focus:border-transparent text-right"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-triply-dark dark:text-dark-text-primary mb-2 text-right">
                البريد الإلكتروني
              </label>
              <div className="relative">
                <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 text-triply-slate/40 dark:text-dark-text-muted" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pr-10 pl-4 py-3 rounded-lg border border-triply-slate/20 dark:border-dark-border bg-white dark:bg-dark-surface text-triply-dark dark:text-dark-text-primary focus:ring-2 focus:ring-triply focus:border-transparent text-right"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-triply-dark dark:text-dark-text-primary mb-2 text-right">
                  رقم الجوال
                </label>
                <div className="relative">
                  <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 text-triply-slate/40 dark:text-dark-text-muted" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <input
                    type="tel"
                    name="phone"
                    required={!isLogin}
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pr-10 pl-4 py-3 rounded-lg border border-triply-slate/20 dark:border-dark-border bg-white dark:bg-dark-surface text-triply-dark dark:text-dark-text-primary focus:ring-2 focus:ring-triply focus:border-transparent text-right"
                    placeholder="05xxxxxxxx"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-triply-dark dark:text-dark-text-primary mb-2 text-right">
                كلمة المرور
              </label>
              <div className="relative">
                <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 text-triply-slate/40 dark:text-dark-text-muted" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pr-10 pl-12 py-3 rounded-lg border border-triply-slate/20 dark:border-dark-border bg-white dark:bg-dark-surface text-triply-dark dark:text-dark-text-primary focus:ring-2 focus:ring-triply focus:border-transparent text-right"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-triply-slate/40 dark:text-dark-text-muted hover:text-triply-slate/70 dark:hover:text-dark-text-secondary"
                >
                  {showPassword ? (
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                      <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                    </svg>
                  ) : (
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-triply-dark dark:text-dark-text-primary mb-2 text-right">
                  تأكيد كلمة المرور
                </label>
                <div className="relative">
                  <svg className="absolute right-3 top-1/2 transform -translate-y-1/2 text-triply-slate/40 dark:text-dark-text-muted" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    required={!isLogin}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full pr-10 pl-4 py-3 rounded-lg border border-triply-slate/20 dark:border-dark-border bg-white dark:bg-dark-surface text-triply-dark dark:text-dark-text-primary focus:ring-2 focus:ring-triply focus:border-transparent text-right"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-gradient-to-r from-triply to-triply-teal text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'جاري التحميل...' : isLogin ? 'تسجيل الدخول' : 'إنشاء حساب'}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
                setFormData({
                  name: '',
                  email: '',
                  phone: '',
                  password: '',
                  confirmPassword: ''
                });
              }}
              className="text-triply hover:text-triply-teal dark:text-triply-mint dark:hover:text-triply-teal font-medium transition-colors"
            >
              {isLogin ? 'ليس لديك حساب؟ سجل الآن' : 'لديك حساب؟ سجل دخولك'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
