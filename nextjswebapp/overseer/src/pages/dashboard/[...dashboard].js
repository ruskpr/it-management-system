import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
import { getOrgById } from "@/api/orgsApi";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardHome from "@/components/dashboard/content/DashboardHome";
import DashboardTickets from "@/components/dashboard/content/tickets/DashboardTicketsPage";
import DashboardUsers from "@/components/dashboard/content/DashboardUsers";
import DashboardTicketThread from "@/components/dashboard/content/tickets/DashboardTicketThread";
import ProfilePage from "@/components/dashboard/content/profile/ProfilePage";

export default function DashboardPage() {
  const [org, setOrg] = useState({});
  const [loading, setLoading] = useState(true);

  var router = useRouter();
  const slug = router.query.dashboard;
  const orgIdSlug = slug[0]; // this is the org id
  const page = slug[1];
  const subPage = slug[2];

  useEffect(() => {
    const getOrgData = async () => {
      const orgData = await getOrgById(orgIdSlug);
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
        content = <DashboardHome org={org} />;
        break;
      case "tickets":
        if (subPage) {
          content = <DashboardTicketThread org={org} ticketId={subPage} />;
        } else {
          content = <DashboardTickets org={org} />;
        }
        break;
      case "users":
        content = <DashboardUsers org={org} />;
        break;
      case "profile":
        content = <ProfilePage org={org} />;
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
