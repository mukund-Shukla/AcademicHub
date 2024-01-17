"use client";

import { UserButton } from "@clerk/nextjs";

export const NavbarRoutes=()=>{
    return(
        <div className="flex gap-2 ml-auto">
            <UserButton/>
        </div>
    )
}