import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Containers/Home";
import { User } from "./Containers/User";
import { Customers } from "./Containers/Customers";
import { Orders } from "./Containers/Orders";
import { Coupon } from "./Containers/Coupon";
import { Product } from "./Containers/Product";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/user" element={<User></User>}></Route>
      <Route path="/customers" element={<Customers></Customers>}></Route>
      <Route path="/product" element={<Product></Product>}></Route>
      <Route path="/orders" element={<Orders></Orders>}></Route>
      <Route path="/coupon" element={<Coupon></Coupon>}></Route>
    </Routes>
  );
}

export default App;
