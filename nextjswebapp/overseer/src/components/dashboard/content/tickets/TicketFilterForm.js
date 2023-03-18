import { useState } from "react";
import Button from "@/components/ui/Button";
import { FaFilter } from "react-icons/fa";
import { BsChevronDown, BsChevronLeft } from "react-icons/bs";
import { getTicketsData } from "@/api/ticketsApi";

export default function TicketFilterForm({ setTickets }) {
  const [showFilterForm, setShowFilterForm] = useState(false);
  const [searchFlags, setSearchFlags] = useState({
    title: "",
    ticketType: "",
    isActive: false,
  });

  const handleChange = (event) => {
    setSearchFlags({ ...searchFlags, [event.target.name]: event.target.value });
  };

  const handleCheckboxChange = (event) => {
    setSearchFlags({
      ...searchFlags,
      [event.target.name]: !searchFlags.isActive,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let filteredTickets = await getTicketsData();

    // filter by isActive
    if (searchFlags.isActive) {
      filteredTickets = filteredTickets.filter((ticket) => {
        return ticket.isActive;
      });
    }

    // filter by title
    if (searchFlags.title !== "") {
      filteredTickets = filteredTickets.filter((ticket) => {
        return ticket.title
          .toLowerCase()
          .includes(searchFlags.title.toLowerCase());
      });
    }
    
    //filter by ticket type
    if (searchFlags.ticketType !== "") {
      filteredTickets = filteredTickets.filter((ticket) => {
        return ticket.type === searchFlags.ticketType;
      });
    }

    // set tickets
    setTickets(filteredTickets);
  };

  let content;
  if (showFilterForm) {
    content = (
      <form className="m-3 py-3" method="post" onSubmit={handleSubmit}>
        {/* Title */}
        <label className="pl-2 text-md font-medium text-white">
          Search by title
        </label>
        <input
          className="w-full pl-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          name="title"
          onChange={handleChange}
          value={searchFlags.title}
        />

        {/* ticket type */}
        <label className="pl-2 text-md font-medium text-gray-900 text-white">
          Ticket Type
        </label>
        <br />
        <select
          name="ticketType"
          id=""
          onChange={handleChange}
          className=" pl-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow focus:outline-none focus:shadow-outline"
        >
          <option value="">none selected</option>
          <option value="question">Question</option>
          <option value="issue">Issue</option>
          <option value="announcement">Announcement</option>
          <option value="maintenance">Maintenance</option>
          <option value="service">Service</option>
          <option value="other">Other</option>
        </select>
        <br />
        {/* is active checkbox */}
        <label className="pl-2 text-md font-medium text-gray-900 text-white">
          Show active tickets only
        </label>
        <input
          className="ml-2 leading-tight text-gray-700 border rounded shadow 
        focus:outline-none focus:shadow-outline cursor-pointer w-4 h-4"
          type={"checkbox"}
          name={"isActive"}
          onChange={handleCheckboxChange}
          checked={searchFlags.isActive}
        />
        {/* submit and reset button */}
        <div className="flex justify-center">
          <Button primary rounded type="submit" className="border-0 mt-3">
            Search
          </Button>
          <Button
            secondary
            rounded
            type="reset"
            className="border-0 mt-3 ml-3"
            onClick={async () => {
              setSearchFlags({
                title: "",
                ticketType: "",
                isActive: false,
              });
              setTickets(await getTicketsData());
            }}
          >
            Reset filters
          </Button>
        </div>
      </form>
    );
  } else {
    content = null;
  }

  return (
    <div className="bg-gray-800 rounded ">
      <div
        className="flex h-8 cursor-pointer text-xl text-white font-bold pl-3 items-center justify-between w-full bg-gray-800 rounded"
        onClick={() => setShowFilterForm(!showFilterForm)}
      >
        <div className="flex items-center">
          <FaFilter className="mr-2 text-white" />
          Filter Tickets
        </div>
        {showFilterForm ? (
          <BsChevronDown className="text-2xl mr-2" />
        ) : (
          <BsChevronLeft className="text-2xl mr-2" />
        )}
      </div>
      {content}
    </div>
  );
}
