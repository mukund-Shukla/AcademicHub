"use client";

import { usePathname,useRouter } from "next/navigation";

import { UserButton } from "@clerk/nextjs";
import {  LogOut } from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
export const NavbarRoutes=()=>{
    const pathname=usePathname();
    const router=useRouter();
 
    const isTeacherPage=pathname?.startsWith("/teacher");
    const isPlayerPage=pathname?.includes("/chapter")

    return(
        <div className="flex gap-x-2 ml-auto">
            {isTeacherPage||isPlayerPage?(
                <Link href="/">
                      <Button>   
                    <LogOut className="h-4 w-10 mr-2"/>
                        Exit
                </Button>
                </Link>
              
            ):( 
                <Link href="/teacher/courses">
                    <Button size="default" variant="default">
                        Teacher Mode
                    </Button>
                </Link>
                    
               
            )}
            <UserButton
                afterSignOutUrl="/"
            />
        </div>
    )
}