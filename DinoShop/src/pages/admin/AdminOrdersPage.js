import OrdersPageComponent from "./components/OrdersPageComponent";

import axios from "axios";

const getOrders = async () => {
  const { data } = await axios.get("http://localhost:3000/api/orders/admin", {
    withCredentials: true,
  });
  return data;
};

const AdminOrdersPage = () => {
  return <OrdersPageComponent getOrders={getOrders} />;
};

export default AdminOrdersPage;
