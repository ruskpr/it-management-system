import Link from "next/link";
import OverseerLogo from "../ui/OverseerLogo";
import { IoArrowBackOutline } from "react-icons/io5";
import DashboardNavItem from "./NavItem";

export default function Sidebar({ org }) {

  return (
    <div className="border w-96 h-screen">
      {/* top header */}
      <Link href="/dashboard/login" className="absolute m-2">
        <IoArrowBackOutline className="text-4xl hover:text-gray-600"/>
      </Link>
      <div className="bg-gray-200 py-2 flex flex-col text-3xl gap-2">
        <div className="text-center">
          <OverseerLogo />
          <span className="font-light text-gray-500"> Dashboard</span>
        </div>
        <div className="text-center font-bold">
          <h1>{org}</h1>
        </div>
      </div>

      {/* nav */}
      <div className="mt-6 flex flex-col w-full">
        <DashboardNavItem href={`/dashboard/${org.replace(' ', '_')}/home`}>Home</DashboardNavItem>
        <DashboardNavItem href={`/dashboard/${org.replace(' ', '_')}/announcements`}>Announcements</DashboardNavItem>
        <DashboardNavItem href={`/dashboard/${org.replace(' ', '_')}/tickets`}>Tickets</DashboardNavItem>
        <DashboardNavItem href={`/dashboard/${org.replace(' ', '_')}/issues`}>Issues</DashboardNavItem>
      </div>
    </div>
  );
}
