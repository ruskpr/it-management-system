import dateFormat from "@/helpers/dateFormat";

export default function ThreadHero({ ticket }) {
  return (
    <div
      className="block w-full p-6 mb-3 bg-white border border-gray-200 
    rounded shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <h5
        className="flex justify-between gap-2 flex-wrap text-wrap text-2xl font-light tracking-tight text-gray-900 
      dark:text-white"
      >
        <p className="font-semibold"><span className="font-normal">{ticket.type}: </span>{ticket.title}</p>
      </h5>
      <p className="text-white">{ticket.description}</p>

      <div className="text-gray-300 mt-3">
        <span className="text-white">Posted by {ticket.creator}</span>{" "}
        {dateFormat(ticket.dateAdded)}
      </div>
    </div>
  );
}
