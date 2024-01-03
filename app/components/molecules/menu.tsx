import Link from "@/node_modules/next/link";

export default function Menu (){

    return (
        <>
        <div className="flex gap-[60px] items-center">
            <Link href={"/our-services"} className="py-[10px]">Services</Link>
            <Link href={"/pricing"} className="py-[10px]">Pricing</Link>
            <Link href={"/blog"} className="py-[10px]">Blogs</Link>
            <Link href={"/about-us"} className="py-[10px]">About Us</Link>
            <Link href={"/contact-us"} className="rounded-[40px] py-[10px] px-[30px] bg-[#F53300]"> Contact Us</Link>
        </div>
        </>
    )
}