import { getOrgById } from "@/api/orgsApi";
import UsersTable from "@/components/admin/UsersTable";
import { useEffect, useState } from "react";

export default function DashboardTickets({ org }) {
  console.log(org);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <h1>Tickets</h1>
      <h2>org ID: {org.id}</h2>
      <UsersTable />
    </div>
  );
}
