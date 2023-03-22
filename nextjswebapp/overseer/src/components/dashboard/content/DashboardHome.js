import { useSession } from "next-auth/react";
import capitalize from "@/helpers/capitalize";
import ProfileCard from "@/components/ui/ProfileCard";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function DashboardHome({ org }) {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col justify-center items-center m-3">
      <h1 className="mb-3 text-3xl font-bold">
        {capitalize(org.name || "")} Dashboard
      </h1>
      <h2>Logged in as:</h2>
      <ProfileCard
        img={session.user.image}
        name={session.user.name}
        email={session.user.email}
      >
        <Button rounded className="text-white">
          <Link href={`/dashboard/${org.id}/profile`}>View Profile</Link>
        </Button>
      </ProfileCard>
      <div className="flex gap-2 mt-8 flex-wrap justify-center">
        <Button primary rounded>
          <Link href={`/dashboard/${org.id}/tickets`}>View Tickets</Link>
        </Button>
        <Button primary rounded>
          <Link href={`/dashboard/${org.id}/users`}>View Users</Link>
        </Button>
        <Button neutral rounded>
          <Link href={`/dashboard/login`}>Exit Dashboard</Link>
        </Button>
      </div>
    </div>
  );
}
