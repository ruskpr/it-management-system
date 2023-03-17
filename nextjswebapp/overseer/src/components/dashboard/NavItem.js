import Link from "next/link";

export default function DashboardNavItem({ href, children, className}){
    return <div className={`font-semibold hover:text-gray-300 text-center ${className}`}>
        <Link href={href}>{children}</Link>
    </div>
}