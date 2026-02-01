import Link from "next/link";
import { auth } from "@clerk/nextjs/server";

export default function ProfileLink() {
    const { userId } = auth();

    return (
        <Link href={`/profile/${userId}`}>
            `My Profile
        </Link>
    );
}
