/**
 * تخطيط MainLayout - التخطيط الرئيسي للصفحات
 * يغلف كل الصفحات بـ:
 * - Navbar في الأعلى
 * - المحتوى في الوسط
 * - Footer في الأسفل
 */

import PropTypes from 'prop-types';
import { Navbar } from '../components/Navbar.jsx';
import { Footer } from '../components/Footer.jsx';
import { FloatingActionButton } from '../components/FloatingActionButton.jsx';

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-triply-sand/30 dark:bg-dark-bg">
      <Navbar />
      <main className="pt-24">{children}</main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node
};

export { MainLayout };
