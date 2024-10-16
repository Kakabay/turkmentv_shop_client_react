import { Link } from 'react-router-dom';

interface ButttonProps {
  size: 'small' | 'big';
  buttonLink: string;
  children: React.ReactNode;
  disabled?: boolean;
}
const Button = ({ buttonLink, size = 'small', children, disabled }: ButttonProps) => {
  return (
    <Link
      to={!disabled ? buttonLink : '/'}
      className={`${
        size === 'small' ? 'py-3' : 'py-5'
      } px-4 bg-fillButtonAccentDefault text-center rounded-xl w-full text-[18px] text-white font-medium leading-[150%] ${
        disabled ? 'opacity-70 pointer-events-auto cursor-default' : 'cursor-pointer'
      }`}>
      {children}
    </Link>
  );
};

export default Button;
