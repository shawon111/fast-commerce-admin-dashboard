import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Styles/App.css'
import AddBlog from './Pages/AddBlog';
import AddProduct from './Pages/AddProduct';
import AddUser from './Pages/AddUser';
import Blogs from './Pages/Blogs';
import Customers from './Pages/Customers';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Orders from './Pages/Orders';
import PageNotFound from './Pages/PageNotFound';
import Products from './Pages/Products';
import SingleBlog from './Pages/SingleBlog';
import SingleCustomer from './Pages/SingleCustomer';
import SingleOrder from './Pages/SingleOrder';
import SingleProduct from './Pages/SingleProduct';
import Users from './Pages/Users';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="customers" element={<Customers />} />
            <Route path="orders" element={<Orders />} />
            <Route path="orders/:id" element={<SingleOrder />} />
            <Route path="customers/:id" element={<SingleCustomer />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:id" element={<SingleBlog />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<SingleProduct />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="add-blog" element={<AddBlog/>} />
            <Route path="users" element={<Users/>} />
            <Route path="add-user" element={<AddUser/>} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
