import React, { forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Inputs = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, ...rest }, ref) => {
    return (
      <div>
        {label && <label className="block text-sm">{label}</label>}
        <input
          type="text"
          ref={ref}
          {...rest}
          className={`p-2 focus:outline-none ${className}`}
        />
      </div>
    );
  }
);

Inputs.displayName = 'Inputs';

export default Inputs;
