import { signIn, signOut, getSession, useSession } from "next-auth/react";
import Button from "@/components/ui/Button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LoginForm from "@/components/dashboard/LoginForm";
import ProfileCard from "@/components/ui/ProfileCard";

export default function DashboardLoginPage() {
  const { data: session, status } = useSession();

  let content;
  if (status === "authenticated") {
    content = <></>;
  }

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto py-32">
        <div className="flex flex-col sm:flex-row gap-3 px-6 sm:justify-around items-center">
          <div className="flex flex-col text-center font-medium">
            <span className="mb-2">Signed in as:</span>
            <ProfileCard
              img={session.user.image}
              name={session.user.name}
              email={session.user.email}
            />
          </div>
          <LoginForm />
        </div>
      </div>

      <Footer />
    </>
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
