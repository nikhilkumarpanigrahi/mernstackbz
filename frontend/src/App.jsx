import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import LoginPage from './Pages/LoginPage/LoginPage';
import Profile from './Pages/ProfilePage/Profile';
import UrlShortner from './Pages/Shorturl/UrlShortner';
import './index.css';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { HeaderMegaMenu } from './Components/Navbar/HeaderMegaMenu';
import URLHistory from './Pages/Shorturl/URLHistory';


function App() {
  return (
    <Router>
        <HeaderMegaMenu/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<LoginPage/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/shorturl' element={<UrlShortner/>} />
            <Route path='/urlhistory' element={<URLHistory/>} />
            <Route element={<PrivateRoute/>}>
            </Route>
        </Routes>
    </Router>
  )
}

export default App
