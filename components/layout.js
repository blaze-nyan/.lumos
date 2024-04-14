"use client";
import Navbar from "./navbar/Nav";
import { useRouter } from "next/navigation";
const Layout = ({ children }) => {
  const router = useRouter();

  // Check if the current route is one of the pages where you want to hide the navbar
  const shouldHideNavbar = router.pathname === "/chatroom";
  //   || router.pathname === "/another-page"

  return (
    <div>
      {!shouldHideNavbar && <Navbar />}
      {children}
    </div>
  );
};

export default Layout;
