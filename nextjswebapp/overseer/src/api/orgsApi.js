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
  console.log(org);

  return org;
};
const getOrgByName = async (orgName) => {
  const orgs = await axios.get(`${baseUrl}${endpoint}`).catch((e) => {
    console.error(e);
  });
  for (let i = 0; i < orgs.data.length; i++) {
    if (orgs.data[i].name.toLowerCase() == orgName.toLowerCase()) {
      //console.log(orgs.data[i]);
      return orgs.data[i];
    }
  }

  console.log(`could not find '${orgName}'`);
  return null;
};

const createOrg = async (orgObj) => {
  // check if org exists / or already is in org
  // if they are dont create org
  const orgs = await getOrgsData();
  for (var i = 0; i < orgs.length; i++) {
    if (orgs[i].name.toLowerCase() === orgObj.name.toLowerCase()) {
      console.log(`${orgObj.name} already exists`);
      return;
    }
  }

  const response = await axios.post(baseUrl + endpoint, orgObj);
  console.log(response);
};

// const getOrgNameById = async (id) => {
//     const org = await axios.get(`${baseUrl}${endpoint}/${id}`).catch((e) => {
//       console.error(e);
//     });
//     console.log(org.data.name);

//     return org.data.name;
//   };

export { getOrgsData, getOrgById, createOrg, getOrgByName };
