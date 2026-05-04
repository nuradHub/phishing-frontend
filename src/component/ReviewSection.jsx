import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, UserCircle, MessageSquare } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-toastify'
import { AppContext } from '../context/ContextProvider';

const ReviewSection = () => {

  const { reviews, setReviews, message, setMessage, getReview } = useContext(AppContext)

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);
    try {
      const response = await axios.post('/review/new', {
        message: message
      });

      if (response.data) {
        await getReview()
        setMessage('')
      }
    } catch (err) {
      console.log(err.message);
      toast.error(err.response?.data?.message) || 'Failed to send Feedback'
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-4xl px-4 py-20 border-t border-slate-100">
      <div className="flex items-center gap-3 mb-10">
        <MessageSquare className="text-blue-600" />
        <h2 className="text-2xl font-black tracking-tight text-slate-900 uppercase">Community Feedback</h2>
      </div>

      {/* --- INPUT AREA --- */}
      <form onSubmit={handleSubmit} method='POST' className="flex flex-col gap-5 mb-12 relative">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Share your thoughts on the scanner..."
          className="w-full p-6 rounded-3xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none transition-all resize-none h-32 text-slate-700 font-medium"
        />
        <button
          disabled={isSubmitting}
          className="max-w-50 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-2xl shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <span className="text-xs font-bold uppercase tracking-widest pl-2">Post Feedback</span>
          <Send size={18} />
        </button>
      </form>

      {/* --- REVIEWS DISPLAY --- */}
      <div className="flex flex-col">
        <AnimatePresence>
          {[...reviews]?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))?.map((rev) => (
            <motion.div
              key={rev._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="p-3 rounded-3xl flex gap-4"
            >
              <UserCircle className="text-slate-300 shrink-0" size={40} />
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-bold text-slate-900 text-sm">{rev.user}</span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {new Date(rev.createdAt).toLocaleTimeString()}
                  </span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">{rev.message}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {reviews.length === 0 && (
          <p className="text-left text-slate-400 italic text-sm py-10">No feedback yet. Be the first!</p>
        )}
      </div>
    </section>
  );
};

export default ReviewSection;