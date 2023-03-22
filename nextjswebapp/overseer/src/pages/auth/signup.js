import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import Button from "@/components/ui/Button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { BsGithub, BsCheckCircleFill } from "react-icons/bs";

export default function SignUpPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  let content;
  if (status === "authenticated") {
    router.push("/dashboard/login");

    content = (
      <>
        <h2 className="m-8 text-xl font-bold text-center flex items-center gap-2">
          Successfully signed in as {session.user.name}
          <BsCheckCircleFill />
        </h2>
      </>
    );
  } else {
    content = (
      <>
        <div className="flex flex-col justify-center items-center gap-3">
          <h1 className="text-3xl font-bold">Sign in to Overseer</h1>
          <p>
            Overseer users are managed by thier connected Github accounts, we
            only use your github name to connect you to your organizations
          </p>
          <p>
            By clicking the button below, you will be redirected to an official
            Github login portal.
          </p>

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
