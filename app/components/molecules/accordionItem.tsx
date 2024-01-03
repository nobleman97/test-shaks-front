// components/AccordionItem.js
import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { Icon } from '@iconify/react';

const AccordionItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 text-[#FFFFFF]">
      <h3>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-left w-full flex justify-between items-center py-[12px] px-[10px] focus:outline-none"
        >
          <span className="text-base font-semibold text-[#FFFFFF]">{question}</span>
          <span className="ml-6 h-7 flex items-center">
            {/* Icon for the accordion button */}
            <Icon icon="iconamoon:arrow-down-2"  className={`text-[#FFFFFF] text-lg  transform transition-transform ${isOpen ? '-rotate-180' : 'rotate-0'}`} />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </span>
        </button>
      </h3>
      <Transition
        show={isOpen}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <div className="p-5">
          <p className="text-[#FFFFFF] ">{answer}</p>
        </div>
      </Transition>
    </div>
  );
};

export default AccordionItem;
