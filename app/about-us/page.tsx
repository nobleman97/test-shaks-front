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
                    Shakazu is an award-winning social media marketing agency in 2023. We offer social media services, social media advertising services, email marketing services, and more. We create and manage top-performing social media campaigns for businesses.
                </p>
            </div>
            
        </Jumbotron>

    <section className="pb-[76px] bg-white text-[#101010]">

        <section className="relative flex flex-col-reverse md:flex-row gap-[46px] px-[10.4%] pt-[72px] bg-white text-black">
            <div className="flex-1 mb-[55px] text-center md:text-start">
                <p>Our company does this by managing social media networks such as Facebook, Instagram, Twitter, LinkedIn and Pinterest on your behalf. In short, we use relevant social media marketing services to help businesses grow and meet their goals, and because we&apos;re a full service agency that also offers the other digital marketing services mentioned, we&apos;re able to intertwine those services to support your social media efforts and vice versa for maximum results!</p>
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
                <h2 className="text-2xl md:text-[36px] font-semibold">What we do</h2>
                <p className="text-base">What do we do? Well, it depends on you. What are your goals? Who is your audience? What do you need to get your brand making waves? Analytics are great, but they mean nothing if they aren&apos;t contributing to your bottom line. We could tout our prowess in SEO, rave about our wordsmithed blogs, show you our creative social media strategy… but at the end of the day, what matters is that you&apos;ve got customers coming to your website, learning about your product, and clicking that “Buy” button. Period.</p>

                <p>What we really do is partner with your company to collectively work hard, build a distinctive brand, drive more traffic, and exponentially grow your sales. If that means new creative, more SEO, and a kickass email campaign, that&apos;s what we&apos;ll do. We want to see results for our clients, and we leverage that passion to make a difference with our digital marketing services — every day</p>
            </div>


            <div className="flex-1 mt-[81px]">

                <h2 className="text-2xl md:text-[36px] font-semibold">Why we do it</h2>

                <p className="text-base">Effective execution comes from a winning strategy: knowing what needs to be done and in what order to help our clients reach their goals. We believe in helping you hit your milestones while keeping things &apos;lean and mean&apos; so your brand can be more and do more.
                Because we believe in doing more, we do more than just a “regular” digital marketing agency. We share friendships with our clients and align with particular industries. We love what we do and want to use our expertise to help you build a successful brand and profitable business</p>

            </div>
        </section>


        <section className="flex  px-[10.4%] gap-[46px] text-center md:text-start bg-white text-black">
            <div className="mt-[42px]">
                <h2 className="text-2xl md:text-[36px] font-semibold">How we do it</h2>

                <p className="text-base">Every digital marketing agency has a sales pitch: you hear all about their capabilities, their technologies, and how incredible the results will be if you select their agency. But selecting an agency based on features is similar to marrying someone because you swiped right… there&apos;s a lot more than features when it comes to finding the right agency relationship.</p>

                <p className="text-base">
                Of course, Volume Nine knows how to tactically build campaigns that work, write engaging and targeted blog posts, optimize websites for search, and manage social media like a boss. We have done those things for hundreds of clients — from Fortune 100 companies down to a friend&apos;s first business. The real difference, though, is that we know the craft of digital marketing inside and out. We know how to develop the right concoction of tactics, tools, and techniques that help you meet (and exceed) your goals… on a budget that is just right for you.</p>

                <p className="text-base">Have a unique situation, a tough challenge, or an enormous opportunity? Have very specific problems that you need to be addressed? No matter your situation, our custom approach to digital marketing solutions will focus on the work that matters for you. We put your best interests first, always immersing ourselves in your business and working with your team to fill the gaps, get answers, and attract even better results for your brand
                </p>
            </div>
        </section>

        <section className="bg-white flex flex-col md:flex-row text-center md:text-start px-[10.4%] pt-[65px] gap-[127px]">
            <div className="flex flex-1 flex-col text-black">
                <h2 className="text-4xl font-semibold mb-[22px]">Your <span className="text-[#F53300]">No 1</span> solution to social media and digital marketing problems.</h2>
                <p className="text-[#F53300] italic">Making digital marketing and social media services accessible to individuals.</p>
            </div>

            <div className="flex flex-1 flex-col text-black">
                <h2 className="text-2xl font-semibold mb-[14px]">Ready to grow your business online?</h2>
                <p className="mb-[15px] text-[#5C5C5C]">Whether you&apos;re trying to build brand awareness on social media or needing to drive more traffic from search engines, we&apos;re here to help you connect with your audience and hit those strategic goals</p>
                <div>
                    <Button type={'button'} color='secondary' style="rounded-[40px] px-[30px] py-[10px]">
                        Let&apos;s Talk
                    </Button>
                </div>

            </div>
        </section>
    </section>



        </>
    )
}