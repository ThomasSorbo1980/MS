
import React, { useState, useEffect } from 'react';
import { 
  Ship, 
  FileText, 
  Target, 
  CheckCircle2, 
  AlertCircle, 
  Mail, 
  Phone,
  ArrowRight,
  Globe,
  ShieldCheck,
  Activity,
  Compass,
  Workflow,
  Anchor,
  Layers,
  Scale,
  Radar,
  Briefcase,
  Lock
} from 'lucide-react';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const chartData = [
  { name: 'Jan', market: 100, ms: 100 },
  { name: 'Feb', market: 115, ms: 108 },
  { name: 'Mar', market: 140, ms: 115 },
  { name: 'Apr', market: 210, ms: 140 },
  { name: 'May', market: 180, ms: 130 },
  { name: 'Jun', market: 230, ms: 160 },
  { name: 'Jul', market: 280, ms: 190 },
];

const FadeIn: React.FC<{ children: React.ReactNode; delay?: number; direction?: 'up' | 'down' | 'left' | 'right' }> = ({ children, delay = 0, direction = 'up' }) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0, 
        x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0 
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center font-black text-white text-xl transition-transform group-hover:rotate-3">MS</div>
          <span className="font-bold tracking-tighter text-xl hidden sm:block uppercase">Martin & Sorbo</span>
        </div>
        <div className="hidden lg:flex items-center gap-8">
          {['Problem', 'Post-Audit', 'Validation', 'Pre-Audit', 'Clearing'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">{item}</a>
          ))}
          <a href="#contact" className="px-6 py-2 bg-white text-slate-950 rounded font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">Free Assessment</a>
        </div>
      </div>
    </nav>
  );
};

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const shipY = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <div className="relative">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[70]" style={{ scaleX }} />
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1542704792-e30dac463c90?auto=format&fit=crop&q=80&w=2400" 
            alt="Cargo Ship" 
            className="w-full h-full object-cover grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 pt-20">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              <Compass className="w-3 h-3" /> State-of-the-Art Ocean Freight Invoicing
            </div>
            <h1 className="text-6xl md:text-[8rem] font-black text-white tracking-tighter leading-[0.8] uppercase mb-8">
              Enforcement <br/> Of Contract <br/> <span className="text-blue-600">Integrity.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 max-w-2xl font-medium leading-relaxed mb-12">
              Systematic invoice auditing grounded in the world of global ocean freight. 
              We reclaim lost capital through AI-driven deviation detection.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <button className="px-10 py-5 bg-blue-600 text-white rounded font-black uppercase tracking-widest shadow-2xl shadow-blue-600/30 hover:bg-blue-500 transition-all flex items-center gap-3">
                Recover Lost Margin <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </FadeIn>
        </div>
        <motion.div style={{ y: shipY }} className="absolute -bottom-20 -right-20 opacity-5 pointer-events-none hidden lg:block">
           <Ship size={1000} strokeWidth={0.5} className="text-blue-500" />
        </motion.div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-32 bg-slate-950 blueprint-grid relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="right">
              <div className="text-xs font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Point 01</div>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-10 uppercase">Complex. <br/> Opaque. <br/> <span className="text-red-500">Error-Prone.</span></h2>
              <div className="grid grid-cols-2 gap-6">
                 {[
                   { icon: <Activity className="text-red-500 w-4 h-4" />, label: "Manual Data Entry" },
                   { icon: <Layers className="text-blue-500 w-4 h-4" />, label: "Changing Surcharges" },
                   { icon: <Globe className="text-emerald-500 w-4 h-4" />, label: "Exchange Rate Practice" },
                   { icon: <AlertCircle className="text-amber-500 w-4 h-4" />, label: "Incoterm Deviations" },
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400">
                      {item.icon} {item.label}
                   </div>
                 ))}
              </div>
            </FadeIn>
            <FadeIn direction="left">
               <div className="p-12 glass rounded-[3rem] border border-white/10 relative overflow-hidden">
                  <div className="scanner-line"></div>
                  <div className="flex items-center justify-between mb-8">
                     <Radar className="text-red-500 w-5 h-5 animate-pulse" />
                     <span className="mono text-[10px] font-bold text-slate-500 uppercase">Detection Engine: Active</span>
                  </div>
                  <div className="space-y-4 mono text-[10px]">
                     <div className="p-3 bg-white/5 rounded border border-white/10 flex justify-between items-center">
                        <span className="text-slate-500">INVOICE_REF_771A</span> <span className="text-blue-400">NORMALIZING...</span>
                     </div>
                     <div className="p-3 bg-red-500/10 rounded border border-red-500/30 flex justify-between items-center">
                        <span className="text-red-500 font-bold">THC_SURCHARGE_MATCH</span> <span className="text-red-500 font-bold">FAILED_DEVIATION</span>
                     </div>
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Gain Share Section */}
      <section id="gain-share" className="py-32 bg-[#020617] border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <FadeIn>
            <h2 className="text-5xl font-black text-white tracking-tighter uppercase mb-12">Risk-Free Cash Recovery.</h2>
            <div className="p-10 glass rounded-[3rem] max-w-2xl mx-auto border border-blue-500/20">
              <div className="text-blue-500 font-black text-4xl mb-4">No Refund – No Payment</div>
              <p className="text-slate-400 font-medium">We only share in the gains we recover for you. Full commercial alignment.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto glass p-12 rounded-[3rem] border border-white/10">
            <h2 className="text-3xl font-black text-white uppercase mb-12 text-center">Start Your Assessment</h2>
            <div className="grid md:grid-cols-2 gap-12">
               <div>
                  <h3 className="text-blue-500 font-black uppercase text-xs mb-4">Austria / DACH</h3>
                  <p className="text-white font-bold">Daniel Martin</p>
                  <p className="text-slate-400 text-sm">daniel@martin-sorbo.com</p>
               </div>
               <div>
                  <h3 className="text-blue-500 font-black uppercase text-xs mb-4">Norway / Nordic</h3>
                  <p className="text-white font-bold">Thomas Sorbo</p>
                  <p className="text-slate-400 text-sm">thomas@martin-sorbo.com</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 bg-slate-950 text-center border-t border-white/5">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-700">&copy; 2025 Martin & Sorbo Intelligence. Built for Maritime Excellence.</p>
      </footer>
    </div>
  );
};

export default App;
