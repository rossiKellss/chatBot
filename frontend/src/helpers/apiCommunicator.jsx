import axios from "axios";
export const loginUser = async (email, password) => {
  const result = await axios.post("/auth/user/login", { email, password });
  console.log(result)
  
  if (!result.status == 200) {
    throw new Error("Unable to login");
  }
  const data=result.data;
  return data;

};
