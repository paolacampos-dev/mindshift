import Image from "next/image";
import logoImg from "@/../public/logo.svg"
import Link from "next/link";

import {
    SignOutButton,
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
} from "@clerk/nextjs";


export default function Header()    {
    return(
        <>
            <header className="sticky top-0 z-50 w-full px-4 py-3 ">
                <div className="flex items-center justify-between">

                    {/* left */}
                    <div className="flex items-center gap-1 sm:gap-2">
                        <div>
                            <Link href="/timeline" className="inline-block transition-transform duration-200 ease-out hover:scale-[1.03]">
                                <Image
                                src={logoImg} 
                                alt={"The figure of a head with a red heart as a brain"} 
                                width={60} 
                                height={60}
                                className="w-12 sm:w-16"
                                />
                            </Link>
                        </div>
                        <div className="flex flex-col leading-tight">
                            <span  className="font-semibold text-sm sm:text-lg ">MindShift</span>
                            <span className="hidden sm:block text-xs text-gray-600">"A social platform for Growth"</span>
                        </div>
                    </div>

                    {/* center */}
                    <SignedIn>
                        <nav>
                            <Link href="/new-post" className="text-xs sm:text-sm text-gray-700 font-semibold hover:text-black">New post</Link>
                        </nav>
                    </SignedIn>

                    {/* Right */}
                    <div className="flex flex-col items-center gap-1 sm:gap-2 mr-0 sm:mr-20">
                        <SignedOut>
                            <SignInButton className="text-xs sm:text-sm text-black font-bold hover:text-gray-900 sm:mt-8"/>
                            <SignUpButton className="text-xs sm:text-sm text-red-700 font-semibold bg-[#ead7c1] border-3 border-black rounded-md px-2 py-1 hover:bg-[rgb(84,70,58)] transition"/>
                        </SignedOut>
                        <SignedIn>
                            <SignOutButton className="text-xs sm:text-sm text-gray-500 font-semibold hover:text-gray-900"/>
                        </SignedIn>
                    </div>
                </div>
            </header>
        </>
    );
}