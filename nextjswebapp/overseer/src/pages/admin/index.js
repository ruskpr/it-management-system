import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroDashboard from "@/components/ui/HeroDashboard";
import OrgsTable from "@/components/admin/OrgsTable";
import UsersTable from "@/components/admin/UsersTable";
import TicketsTable from "@/components/admin/TicketsTable";
import TicketCommentsTable from "@/components/admin/TicketCommentsTable";

import { useRouter } from "next/router";
import { useSession, getSession } from "next-auth/react";

export default function AdminPage() {
  // const session = await getSession({ req });
  // const user = session?.user;
  // const { data: session, status } = useSession();
  const description = "";

  // if (!session) {
  //   return <div>unauthorized</div>;
  // }

  return (
    <>
      <Header />

      <HeroDashboard title="Superuser Dashboard" description={description} />

      {/* data tables */}
      <div className="flex gap-8 justify-center text-center flex-wrap my-8">
        <OrgsTable />
        <UsersTable />
        <TicketsTable />
        <TicketCommentsTable />
      </div>

      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
    if (!session || session.user.name !== "Russ Koprulu") {
    return { redirect: { destination: "/auth/signup", permanent: false } };
  }

  return {
    props: { session },
  };
}
