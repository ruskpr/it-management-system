import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import dateFormat from "@/helpers/dateFormat";
import { getUserById } from "@/api/usersApi";
import { deleteCommentById } from "@/api/ticketCommentsApi";
import { BsXLg } from "react-icons/bs";
import Button from "@/components/ui/Button";

export default function CommentCard({ comment, setComments }) {
  const { data: session, status } = useSession();
  const [creator, setCreator] = useState("");
  let isCreator;

  useEffect(() => {
    const getUser = async () => {
      const user = await getUserById(comment.creatorId);
      setCreator(user.name);
      isCreator = session.user.name === creator;
    };
    getUser();
  });

  const handleDelete = async () => {
    await deleteCommentById(comment.id);
    setComments((prev) => prev.filter((c) => c.id !== comment.id));
  };

  return (
    <li className="relative block border-t py-4 px-2">
      <div className="flex gap-1 flex-wrap text-wrap">
        <span className="font-semibold">{creator}</span>
        <span className="text-gray-400 font-light">
          {dateFormat(comment.dateAdded)}
        </span>
      </div>
      <div>
        <p className="text-gray-500">{comment.text}</p>
      </div>

      {/* remove button for creator of comment */}
      {isCreator || (
        <Button
          onClick={handleDelete}
          className="absolute right-5 top-3 text-gray-500 hover:text-red-500 m-0 p-0 rounded"
        >
          <BsXLg />
        </Button>
      )}
    </li>
  );
}
