// components/FAQSection.js
import AccordionItem from '../molecules/AccordionItem';

const faqs = [
    {
      question: 'Who will be working on my account?',
      answer: 'You will be assigned a dedicated paid search account manager. This person is trained in search engine marketing and is likely to have experience working with clients similar to your industry.'
    },
    {
      question: 'How will you learn about my business?',
      answer: 'We will learn about your business by sending you an in-depth questionnaire to complete and by speaking with you in an onboarding call.'
    },
    {
      question: 'How will you create content that fits my business?',
      answer: 'We will create content that fits your business by examining your questionnaire, brand guide and any other material you give us.'
    },
    {
      question: 'Do I have to provide you with content?',
      answer: 'No, you do not have to provide us with content, but if you have content, we are happy to use it.'
    },
    {
      question: 'How can I start social media marketing?',
      answer: 'You can start social media marketing by following these steps: define your goals, evaluate your assets, understand your target market, publish eye catching content, implement your marketing strategy and continue learning.'
    },
    {
      question: 'What type of campaign result should I expect?',
      answer: 'You can expect an increase in brand exposure, website traffic, and leads or sales from Google Ads.'
    },
    {
      question: 'How much traffic can I expect?',
      answer: 'It depends on the size of your target audience and your advertising budget. The more fuel we have in the tank, the more results we can generate for you.'
    },
    {
      question: 'How much conversion can I expect?',
      answer: 'The amount of conversions will vary. We will track your conversion rate from our ads and use performance data to make gradual improvements.'
    },
    {
      question: "Isn't it expensive to advertise on search engines like Google?",
      answer: 'It can be expensive to advertise on Google. We recommend our clients to consider the average lifetime value of a customer for their business. Once you understand this, identify the maximum you are willing to spend to acquire one customer'
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
