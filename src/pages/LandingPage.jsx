import {
  ShieldCheck, Globe, Brain, ListChecks, Info, Search,
  AlertTriangle, Lock, UserPlus, Shield, X, ExternalLink,
  Zap, ShieldQuestion, HelpCircle, Fingerprint, Terminal,
  Eye, LockKeyhole, BarChart3, Scan, MousePointer2, CheckCircle2,
  BookOpen, HeartHandshake, ShieldAlert, Activity, RefreshCw, Fish, ShieldX,
  Link2, ThumbsDown, ThumbsUp
} from 'lucide-react';
import { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import ReviewSection from '../component/ReviewSection';
import NavBars from '../component/NavBars';

const LandingPage = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [urlInput, setUrlInput] = useState('');

  const handlePhising = async () => {
    if (!urlInput) return;
    setLoading(true);
    setResult(null);
    try {
      const response = await axios.post('/scan', { url: urlInput });
      console.log(response.data)
      setTimeout(() => {
        setResult(response.data);
        setLoading(false);
      }, 1500);
    } catch (err) {
      console.error(err.message);
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 flex flex-col overflow-x-hidden relative'>

      {/* --- INFINITE BACKGROUND SCAN LINE --- */}
      <motion.div
        animate={{ y: ["-100%", "1000%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="fixed top-0 left-0 w-full h-[10vh] bg-linear-to-b from-transparent via-blue-200/20 to-transparent pointer-events-none z-0"
      />

      {/* --- TOP INFINITE TICKER --- */}
      <div className="bg-blue-600 overflow-hidden py-1.5 whitespace-nowrap z-70">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex gap-12 text-white text-[10px] font-black uppercase tracking-widest items-center"
        >
          <span>● SYSTEM STATUS: OPTIMAL</span>
          <span>● NEURAL NODES: 4,291 ACTIVE</span>
          <span>● THREAT LEVEL: ELEVATED</span>
          <span>● ENCRYPTION: AES-256 ACTIVE</span>
          <span>● LIVE MONITORING: ENABLED</span>
          <span>● ZERO-DAY PROTECTION: ON</span>
          <span>● SYSTEM STATUS: OPTIMAL</span>
          <span>● NEURAL NODES: 4,291 ACTIVE</span>
          <span>● THREAT LEVEL: ELEVATED</span>
        </motion.div>
      </div>

      {/* --- CLEAN NAVBAR --- */}
      <NavBars/>

      <main className="grow max-w-7xl mx-auto w-full px-4 py-12 md:py-20 relative z-10">

        {/* --- HERO SECTION WITH PHISHING ILLUSTRATION --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-[1.1]">
              Verify links <br />
              <motion.span animate={{ color: ["#2563eb", "#4f46e5", "#2563eb"] }} transition={{ duration: 4, repeat: Infinity }} className="font-black italic">
                before
              </motion.span> you get hooked.
            </h1>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 font-medium">
              Digital thieves use "bait" to steal your credentials.
              Our AI acts as your personal security guard, sniffing out traps in real-time.
            </p>

            {/* --- SEARCH BAR --- */}
            <motion.div whileHover={{ scale: 1.01 }} className='flex flex-col md:flex-row bg-white border border-slate-200 rounded-2xl p-2 gap-2 shadow-xl shadow-blue-900/5 focus-within:ring-4 ring-blue-100 transition-all'>
              <div className="flex items-center px-4 text-slate-400">
                {loading ? <Activity size={22} className="text-blue-600 animate-pulse" /> : <Search size={22} />}
              </div>
              <input className='bg-transparent border-none outline-none px-2 py-4 grow text-base md:text-lg text-slate-900 placeholder:text-slate-400 font-medium' placeholder='Paste a link here (e.g. https://example.com)' value={urlInput} onChange={(e) => setUrlInput(e.target.value)} />
              <button className='bg-blue-600 hover:bg-blue-700 px-10 py-4 rounded-xl font-bold text-sm text-white transition-all flex items-center justify-center gap-2 shadow-lg relative overflow-hidden' onClick={handlePhising} disabled={loading}>
                {loading && <motion.div initial={{ x: "-100%" }} animate={{ x: "100%" }} transition={{ duration: 1.5, repeat: Infinity }} className="absolute inset-0 bg-white/20 skew-x-12" />}
                {loading ? <RefreshCw className='animate-spin' size={18} /> : <Scan size={18} />}
                {loading ? 'Analyzing...' : 'Scan Link'}
              </button>
            </motion.div>
          </motion.div>

          {/* --- HERO IMAGE SIDE (PHISHING SPECIFIC) --- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center relative"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-full max-w-md flex items-center justify-center min-h-100"
            >
              <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full" />

              {/* PHISHING THEMED ILLUSTRATION */} 
              <img
                src="/img/phishing.png"
                alt="Phishing Defense"
                className="relative z-10 w-full h-auto"
              />

              {/* Floating Hook Icon */}
              <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute top-10 left-0 bg-white p-4 rounded-full shadow-2xl z-20 border border-slate-100"
              >
                <Fish size={32} className="text-red-400 rotate-45" />
              </motion.div>

              {/* Floating Shield Icon */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute bottom-10 right-0 bg-blue-600 p-5 rounded-2xl shadow-xl z-20"
              >
                <ShieldCheck size={38} className="text-white" />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* --- RESULTS DASHBOARD --- */}

        <AnimatePresence>
          {result && !loading && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className='grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24'
            >
              {/* --- LEFT SIDE: VERDICT & COMMUNITY DATA --- */}
              <div className={`lg:col-span-4 p-8 rounded-[2.5rem] border flex flex-col items-center shadow-2xl relative overflow-hidden ${result.verdict === 'MALICIOUS' ? 'bg-red-50 border-red-100' : 'bg-emerald-50 border-emerald-100'
                }`}>
                <div className="relative z-10 w-full text-center">
                  {result.verdict === 'MALICIOUS' ? <ShieldAlert size={70} className="text-red-600 mx-auto mb-4" /> : <ShieldCheck size={70} className="text-emerald-600 mx-auto mb-4" />}

                  <h2 className={`text-2xl font-black uppercase tracking-tighter mb-2 ${result.verdict === 'MALICIOUS' ? 'text-red-700' : 'text-emerald-700'
                    }`}>
                    {result.verdict}
                  </h2>

                  <div className='text-6xl font-black mb-2 text-slate-900 tracking-tighter'>
                    {result.riskScore}%
                  </div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6 italic">Threat Probability</p>

                  {/* --- COMMUNITY VOTES SECTION (UPDATED WITH EXPLICIT TEXT) --- */}
                  <div className="w-full space-y-2 mb-6">
                    <div className="flex flex-col gap-2 px-4 py-4 bg-white/80 rounded-2xl border border-slate-100 shadow-sm">
                      <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest text-left mb-1">Total Votes</span>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <ThumbsDown size={14} className="text-red-600" />
                          <span className="text-[10px] font-bold text-slate-600 uppercase">Malicious:</span>
                        </div>
                        <span className="text-sm font-black text-red-600">{result.analysis.totalVotes?.malicious || 0}</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <ThumbsUp size={14} className="text-emerald-600" />
                          <span className="text-[10px] font-bold text-slate-600 uppercase">Harmless:</span>
                        </div>
                        <span className="text-sm font-black text-emerald-600">{result.analysis.totalVotes?.harmless || 0}</span>
                      </div>
                    </div>

                    {/* Trust Score / Reputation */}
                    <div className="flex justify-between items-center px-4 py-3 bg-slate-900 rounded-2xl shadow-lg">
                      <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Trust Score</span>
                      <span className={`text-sm font-black ${result.analysis.reputation < 0 ? 'text-red-400' : 'text-emerald-400'}`}>
                        {result.analysis.reputation}
                      </span>
                    </div>
                  </div>

                  <div className='text-[10px] font-mono text-slate-500 break-all p-4 bg-white/90 border border-slate-200 rounded-2xl w-full italic shadow-inner'>
                    {result.url}
                  </div>
                </div>
              </div>

              {/* --- RIGHT SIDE: DETAILED BREAKDOWN --- */}
              <div className='lg:col-span-8 flex flex-col gap-6'>

                {/* Metric Row */}
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                  <ReportCard icon={<Brain size={16} />} label="AI Logic" val={result.analysis.aiConfidence} color="text-blue-600" />
                  <ReportCard icon={<AlertTriangle size={16} />} label="Status" val={result.analysis.contentRisk} color="text-orange-600" />
                  <ReportCard icon={<Fingerprint size={16} />} label="Heuristic" val={result.analysis.heuristicScore} color="text-purple-600" />
                  <ReportCard icon={<Globe size={16} />} label="Global Sync" val={result.analysis.globalReports} color="text-indigo-600" />
                </div>

                <div className='bg-white border border-slate-200 p-8 rounded-[2.5rem] shadow-sm space-y-8'>

                  {/* FINAL DESTINATION */}
                  <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
                    <div>
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Final Destination URL</p>
                      <p className="text-xs font-mono text-slate-600 truncate">{result.analysis.lastFinalUrl}</p>
                    </div>
                    <Link2 size={16} className="text-slate-300" />
                  </div>

                  {/* MALICIOUS ENGINES LIST */}
                  {result?.analysis?.maliciousEngines?.length > 0 && (
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <ShieldX size={18} className="text-red-500" />
                        <h4 className="text-[11px] font-black text-slate-900 uppercase tracking-widest">Vendor Analysis</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {result.analysis.maliciousEngines.map((engine, i) => (
                          <span key={i} className="px-4 py-2 bg-red-600 text-white text-[9px] font-black rounded-xl uppercase tracking-tighter shadow-md">
                            {engine}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* OBSERVATION LOG */}
                  <div className="flex gap-4 items-start p-6 bg-blue-50/30 rounded-3xl border border-blue-100">
                    <div className="bg-white p-2 rounded-lg shadow-sm border border-blue-100"><Terminal size={20} className="text-blue-600" /></div>
                    <div>
                      <p className="text-[9px] font-black text-blue-400 uppercase tracking-widest mb-1">Technical Log</p>
                      <p className="text-sm font-bold text-slate-800 leading-tight">{result.analysis.contentDetail}</p>
                    </div>
                  </div>

                  {/* FEEDBACK LIST */}
                  <div className="space-y-3">
                    <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-widest italic mb-4">Awareness Feedback</h3>
                    {result.awarenessFeedback.map((f, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className='flex gap-4 items-center bg-white p-4 rounded-2xl border border-slate-100 shadow-sm'
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        <p className="font-bold text-[10px] text-slate-600 uppercase tracking-tight">{f}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- CONTENT HUB --- */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-16 py-12 border-t border-slate-200">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6">How Phishing Works</h2>
              <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
                <p>Scammers use <b>Advanced Spoofing</b> to create websites visually identical to banks. Most are "Zero-Day" threats, created just minutes before they attack to bypass filters.</p>
                <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Security Evaluation Strategy</h3>
                  <ul className="space-y-6">
                    <StrategyItem num="1" title="Visual Pattern Matching" desc="Identifying Punycode characters that mimic real letters." />
                    <StrategyItem num="2" title="Behavioral Analysis" desc="Detecting if a site hides its true forms from security crawlers." />
                    <StrategyItem num="3" title="Entropy Calculation" desc="Measuring URL randomness to spot automatically generated scams." />
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-8">
            <motion.div whileHover={{ y: -5 }} className="bg-white border border-slate-200 p-8 rounded-[2.5rem] shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><Shield size={100} /></div>
              <BookOpen className="text-blue-600 mb-4" />
              <h4 className="text-lg font-bold text-slate-900 mb-4">Safety Guidance</h4>
              <ul className="space-y-4 text-sm text-slate-600 font-medium">
                <li>● Don't trust "Urgent" emails.</li>
                <li>● Manually type bank URLs.</li>
                <li>● Enable 2FA on every account.</li>
              </ul>
            </motion.div>

            <motion.div animate={{ backgroundColor: ["#0f172a", "#1e293b", "#0f172a"] }} transition={{ duration: 6, repeat: Infinity }} className="p-8 rounded-[2.5rem] text-white shadow-xl">
              <HeartHandshake className="mb-4 text-blue-400" />
              <h4 className="text-lg font-bold mb-2 uppercase italic tracking-tighter">Our Mission</h4>
              <p className="text-xs text-slate-400 leading-relaxed font-medium">We democratize enterprise-grade security for the everyday user.</p>
            </motion.div>
          </aside>
        </section>

        {/* --- THREAT INTELLIGENCE HUB --- */}
        <section className="mt-12 border-t border-slate-200 pt-12">
          <motion.h3 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-2xl font-extrabold text-slate-900 mb-10 uppercase tracking-tight">Threat Intelligence Hub</motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <EduCard icon={<ShieldQuestion className="text-blue-600" />} title="What is Phishing?" desc="Deceptive sites mimicking trusted brands to steal your passwords and identity." />
            <EduCard icon={<LockKeyhole className="text-indigo-600" />} title="MFA Attacks" desc="New attacks can steal your 2-Factor code as you type it. Be extremely cautious." />
            <EduCard icon={<Eye className="text-emerald-600" />} title="URL Cloaking" desc="When a site shows different content to security software than it shows to you." />
            <EduCard icon={<Zap className="text-orange-600" />} title="Zero-Day Protection" desc="Detecting malicious sites the moment they go live, before they are reported." />
          </div>
        </section>

        <ReviewSection/>
      </main>

      {/* --- FOOTER --- */}
      <footer className="border-t border-slate-200 py-16 px-8 bg-white relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2"><Shield size={22} className="text-blue-600" /><span className="font-bold text-xl text-slate-900">PhishGuard</span></div>
            <p className="text-sm text-slate-500 font-medium max-w-xs">Autonomous security for the modern web. 2026 Intelligence Engine.</p>
          </div>
          <div className="flex gap-16 text-xs font-bold text-slate-600 uppercase tracking-widest">
            <div className="flex flex-col gap-4"><span>Platform</span><a href="#">Analyzer</a><a href="#">Intelligence</a></div>
            <div className="flex gap-4 self-center"><div className="p-2.5 bg-slate-100 rounded-full hover:bg-blue-100 transition-colors cursor-pointer"><X size={16} /></div></div>
          </div>
        </div>
      </footer>
    </div>
  );
};

/* --- COMPONENTS --- */
const ReportCard = ({ icon, label, val, delay }) => (
  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }} className="bg-white border border-slate-200 p-6 rounded-3xl flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
    <div className="mb-3">{icon}</div>
    <span className="text-[9px] font-black uppercase text-slate-400 tracking-widest mb-1">{label}</span>
    <div className="text-lg font-bold text-slate-900">{val}</div>
  </motion.div>
);

const StrategyItem = ({ num, title, desc }) => (
  <li className="flex gap-4">
    <div className="h-7 w-7 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold text-xs shadow-lg">{num}</div>
    <div><p className="text-sm font-bold text-slate-900">{title}</p><p className="text-xs text-slate-500">{desc}</p></div>
  </li>
);

const EduCard = ({ icon, title, desc }) => (
  <motion.div whileHover={{ y: -5 }} className="bg-white border border-slate-200 p-8 rounded-[2.5rem] hover:border-blue-300 transition-all shadow-sm group">
    <div className="mb-6 p-4 bg-slate-50 w-fit rounded-2xl group-hover:bg-blue-50 transition-colors">{icon}</div>
    <h4 className="text-lg font-bold text-slate-900 mb-3">{title}</h4>
    <p className="text-sm text-slate-500 leading-relaxed font-medium">{desc}</p>
  </motion.div>
);

export default LandingPage;
