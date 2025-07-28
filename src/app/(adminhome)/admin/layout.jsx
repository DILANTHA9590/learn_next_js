// admin/layout.jsx
import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 p-6 space-y-4 text-white bg-gray-800">
        <h2 className="mb-6 text-2xl font-bold">Admin Panel</h2>
        <nav className="flex flex-col space-y-3">
          <Link href="/admin/" className="hover:underline">
            Admin Dashborad
          </Link>
          <Link href="/admin/managedocotors" className="hover:underline">
            Manage Doctors
          </Link>
          <Link href="/admin/manageproducts" className="hover:underline">
            Manage Products
          </Link>
          <Link href="/admin/managereview" className="hover:underline">
            Manage Review
          </Link>
          <Link href="/admin/manageusers" className="hover:underline">
            Manage Users
          </Link>
          <Link href="/admin/adminid/345" className="hover:underline">
            see admin id
          </Link>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-grow p-8 bg-gray-100">{children}</main>
    </div>
  );
}
