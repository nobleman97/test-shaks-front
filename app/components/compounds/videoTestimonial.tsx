// components/Testimonials.js

import { Icon } from "@iconify/react";

const testimonials = [
    {
      title: "Before Shakazu, no one cared",
      name: "Joshua Parham – Westmar Lofts",
      stats: [
        {
          value: "+364%",
          label: "Increase in qualified fields"
        },
        {
          value: "+$108K",
          label: "Increase in revenue added"
        }
      ],
      description:
        "For instance, as the leasing manager at Westmar Lofts, Joshua needed a company he could trust to help him close deals. He hired our social media marketing company and was extremely pleased with the results. In summary, we were able to increase leads by over 164% and generate over 100K in new lease revenue."
    },
    {
      title: "We’ve had fantastic results with Shakazu",
      name: "Joshua Parham – Westmar Lofts",
      stats: [
        {
          value: "40k",
          label: "Increase in new followers"
        },
        {
          value: "520%",
          label: "Increase in new traffic"
        }
      ],
      description:
        "For instance, Serial entrepreneur, Michael Moran, operates several brands, so saving time on social media was really important. He hired our agency to manage social media management with a goal to grow his organic traffic and followers. In summary, we helped them build massive brand awareness through social media."
    }
  ];
  
  const TestimonialsVidSec = () => {
    return (
      <div className="bg-white pt-[67px] px-[3.8%] md:px-[150px]">
        <div className="max-w-6xl flex flex-col items-center justify-center  text-center mb-[61px]">
          <h2 className="text-2xl md:text-4xl font-semibold text-[#101010] max-w-[90%] md:max-w-full">We Help You Accelerate Growth with Social Media</h2>
          <p className="text-[14px] md:text-2xl font-medium text-[#5C5C5C] mt-4">Watch these videos</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          {testimonials.map((testimonial, index) => (

            <div key={index} className="mb-[66px]">


              <div className="flex justify-center items-center mb-[18px] w-full md:w-[555px] bg-[#14CEFD] h-[182px] md:h-[283px]">
                
                <Icon icon="lets-icons:video-fill" className="text-9xl text-[#091A30]"/>
    
              </div>


              <blockquote className="text-2xl text-center font-light text-[#101010] mb-4"> &quot;{testimonial.title}&quot; </blockquote>

              <p className="text-base text-center font-normal text-[#101010] mb-[24px]">{testimonial.name}</p>

              
              <div className="grid grid-cols-2 gap-4 mb-[35px] px-[32px]">
                {testimonial.stats.map((stat, index) => (
                    <div key={index} className={`text-center ${index === 0 ? 'border-r border-gray-300' : ''}`}>
                     <p className="text-4xl font-semibold text-[#101010]">{stat.value}</p>
                     <p className="text-sm font-normal text-gray-700">{stat.label}</p>
                   </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 px-[32px]">{testimonial.description}</p>
            </div>

          ))}
        </div>
      </div>
    );
  };
  
  export default TestimonialsVidSec;
  