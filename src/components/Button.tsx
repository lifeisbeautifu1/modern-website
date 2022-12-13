type Props = {
  styles?: string;
  title: string;
};

const Button = ({ styles, title }: Props) => {
  return (
    <button
      type='button'
      className={`py-4 px-6 font-medium text-[18px]
  text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
    >
      {title}
    </button>
  );
};

export default Button;
