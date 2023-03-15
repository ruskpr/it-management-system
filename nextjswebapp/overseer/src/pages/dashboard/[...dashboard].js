import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSession, getSession } from "next-auth/react";
import { userExistsInOrg } from "@/api/usersApi";
import { getOrgByName } from "@/api/orgsApi";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHome from "@/components/dashboard/content/DashboardHome";
import DashboardAnnouncments from "@/components/dashboard/content/DashboardAnnouncements";
import DashboardTickets from "@/components/dashboard/content/DashboardTickets";
import DashboardIssues from "@/components/dashboard/content/DashboardIssues";

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
    case "announcements":
      content = <DashboardAnnouncments orgId={org.id} />;
      break;
    case "tickets":
      content = <DashboardTickets org={org} />;
      break;
    case "issues":
      content = <DashboardIssues orgId={org.id} />;
      break;
    default:
      router.push("/dashboard/login");
      break;
  }

  if (userExistsInOrg(session.user.name, dashboardName)) {
    // return (
    //   <>
    //     <div>not found</div>
    //   </>
    // );
  }
  return (
    <div className="flex">
      <Sidebar org={dashboardName} />
      {content}
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return { redirect: { destination: "/auth/signup", permanent: false } };
  }
  //Overseer;
  // todo
  // if user belongs the current org show pages, if not show error (or redirect)

  return {
    props: { session },
  };
}
