import { db } from "@/utils/dbConnection.js";
import { currentUser } from "@clerk/nextjs/server";
import { notFound } from "next/navigation";


 //db queries to GET data from the tables
export default async  function ProfilePage() {
    const user = await currentUser()
    const userId = user.id

    const result = await db.query(
        "SELECT * FROM profiles WHERE user_id = $1", 
        [userId]
    );

    const profile = result.rows[0]

    if (!profile) { notFound(); }

    return (
    <>
        <div>
            <h1 className="text-center text-sm  sm:text-lg font-bold mt-10">@{profile.username}</h1>
            <main className="mt-2 flex justify-center px-2 sm:px-0">
              <div className="w-full max-w-md bg-[#ead7c1] rounded-xl p-6 text-center">
                <div className="mb-6">
                  <h2 className="text-sm font-semibold mb-1">Bio:</h2>
                  <p className="text-sm"> {profile.bio}</p>
                </div>
                <div className="space-y-3 text-sm">
                  <p><span className="font-semibold">Skills:</span>{" "}{profile.skills}</p>
                  <p><span className="font-semibold">Interests:</span>{" "}{profile.interests}</p>
                  <p><span className="font-semibold">Achievements:</span>{" "}{profile.achievements}</p>
                  <p><span className="font-semibold">Short-term goals:</span>{" "}{profile.short_term_goals}</p>
                  <p><span className="font-semibold">Long-term goals:</span>{" "}{profile.long_term_goals}</p>
                </div>
              </div>
            </main>
        </div>  
    </>
    );
  }
