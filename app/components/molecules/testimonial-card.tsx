import Image from "next/image"

export default function TestimonailCard({description, image, name, position}:{description: string, image: string, name: string, position: string}){
    return(
        <>
        <div className="flex flex-col testimonialcard min-w-[277.5px] w-[277.5px] md:min-w-[555px] md:w-[555px] bg-[#091A30] rounded-[20px] px-[23px] md:px-[46px] pt-[19px] md:pt-[38px] pb-[21px] md:pb-[42px]">
            
            <div className="mb-[24px] h-[66px] w-[66px] bg-[#194885] px-[13px] py-[18px] rounded-full">
              <div className="h-[29px] w-[40px] relative"><Image src="/images/quoteicon.png" fill alt="quote"/></div>
              
            </div>

            <p className=" text-[8px] md:text-base font-normal text-start">
             {description}
            </p>
            

            <div className="user flex items-center gap-[24px] mt-[31px]">
              <div className="relative h-[42px] md:h-[84px] md:w-[84px] w-[42px]"><Image src={image} alt="photo" fill/></div>
              <div className="flex flex-col items-start">
                <h3 className=" text-[8px] md:text-base font-semibold">{name}</h3>
                <p className="text-[6px] md:text-[12px] font-light text-xs">{position}</p>
              </div>
            </div>
            
          </div>
        </>
    )
}