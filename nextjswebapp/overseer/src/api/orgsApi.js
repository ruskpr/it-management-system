import axios from "axios";

const baseUrl = "https://localhost:7083/";
const endpoint = "api/Organizations/";

const getOrgsData = async () => {
  const orgs = await axios.get(baseUrl + endpoint).catch((e) => {
    console.error(e);
  });
  //console.log("response:\n");
  //console.log(orgs.data);

  return orgs.data;
};

const getOrgById = async (id) => {
  const org = await axios.get(`${baseUrl}${endpoint}${id}`).catch((e) => {
    console.error(e);
  });
  //console.log("response:\n");
  console.log(org.data.name);

  return org.data.name;
};

// const getOrgNameById = async (id) => {
//     const org = await axios.get(`${baseUrl}${endpoint}/${id}`).catch((e) => {
//       console.error(e);
//     });
//     console.log(org.data.name);

//     return org.data.name;
//   };

export { getOrgsData, getOrgById };
