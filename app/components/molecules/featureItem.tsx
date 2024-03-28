import { Feature } from "@/app/lib/types";
import { Icon } from "@iconify/react";
import { useState } from "react";

const FeatureItem = ({ feature }: { feature: Feature }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const stringArrayToUnorderedList = (strArray: string) => {
      let array;
      try {
        array = JSON.parse(strArray);
      } catch (error) {
        return strArray;
      }
     
    
      if (!Array.isArray(array)) {
        console.log("Input must be a stringified array.");
        return array ;
      }
    
      // Start with an empty unordered list
      let html = "<ul className='list-disc pl-0 md:pl-5 space-y-2 hover:space-y-3'>";
    
      // Append each array element as a list item
      array.forEach(item => {
        html += `<li>${item}</li>`;
      });
    
      // Close the unordered list
      html += "</ul>";
    
      return html;
    }
  
    const toggleDescription = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <div onClick={toggleDescription} className="flex flex-col gap-[13px] justify-center items-start cursor-pointer w-full ">
        <div className="flex gap-[13px] justify-between items-center w-full min-w-[90%] px-[10px]">
          <span className="flex gap-[13px]">
            <Icon icon="mingcute:check-fill" />
            <p className="font-medium">{feature.name}</p>
          </span>
          {!isExpanded ? ( <Icon icon="oui:arrow-down" />):( <Icon icon="oui:arrow-up" />)}
        </div>
        {isExpanded && (
          <div className="px-[20px] mt-[15px] mb-[82px]">
            <p className="text-[12px] md:text-[12px]  text-[#5C5C5C] font-light ">{stringArrayToUnorderedList(feature.description)}</p>
          </div>
        )}
      </div>
    );
  };

  export default FeatureItem