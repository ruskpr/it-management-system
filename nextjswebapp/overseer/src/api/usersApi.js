import axios from "axios";

const baseUrl = "https://localhost:7083/";
const endpoint = "api/Users/";

const getUsersData = async () => {
  const res = await axios.get(baseUrl + endpoint).catch((e) => {
    console.error(e.response);
  });
  return res.data;
};

const createUser = async (userObj) => {
  // check if user exists / or already is in org
  // if they are dont create user
  const users = await getUsersData();
  for (var i = 0; i < users.length; i++) {
    if (
      users[i].name === userObj.name &&
      users[i].organizationId == userObj.organizationId
    ) {
      console.log(
        `${userObj.name} is already in ORG ID: ${userObj.organizationId}`
      );
      return;
    }
  }

  const response = await axios.post(baseUrl + endpoint, userObj).catch((e) => {
    console.error(e.response);
  });
  console.log(response);
};

const userExistsInOrg = async (name, OrgId) => {
  const users = await getUsersData();

  for (var i = 0; i < users.length; i++) {
    if (users[i].name === name && users[i].organizationId === OrgId) {
      return true;
    }
  }

  return false;
};

// get user by id
const getUserByNameAndOrgId = async (name, orgid) => {
  const res = await axios.get(baseUrl + endpoint).catch((e) => {
    console.error(e.response);
  });

  // filter users by name and org id
  const user = res.data.filter(
    (user) => user.name == name && user.organizationId == orgid
  );
  return user;
};

export { getUserByNameAndOrgId, getUsersData, createUser, userExistsInOrg };
