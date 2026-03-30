import { useState } from 'react';

export default function Input({
  label,
  name,
  type = 'text',
  value,
  onChange,
  required = false,
  multiline = false,
  rows = 5,
}) {
  const [focused, setFocused] = useState(false);
  const isFloating = focused || value?.length > 0;

  const baseClass = `
    w-full bg-[#0B0F0C] border rounded-2xl px-4 text-[#E6F4EA] text-sm
    outline-none transition-all duration-200 resize-none
    placeholder-transparent
    ${focused
      ? 'border-green-500 shadow-[0_0_0_3px_rgba(34,197,94,0.1)]'
      : 'border-[#1F2A25] hover:border-green-500/30'
    }
  `;

  return (
    <div className="relative">
      {multiline ? (
        <textarea
          id={name}
          name={name}
          rows={rows}
          required={required}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={label}
          className={`${baseClass} pt-6 pb-2`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={label}
          className={`${baseClass} h-14 pt-5 pb-2`}
        />
      )}
      <label
        htmlFor={name}
        className={`
          absolute left-4 pointer-events-none font-medium
          transition-all duration-200
          ${isFloating
            ? 'top-2 text-[10px] text-green-400'
            : multiline ? 'top-4 text-sm text-[#9CA3AF]' : 'top-4 text-sm text-[#9CA3AF]'
          }
        `}
      >
        {label}
        {required && <span className="text-green-400 ml-0.5">*</span>}
      </label>
    </div>
  );
}
