import { useState, useEffect } from "react";
import { getUsersByOrgId } from "../../../api/usersApi";
import capitalize from "../../../helpers/capitalize";
export default function DashboardUsers({ org }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const usersFromServer = await getUsersByOrgId(org.id);
      setUsers(usersFromServer);
    };
    getUsers();
  }, []);

  const renderedUsers = users.map((user) => {
    return (
      <li key={user.id} className="border bg-gray-800 rounded text-white p-3">
        <h2 className="text-2xl font-semibold">{user.name}</h2>
        <p>Role: {user.orgRole || "No role set"}</p>
        <a className="underline text-blue-400 hover:text-blue-500" href={`mailto:${user.email}`}>{user.email}</a>
      </li>
    );
  });

  return (
    <div className="m-3">
      <h1 className="mb-3 text-3xl font-bold">
        {capitalize(org.name || "")} Users
      </h1>
      <ul>{renderedUsers}</ul>
    </div>
  );
}
