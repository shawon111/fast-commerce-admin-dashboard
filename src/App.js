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

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index elemrnt={<Home />} />
            <Route path="customers" elemrnt={<Customers />} />
            <Route path="orders" elemrnt={<Orders />} />
            <Route path="orders/:id" elemrnt={<SingleOrder />} />
            <Route path="customers/:id" elemrnt={<SingleCustomer />} />
            <Route path="blogs" elemrnt={<Blogs />} />
            <Route path="blogs/:id" elemrnt={<SingleBlog />} />
            <Route path="products" elemrnt={<Products />} />
            <Route path="products/:id" elemrnt={<SingleProduct />} />
            <Route path="add-product" elemrnt={<AddProduct />} />
            <Route path="add-blog" elemrnt={<AddBlog/>} />
            <Route path="add-user" elemrnt={<AddUser/>} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
