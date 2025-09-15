import Navbar from './components/layout/Navbar.tsx';
import Sidebar from './components/layout/Sidebar.tsx';
import MainContent from './components/layout/MainContent.tsx';
import Footer from './components/layout/Footer.tsx';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
