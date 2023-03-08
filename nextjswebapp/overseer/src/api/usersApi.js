import axios from "axios";

const baseUrl = "https://localhost:7083/";
const endpoint = "api/Users/";

const getUsersData = async () => {
  const users = await axios.get(baseUrl + endpoint).catch((e) => {
    console.error(e);
  });

  return users.data;
};

export { getUsersData };
