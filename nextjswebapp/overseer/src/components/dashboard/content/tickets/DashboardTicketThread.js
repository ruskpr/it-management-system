import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { getTicketById } from "@/api/ticketsApi";
import { getCommentsByTicketId } from "@/api/ticketCommentsApi";
import CommentCreateForm from "./forms/CommentCreateForm";
import { useRouter } from "next/router";
import { getUserByNameAndOrgId } from "@/api/usersApi";
import CommentCard from "../comments/CommentCard";

export default function DashboardTicketThread({ org, ticketId }) {
  const { data: session, status } = useSession();
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
      console.log("userId");
      console.log(userId);
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

  const renderedComments = comments.map((comment) => {
    return <CommentCard comment={comment} />;
  });

  return (
    <div>
      <div>DashboardTicketThread</div>
      <div>{ticket.title}</div>
      <div>{ticket.description}</div>

      <CommentCreateForm
        setComments={setComments}
        ticketId={ticketId}
        userId={userId}
        orgId={orgId}
      />

      <div>{renderedComments}</div>
    </div>
  );
}
