import { useEffect, useState } from "react";

import { getOrgsData } from "@/api/orgsApi";
import { getUsersData } from "@/api/usersApi";
import { getTicketsData } from "@/api/ticketsApi";
import { getTicketCommentsData } from "@/api/ticketCommentsApi";

export default function Home() {
  const [orgs, setOrgs] = useState([]);
  const [users, setUsers] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [ticketComments, setTicketComments] = useState([]);

  useEffect(() => {
    const fetchOrgs = async () => {
      const orgsData = await getOrgsData();
      setOrgs(orgsData);
    };
    fetchOrgs();

    const fetchUsers = async () => {
      const usersData = await getUsersData();
      setUsers(usersData);
    };
    fetchUsers();

    const fetchTickets = async () => {
      const ticketsData = await getTicketsData();
      setTickets(ticketsData);
    };
    fetchTickets();

    const fetchTicketComments = async () => {
      const ticketCommentsData = await getTicketCommentsData();
      setTicketComments(ticketCommentsData);
    };
    fetchTicketComments();
  }, []);

  const renderedOrgs = orgs.map((org) => (
    <li key={org.id}>
      id: {org.id}, {org.name}
    </li>
  ));
  console.log(users);
  const renderedUsers = users.map((user) => (
    <li key={user.id}>
      id: {user.id}, {user.firstName} {user.lastName}
    </li>
  ));

  const renderedTickets = tickets.map((ticket) => (
    <li key={ticket.id}>
      id: {ticket.id}, {ticket.title}
    </li>
  ));

  const renderedTicketComments = ticketComments.map((comment) => (
    <li key={comment.id}>
      id: {comment.id}, userid: {comment.userId}, <b>{comment.text}</b>
    </li>
  ));

  // const numbers = [1, 2, 3, 4, 5];
  // const listItems = numbers.map((number) => <li>{number}</li>);

  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-3xl text-center m-5">HomePage</h1>
      <div className="grid grid-flow-col-dense text-center flex-wrap">
        <div>
          <b>All Organizations</b>
          <ul>{renderedOrgs}</ul>
        </div>
        <div>
          <b>All Users</b>
          <ul>{renderedUsers}</ul>
        </div>
        <div>
          <b>All Tickets</b>
          <ul>{renderedTickets}</ul>
        </div>
        <div>
          <b>All Ticket Comments</b>
          <ul>{renderedTicketComments}</ul>
        </div>
      </div>
    </div>
  );
}
