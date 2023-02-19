import { init } from "@/slices/userSlice";
import { IUser } from "@/types/types";
import axios from "axios";
import { useDispatch } from "react-redux";
import { store } from "@/store";
import { log } from "console";
const useAuth = () => {
  const dispatch = useDispatch();

  const register = async (userData: IUser) => {
    try {
      const res = await axios.post("/api/users/register", {
        ...userData,
      });
      const { user, message } = res.data;
      store.dispatch(init({ ...user }));
      // console.log(message, user);
    } catch (err) {
      console.log(err);
    }
  };

  return { register };
};

export default useAuth;
