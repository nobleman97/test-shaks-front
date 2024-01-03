import Image from "@/node_modules/next/image";
import Menu from "../molecules/menu";
import logo from "@/public/images/logo.png"
import Link from "next/link";

export default function Header( ) {
    return (
        <>
        <header className="h-[96px] bg-[#091A30] flex items-center justify-between px-[10.4%]">
            <Link href={'/'}><Image src={logo} alt="logo"/></Link>
            
            <Menu />
        </header>
        
        </>
    )
}