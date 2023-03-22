import Spinner from "@/components/ui/Spinner";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getUserByNameAndOrgId } from "@/api/usersApi";
import capitalize from "@/helpers/capitalize";
import ProfileCard from "@/components/ui/ProfileCard";
import EditProfileForm from "./EditProfileForm";

export default function ProfilePage({ org }) {
  const { data: session, status } = useSession();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  console.log(user);

  useEffect(() => {
    const getUser = async () => {
      setLoading(true);
      const user = await getUserByNameAndOrgId(session.user.name, org.id);
      setLoading(false);
      setUser(user[0]);
    };
    getUser();
  }, []);

  let content;

  if (loading) {
    content = (
      <div>
        <Spinner />
      </div>
    );
  } else {
    content = (
      <div className="flex flex-col justify-center items-center">
        <ProfileCard
          name={user.name}
          email={user.email}
          img={session.user.image}
          className="w-full md:w-1/2"
        />
        <div className="mt-8">
        <EditProfileForm user={user} />

        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center m-3">
      <h1 className="mb-16 text-3xl font-bold">
        My Profile
      </h1>

      {content}
    </div>
  );
}
