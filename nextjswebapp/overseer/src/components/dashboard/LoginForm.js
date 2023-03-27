import { useState } from "react";
import { useRouter } from "next/router";
import Button from "../ui/Button";
import Spinner from "../ui/Spinner";
import { createUser } from "@/api/usersApi";
import { getOrgsData } from "@/api/orgsApi";
import { useSession } from "next-auth/react";
import { sha256 } from "js-sha256";

export default function LoginForm() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [inputs, setInputs] = useState({
    orgName: "",
    accessKey: "",
  });

  const router = useRouter();

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const runValidation = () => {
    if (inputs.orgName === "") {
      setErrorMsg("Organization name is required");
      return false;
    }
    if (inputs.accessKey === "") {
      setErrorMsg("Access key is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // check for validation
    if (!runValidation()) return;

    // get organizations
    const orgsData = await getOrgsData();
    //const usersData = await getUsersData();

    let selectedOrg;
    // compare api data with inputs
    for (var i = 0; i < orgsData.length; i++) {
      if (
        orgsData[i].name.toLocaleLowerCase() ===
          inputs.orgName.toLocaleLowerCase() &&
        orgsData[i].accessKey === sha256(inputs.accessKey)
      ) {
        setLoading(true);
        //console.log(usersData);
        selectedOrg = orgsData[i];

        const newUser = {
          name: session.user.name,
          email: session.user.email || null,
          bio: null,
          orgRole: null,
          organizationId: selectedOrg.id,
          organization: selectedOrg,
        };
        console.log(newUser);
        await createUser(newUser);

        // go to home page
        router.push(`/dashboard/${selectedOrg.id}/home`);
        return;
      }
    }

    setErrorMsg("Incorrect organization and/or access key.");
    setLoading(false);
  };

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-4" method="post" onSubmit={handleSubmit}>
        <h5 className="text-xl flex justify-center font-medium text-gray-900 dark:text-white">
          Log in to your Organization
        </h5>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Organization
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            name="orgName"
            onChange={handleChange}
            value={inputs.orgName}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Access Key
          </label>
          <input
          type="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            name="accessKey"
            onChange={handleChange}
            value={inputs.accessKey}
          />
        </div>
        <h2 className="mb-2 text-red-600 font-bold">{errorMsg}</h2>
        <div className="flex justify-center">
          <Button primary rounded type="submit" className="border-0">
            Login{loading && <Spinner className="ml-2" />}
          </Button>
        </div>
        <div className="text-sm flex justify-center gap-2 font-medium text-gray-500 dark:text-gray-300">
          Not apart of a team?{" "}
          <a
            href="/dashboard/create"
            className="text-blue-700 hover:underline dark:text-blue-500"
          >
            Create one
          </a>
        </div>
      </form>
    </div>
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
