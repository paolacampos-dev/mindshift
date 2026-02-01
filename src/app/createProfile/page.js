//import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { db } from "@/utils/dbConnection.js"
// currentUser() returns a User object --> user.username
import { currentUser } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache";




export default async function CreateProfile()  {
    async function handleSubmit(formData)    {
    "use server"
    //const { userId } = await auth()
    const user = await currentUser()
    if(!user) {
        return null;
    }     

    const username = user.username
    const userId =  user.id
    
    const formValues = {
        bio: formData.get("bio"),
        skills: formData.get("skills"),
        interests: formData.get("interests"), 
        achievements: formData.get("achievements"), 
        shortTermGoals: formData.get("short_term_goals"), 
        longTermGoals: formData.get("long_term_goals"),
    }
    console.log (formValues)

    await db.query (
        `INSERT INTO profiles (user_id, username, bio, skills, interests, achievements, short_term_goals, long_term_goals) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`, 
        [
        userId, 
        username, 
        formValues.bio, 
        formValues.skills, 
        formValues.interests, 
        formValues.achievements, 
        formValues.shortTermGoals, 
        formValues.longTermGoals,
        ]
    );
    revalidatePath(`/profile/${userId}`)
    redirect(`/profile/${userId}`)

    }
    return (
        <>
            <div className="min-h-screen flex justify-center"> 
                <form action={handleSubmit} className="w-full max-w-xl bg-orange-100 p-6 rounded-xl shadow-sm mt-2" >
                    <div>
                        <div className="mb-3"> 
                            <label htmlFor="bio" className="block mb-0 font-semibold text-center">Bio</label>
                            <textarea name="bio" className="textarea"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="skills"className="block mb-0 font-semibold text-center" >Skills</label>
                            <textarea name="skills" className="textarea"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="interests" className="block mb-0 font-semibold text-center">Interests & Hobbies</label>
                            <textarea name="interests" className="textarea"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="achievements" className="block mb-0 font-semibold text-center">Achievements</label>
                            <textarea name="achievements" className="textarea"/>
                        </div>
                        <div className="mb-3" >
                            <label htmlFor="ShortTermGoals" className="block mb-0 font-semibold text-center">Short Term Goals</label>
                            <textarea name="short_term_goals" className="textarea"/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="longTermGoals" className="block mb-0 font-semibold text-center">Long Term Goals</label>
                            <textarea name="long_term_goals" className="textarea"/>
                        </div>
                        <div className="">
                            <button type="submit" className="block mx-auto bg-[rgb(210,185,160)] font-bold text-gray-700 px-4 py-2 border-2 rounded-md hover:bg-[rgb(220,195,170)] transition ">Save Profile</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
        );
    }     

    // mb-5 margin-bottom:1.25rem
    // mx- horizontal margins    m*- marging left & right
    // m-auto automatically centers the element horizontally
    // my- verical margins