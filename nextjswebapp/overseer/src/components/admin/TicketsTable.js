import { useEffect, useState } from "react";
import Panel from "../ui/Panel";
import Spinner from "../ui/Spinner";
import axios from "axios";
import Table from "../ui/Table";

const baseUrl = "https://localhost:7083/";
const endpoint = "api/Tickets/";

export default function TicketsTable() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    getOrgsData();
  }, []);

  const getOrgsData = async () => {
    setLoading(true);

    const res = await axios.get(baseUrl + endpoint).catch((e) => {
      console.error(e);
    });

    setData(res.data);
    setLoading(false);
  };

  const keyFn = (dataObj) => {
    return dataObj.name; // pass in what ever dataObj property you want to make as the key
  };
  // configuration of what column you want to display
  const config = [
    {
      label: "ID",
      render: (dataObj) => dataObj.id,
    },
    {
      label: "Ticket Title", // 'label' is the column name
      render: (dataObj) => dataObj.title, // what ever is after the arrow function will be rendered
    },
    {
      label: "Date created",
      render: (dataObj) => {
        var date = new Date(dataObj.dateAdded);
        return date.toLocaleDateString();
      }
    },
    {
        label: "Ticket creator",
        render: (dataObj) => `${dataObj.user.firstName} ${dataObj.user.lastName}`,
      },
  ];

  let content;

  if (loading) {
    content = <Spinner />;
  } else {
    //content = <ul>{renderedOrgs}</ul>;
    content = (
      <div className="w-full flex flex-col justify-center">
        <p className="my-2">Total Tickets: {data.length}</p>
        <Table keyFn={keyFn} data={data} config={config} />
      </div>
    );
  }

  return (
    <Panel className="w-full container ">
      <h1 className="font-bold text-xl">Tickets</h1>
      {content}
    </Panel>
  );
}
