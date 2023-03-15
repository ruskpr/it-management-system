import { useState } from "react";
import { useRouter } from "next/router";
import Button from "../ui/Button";
import { createOrg } from "@/api/orgsApi";
import { getOrgsData } from "@/api/orgsApi";
import { useSession } from "next-auth/react";
import { sha256 } from "js-sha256";
import Spinner from "../ui/Spinner";

const baseUrl = "https://localhost:7083/";
//const endpoint = "api/Organizations";

export default function CreateDashboardForm() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    orgName: "",
    accessKey: "",
    confirmAccessKey: "",
  });

  const router = useRouter();

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // pw validation
    if (
      inputs.accessKey.length < 5 ||
      inputs.accessKey !== inputs.confirmAccessKey
      ) {
        window.alert("Access keys must match and contain more that 4 characters");
        return;
      }
      
      //org name validation
      if (inputs.orgName.length < 6) {
        window.alert("Organization name must be greater that 5 characters");
        return;
      }
      
      const orgsData = await getOrgsData();
      
      // compare api data with inputs
      for (var i = 0; i < orgsData.length; i++) {
        if (
          orgsData[i].name.toLocaleLowerCase() ===
          inputs.orgName.toLocaleLowerCase()
          ) {
            window.alert(`${inputs.orgName} already exists.`);
            return;
          }
        }
        
        // if all passes, create org and redirect user
    setLoading(true);
    const newOrg = {
      name: inputs.orgName,
      accessKey: sha256(inputs.accessKey),
      user: [],
    };

    await createOrg(newOrg);
    
    setLoading(false);

    router.push("/dashboard/login");

  };

  return (
    <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form className="space-y-4" method="post" onSubmit={handleSubmit}>
        <h5 className="text-xl flex justify-center font-medium text-gray-900 dark:text-white">
          Create a new Dashboard for your team
        </h5>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Organization / Team name
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
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            name="accessKey"
            onChange={handleChange}
            value={inputs.accessKey}
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Confirm Access Key
          </label>
          <input
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            name="confirmAccessKey"
            onChange={handleChange}
            value={inputs.confirmAccessKey}
          />
        </div>
        <div className="flex items-start"></div>
        <div className="flex justify-center">
          <Button primary rounded type="submit" className="border-0">
            Create{loading && <Spinner className="ml-2" />}
          </Button>
        </div>
        <div className="text-sm flex justify-center gap-2 font-medium text-gray-500 dark:text-gray-300">
          Already apart of a team?{" "}
          <a
            href="/dashboard/login"
            className="text-blue-700 hover:underline dark:text-blue-500"
          >
            Log in
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
