// components/FAQSection.js
import AccordionItem from '../molecules/AccordionItem';

const faqs = [
    {
      question: 'Who will be working on my account?',
      answer: 'The answer to this question will be provided here...'
    },
    {
      question: 'How will you learn about my business?',
      answer: 'The answer to this question will be provided here...'
    },
    {
      question: 'How will you create content that fits my business?',
      answer: 'The answer to this question will be provided here...'
    },
    {
      question: 'Do I have to provide you with content?',
      answer: 'The answer to this question will be provided here...'
    },
    {
      question: 'How can I start social media marketing?',
      answer: 'The answer to this question will be provided here...'
    },
    {
      question: 'What type of campaign result should I expect?',
      answer: 'The answer to this question will be provided here...'
    },
    {
      question: 'How much traffic can I expect?',
      answer: 'The answer to this question will be provided here...'
    },
    {
      question: 'How much conversion can I expect?',
      answer: 'The answer to this question will be provided here...'
    },
    {
      question: "Isn't it expensive to advertise on search engines like Google?",
      answer: 'The answer to this question will be provided here...'
    }
  ];
  

const FAQSection = () => {
  // Assuming we have an even number of FAQs, otherwise you'll need to handle the uneven case
  const halfwayPoint = Math.ceil(faqs.length / 2);
  const firstColumnFaqs = faqs.slice(0, halfwayPoint);
  const secondColumnFaqs = faqs.slice(halfwayPoint);

  return (
    <div className="flex flex-wrap md:flex-nowrap gap-[90px]">
      <div className="w-full md:w-1/2 text-[#FFFFFF]">
        {firstColumnFaqs.map((faq, index) => (
          <AccordionItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <div className="w-full md:w-1/2 text-[#FFFFFF]">
        {secondColumnFaqs.map((faq, index) => (
          <AccordionItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
