import EditUserPageComponent from "./components/EditUserPageComponent";
import axios from "axios";

const fetchUser = async (userId) => {
  const { data } = await axios.get(
    `http://localhost:3000/api/users/${userId}`,
    { withCredentials: true }
  );
  return data;
};

const updateUserApiRequest = async (userId, name, lastName, email, isAdmin) => {
  const { data } = await axios.put(
    `http://localhost:3000/api/users/${userId}`,
    { name, lastName, email, isAdmin },
    { withCredentials: true }
  );
  return data;
};

const AdminEditUserPage = () => {
  return (
    <EditUserPageComponent
      updateUserApiRequest={updateUserApiRequest}
      fetchUser={fetchUser}
    />
  );
};

export default AdminEditUserPage;
