import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Cart from "./ProductPages/Cart";
import Categories from "./ProductPages/Categories";
import Details from "./ProductPages/Details";
import Edit from "./ProductPages/Edit";
import Products from "./ProductPages/Products";
import Dashboard from "./UserPages/Dashboard";
import Notification from "./UserPages/Notification";
import Profile from "./UserPages/Profile";
import UpdateProfile from "./Forms/UserForms/UpdateProfile";
import Login from "./Forms/UserForms/Login";
import Register from "./Forms/UserForms/Register";
import ProductForm from "./Forms/ProductForms/ProductForm";
import CategoryForm from "./Forms/ProductForms/CategoryForm";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/product/cart"} element={<Cart />} />
          <Route path={"/product/categories"} element={<Categories />} />
          <Route path={"/product/details/:id"} element={<Details />} />
          <Route path={"/product/edit/:id"} element={<Edit />} />
          <Route path={"/product/products"} element={<Products />} />
          <Route path={"/product/productform"} element={<ProductForm />} />
          <Route path={"/product/categoryform"} element={<CategoryForm />} />\
          <Route path={"/user/dashboard"} element={<Dashboard />} />
          <Route path={"/user/nofication"} element={<Notification />} />
          <Route path={"/user/profile"} element={<Profile />} />
          <Route path={"/user/register"} element={<Register />} />
          <Route path={"/user/login"} element={<Login />} />
          <Route path={"/user/updateprofile"} element={<UpdateProfile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
