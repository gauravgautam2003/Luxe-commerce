import { Route, Routes } from "react-router-dom";
import Home_page from "../pages/Home_page";
import Product_detail_page from "../pages/Product_detail_page";
import Shopping_bag_page from "../pages/Shopping_bag_page";
import Order_history_page from "../pages/Order_history_page";
import Delivery_tracking_page from "../pages/Delivery_tracking_page";
import Admin_panel_page from "../pages/Admin_form";

const homeRoute = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home_page />} />
                <Route path="/product/:id" element={<Product_detail_page />} />
                <Route path="/bag" element={<Shopping_bag_page />} />
                <Route path="/orders" element={<Order_history_page />} />
                <Route path="/track" element={<Delivery_tracking_page />} />
                <Route path="/admin" element={<Admin_panel_page />} />
            </Routes>
        </div>
    );
};

export default homeRoute;