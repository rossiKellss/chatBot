import axios from "axios";
export const loginUser = async (email, password) => {
  const result = await axios.post("/auth/user/login", { email, password });
  console.log(result);

  if (!result.status == 200) {
    throw new Error("Unable to login");
  }
  const data = result.data;
  return data;
};

export const resigterUser=async (userName,email,password)=>{
  const result=await axios.post('/auth/user/register',({userName,email,password}));
  console.log(result);
  if (!result.status == 200) {
    throw new Error("Unable to login");
  }
  const data = result.data;
  return data;


}

export const checkAuthStatus = async () => {
  const result = await axios.get("/auth/user/authorize");
  if (!result.status == 200) {
    console.log("Unable to authenticate");
  }
  return result;
};
