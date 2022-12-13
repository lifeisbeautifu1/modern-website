import styles from '../style';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} flex-col md:flex-row mb-8 w-full`}>
        <div className='flex-[1] flex flex-col justify-start mr-10'>
          <img
            src={logo}
            alt='hoobank'
            className='w-[266px] h-[72px] object-contain'
          />
          <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className='flex-[1.5] w-full flex justify-between flex-wrap mt-10 md:mt-0'>
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.title}
              className='flex flex-col my-4 ss:my-0 min-w-[150px]'
            >
              <h4 className='font-medium text-lg leading-[27px] text-white'>
                {footerLink.title}
              </h4>
              <ul className='list-none mt-4 space-y-4'>
                {footerLink.links.map((link) => (
                  <li
                    key={link.name}
                    className='font-normal text-base text-dimWhite hover:text-secondary cursor-pointer'
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div
        className='w-full flex justify-between items-center flex-col md:flex-row pt-6 border-t
      border-t-[#3f3e45]'
      >
        <p className='font-normar text-center text-lg leading-[27px] text-white'>
          Copyright &copy; {new Date().getFullYear()} HooBank. All Rights
          Reserved
        </p>
        <div className='flex mt-6 md:mt-0 space-x-6'>
          {socialMedia.map((social) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className='w-[21px] h-[21px] object-contain cursor-pointer'
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
