import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSession, getSession } from "next-auth/react";
import { userExistsInOrg } from "@/api/usersApi";
import { getOrgByName } from "@/api/orgsApi";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardHome from "@/components/dashboard/content/DashboardHome";
import DashboardTickets from "@/components/dashboard/content/tickets/DashboardTicketsPage";
import DashboardUsers from "@/components/dashboard/content/DashboardUsers";

export default function DashboardPage() {
  const [org, setOrg] = useState({});

  const { data: session, status } = useSession();

  var router = useRouter();
  const filterData = router.query.dashboard;
  const dashboardName = filterData[0];
  const dashboardPage = filterData[1];
  //console.log(filterData);

  useEffect(() => {
    const getOrgData = async () => {
      const orgData = await getOrgByName(dashboardName.replaceAll("_", " "));
      setOrg(orgData);
    };
    getOrgData();
  }, []);

  let content; // content to be display on screen

  switch (dashboardPage) {
    case "home":
      content = <DashboardHome orgId={org.id} />;
      break;
    case "tickets":
      content = <DashboardTickets org={org} />;
      break;
    case "users":
      content = <DashboardUsers orgId={org.id} />;
      break;
    default:
      router.push("/dashboard/login");
      break;
  }

  return (
    <div>
      <DashboardHeader org={dashboardName} />
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
