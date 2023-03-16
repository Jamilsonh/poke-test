import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Menu from './Menu';

function App() {
  return (
    <>
      <Header menuItems={Menu} />
      <Outlet />
    </>
  );
}

export default App;
