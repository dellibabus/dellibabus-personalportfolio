import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle, XCircle, X } from 'lucide-react';
import { useToastStore } from '../../store/toastStore';

export default function ToastContainer() {
  const { toasts, removeToast } = useToastStore();

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 80, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 80, scale: 0.9 }}
            transition={{ type: 'spring', damping: 20 }}
            className={`
              pointer-events-auto flex items-center gap-3
              px-5 py-4 rounded-2xl shadow-2xl border
              backdrop-blur-xl max-w-sm
              ${toast.type === 'success'
                ? 'bg-[#0D1F14]/90 border-green-500/30 text-green-300'
                : 'bg-[#1A0D0D]/90 border-red-500/30 text-red-300'
              }
            `}
          >
            {toast.type === 'success' ? (
              <CheckCircle size={18} className="shrink-0 text-green-400" />
            ) : (
              <XCircle size={18} className="shrink-0 text-red-400" />
            )}
            <span className="text-sm font-medium flex-1">{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              className="shrink-0 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
            >
              <X size={14} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
