import { useRouter } from "next/router";
import { useSession, getSession } from "next-auth/react";

import axios from "axios";
import { userAgent } from "next/server";
import { userExistsInOrg } from "@/api/usersApi";
import Header from "@/components/layout/Header";

export default function DashboardPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const teamName = router.query.dashboard.replaceAll("_", " ");

  if (userExistsInOrg(session.user.name, teamName)) {
  }
  return (
    <>
      <Header />
      <div className="py-32">
        <h1>Dashboard {teamName}</h1>
      </div>
    </>
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
