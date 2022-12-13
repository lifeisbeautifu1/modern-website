import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const FeatureCard = ({
  icon,
  title,
  content,
}: {
  icon: any;
  title: string;
  content: string;
}) => {
  return (
    <div className='flex p-6 rounded-[20px] feature-card'>
      <div className={`w-16 h-16 rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt='star' className='w-1/2 h-1/2 object-contain' />
      </div>
      <div className='flex-1 flex flex-col ml-3'>
        <h4 className='font-semibold text-white text-[18px] leading-[23px] mb-1'>
          {title}
        </h4>
        <p className='font-normal text-dimWhite text-base '>{content}</p>
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className='sm:block hidden' /> we'll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button title='Get Started' styles='mt-10' />
      </div>
      <div className={`${layout.sectionImg} flex-col space-y-6`}>
        {features.map((feature) => (
          <FeatureCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Business;
