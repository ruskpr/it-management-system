import { useState } from "react";
import { useSession } from "next-auth/react";
import capitalize from "@/helpers/capitalize";
import dateFormat from "@/helpers/dateFormat";
import { updateTicket } from "@/api/ticketsApi";

export default function CommentCard({ comment }) {
  const { data: session, status } = useSession();
  //   const isCreator = session.user.name === comment.creator;

  return (
    <li
      className="block w-full p-6 mb-3 bg-white border border-gray-200 
    rounded shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700
     dark:hover:bg-gray-700"
    >
      <h5
        className="text-2xl font-bold tracking-tight text-gray-900 
      dark:text-white"
      >
        {capitalize(comment.text)}
      </h5>

      <div className="flex flex-row justify-start gap-1 text-gray-400">
        <p className="font-normal">
          Created by {comment.creator}
        </p>{" "}
        <span>| {dateFormat(comment.dateAdded)}</span>
      </div>

      <div className="flex justify-between font-normal text-gray-300"></div>
    </li>
  );
}
