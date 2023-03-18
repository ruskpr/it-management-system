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
  //console.log(ticketObj);
  const response = await axios
    .post(baseUrl + endpoint, ticketObj)
    .catch((e) => {
      console.error(e.response);
      return;
    });

  //console.log(response);
};

// get ticket by id
const getTicketById = async (ticketId) => {
  const ticket = await axios.get(baseUrl + endpoint + ticketId).catch((e) => {
    console.error(e);
  });

  return ticket.data;
};

const updateTicket = async (ticketObj) => {
  const response = await axios
    .put(baseUrl + endpoint + ticketObj.id, ticketObj)
    .catch((e) => {
      console.error(e.response);
      return;
    });
};

export {
  updateTicket,
  createTicket,
  getTicketsData,
  getTicketsByOrg,
  getTicketById,
};
