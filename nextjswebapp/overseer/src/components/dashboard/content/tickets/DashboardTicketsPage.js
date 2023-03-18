import { useState, useEffect } from "react";
import ContentList from "../ContentList";
import TicketListItem from "./TicketListItem";
import capitalize from "@/helpers/capitalize";
import { getTicketsByOrg } from "@/api/ticketsApi";
import TicketCreateForm from "./forms/TicketCreateForm";
import TicketFilterForm from "./forms/TicketFilterForm";
import { BsEmojiDizzy } from "react-icons/bs";

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

  // create list items from tickets data
  let renderedTickets;

  if (!tickets) {
    renderedTickets = <div>Loading...</div>;
  } else if (tickets.length === 0) {
    renderedTickets = (
      <div className="flex flex-col items-center justify-center w-full h-64">
        <BsEmojiDizzy className="text-6xl text-gray-300" />
        <h2 className="mt-3 text-2xl font-bold text-gray-300 text-center">
          No tickets found, try searching for something else
        </h2>
      </div>
    );
  } else {
    renderedTickets = tickets.map((ticket) => {
      return <TicketListItem key={ticket.id} ticket={ticket} />;
    });
  }

  return (
    <div className="w-full p-3">
      <div>
        <h1 className="mb-3 text-3xl font-bold">
          {capitalize(org.name || "")} Tickets
        </h1>
        <div>
          <div className="my-1">
            <TicketCreateForm org={org} setTickets={setTickets} />
          </div>
          <div className="my-1">
            <TicketFilterForm setTickets={setTickets} />
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-light mb-2">
          Currently showing {tickets.length} ticket{tickets.length === 1 || "s"}{" "}
          for {capitalize(org.name || "")}
        </h2>
        <ContentList>{renderedTickets}</ContentList>
      </div>
    </div>
  );
}
