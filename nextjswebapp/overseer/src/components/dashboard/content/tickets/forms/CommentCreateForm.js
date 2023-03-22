import { useState } from "react";
import { createComment } from "@/api/ticketCommentsApi";
import Button from "@/components/ui/Button";
import Spinner from "@/components/ui/Spinner";
import {
  BsChevronDown,
  BsChevronLeft,
  BsFillSendFill,
  BsFillPlusCircleFill,
} from "react-icons/bs";

export default function CommentCreateForm({
  setComments,
  orgId,
  ticketId,
  userId,
}) {
  const [loading, setLoading] = useState(false);
  const [commentText, setCommentText] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    // check for validation
    if (commentText === "") {
      return;
    }

    setLoading(true);
    // post to api
    const newComment = {
      text: commentText,
      dateAdded: new Date().toISOString(),
      ticketId: ticketId,
      creatorId: userId,
      organizationId: orgId,
    };

    await createComment(newComment);

    // update comments state
    setComments((prev) => [newComment, ...prev]);

    setLoading(false);

    // reset input
    setCommentText("");
  };

  return (
    <div className="bg-gray-800 rounded p-3">
      <form method="post" onSubmit={handleSubmit}>
        {/* Title */}

        <input
          maxLength={100}
          className="w-full min-h-16 pl-3 py-2 mb-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          name="title"
          onChange={(e) => {
            setCommentText(e.target.value);
          }}
          value={commentText}
        />
        <div className="flex justify-between items-start">
          {/* submit button */}
          <Button primary rounded type="submit" className="h-10">
            Post Comment
            {loading ? (
              <Spinner className="ml-2" />
            ) : (
              <BsFillSendFill className="ml-2" />
            )}
          </Button>
          <span className="pl-2 text-md font-medium text-gray-400">
            {100 - commentText.length} characters left
          </span>
        </div>
      </form>
    </div>
  );
}
