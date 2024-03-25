import Image from "next/image";
import Button from "../components/atoms/button/button";
import Jumbotron from "../components/compounds/jumbotron";

export default function AboutUs(){ 
    return(
        <>
        <Jumbotron image="/images/aboutusjumbotronbg.png">
            <div className="px-[10.4%] pt-[76px] flex flex-col items-center md:items-start justify-center">
                <h1 className="text-[32px] md:text-[38px] font-semibold mb-[41px]">About Shakazu</h1>
                <p className="text-base md:text-2xl font-light max-w-[457px] text-center md:text-start">
                Welcome to Shakazul LLC – Where Your Brand Meets Innovation and Creativity
                </p>
            </div>
            
        </Jumbotron>

    <section className="pb-[76px] bg-white text-[#101010]">

        <section className="relative flex flex-col-reverse md:flex-row gap-[46px] px-[10.4%] pt-[72px] bg-white text-black">
            <div className="flex-1 mb-[55px] text-center md:text-start">
                <p>
                In an era where digital presence defines business success, Shakazul LLC emerges as a 
                beacon of innovation and creativity. Established with a vision to revolutionize digital 
                interaction, we have dedicated ourselves to helping brands navigate the ever-evolving 
                digital landscape. Our approach goes beyond mere audience reach; we strive to forge 
                meaningful connections that elevate your brand and inspire your audience
                </p>
            </div>
            <div className="flex-1 relative h-[241px] w-full md:h-auto">
                <div className="h-[169px] w-full top-0 flex justify-center">
                    <Image className="hidden md:flex absolute bottom-0" src={'/images/aboutuspage.png'} height={654} width={555} alt={'about us bg'}/>
                    <Image className="flex md:hidden absolute bottom-0" src={'/images/aboutuspage.png'} height={327} width={277.5} alt={'about us bg'}/>
                </div>
                
            </div>
        </section>

        <section className="flex flex-col md:flex-row px-[10.4%] gap-[46px] text-center md:text-start  bg-white text-black ">
            <div  className="flex-1">
                <h2 className="text-2xl md:text-[36px] font-semibold mb-[10px]">Our Genesis</h2>
                <p className="text-base">
                Founded by a team of digital enthusiasts and marketing savants, Shakazul LLC was 
                born out of a desire to bridge the gap between businesses and their potential customers
                in the digital space. Our founders saw the immense opportunities that digital platforms 
                offer and the challenges businesses face in leveraging them. With expertise, passion, 
                and a knack for creativity, we set out to transform digital encounters into memorable 
                experiences.                
                </p>

                <p>What we really do is partner with your company to collectively work hard, build a distinctive brand, drive more traffic, and exponentially grow your sales. If that means new creative, more SEO, and a kickass email campaign, that&apos;s what we&apos;ll do. We want to see results for our clients, and we leverage that passion to make a difference with our digital marketing services — every day</p>
            </div>


            <div className="flex-1 mt-[32px] md:mt-[81px]">

                <h2 className="text-2xl md:text-[36px] font-semibold mb-[10px]">Our Philosophy</h2>

                <p className="text-base">
                We believe in the transformative power of digital media. It's not just about being present
                online; it's about making a statement, sparking conversations, and building a 
                community. Our philosophy centers on three pillars:
                </p>
                <ul className="list-disc">
                    <li>Innovation: Continuously exploring new ways to engage and captivate</li>
                    <li>Creativity: Breaking the mold to create unique and impactful digital narratives.</li>
                    <li>Results: Focusing on strategies that deliver tangible outcomes for our clients.</li>
                </ul>

            </div>
        </section>


        <section className="flex px-[10.4%] gap-[46px] text-center md:text-start bg-white text-black">
            <div className=" mt-[32px] md:mt-[42px]">
                <h2 className="text-2xl md:text-[36px] font-semibold mb-[10px]">Our Services</h2>

                <p className="text-base">
                    At Shakazul LLC, our services are designed to cover every aspect of digital marketing and brand presence:
                </p>
                    <ul className="list-disc">
                        <li>Social Media Mastery: Crafting dynamic social media strategies that boost engagement, enhance brand visibility, and foster community.</li>
                        <li>SEO & Content Marketing: Optimizing your online presence to rank higher in search results while delivering valuable content to your audience.</li>
                        <li>Web Design & Development: Creating stunning, user-friendly websites that reflect your brand ethos and drive conversions.</li>
                        <li>Digital Advertising: Leveraging the power of PPC, display ads, and social media advertising to reach a wider audience more effectively.</li>
                        <li>Brand Strategy & Identity: Building a cohesive and resonant brand identity from the ground up</li>
                    </ul>
            </div>
        </section>

        <section className="flex px-[10.4%] gap-[46px] text-center md:text-start bg-white text-black">
            <div className=" mt-[32px] md:mt-[42px]">
                <h2 className="text-2xl md:text-[36px] font-semibold mb-[10px]">Our Team</h2>

                <p className="text-base">
                Our team is our greatest asset. Comprised of digital marketers, creative geniuses, social
                media gurus, content wizards, and tech innovators, we bring diverse skills and a unified 
                vision to every project. Each member of the Shakazul LLC family is dedicated to staying 
                ahead of industry trends, ensuring that we offer our clients cutting-edge solutions.
                </p>
            </div>
        </section>

        <section className="flex px-[10.4%] gap-[46px] text-center md:text-start bg-white text-black">
            <div className=" mt-[32px] md:mt-[42px]">
                <h2 className="text-2xl md:text-[36px] font-semibold mb-[10px]">Our Impact</h2>

                <p className="text-base">
                Over the years, we've had the privilege of working with a wide array of clients, from 
                startups to established brands. Our portfolio showcases a track record of elevated 
                brand profiles, enhanced digital footprints, and significant ROI improvements. But, 
                beyond numbers, we measure our success by the lasting relationships we build and the 
                positive changes we bring to our clients' businesses.
                </p>
            </div>
        </section>

        <section className="flex px-[10.4%] gap-[46px] text-center md:text-start bg-white text-black">
            <div className=" mt-[32px] md:mt-[42px]">
                <h2 className="text-2xl md:text-[36px] font-semibold mb-[10px]">Looking Ahead</h2>

                <p className="text-base">
                The digital world is in constant flux, with new technologies and platforms emerging at a 
                rapid pace. At Shakazul LLC, we're not just keeping up; we're thinking ahead. Our 
                commitment to innovation and excellence drives us to explore the frontier of digital 
                possibilities, ensuring that our clients are always one step ahead.
                </p>
            </div>
        </section>

        <section className="bg-white flex flex-col md:flex-row text-center md:text-start px-[10.4%] pt-[65px] gap-[32px] md:gap-[127px]">
            <div className="flex flex-1 flex-col text-black">
                <h2 className="text-2xl md:text-4xl font-semibold mb-[22px]">Your <span className="text-[#F53300]">No 1</span> solution to social media and digital marketing problems.</h2>
                <p className="text-[#F53300] text-[12px] md:text-base  italic">Making digital marketing and social media services accessible to individuals.</p>
            </div>

            <div className="flex flex-1 flex-col text-black">
                <h2 className="text-base md:text-2xl font-semibold mb-[14px]">Join Us on Your Digital Journey</h2>
                <p className="mb-[15px] text-[#5C5C5C] text-[14px] md:text-base">
                    Whether you're looking to revamp your digital strategy, launch a new product, or redefine
                    your brand, Shakazul LLC is here to guide you through every step of the digital 
                    landscape. Let's embark on this journey together and unlock the full potential of your 
                    brand.
                </p>
                <div>
                    <Button type={'button'} color='secondary' style="rounded-[40px] text-base px-[30px] py-[10px]">
                        Let&apos;s Talk
                    </Button>
                </div>

            </div>
        </section>
    </section>



        </>
    )
}