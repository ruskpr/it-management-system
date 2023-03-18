import axios from "axios";

const baseUrl = "https://localhost:7083/";
const endpoint = "api/TicketComments/";

const getCommentsData = async () => {
  const tickets = await axios.get(baseUrl + endpoint).catch((e) => {
    console.error(e);
  });

  return tickets.data;
};

// create ticket comment
const createComment = async (commentObj) => {
  const newComment = await axios
    .post(baseUrl + endpoint, commentObj)
    .catch((e) => {
      console.error(e);
    });
};

// get ticket comments by ticket id
const getCommentsByTicketId = async (ticketId) => {
  const ticketComments = await axios.get(baseUrl + endpoint).catch((e) => {
    console.error(e);
  });

  // filter comments by ticket id
  const filteredComments = ticketComments.data.filter(
    (ticket) => ticket.ticketId === ticketId
  );

  return filteredComments;
};

// get ticket comments by user id
const getCommentsByUserId = async (userId) => {
  const ticketComments = await axios
    .get(baseUrl + endpoint + userId)
    .catch((e) => {
      console.error(e);
    });

  return ticketComments.data;
};

export {
  createComment,
  getCommentsData,
  getCommentsByUserId,
  getCommentsByTicketId,
};
