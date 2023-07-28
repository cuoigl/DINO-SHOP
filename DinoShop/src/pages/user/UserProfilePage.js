import UserProfilePageComponent from "./components/UserProfilePageComponent";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setReduxUserState } from "../../redux/actions/userActions";

const updateUserApiRequest = async (
  name,
  lastName,
  phoneNumber,
  address,
  country,
  zipCode,
  city,
  state,
  password
) => {
  const { data } = await axios.put(
    "http://localhost:3000/api/users/profile",
    {
      name,
      lastName,
      phoneNumber,
      address,
      country,
      zipCode,
      city,
      state,
      password,
    },
    { withCredentials: true }
  );
  return data;
};

const fetchUser = async (id) => {
  const { data } = await axios.get(
    "http://localhost:3000/api/users/profile/" + id,
    { withCredentials: true }
  );
  return data;
};

const UserProfilePage = () => {
  const reduxDispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userRegisterLogin);

  return (
    <UserProfilePageComponent
      updateUserApiRequest={updateUserApiRequest}
      fetchUser={fetchUser}
      userInfoFromRedux={userInfo}
      setReduxUserState={setReduxUserState}
      reduxDispatch={reduxDispatch}
      localStorage={window.localStorage}
      sessionStorage={window.sessionStorage}
    />
  );
};

export default UserProfilePage;
