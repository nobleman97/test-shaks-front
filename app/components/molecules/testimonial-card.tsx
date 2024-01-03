export default function TestimonailCard({description, image, name, position}:{description: string, image: string, name: string, position: string}){
    return(
        <>
        <div className="flex flex-col testimonialcard min-w-[555px] w-[555px] bg-[#091A30] rounded-[20px] px-[46px] pt-[38px] pb-[42px]">
            
            <div className="mb-[24px]">Icon</div>

            <p className="text-base font-normal">
             {description}
            </p>
            

            <div className="user flex gap-[24px] mt-[31px]">
              <div>Image</div>
              <div className="flex flex-col">
                <h3 className="font-semibold">{name}</h3>
                <p className="font-light text-xs">{position}</p>
              </div>
            </div>
            
          </div>
        </>
    )
}