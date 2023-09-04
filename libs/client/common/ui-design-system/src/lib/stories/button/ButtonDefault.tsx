import { Button } from '@material-tailwind/react';

/* eslint-disable-next-line */
export interface AdditionalButtonProps {
    isIcon?: boolean;
}

type variant = 'filled' | 'outlined' | 'gradient' | 'text';
type size = 'sm' | 'md' | 'lg';
type color = 'primary' | 'secondary' | 'warning' | 'error';
const iconSvg = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 mr-2"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
    </svg>
);
export const ButtonDefault: React.FC<
    {
        variant: variant;
        size: size;
        color: color;
        labelText: string;
    } & AdditionalButtonProps
> = ({ variant, size, color, labelText, isIcon }) => {
    return (
        <Button
            className={`text-center ${color != null ? `bg-${color}` : 'bg-blue-500'}
            ${isIcon ? ' flex justify-center items-center' : ''}`}
            variant={variant || 'filled'}
            size={size || 'md'}
            fullWidth={false}
        >
            {isIcon ? iconSvg : null}
            <span className="">{labelText || 'Button'}</span>
        </Button>
    );
};

export default ButtonDefault;
