import { useEffect, useState } from "react";
import Panel from "@/components/ui/Panel";
import { getUsersData } from "@/api/usersApi";
import { getTicketsData } from "@/api/ticketsApi";
import { getTicketCommentsData } from "@/api/ticketCommentsApi";
import OrgsList from "@/components/admin/OrgsList";

export default function AdminPage() {
  const [users, setUsers] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [ticketComments, setTicketComments] = useState([]);

  

  useEffect(() => {
    const fetchUsers = async () => {
      const usersData = await getUsersData();
      setUsers(usersData);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchTickets = async () => {
      const ticketsData = await getTicketsData();
      setTickets(ticketsData);
    };
    fetchTickets();
  }, []);

  useEffect(() => {
    const fetchTicketComments = async () => {
      const ticketCommentsData = await getTicketCommentsData();
      setTicketComments(ticketCommentsData);
    };
    fetchTicketComments();
  }, []);

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
      <h1 className="text-3xl text-center m-5">AdminPage</h1>
      <div className="flex gap-8 justify-center text-center flex-wrap">
        <OrgsList />

        <Panel className="w-full mx-8">
          <b>All Users</b>
          <ul>{renderedUsers}</ul>
        </Panel>
        <Panel className="w-full mx-8">
          <b>All Tickets</b>
          <ul>{renderedTickets}</ul>
        </Panel>
        <Panel className="w-full mx-8">
          <b>All Ticket Comments</b>
          <ul>{renderedTicketComments}</ul>
        </Panel>
      </div>
    </div>
  );
}
