import axios from "axios";

const baseUrl = "https://localhost:7083/";
const endpoint = "api/Tickets/";

const getTicketsData = async () => {
  const tickets = await axios.get(baseUrl + endpoint).catch((e) => {
    console.error(e);
  });

  return tickets.data;
};

const getTicketsByOrg = async (orgId) => {
  const tickets = await axios.get(baseUrl + endpoint).catch((e) => {
    console.error(e);
  });

  return tickets.data;
};

const createTicket = async (ticketObj) => {
  console.log(ticketObj);
  const response = await axios
    .post(baseUrl + endpoint, ticketObj)
    .catch((e) => {
      console.error(e.response);
      return;
    });

  //console.log(response);
};

const updateTicket = async (ticketObj) => {
  const response = await axios.put(baseUrl + endpoint + ticketObj.id, ticketObj)
    .catch((e) => {
    console.error(e.response);
    return;
  });
};

export { updateTicket, createTicket, getTicketsData, getTicketsByOrg };
