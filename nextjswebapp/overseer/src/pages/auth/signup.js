import { signIn, signOut, useSession } from "next-auth/react";
import Button from "@/components/ui/Button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
export default function SignUpPage() {
  const { data: session, status } = useSession();

  let content;
  if (status === "authenticated") {
    content = (
      <>
        <h2 className="m-8 text-xl font-bold">
          Signed in as {session.user.name}
        </h2>
        <Button className="mb-2" neutral rounded>
          <Link href="/auth/login">Log in to your team</Link>
        </Button>
        <Button className="mb-2" neutral rounded>
          <Link href="/auth/login">Create a new team</Link>
        </Button>
        <Button className="mb-2" secondary rounded onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    );
  } else {
    content = (
      <>
        <Button onClick={() => signIn("github")}>Sign in with github</Button>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto py-32">
        <div className="ml-8 ">{content}</div>
      </div>
      <Footer />
    </>
  );
}
