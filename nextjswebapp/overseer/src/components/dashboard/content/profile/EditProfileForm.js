import { useState } from "react";
import Button from "@/components/ui/Button";
import Spinner from "@/components/ui/Spinner";
import { BsWrench } from "react-icons/bs";
import { updateUser } from "@/api/usersApi";

export default function EditProfileForm({ user }) {
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    role: user.orgRole || "",
    bio: user.bio || "",
  });

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    // post to api

    let newRole = inputs.role;
    let newBio = inputs.bio;
    if (inputs.role.length === 0) {
      newRole = null;
    }
    if (inputs.bio.length === 0) {
      newBio = null;
    }

    const updatedUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      bio: newBio,
      orgRole: newRole,
      organizationId: user.organizationId,
    };

    await updateUser(updatedUser);
    // update tickets

    setLoading(false);
  };

  return (
    <div className="bg-gray-800 rounded ">
      <div className="flex h-8 text-xl text-white font-bold pl-3 items-center justify-between w-full bg-gray-800 rounded">
        <div className="flex items-center">
          <BsWrench className="mr-2 text-white" />
          Edit Profile
        </div>
      </div>
      <form className="m-3 py-3" method="post" onSubmit={handleSubmit}>
        {/* role */}
        <label className="pl-2 text-md font-medium text-white">
          Role
          <span className="text-gray-400"> ({inputs.role.length}/100)</span>
        </label>
        <input
          maxLength={100}
          className="w-full pl-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          name="role"
          onChange={handleChange}
          value={inputs.role}
        />
        {/* bio */}
        <label className="pl-2 text-md font-medium text-gray-900 text-white">
          Bio <span className="text-gray-400">({inputs.bio.length}/500)</span>
        </label>
        <textarea
          maxLength={500}
          className="w-full pl-3 py-2 mb-3 leading-tight text-gray-700 
          border rounded shadow appearance-none focus:outline-none 
          focus:shadow-outline"
          name="bio"
          onChange={handleChange}
          value={inputs.bio}
        />

        {/* submit button */}
        <div className="flex justify-center">
          <Button primary rounded type="submit" className="border-0 mt-3">
            Update {loading && <Spinner className="ml-2" />}
          </Button>
        </div>
      </form>
    </div>
  );
}
