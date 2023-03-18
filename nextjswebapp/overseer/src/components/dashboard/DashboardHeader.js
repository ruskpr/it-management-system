import Link from "next/link";
import OverseerLogo from "../ui/OverseerLogo";
import { IoArrowBackOutline } from "react-icons/io5";
import DashboardNavItem from "./NavItem";
import capitalize from "@/helpers/capitalize";

export default function DashboardHeader({ org }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 w-screen md:h-24 h-16 bg-gray-800 text-white">
      {/* back button */}
      <Link href="/dashboard/login" className="static md-absolute">
        <IoArrowBackOutline className="text-4xl hover:text-gray-600" />
      </Link>
      {/* header */}
      <div className="py-2 flex flex-col text-3xl gap-2 hidden md:flex overflow-hidden">
        <div className="text-center">
          <OverseerLogo />
          <span className="font-light text-gray-300"> Dashboard</span>
        </div>
        <div className="text-center font-bold">
          <h1>{org.name}</h1>
        </div>
      </div>

      {/* nav */}
      <div className="flex h-full items-center justify-center">
        <DashboardNavItem
          className="px-2"
          href={`/dashboard/${org.id}/home`}
        >
          Home
        </DashboardNavItem>
        <DashboardNavItem
          className="px-2"
          href={`/dashboard/${org.id}/tickets`}
        >
          Tickets
        </DashboardNavItem>
        <DashboardNavItem
          className="px-2"
          href={`/dashboard/${org.id}/users`}
        >
          Users
        </DashboardNavItem>
      </div>
    </div>
  );
}
