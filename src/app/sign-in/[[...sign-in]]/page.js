//TODO: render the sign-in page
//- Use Clerk component
"use client"
import { SignIn } from "@clerk/nextjs"

export default function signInPage() {
    return(
        <>
        <div>
            <h1>Wellcome back!!</h1>
            <SignIn afterSingInUrl="/timeline" />
        </div>
        </>
    )
}