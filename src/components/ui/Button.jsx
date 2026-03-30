import { motion } from 'framer-motion';

const variants = {
  primary:
    'bg-green-500 hover:bg-green-400 text-black font-semibold shadow-lg hover:shadow-green-500/30 hover:shadow-xl',
  outline:
    'border border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 hover:shadow-green-500/20 hover:shadow-lg',
  ghost:
    'text-gray-300 hover:text-green-400 hover:bg-green-500/10',
  glow:
    'bg-green-500 text-black font-bold glow-green hover:bg-green-400 hover:glow-green',
};

export default function Button({
  children,
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  size = 'md',
}) {
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      className={`
        inline-flex items-center gap-2 rounded-2xl font-medium
        transition-all duration-200 cursor-pointer select-none
        disabled:opacity-50 disabled:cursor-not-allowed
        ${sizes[size]}
        ${variants[variant]}
        ${className}
      `}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Sending...
        </span>
      ) : (
        children
      )}
    </motion.button>
  );
}
