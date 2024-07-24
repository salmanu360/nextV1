// Navbar.js
"use client";
import { useAppContext } from "@/context/userState";
import { logOut } from "@/services/userServices";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { users, setUsers } = useAppContext();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const result = await logOut();
      console.log("Logout result:", result);

      if (result.success) {
        setUsers("");
        router.push("/signIn");
        console.log("Redirected to signIn page after logout");
      } else {
        console.error("Logout failed:", result.message);
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
            ></div>
          </div>
          <Link href="/home" className="btn btn-ghost text-xl">
            Home
          </Link>
        </div>
        {users ? (
          <div className="navbar-end">
            <button onClick={handleLogout} className="btn">
              Log out
            </button>
          </div>
        ) : (
          <div className="navbar-end">
            <Link href="/signIn" className="btn">
              Log in
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
