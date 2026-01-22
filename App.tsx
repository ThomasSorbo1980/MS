
import React, { useState, useEffect } from 'react';
import { 
  Ship, 
  FileText, 
  Target, 
  Cpu, 
  CheckCircle2, 
  AlertCircle, 
  Mail, 
  Phone,
  ArrowRight,
  Globe,
  Database,
  Zap,
  ShieldCheck,
  TrendingUp,
  Activity,
  Compass,
  Workflow,
  Anchor,
  Layers,
  Container,
  Scale,
  Radar,
  ChevronDown,
  Briefcase,
  Lock,
  ArrowUpRight,
  Factory
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
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';

const chartData = [
  { name: 'Jan', market: 100, ms: 100 },
  { name: 'Feb', market: 115, ms: 108 },
  { name: 'Mar', market: 140, ms: 115 },
  { name: 'Apr', market: 210, ms: 140 },
  { name: 'May', market: 180, ms: 130 },
  { name: 'Jun', market: 230, ms: 160 },
  { name: 'Jul', market: 280, ms: 190 },
];

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, direction = 'up' }) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0, 
        x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0 
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
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
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center font-black text-white text-xl">MS</div>
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

      {/* 0. HERO: CINEMATIC START */}
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
              <div className="flex items-center gap-6 pl-4 border-l border-white/10">
                 <div>
                   <div className="text-white font-black text-2xl">1–3%</div>
                   <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Revenue Recovery</div>
                 </div>
              </div>
            </div>
          </FadeIn>
        </div>
        <motion.div style={{ y: shipY }} className="absolute -bottom-20 -right-20 opacity-5 pointer-events-none hidden lg:block">
           <Ship size={1000} strokeWidth={0.5} className="text-blue-500" />
        </motion.div>
      </section>

      {/* 1. THE PROBLEM: COMPLEX & OPAQUE */}
      <section id="problem" className="py-32 bg-slate-950 blueprint-grid relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="right">
              <div className="text-xs font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Point 01</div>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none mb-10 uppercase">Complex. <br/> Opaque. <br/> <span className="text-red-500">Error-Prone.</span></h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-10">
                Ocean freight invoicing suffers from manual processes and fragmented data. Carrier invoices frequently deviate from agreed terms—overbilling is often accepted as a cost of doing business.
              </p>
              <div className="grid grid-cols-2 gap-6">
                 {[
                   { icon: <Activity className="text-red-500" />, label: "Manual Data Entry" },
                   { icon: <Layers className="text-blue-500" />, label: "Changing Surcharges" },
                   { icon: <Globe className="text-emerald-500" />, label: "Exchange Rate Practice" },
                   { icon: <AlertCircle className="text-amber-500" />, label: "Incoterm Deviations" },
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-400">
                      {item.icon} {item.label}
                   </div>
                 ))}
              </div>
            </FadeIn>
            <FadeIn direction="left">
               <div className="p-12 glass rounded-[3rem] border border-white/10 glow-red relative overflow-hidden">
                  <div className="scanner-line"></div>
                  <div className="flex items-center justify-between mb-8">
                     <Radar className="text-red-500 w-5 h-5 animate-pulse" />
                     <span className="mono text-[10px] font-bold text-slate-500 uppercase">Detection Engine: Active</span>
                  </div>
                  <div className="space-y-4 mono text-[10px]">
                     <div className="p-3 bg-white/5 rounded border border-white/10 flex justify-between">
                        <span className="text-slate-500">INVOICE_REF_771A</span> <span className="text-blue-400">NORMALIZING...</span>
                     </div>
                     <div className="p-3 bg-white/5 rounded border border-white/10 flex justify-between">
                        <span className="text-slate-500">TERM_CHECK_INC2020</span> <span className="text-green-500">OK</span>
                     </div>
                     <div className="p-3 bg-red-500/10 rounded border border-red-500/30 flex justify-between">
                        <span className="text-red-500 font-bold">THC_SURCHARGE_MATCH</span> <span className="text-red-500 font-bold">FAILED_DEVIATION</span>
                     </div>
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. POST-AUDIT: THE ENTRY POINT */}
      <section id="post-audit" className="py-32 bg-[#020617] relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 max-w-4xl mx-auto">
            <FadeIn>
              <div className="text-xs font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Point 02</div>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-8">Post-Audit <br/> AI Engines.</h2>
              <p className="text-xl text-slate-400 font-medium">
                Our models are trained specifically on ocean carrier layout structures and forwarder billing logic, capturing all commercial data points at the line-item level.
              </p>
            </FadeIn>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Carrier Layouts", icon: <Ship />, desc: "Intelligence for Maersk, MSC, Hapag-Lloyd, and CMA CGM native layouts." },
              { title: "Forwarder Logic", icon: <Workflow />, desc: "Deep extraction of complex billing structures from tier-1 freight forwarders." },
              { title: "Line-Item Semantics", desc: "Normalized data extraction across all trade lanes and regional semantics.", icon: <Layers /> }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                 <div className="p-10 glass rounded-[2rem] h-full border border-white/5 group hover:bg-white/[0.04] transition-all">
                    <div className="w-14 h-14 bg-blue-600/20 text-blue-500 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      {React.cloneElement(item.icon as React.ReactElement, { className: 'w-7 h-7' })}
                    </div>
                    <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tighter">{item.title}</h4>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                 </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. AUTOMATED VALIDATION */}
      <section id="validation" className="py-32 bg-slate-950 ship-wake">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="right">
              <div className="text-xs font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Point 03</div>
              <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none mb-10 uppercase">Systematic <br/> Verification.</h2>
              <div className="space-y-4">
                 {[
                   { label: "Contracted Base Rates", icon: <CheckCircle2 /> },
                   { label: "Agreed Surcharge Validity", icon: <CheckCircle2 /> },
                   { label: "Incoterms Responsibilities", icon: <CheckCircle2 /> },
                   { label: "Exchange Rate Mechanisms", icon: <CheckCircle2 /> },
                   { label: "Duplicate Billing Controls", icon: <CheckCircle2 /> },
                   { label: "Equipment & Weight Brackets", icon: <CheckCircle2 /> }
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4 text-sm font-bold text-slate-300 p-4 glass rounded-2xl border border-white/5">
                      <div className="text-blue-500">{item.icon}</div> {item.label}
                   </div>
                 ))}
              </div>
            </FadeIn>
            <FadeIn direction="left">
               <div className="p-12 bg-blue-600 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:rotate-12 transition-transform"><Target size={200} /></div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 relative z-10">Zero Missing Data.</h3>
                  <p className="text-blue-100 text-lg mb-8 relative z-10">
                    Every deviation is logged, categorized, and fully traceable. We provide the documentation used directly to substantiate claims.
                  </p>
                  <div className="mono text-[10px] p-4 bg-slate-950/40 rounded-xl border border-white/10 relative z-10">
                    MATCH_RESULT: $1,420.00 RECOVERY READY
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4 & 5. IMPACT & GAIN SHARE */}
      <section id="gain-share" className="py-32 bg-[#020617] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
               <FadeIn direction="right">
                 <div className="text-xs font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Point 04 & 05</div>
                 <h2 className="text-5xl font-black text-white tracking-tighter uppercase mb-8">Risk-Free <br/> Cash Recovery.</h2>
                 <p className="text-xl text-slate-400 font-medium leading-relaxed mb-10">
                   Typical Outcome: <span className="text-white">Refunds of 1–3% of annual spend.</span> This is recovered cash, not theoretical value.
                 </p>
                 <div className="p-8 bg-blue-600 rounded-3xl text-white shadow-2xl shadow-blue-600/30 inline-block">
                    <div className="text-sm font-bold uppercase tracking-widest mb-2">Gain Share Model</div>
                    <div className="text-4xl font-black">No Refund – No Payment</div>
                 </div>
               </FadeIn>
            </div>
            <div className="lg:w-1/2">
               <FadeIn direction="left">
                 <div className="h-[400px] glass rounded-[3rem] p-8">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData}>
                        <defs>
                          <linearGradient id="colorMs" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                        <XAxis dataKey="name" hide />
                        <YAxis hide />
                        <Tooltip contentStyle={{ background: '#0f172a', border: 'none', borderRadius: '12px' }} />
                        <Area type="monotone" dataKey="market" stroke="#334155" strokeWidth={2} fill="transparent" />
                        <Area type="monotone" dataKey="ms" stroke="#2563eb" strokeWidth={4} fillOpacity={1} fill="url(#colorMs)" />
                      </AreaChart>
                    </ResponsiveContainer>
                    <div className="flex justify-center gap-6 mt-4">
                       <div className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-500"><div className="w-3 h-3 bg-slate-700 rounded-full"></div> Total Cost</div>
                       <div className="flex items-center gap-2 text-[10px] font-black uppercase text-blue-500"><div className="w-3 h-3 bg-blue-600 rounded-full"></div> Audited Cost</div>
                    </div>
                 </div>
               </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRE-AUDIT: PREVENTION */}
      <section id="pre-audit" className="py-32 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <FadeIn direction="right">
                <div className="p-16 glass rounded-[3rem] border border-white/5 relative group overflow-hidden">
                   <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-110 transition-transform"><ShieldCheck size={250} /></div>
                   <div className="text-xs font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Point 06</div>
                   <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-8 leading-none">Pre-Audit <br/> Evolution.</h3>
                   <p className="text-slate-400 font-medium leading-relaxed mb-10">
                      Prevent cash leakage before payment occurs. Deviations are disputed proactively and resolved upstream, improving supplier discipline.
                   </p>
                   <ul className="space-y-4">
                      {["Dispute resolution upstream", "Reduced admin workload", "Prevents cash outflow leakage"].map(li => (
                        <li key={li} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-300">
                           <div className="w-2 h-2 rounded-full bg-blue-600"></div> {li}
                        </li>
                      ))}
                   </ul>
                </div>
             </FadeIn>
             <FadeIn direction="left">
                <div className="text-left">
                  <h3 className="text-5xl font-black text-white uppercase tracking-tighter mb-8 leading-tight">Proactive <br/> Discipline.</h3>
                  <p className="text-lg text-slate-500 leading-relaxed font-medium">
                    Pre-audit integration ensures that error-riddled invoices never reach your finance books, enforcing contract integrity at the point of origin.
                  </p>
                </div>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* 7. CLEARING CENTER: END-TO-END */}
      <section id="clearing" className="py-32 bg-[#020617] relative">
        <div className="container mx-auto px-6">
           <FadeIn>
              <div className="text-center mb-24 max-w-4xl mx-auto">
                 <div className="text-xs font-black text-blue-500 uppercase tracking-[0.4em] mb-4">Point 07</div>
                 <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-none mb-10">The Clearing <br/> Center.</h2>
                 <p className="text-xl text-slate-400 font-medium">Full-service lifecycle solution from rate negotiation to payment execution.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                 {[
                   { label: "Procurement", icon: <Briefcase /> },
                   { label: "Rate Mgmt", icon: <Scale /> },
                   { label: "Allocation", icon: <Workflow /> },
                   { label: "Freight Audit", icon: <FileText /> },
                   { label: "Validation", icon: <Target /> },
                   { label: "Payment", icon: <Lock /> },
                   { label: "Settlement", icon: <Anchor /> }
                 ].map((item, i) => (
                   <div key={i} className="p-6 glass rounded-2xl border border-white/5 text-center flex flex-col items-center gap-4 hover:bg-blue-600 transition-all cursor-default group">
                      <div className="text-slate-500 group-hover:text-white transition-colors">{item.icon}</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-white">{item.label}</div>
                   </div>
                 ))}
              </div>
           </FadeIn>
        </div>
      </section>

      {/* 8. BOTTOM LINE: SCALABLE CONTROL */}
      <section className="py-40 bg-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
           <FadeIn>
              <div className="text-xs font-black text-blue-500 uppercase tracking-[0.4em] mb-8">Point 08: The Bottom Line</div>
              <h3 className="text-4xl md:text-[7rem] font-black text-white tracking-tighter uppercase leading-[0.8] mb-12">
                 Systematic <br/> Enforcement.
              </h3>
              <div className="max-w-4xl mx-auto p-16 glass rounded-[4rem] relative overflow-hidden border border-white/5">
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-transparent"></div>
                 <p className="text-2xl md:text-4xl text-slate-300 font-medium leading-tight">
                   "This is not cost reduction through negotiation alone. <br/>
                   It is systematic enforcement of the agreements already in place."
                 </p>
              </div>
           </FadeIn>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 bg-[#020617] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-sm font-black text-blue-500 uppercase tracking-[0.4em] mb-12">Next Maturity Step</h2>
              <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-12 uppercase">
                Secure your <br/> Ocean Capital.
              </h3>
              <div className="grid sm:grid-cols-2 gap-12">
                <div className="space-y-6">
                   <div className="text-white font-black text-2xl tracking-tighter uppercase">Daniel Martin</div>
                   <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest italic">Austria / DACH</div>
                   <div className="space-y-3 text-sm text-slate-400 font-medium">
                      <a href="mailto:daniel@martin-sorbo.com" className="flex items-center gap-3 hover:text-white transition-colors"><Mail className="w-4 h-4" /> daniel@martin-sorbo.com</a>
                      <a href="tel:+436764117351" className="flex items-center gap-3 hover:text-white transition-colors"><Phone className="w-4 h-4" /> +43 676 411 7351</a>
                   </div>
                </div>
                <div className="space-y-6">
                   <div className="text-white font-black text-2xl tracking-tighter uppercase">Thomas Sorbo</div>
                   <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest italic">Norway / Nordic</div>
                   <div className="space-y-3 text-sm text-slate-400 font-medium">
                      <a href="mailto:thomas@martin-sorbo.com" className="flex items-center gap-3 hover:text-white transition-colors"><Mail className="w-4 h-4" /> thomas@martin-sorbo.com</a>
                      <a href="tel:+4748361190" className="flex items-center gap-3 hover:text-white transition-colors"><Phone className="w-4 h-4" /> +47 483 61 190</a>
                   </div>
                </div>
              </div>
            </div>
            <div className="glass p-12 rounded-[3rem] border border-white/10 shadow-2xl">
               <h4 className="text-2xl font-black text-white mb-8 uppercase tracking-tighter">Request Audit Inquiry</h4>
               <form className="space-y-8">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Full Name</label>
                       <input type="text" className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white focus:border-blue-600 outline-none transition-all placeholder:text-slate-800" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Company</label>
                       <input type="text" className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white focus:border-blue-600 outline-none transition-all placeholder:text-slate-800" placeholder="Organization" />
                    </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Annual Ocean Volume</label>
                     <select className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white focus:border-blue-600 outline-none appearance-none cursor-pointer">
                        <option value="<500" className="bg-slate-950">&lt; 500 Invoices</option>
                        <option value="500-2k" className="bg-slate-950">500 – 2,000 Invoices</option>
                        <option value="2k-10k" className="bg-slate-950">2,000 – 10,000 Invoices</option>
                        <option value=">10k" className="bg-slate-950">10,000+ Invoices</option>
                     </select>
                  </div>
                  <button className="w-full py-5 bg-blue-600 text-white rounded font-black uppercase tracking-widest shadow-xl shadow-blue-600/30 hover:bg-blue-500 transition-all active:scale-95">Start Assessment</button>
               </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 bg-slate-950 border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white text-slate-950 rounded flex items-center justify-center font-black text-sm">MS</div>
              <span className="font-bold tracking-tighter text-lg uppercase text-white">Martin & Sorbo</span>
            </div>
            <div className="flex gap-12">
              <a href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 hover:text-white transition-colors">Impressum</a>
            </div>
            <p className="text-[10px] font-bold text-slate-800 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Martin & Sorbo Intelligence.
            </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
