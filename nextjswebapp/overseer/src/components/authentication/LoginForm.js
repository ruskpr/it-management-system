import { useState } from "react";
import { useRouter } from "next/router";
import Button from "../ui/Button";
import Spinner from "../ui/Spinner";
import axios from "axios";
import { createUser, getUsersData } from "@/api/usersApi";
import { getOrgsData } from "@/api/orgsApi";
import { useSession } from "next-auth/react";

const baseUrl = "https://localhost:7083/";
//const endpoint = "api/Organizations";

export default function LoginForm() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    orgName: "",
    accessKey: "",
  });

  const router = useRouter();

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs);

    //validate credentials here
    setLoading(true);
    // get organizations
    const orgsData = await getOrgsData();
    const usersData = await getUsersData();

    let selectedOrg;
    // compare api with inputs
    for (var i = 0; i < orgsData.length; i++) {
      if (
        orgsData[i].name.toLocaleLowerCase() ===
          inputs.orgName.toLocaleLowerCase() &&
        orgsData[i].accessKey === inputs.accessKey
      ) {

        console.log(usersData);
        selectedOrg = orgsData[i];


        const newUser = {
          name: session.user.name,
          email: null,
          bio: null,
          orgRole: null,
          organizationId: selectedOrg.id,
        };

        await createUser(newUser);
        
        router.push(`/dashboard/${selectedOrg.name.replaceAll(' ', '_')}`);
        break;
      }
    }

    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-fit h-fit bg-transparent flex flex-col gap-3 justify-center"
    >
      <input
        name="orgName"
        className="border border-black"
        onChange={handleChange}
        value={inputs.orgName}
      />
      <input
        name="accessKey"
        className="border border-black"
        onChange={handleChange}
        value={inputs.accessKey}
      />
      <div>
        <Button
          neutral
          rounded
          type="submit"
          className="border-0"
          onClick={(e) => {
            // e.preventDefault();
            // e.stopPropagation();
          }}
        >
          Login
          {loading && (
            <div className="pl-3">
              <Spinner />
            </div>
          )}
        </Button>
      </div>
    </form>
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
