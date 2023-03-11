import { useState } from "react";
import Button from "../ui/Button";
import Spinner from "../ui/Spinner";
import axios from "axios";

const baseUrl = "https://localhost:7083/";
const endpoint = "api/Organizations";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    orgName: "",
    accessKey: "",
  });

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs);

    //validate credentials here
    setLoading(true);
      // get organizations
      const res = await axios.get(baseUrl + endpoint).catch((e) => {
        console.error(e);
      });
      console.log(res.data[0].name.toLocaleLowerCase())
      console.log(inputs.orgName)
      // compare api with inputs
      for (var i = 0; i < res.data.length; i++){
        if (res.data[i].name.toLocaleLowerCase() == inputs.orgName.toLocaleLowerCase()) {
          console.log("tst")
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