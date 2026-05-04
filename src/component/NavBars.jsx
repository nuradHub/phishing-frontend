import { Shield } from "lucide-react"
import { motion } from 'framer-motion';

const NavBars = () => {
  return (
    <nav className="border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-60">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
            <Shield size={24} className="text-blue-600" />
          </motion.div>
          <span className="font-bold text-sm tracking-tighter text-slate-900 uppercase md:text-xl">PhishGuard<span className="text-blue-600">.AI</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="#" className="hover:text-blue-600 transition-colors">Analyzer</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Education</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Solutions</a>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-3 py-2 text-sm font-bold text-slate-600 hover:text-blue-600 transition-all">Login</button>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg text-[8px] font-bold hover:bg-blue-700 transition-all shadow-md active:scale-95 md:text-sm">Get Started</button>
        </div>
      </div>
    </nav>
  )
}

export default NavBars