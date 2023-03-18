import { useState } from "react";
import { useRouter } from "next/router";
import capitalize from "@/helpers/capitalize";
import dateFormat from "@/helpers/dateFormat";
import { updateTicket } from "@/api/ticketsApi";

export default function TicketListItem({ ticket }) {
  const [active, setActive] = useState(ticket.isActive);

  const router = useRouter();

  const handleActiveToggle = async () => {
    const newTicket = {
      ...ticket,
      isActive: !active,
    };
    await updateTicket(newTicket);
    setActive(!active);
  };

  return (
    <li
      className="block w-full p-6 mb-3 bg-white border border-gray-200 
    rounded shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700
     dark:hover:bg-gray-700"
    >
      <h5
        className="text-2xl font-bold tracking-tight text-gray-900 
      dark:text-white"
      >
        {capitalize(ticket.type)} -{" "}
        <span className="font-normal">
          {capitalize(ticket.title || "No title")}
        </span>
      </h5>

      <div className="flex flex-row justify-start gap-1 text-gray-400">
        <p className="font-normal">
          Created by {ticket.creator || "No description"}
        </p>{" "}
        <span>| {dateFormat(ticket.dateAdded)}</span>
      </div>
      <p className="my-3 font-normal text-xl text-white">
        {ticket.description || "No description"}
      </p>
      <div className="flex justify-between font-normal text-gray-300">
        <div className="cursor-pointer w-24" onClick={handleActiveToggle}>
          {active ? "Active🟢" : "Inactive🔘"}
        </div>
        <p className="underline cursor-pointer" onClick={() => {
          router.push(`${router.asPath}/${ticket.id}`)
        }}>
          See thread
        </p>
      </div>
    </li>
  );
}
