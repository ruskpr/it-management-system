import { getOrgsData } from "../../api/orgsApi";
import { useEffect, useState } from "react";
import Panel from "../ui/Panel";
import Spinner from "../ui/Spinner";
import axios from "axios";
import Table from "../ui/Table";

const baseUrl = "https://localhost:7083/";
const endpoint = "api/Organizations/";

export default function OrgsList() {
  const [loading, setLoading] = useState(false);
  const [orgs, setOrgs] = useState([]);

  useEffect(() => {
    getOrgsData();
  }, []);

  const getOrgsData = async () => {
    setLoading(true);

    const res = await axios.get(baseUrl + endpoint).catch((e) => {
      console.error(e);
    });

    setOrgs(res.data);
    setLoading(false);
  };

  //   const renderedOrgs = orgs.map((org) => (
  //     <li key={org.id}>
  //       id: {org.id}, {org.name}
  //     </li>
  //   ));

  const keyFn = (dataObj) => {
    return dataObj.name; // pass in what ever dataObj property you want to make as the key
  };
// configuration of what column you want to display
const config = [
    {
      label: "Name", // 'label' is the column name
      render: (dataObj) => dataObj.name, // what ever is after the arrow function will be rendered
      sortValue: (dataObj) => dataObj.name, // sort value is only used on <TableSortable /> components
    },
    {
      label: "Color",
      render: (dataObj) => <div className={`p-3 m-2 ${dataObj.color}`} />,
    },
    {
      label: "Score",
      render: (dataObj) => dataObj.score,
      sortValue: (dataObj) => dataObj.score,
    },
  ];
  let content;

  if (loading) {
    content = <Spinner />;
  } else {
    //content = <ul>{renderedOrgs}</ul>;
    content = <Table keyFn={keyFn} data={orgs} config={config} />;
  }

  return (
    <Panel className="w-full mx-8 flex flex-col">
      <b>All Organizations</b>
      <div>{content}</div>
      <Spinner />
    </Panel>
  );
}

// onClick = () => {
//     /*
//       Begin by setting loading = true, and use the callback function
//       of setState() to make the ajax request. Set loading = false after
//       the request completes.
//     */
//     this.setState({ loading: true }, () => {
//       Axios.get('/endpoint')
//         .then(result => this.setState({
//           loading: false,
//           data: [...result.data],
//         }));
//     });
//   }
