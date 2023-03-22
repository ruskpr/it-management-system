import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { getTicketById } from "@/api/ticketsApi";
import { getCommentsByTicketId } from "@/api/ticketCommentsApi";
import CommentCreateForm from "./forms/CommentCreateForm";
import { useRouter } from "next/router";
import { getUserByNameAndOrgId } from "@/api/usersApi";
import CommentCard from "../comments/CommentCard";
import Portal from "@/components/utils/Portal";
import ThreadHero from "../comments/ThreadHero";

export default function DashboardTicketThread({ org, ticketId }) {
  const { data: session } = useSession();
  const [ticket, setTicket] = useState({});
  const [comments, setComments] = useState([]);
  const [userId, setUserId] = useState(null);

  // get org id from url
  const router = useRouter();
  const orgId = router.query.dashboard[0];

  useEffect(() => {
    // get userId for axios
    const getUser = async () => {
      const user = await getUserByNameAndOrgId(session.user.name, orgId);
      setUserId(user[0].id);
    };

    //get ticket
    const getTicketData = async () => {
      const ticketData = await getTicketById(ticketId);
      setTicket(ticketData);
    };

    // get comments
    const getComments = async () => {
      const commentsData = await getCommentsByTicketId(ticketId);
      setComments(commentsData);
    };

    getUser();
    getTicketData();
    getComments();
  }, []);

  const renderedComments = comments.map((comment, index) => {
    return (
      <CommentCard key={index} comment={comment} setComments={setComments} />
    );
  });

  return (
    <div className="m-3">
      <ThreadHero ticket={ticket} />
      <div className="font-light text-3xl mb-3">Thread ({comments.length})</div>
      <div className="w-full mb-3">
        <CommentCreateForm
          setComments={setComments}
          ticketId={ticketId}
          userId={userId}
          orgId={orgId}
        />
      </div>
      <div className="flex flex-col-reverse justify-center w-full lg:px-32 lg:pt-8">
        {renderedComments}
      </div>
    </div>
  );
}
