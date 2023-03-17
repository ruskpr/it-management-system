import { useState, useEffect } from "react";
import ContentList from "../ContentList";
import TicketListItem from "./TicketListItem";
import capitalize from "@/helpers/capitalize";
import { getTicketsByOrg } from "@/api/ticketsApi";
import TicketCreateForm from "./TicketCreateForm";
import TicketFilterForm from "./TicketFilterForm";
import {
  BsChevronDown,
  BsChevronLeft,
  BsFillPlusCircleFill,
} from "react-icons/bs";

export default function DashboardTicketsPage({ org }) {
  const [tickets, setTickets] = useState([]);

  // fetch tickets data on first render
  useEffect(() => {
    const fetchTickets = async () => {
      const tickets = await getTicketsByOrg(org.id);
      setTickets(tickets);
    };

    fetchTickets();
  }, []);

  console.log(tickets);
  // create list items from tickets data
  const renderedTickets = tickets.map((ticket) => {
    return <TicketListItem key={ticket.id} ticket={ticket} />;
  });

  return (
    <div className="w-full p-3">
      <div>
        <h1 className="mb-3 text-3xl font-bold">
          {capitalize(org.name || "")} Tickets
        </h1>
        <div>
          <div className="my-1">
            <TicketCreateForm />
          </div>
          <div className="my-1">
            <TicketFilterForm />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <ContentList>{renderedTickets}</ContentList>
      </div>
    </div>
  );
}
