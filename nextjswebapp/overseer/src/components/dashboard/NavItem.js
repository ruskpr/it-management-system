import Link from "next/link";

export default function DashboardNavItem({ href, children}){
    return <div className="border text-center">
        <Link href={href}>{children}</Link>
    </div>
}