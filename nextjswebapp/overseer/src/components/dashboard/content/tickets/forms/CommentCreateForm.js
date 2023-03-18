import { useState } from "react";
import Button from "@/components/ui/Button";
import Spinner from "@/components/ui/Spinner";
import { BiMessageAdd } from "react-icons/bi";
import { createComment } from "@/api/ticketCommentsApi";
import {
  BsChevronDown,
  BsChevronLeft,
  BsFillPlusCircleFill,
} from "react-icons/bs";

export default function CommentCreateForm({
  setComments,
  orgId,
  ticketId,
  userId,
}) {
  const [loading, setLoading] = useState(false);
  const [showCommentForm, setShowCommentForm] = useState(true);
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

    console.log(userId);
    console.table(newComment);
    //await createTicket(newComment);

    // update comments
    setComments((prev) => [newComment, ...prev]);

    setLoading(false);

    // reset input
    setCommentText("asdf");
  };

  let content;
  if (showCommentForm) {
    content = (
      <form className="m-3 py-3" method="post" onSubmit={handleSubmit}>
        {/* Title */}
        <label className="pl-2 text-md font-medium text-white">
          Message
          <span className="text-gray-400"> ({commentText.length}/100)</span>
        </label>
        <input
          maxLength={100}
          className="w-full pl-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          name="title"
          onChange={(e) => {
            setCommentText(e.target.value);
          }}
          value={commentText}
        />
        {/* submit button */}
        <div className="flex justify-center">
          <Button primary rounded type="submit" className="border-0 mt-3">
            Post comment{" "}
            {loading ? (
              <Spinner className="ml-2" />
            ) : (
              <BiMessageAdd className="ml-2" />
            )}
          </Button>
        </div>
      </form>
    );
  }

  return (
    <div className="bg-gray-800 rounded">
      <div
        className="flex h-8 text-xl cursor-pointer text-white font-bold pl-3 items-center justify-between w-full bg-gray-800 rounded"
        onClick={() => setShowCommentForm(!showCommentForm)}
      >
        <div className="flex items-center">
          <BsFillPlusCircleFill className="mr-2 text-green-500" />
          Comment on this thread
        </div>
        {showCommentForm ? (
          <BsChevronDown className="text-2xl mr-2" />
        ) : (
          <BsChevronLeft className="text-2xl mr-2" />
        )}
      </div>
      {content}
    </div>
  );
}
