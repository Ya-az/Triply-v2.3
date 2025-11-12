import PropTypes from 'prop-types';
import { Navbar } from '../components/Navbar.jsx';
import { Footer } from '../components/Footer.jsx';
import { ExperienceBar } from '../components/ExperienceBar.jsx';
import { FloatingActionButton } from '../components/FloatingActionButton.jsx';

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-triply-sand/30 dark:bg-dark-bg">
      <ExperienceBar />
      <Navbar />
      <main className="pt-24 has-experience-bar:pt-32">{children}</main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node
};

export { MainLayout };
