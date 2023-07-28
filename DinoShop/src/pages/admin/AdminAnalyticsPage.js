import AnalyticsPageComponent from "./components/AnalyticsPageComponent";
import axios from "axios";

const fetchOrdersForFirstDate = async (abctrl, firstDateToCompare) => {
  const { data } = await axios.get(
    "http://localhost:3000/api/orders/analysis/" + firstDateToCompare,
    { withCredentials: true },
    {
      signal: abctrl.signal,
    }
  );
  return data;
};

const fetchOrdersForSecondDate = async (abctrl, secondDateToCompare) => {
  const { data } = await axios.get(
    "http://localhost:3000/api/orders/analysis/" + secondDateToCompare,
    { withCredentials: true },
    {
      signal: abctrl.signal,
    }
  );
  return data;
};

const AdminAnalyticsPage = () => {
  return (
    <AnalyticsPageComponent
      fetchOrdersForFirstDate={fetchOrdersForFirstDate}
      fetchOrdersForSecondDate={fetchOrdersForSecondDate}
    />
  );
};

export default AdminAnalyticsPage;
