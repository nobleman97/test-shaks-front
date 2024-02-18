import React, { ChangeEvent } from 'react';

type InputProps = {
  type?: string;
  name: string;
  label: string;
  value?: string; // Add value here
  options?: Array<{ value: string; label: string }>;
  componentType?: 'input' | 'textarea' | 'select' | 'checkbox';
  style?: string;
  checked?: boolean; // For checkbox only
  onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  error: any
};

const Input: React.FC<InputProps> = ({
  type = 'text', // default to text if type is not provided
  name,
  label,
  value, // Add value here
  options = [],
  componentType = 'input',
  style = '',
  checked,
  onChange,
  error
}) => {
  const baseStyle = 'p-[10px] rounded-[4px] border-[1px]';
  const combinedStyle = `${baseStyle} ${style}`;
  const styled = componentType === "textarea" ? " w-full" : '';

  const renderInput = () => {
    switch (componentType) {
      case 'textarea':
        return (
          <textarea 
            name={name} 
            rows={4} 
            placeholder={label} 
            id={name} 
            className={combinedStyle + styled} 
            value={value} // Use value here
            onChange={onChange}
          />
        );
      case 'select':
        return (
          <select 
            name={name} 
            id={name} 
            className={combinedStyle + ' min-w-[360px]'} 
            value={value} // Use value here
            onChange={onChange}
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      case 'checkbox':
        return (
          <>
            <input
              type="checkbox"
              name={name}
              id={name}
              className={style} // Checkbox might have different styling
              checked={checked}
              onChange={onChange}
            />
            <label htmlFor={name} className="ml-2">
              {label}
            </label>
          </>
        );
      default:
        return (
          <input 
            type={type} 
            name={name} 
            placeholder={label} 
            id={name} 
            className={combinedStyle + ' min-w-[360px]'} 
            value={value} // Use value here
            onChange={onChange}
          />
        );
    }
  };

  return (
    <div className={`flex ${componentType === 'checkbox' ? 'items-center' : 'flex-col'} mb-10` + styled}>
      {componentType !== 'checkbox' && <label htmlFor={name} className="text-base text-[#101010] font-medium mb-2">
          {label}
      </label>}
      {renderInput()}
      {error ? <div className="text-red-500">{error}</div> : null}
    </div>
  );
};

export default Input;
