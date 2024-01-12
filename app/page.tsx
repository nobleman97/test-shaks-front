"use client"
import Image from "next/image";
import Button from "./components/atoms/button/button";
import FAQSection from "./components/compounds/faqSection";
import Jumbotron from "./components/compounds/jumbotron";
import TestimonialsVidSec from "./components/compounds/videoTestimonial";
import ServicesCard from "./components/molecules/services-card";
import TestimonailCard from "./components/molecules/testimonial-card";

export default function Home() {
  return (
    <>
      <Jumbotron image="/images/womenbg.png">
        <div className="flex items-center flex-col gap-[30px] justify-center h-full px-[3.8%] md:px-[10.4%]">
          <h1 className="md:text-6xl lg:text-6xl font-semibold text-center text-[40px]">Social Media Marketing Agency</h1>

          <p className="flex text-center text-2xl font-normal text-wrap max-w-[69%]">You want to start building a Steady stream of traffic and conversions for your business?</p>
            <Button style="text-2xl font-medium px-[70px] py-[10px] rounded-[40px]" color="dark">
              Let&apos;s talk
            </Button>
        </div>
      </Jumbotron>

      <section className="flex flex-col Aboutus-section md:h-[562px] md:w-full px-[3.8%] md:px-[10.4%] bg-[#FFFFFF] md:grid md:grid-cols-2">
        
        <div className="mb-[114px] mt-[90px]">
          <h2 className="mb-[40px]  text-[#F53300] text-4xl font-semibold">About Us</h2>

          <p className="mb-[42px] text-[#000]">
          Shakazu is an award-winning social media marketing agency in 2023. We offer social media services, social media advertising services, email marketing services, and more. We create and manage top-performing social media campaigns for businesses. Our company does this by managing social media networks such as Facebook, Instagram, Twitter, LinkedIn and Pinterest on your behalf. In short, we use relevant social media... 
          </p>

          <Button style="text-base font-normal px-[30px] py-[10px] rounded-[40px]" color="dark">
              Read more...
          </Button>
        </div>

        <div className="relative flex justify-center items-center">

          <Image src={'/images/newhomejum.png'} height={'561'} width={'559'} className={''} alt="aboutus"/>
        </div>


      </section>

      <section className="md:h-[90px]  bg-[#091A30] w-full flex justify-center items-center px-[3.8%]  md:px-[10.4%]">

        <div className="relative py-[11px] flex flex-wrap gap-x-[16px] gap-y-[40px] md:gap-[80px] items-center justify-between md:h-[49.75px] w-full">
          <Image src={'/images/nike.png'} alt='nikelogo' height={'48'} width={'48'}/>
          <Image src={'/images/microsoft.png'} alt='microsoft logo'  height={'28'} width={'128'}/>
          <Image src={'/images/cbs.png'} alt='cbs logo'  height={'48'} width={'48'}/>
          <Image src={'/images/mastercard.png'} alt='mastercard logo'  height={'50'} width={'64'}/>
          <Image src={'/images/skype.png'} alt='skype logo'  height={'48'} width={'48'}/>
          <Image src={'/images/ebay.png'} alt='ebay logo'  height={'56'} width={'57'}/>
          <Image src={'/images/visa.png'} alt='visa logo'  height={'48'} width={'72'}/>
        </div>
      </section>

      <section className="bg-[#FFF] flex flex-col relative pt-[99px] items-center px-[3.8%] md:px-[10.4%]">

        <div className="h-[630px] bg-[url('/images/b2.png')] top-0 w-full bg-[#F53300] absolute z-[1]"></div>

        <h2 className="z-[2] text-center text-[#FFF] text-4xl font-semibold mb-[32px] md:mb-[10px]">View all of our marketing services</h2>
        <p className="z-[2]  text-[#FFF] text-2xl mb-[83px] font-light max-w-[55%] text-center" >We are more than just your social media marketing company.</p>
        
        <div className="flex flex-wrap z-[2] gap-[30px] justify-center mt-[74px] mb-[91px]">

          <ServicesCard 
            services={'Social Media Management Services'} 
            socials={{
              facebook: '/',
              linkedin: '/',
              instagram: ''
            }} 
            description={'We offer full-service social media management services. We transform your social media presence with high-quality content, daily activity, engagement-monitoring and increased followers. In order for followers to convert into... '} 
            route={'/'} 
          />

          <ServicesCard 
            services={'Email and SMS Marketing Services'} 
            socials={{
              facebook: '/',
              linkedin: '/',
              instagram: ''
            }} 
            description={'Email marketing is not dead. In fact, for every $1 spent on email marketing, the average ROI is $36. Your customers check their email every day. Our email marketing services will help you stay top of mind and speed up your sales cycle, all while... '} 
            button={"secondary"}
            route={'/'} 
          />

          <ServicesCard 
            services={'PPC Management Services'} 
            socials={{
              facebook: '/',
              linkedin: '/',
              instagram: ''
            }} 
            description={'When someone types in the product or service you offer into the Google search bar, does your website appear? If not, you’re probably not implementing PPC! PPC stands for pay per click and it is synonymous with SEM or search engine marketing. You...'}
            button={"warning-yellow"}
            route={'/'} 
          />

        </div>

      </section>

      <section className="bg-white flex flex-wrap md:flex-nowrap md:flex-row lg:flex-row text-[#000] gap-[224px]  px-[10.4%] pt-[79.64px] pb-[86px]">

        <article className="grow">
          <h1 className="text-4xl font-semibold mb-[22px]">Your <span className="text-[#FB6300]">No 1 </span>solution to social media and digital marketing problems.</h1>

          <p className="text-base font-light text-[#5C5C5C] mb-[50px]">Making digital marketing and social media services accessible to individuals.</p>

          <h3 className=" text-[#FB6300] text-base font-semibold mb-[15px]">What is a social media management company?</h3>

          <p className="mb-[45px]">SMM for small businesses can be hard. Therefore, our team has worked closely with many entrepreneurs to show them how it works. For some, you may experience some learning gaps from traditional thinking and marketing. At Shakazu, your marketing goals are our goals. Our role as a social media management company is to help you understand and utilize social media marketing so that your business profits from it!</p>

          <h3 className=" text-[#FB6300] text-base font-semibold mb-[15px]">Why do you need a SMM company?</h3>

          <p className="">There are almost 4 billion people on social media, and that number continues to grow every year. This means that regardless of what industry your company is in, your customers are using social media on a daily basis. It is important that you keep them engaged and connected to your brand so that you&apos;re always their first option. Similarly, if your company is offering a beneficial product or service, then there are people searching for it.</p>
        </article>

        <article className="grow">

          <h3 className=" text-[#FB6300] text-base font-semibold mb-[15px]">Social Media Management Firm</h3>

          <p className="mb-[70px]">The key to creating a successful social media management campaign (or any digital marketing campaign for that matter!) is the ability to lower your CPA (cost per acquisition) and maximize your ROI (return on investment). The reason we help so many businesses with their social media marketing is because social media provides them the avenue to do just this.</p>

          <h3 className=" text-[#FB6300] text-base font-semibold mb-[15px]">What does a Social Media Management Agency do?</h3>

          <span className="">
          <p >We handle any of your social media marketing needs including content creation and publishing, social media advertising and social media monitoring.</p>

          <ul>
            <li>Understanding your business, target audience and competition.</li>
            <li>Content creation and content calendar publishing.</li>
            <li>Social media advertising and monitoring.</li>
          </ul>
          
          </span>

          <p></p>
          {/* //img */}
        </article>

      </section>

      <section className="bg-white text-center pt-[66.64px] pb-[112px]">

        <h2 className="text-[#000] text-2xl md:text-4xl font-semibold">What our clients have to say!</h2>
        <h3 className="text-[#F53300] text-[16px] md:text-2xl font-semibold">Check out these testimonials</h3>

        <div className="testimonials  overflow-scroll px-[30px] mt-[53px] mb-[112px]">
          <div className=" flex gap-[30px] w-auto mr-[30px] ">
            <TestimonailCard 
              description={'Certainly, after having worked with multiple digital marketing and social media agencies, we have finally landed on a winner and hit a home run with Lyfe Marketing. As a result, their social media strategies helped drive qualified traffic to our website, reduce conversion cost, and increase revenue per visitor.'} 
              image={''} 
              name={'David Lefkovits'} 
              position={'Chairman - Niche Digital Brands'}
            />
            <TestimonailCard 
              description={'Certainly, after having worked with multiple digital marketing and social media agencies, we have finally landed on a winner and hit a home run with Lyfe Marketing. As a result, their social media strategies helped drive qualified traffic to our website, reduce conversion cost, and increase revenue per visitor.'} 
              image={''} 
              name={'David Lefkovits'} 
              position={'Chairman - Niche Digital Brands'}
            />
            <TestimonailCard 
              description={'Certainly, after having worked with multiple digital marketing and social media agencies, we have finally landed on a winner and hit a home run with Lyfe Marketing. As a result, their social media strategies helped drive qualified traffic to our website, reduce conversion cost, and increase revenue per visitor.'} 
              image={''} 
              name={'David Lefkovits'} 
              position={'Chairman - Niche Digital Brands'}
            />
            <TestimonailCard 
              description={'Certainly, after having worked with multiple digital marketing and social media agencies, we have finally landed on a winner and hit a home run with Lyfe Marketing. As a result, their social media strategies helped drive qualified traffic to our website, reduce conversion cost, and increase revenue per visitor.'} 
              image={''} 
              name={'David Lefkovits'} 
              position={'Chairman - Niche Digital Brands'}
            />
            <TestimonailCard 
              description={'Certainly, after having worked with multiple digital marketing and social media agencies, we have finally landed on a winner and hit a home run with Lyfe Marketing. As a result, their social media strategies helped drive qualified traffic to our website, reduce conversion cost, and increase revenue per visitor.'} 
              image={''} 
              name={'David Lefkovits'} 
              position={'Chairman - Niche Digital Brands'}
            />
        </div>
          

        </div>

      </section>

      <section className="bg-[#F53300] text-[#FFF] h-[90px] px-[17px] flex items-center justify-center">
        <div className="flex gap-[31px] md:gap-[141px] items-center">
          <h2 className="font-semibold w-[220px] md:w-full text-[14px] md:text-2xl flex-1">Want to improve your digital marketing ROI?</h2>
          <Button color="white" style="rounded-[40px]  text-[12px] px-[30px] py-[10px]">
            Let&apos;s Talk
          </Button>
        </div>
      </section>

      <section className="FAQ-section py-[80px] px-[3.8%] md:px-[149px] bg-[#091A30] text-[#fff]">
        <h2 className="font-semibold text-2xl md:text-4xl mb-[50px]">Frequently asked question</h2>
        <FAQSection />
      </section>


      <section className="video-section">
        <TestimonialsVidSec />
      </section>

      <section className="border-t-[1px] px-[3.8%] md:px-[122px] bg-white">
        <div className="flex flex-wrap px-[40px] py-[52px] gap-[53px] bg-white items-center justify-center">
          <div className="flex flex-col">
            <h2 className="text-2xl md:text-4xl text-[#101010] font-semibold max-w-[60%]">Subscribe to Our Newsletter</h2>
            <p className="text-[#F53300] max-w-full md:max-w-[60%]">Join 50,000 marketers who get exclusive marketing tips that we only share with our subscribers.</p>
          </div>

          <div className="flex flex-wrap  gap-[14px]">
            <input className="rounded-[50px] py-[10px] px-[33px] w-full md:w-[378px] border" type="text" name="email" id="" placeholder="Enter your email" />
            <Button color="secondary" style="rounded-[40px] px-[30px] py-[10px]">
              Subscribe
            </Button>
          </div>
        </div>
      </section>


     
</>
    
  )
}
