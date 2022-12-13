import { quotes } from '../assets';

const FeedbackCard = ({
  content,
  title,
  name,
  img,
}: {
  content: string;
  title: string;
  name: string;
  img: string;
}) => {
  return (
    <div
      className='flex justify-between flex-col px-10 py-12 rounded-[20px]
  max-w-[370px] md:mr-10 sm:mr-5 my-5 feedback-card'
    >
      <img
        src={quotes}
        alt='double_quotes'
        className='w-[42px] h-[28px] object-contain'
      />
      <p className='font-normal text-[18px] leading-[32px] text-white my-10'>
        {content}
      </p>
      <div className='flex'>
        <img src={img} alt={name} className='w-12 h-12 rounded-full' />
        <div className='flex flex-col ml-4'>
          <h4 className='font-semibold text-[20px] leading-[32px] text-white'>
            {name}
          </h4>
          <p className='font-normal text-base text-dimWhite'>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
