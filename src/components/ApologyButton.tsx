
import React from 'react';
import { cn } from '@/lib/utils';

interface ApologyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline';
  children: React.ReactNode;
}

const ApologyButton: React.FC<ApologyButtonProps> = ({
  className,
  variant = 'default',
  children,
  ...props
}) => {
  const baseStyles = "relative overflow-hidden rounded-lg text-center font-medium transition-all duration-300 ease-out hover:shadow-lg active:scale-[0.98] px-8 py-3";
  
  const variantStyles = {
    default: "bg-apology-accent text-white before:absolute before:inset-0 before:bg-white/20 before:translate-x-[-100%] before:transition-transform hover:before:translate-x-[100%] before:duration-700",
    secondary: "bg-apology-primary/80 text-white hover:bg-apology-primary",
    outline: "bg-transparent border border-apology-primary text-apology-dark hover:bg-apology-light"
  };
  
  return (
    <button
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default ApologyButton;
