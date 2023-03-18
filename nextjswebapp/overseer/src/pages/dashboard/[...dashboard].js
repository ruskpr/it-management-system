import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSession, getSession } from "next-auth/react";
import { getOrgByName, getOrgById } from "@/api/orgsApi";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardHome from "@/components/dashboard/content/DashboardHome";
import DashboardTickets from "@/components/dashboard/content/tickets/DashboardTicketsPage";
import DashboardUsers from "@/components/dashboard/content/DashboardUsers";
import DashboardTicketThread from "@/components/dashboard/content/tickets/DashboardTicketThread";

export default function DashboardPage() {
  const [org, setOrg] = useState({});
  const [loading, setLoading] = useState(true);
  const { data: session, status } = useSession();

  var router = useRouter();
  const filterData = router.query.dashboard;
  const dashboardSlug = filterData[0];
  const page = filterData[1];
  const subPage = filterData[2];

  useEffect(() => {
    const getOrgData = async () => {
      //const orgData = await getOrgByName(dashboardSlug.replaceAll("_", " "));
      const orgData = await getOrgById(dashboardSlug);
      setOrg(orgData);
      setLoading(false);
    };
    getOrgData();
  }, []);

  let content; // content to be display on screen
  if (!org) {
    return <div>Loading...</div>;
  }
  if (loading) {
    content = <div>Loading...</div>;
  } else {
    switch (page) {
      case "home":
        content = <DashboardHome orgId={org.id} />;
        break;
      case "tickets":
        if (subPage) {
          content = <DashboardTicketThread org={org} ticketId={subPage} />;
        } else {
          content = <DashboardTickets org={org} />;
        }
        break;
      case "users":
        content = <DashboardUsers orgId={org.id} />;
        break;
      default:
        router.push("/dashboard/login");
        break;
    }
  }

  return (
    <div>
      <DashboardHeader org={org} />
      <div className="max-w-6xl container mx-auto">{content}</div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return { redirect: { destination: "/auth/signup", permanent: false } };
  }

  return {
    props: { session },
  };
}
