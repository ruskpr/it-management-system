import { signIn, signOut, useSession } from "next-auth/react";
import Button from "@/components/ui/Button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsGithub, BsCheckCircleFill } from "react-icons/bs";
import OverseerLogo from "@/components/ui/OverseerLogo";

export default function SignUpPage() {
  const { data: session, status } = useSession();

  let content;
  if (status === "authenticated") {
    const router = useRouter();
    router.push("/dashboard/login");

    content = (
      <>
        <h2 className="m-8 text-xl font-bold text-center flex items-center gap-2">
          Successfully signed in as {session.user.name}
          <BsCheckCircleFill />
        </h2>
        {/* <Button className="mb-2" neutral rounded>
          <Link href="/dashboard/login">Log in to your team</Link>
        </Button>
        <Button className="mb-2" neutral rounded>
          <Link href="/dashboard/create">Create a new team</Link>
        </Button>
        <Button className="mb-2" secondary rounded onClick={() => signOut()}>
          Sign out
        </Button> */}
      </>
    );
  } else {
    content = (
      <>
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-3xl font-bold">Sign in to Overseer</h1>
          <p>
            Overseer users are managed by your connected Github account, we only
            use your github name to connect you to your organizations
          </p>
          <p>By clicking the button below, you will be redirected to an official Github login portal.</p>

          <div className="my-4">
            <Button neutral rounded onClick={() => signIn("github")}>
              <BsGithub className="mr-2" />
              Sign in with github
            </Button>
          </div>
        </div>
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
