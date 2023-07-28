import UserOrdersPageComponent from "./components/UserOrdersPageComponent";
import axios from "axios";

const getOrders = async () => {
  const { data } = await axios.get("http://localhost:3000/api/orders", {
    withCredentials: true,
  });
  return data;
};

const UserOrdersPage = () => {
  return <UserOrdersPageComponent getOrders={getOrders} />;
};

export default UserOrdersPage;
