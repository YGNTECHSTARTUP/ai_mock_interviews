import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/actions/auth.action";

const Layout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout ">
      <nav className="flex justify-between items-center mb-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
          <h2 className="text-3xl font-semibold bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 text-transparent bg-clip-text">Genesis Nexus</h2>
        </Link>
      </nav>

      {children}
    </div>
  );
};

export default Layout;
