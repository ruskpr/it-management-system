import axios from "axios";

const baseUrl = "https://localhost:7083/";
const endpoint = "api/Organizations/";

// gets list of all orgs from api
const getOrgsData = async () => {
  const res = await axios.get(baseUrl + endpoint).catch((e) => {
    console.error(e);
  });

  return res.data;
};

// returns single org object
const getOrgById = async (id) => {
  const org = await axios.get(`${baseUrl}${endpoint}${id}`).catch((e) => {
    console.error(e);
  });

  return org.data;
};

const getOrgByName = async (orgName) => {
  const orgs = await axios.get(`${baseUrl}${endpoint}`).catch((e) => {
    console.error(e);
  });

  for (let i = 0; i < orgs.data.length; i++) {
    if (orgs.data[i].name.toLowerCase() == orgName.toLowerCase()) {

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

  const response = await axios.post(baseUrl + endpoint, orgObj).catch((e) => {
    console.error(e.response);
  });
  
};

const updateOrg = async (orgObj) => {
  await axios.put(baseUrl + endpoint, orgObj);
};

export { getOrgsData, getOrgById, createOrg, getOrgByName, updateOrg };
