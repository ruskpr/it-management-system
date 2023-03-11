import { signIn, signOut, getSession, useSession } from "next-auth/react";
import Button from "@/components/ui/Button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LoginForm from "@/components/authentication/LoginForm";

export default function LoginPage() {
  const { data: session, status } = useSession();

  let content;
  if (status === "authenticated") {
    content = <></>;
  }

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto flex-col gap-3 justify-center py-32">
        <div className="m-6">
          <h1 className="text-3xl font-bold m-8">Login to your team</h1>
          <p className="m-8">Signed in as {session.user.name}</p>
          <div className="ml-8">
            <LoginForm />
          </div>
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
