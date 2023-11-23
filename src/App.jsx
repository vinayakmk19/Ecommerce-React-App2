import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Blog from "./pages/blog/Blog";
import NoPage from "./pages/noPage/NoPage";
import MyState from "./context/data/myState";
import Order from "./pages/order/Order"
import Dashboard from "./pages/admin/dashboard/Dashboard";
import Cart from "./pages/cart/Cart";
import Login from "./pages/registration/Login"
import Signup from "./pages/registration/Signup"
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from "./pages/admin/pages/AddProduct";
import UpdateProduct from "./pages/admin/pages/UpdateProduct";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={
            <ProtectedRoutes>
              <Order />
            </ProtectedRoutes>
          } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={
            <ProtectedRoutesForAdmin><Dashboard /></ProtectedRoutesForAdmin>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/addproduct" element={
            <ProtectedRoutesForAdmin><AddProduct /></ProtectedRoutesForAdmin>} />
          <Route path="/updateproduct" element={
            <ProtectedRoutesForAdmin><UpdateProduct /></ProtectedRoutesForAdmin>} />


          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>

  )
}

export default App

// User

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('currentUser')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

// Admin

export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  console.log(admin.user.email)
  if (admin.user.email === 'vinayakkamble963@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}