import { useSession } from "next-auth/react";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Spinner from "@/components/ui/Spinner";
import { BiMessageAdd } from "react-icons/bi";
import { createTicket } from "@/api/ticketsApi";
import {
  BsChevronDown,
  BsChevronLeft,
  BsFillPlusCircleFill,
} from "react-icons/bs";

export default function TicketCreateForm({ org, setTickets }) {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [showCreateFrom, setShowCreateForm] = useState(false);
  const [error, setError] = useState("");
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    ticketType: "",
  });

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // check for validation
    if (runValidation() === false) {
      return;
    }

    setLoading(true);
    // hide error
    setError("");
    // post to api
    const newTicket = {
      title: inputs.title,
      description: inputs.description,
      dateAdded: new Date().toISOString(),
      isActive: true,
      organizationId: org.id,
      type: inputs.ticketType,
      creator: session.user.name,
    };

    await createTicket(newTicket);
    // update tickets
    setTickets((prev) => [newTicket, ...prev]);

    setLoading(false);

    // reset inputs
    setInputs({
      title: "",
      description: "",
      ticketType: "",
    });
  };

  const runValidation = () => {
    if (inputs.title === "") {
      setError("Title is required");
      return false;
    }

    if (inputs.description === "") {
      setError("Description is required");
      return false;
    }

    if (inputs.ticketType === "") {
      setError("Ticket type is required");
      return false;
    }

    return true;
  };

  let content;
  if (showCreateFrom) {
    content = (
      <form className="m-3 py-3" method="post" onSubmit={handleSubmit}>
        <h2 className="mb-2 text-red-600 font-bold">{error}</h2>
        {/* Title */}
        <label className="pl-2 text-md font-medium text-white">
          Title
          <span className="text-gray-400"> ({inputs.title.length}/100)</span>
        </label>
        <input
          maxLength={100}
          className="w-full pl-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          name="title"
          onChange={handleChange}
          value={inputs.title}
        />
        {/* description */}
        <label className="pl-2 text-md font-medium text-gray-900 text-white">
          Description{" "}
          <span className="text-gray-400">
            ({inputs.description.length}/500)
          </span>
        </label>
        <textarea
          maxLength={500}
          className="w-full pl-3 py-2 mb-3 leading-tight text-gray-700 
          border rounded shadow appearance-none focus:outline-none 
          focus:shadow-outline"
          name="description"
          onChange={handleChange}
          value={inputs.description}
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
          className=" pl-3 py-2 mb-3 leading-tight text-gray-700 
          border rounded shadow focus:outline-none focus:shadow-outline"
        >
          <option value="">none selected</option>
          <option value="question">Question</option>
          <option value="issue">Issue</option>
          <option value="announcement">Announcement</option>
          <option value="maintenance">Maintenance</option>
          <option value="service">Service</option>
          <option value="other">Other</option>
        </select>
        {/* submit button */}
        <div className="flex justify-center">
          <Button primary rounded type="submit" className="border-0 mt-3">
            Create ticket{" "}
            {loading ? (
              <Spinner className="ml-2" />
            ) : (
              <BiMessageAdd className="ml-2" />
            )}
          </Button>
        </div>
      </form>
    );
  }

  return (
    <div className="bg-gray-800 rounded">
      <div
        className="flex h-8 text-xl cursor-pointer text-white font-bold pl-3 items-center justify-between w-full bg-gray-800 rounded"
        onClick={() => setShowCreateForm(!showCreateFrom)}
      >
        <div className="flex items-center">
          <BsFillPlusCircleFill className="mr-2 text-green-500" />
          Create
        </div>
        {showCreateFrom ? (
          <BsChevronDown className="text-2xl mr-2" />
        ) : (
          <BsChevronLeft className="text-2xl mr-2" />
        )}
      </div>
      {content}
    </div>
  );
}
