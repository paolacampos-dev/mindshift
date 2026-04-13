//[[...sing-up]] is like a placeholder for all pages coming after sign-up route 

//TODO: render a sign-up page
//- Clerk component
//- A form to collect other user data (bio, nickname, location, interests...)
//- Insert user's data into users table, so we cna render it in the profile page

//Extra: create another nested route called createProfile where the user cqan complete their personal info as a second step in the sign-up process
"use client"

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    return (
    <>
    <div>
        <h1>Start sharing your growth journey </h1>
        <SignUp afterSignOutUrl="/createProfile" />
    </div>
    </>
    );
}