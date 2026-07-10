import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Search from './pages/Search';
import Restaurant from './pages/Restaurant';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import ProtectRoutes from './components/ProtectRoutes';
import Login from './pages/login';
import Signup from './pages/Signup';
import ProtectRoutesLogin from './pages/ProtectRoutesLogin';




function App() {
  const [isloggedIn , setIsloggedIn] = useState(false);
  const [data, setData] = useState<any[]>([]);
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="search" element={<Search />} />
            <Route path="restaurant/:id" element={<Restaurant />} />
            <Route path="cart" element={
              <ProtectRoutes isloggedIn = {isloggedIn}><Cart /></ProtectRoutes> } />
            <Route path="favorites" element={<Favorites />} />
            <Route path="orders" element={<Orders />} />
            <Route path="profile" element={<Profile data={data} />} />

            <Route path="signup" element={<ProtectRoutesLogin isloggedIn={isloggedIn}><Signup setData={setData} setIsloggedIn={setIsloggedIn}/></ProtectRoutesLogin>}/>
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
