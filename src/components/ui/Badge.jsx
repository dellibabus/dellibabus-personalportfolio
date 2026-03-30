export default function Badge({ children, className = '', variant = 'default' }) {
  const variants = {
    default: 'bg-green-500/10 text-green-400 border border-green-500/20',
    outline: 'border border-[#1F2A25] text-gray-400',
    solid: 'bg-green-500 text-black',
  };

  return (
    <span
      className={`
        inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium
        transition-colors duration-200
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
