import { signIn, signOut, useSession } from "next-auth/react";
import Button from "@/components/ui/Button";
export default function LoginPage() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div>
        <p>Signed in as {session.user.name}</p>
        <Button onClick={() => signOut()}>Sign out</Button>
      </div>
    );
  }

  return (
    <>
      <Button onClick={() => signIn("github")}>Sign in with github</Button>
    </>
  );
}
