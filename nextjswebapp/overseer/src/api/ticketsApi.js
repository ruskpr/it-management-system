import axios from "axios";

const baseUrl = "https://localhost:7083/";
const endpoint = "api/Tickets/";

const getTicketsData = async () => {
  const tickets = await axios.get(baseUrl + endpoint).catch((e) => {
    console.error(e);
  });

  return tickets.data;
};

export { getTicketsData };
