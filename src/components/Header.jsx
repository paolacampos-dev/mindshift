import Image from "next/image";
import logoImg from "@/../public/logo.svg"


export default function Header()    {
    return(
        <>
            <Image 
                src={logoImg} 
                alt={"The figure of a head with a red heart as a brain"} 
                width={50} 
                height={50}
            />
            <h1>MindShift</h1>
            
        </>
    );
}