import { SignedIn, SignedOut, SignOutButton } from "@clerk/clerk-react";
import { LayoutDashboardIcon } from "lucide-react";
import { Link } from "react-router-dom";
import SignInOAuthButtons from "./SignInOAuthButtons";

function Topbar() {
    const isAdmin=false;
  return (
    <div className="flex justify-between items-center p-4 sticky top-0 bg-zinc-900/70 backdrop-blur-md z-10">
      <div className="flex gap-2 items-center">
            AudioMate
      </div>
      <div className="flex gap-4 items-center">
         {isAdmin&& (
            <Link to={"/admin"}>
                <LayoutDashboardIcon className="size-4 mr-2"/>
            </Link>
         )}
        
        <SignedIn>
            <SignOutButton />
        </SignedIn>

         <SignedOut>
            <SignInOAuthButtons />
         </SignedOut>
      </div>
    </div>
  )
}

export default Topbar
