
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
  Search,
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
  ExternalLink,
  Linkedin,
  Box // Added Box icon
} from 'lucide-react';
import { 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar
} from 'recharts';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';

const chartData = [
  { name: 'Q1', spend: 4000, recovered: 120 },
  { name: 'Q2', spend: 4200, recovered: 135 },
  { name: 'Q3', spend: 3800, recovered: 115 },
  { name: 'Q4', spend: 5100, recovered: 180 },
  { name: 'Q1 (New)', spend: 4800, recovered: 155 },
];

// Define FadeInProps interface to fix children and key property errors
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

// Using React.FC to ensure standard React prop handling for children and key
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

interface SectionHeaderProps {
  id?: string;
  title: string;
  subtitle: string;
  light?: boolean;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ id, title, subtitle, light = false }) => (
  <FadeIn direction="up">
    <div id={id} className="mb-16">
      <div className={`text-xs font-black uppercase tracking-[0.4em] mb-4 ${light ? 'text-blue-400' : 'text-blue-600'}`}>
        {subtitle}
      </div>
      <h2 className={`text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] uppercase ${light ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>
    </div>
  </FadeIn>
);

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-[70]" style={{ scaleX }} />

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6 ${scrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-black text-white text-xl transform transition-transform group-hover:rotate-3">MS</div>
            <span className="font-bold tracking-tighter text-xl hidden sm:block uppercase text-white">Martin & Sorbo</span>
          </div>
          <div className="hidden lg:flex items-center gap-10">
            {['Problem', 'Post-Audit', 'Validation', 'Gain-Share', 'Clearing'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">
                {item}
              </a>
            ))}
            <button className="px-6 py-2.5 bg-white text-slate-950 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105">
              Contact Experts
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542704792-e30dac463c90?auto=format&fit=crop&q=80&w=2400" 
            alt="Maritime Engineering" 
            className="w-full h-full object-cover grayscale opacity-40 brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-8">
              <Compass className="w-3 h-3" /> State-of-the-Art Invoicing Intelligence
            </div>
            <h1 className="text-6xl md:text-[9rem] font-black text-white tracking-tighter leading-[0.8] uppercase mb-8">
              ENFORCING <br/> <span className="text-blue-600">CONTRACT</span> <br/> INTEGRITY.
            </h1>
            <p className="text-xl md:text-3xl text-slate-400 max-w-3xl font-medium leading-tight mb-12">
              Systematic ocean freight invoice auditing. <br/>
              Recover lost margin and prevent future cash leakage with proprietary AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 items-center">
              <button className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest shadow-2xl shadow-blue-600/20 hover:bg-blue-500 transition-all flex items-center gap-3">
                Recover Lost Capital <ArrowRight className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-8 pl-4 border-l border-white/10 h-16">
                 <div>
                   <div className="text-white font-black text-3xl">1–3%</div>
                   <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Average Recovery</div>
                 </div>
                 <div>
                   <div className="text-white font-black text-3xl">0%</div>
                   <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Risk Exposure</div>
                 </div>
              </div>
            </div>
          </FadeIn>
        </div>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20 flex flex-col items-center gap-4"
        >
          <span className="text-[8px] font-black uppercase tracking-[0.5em]">Scroll to Explore</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </section>

      {/* 1. THE PROBLEM WE SOLVE */}
      <section id="problem" className="py-32 bg-slate-950 blueprint-grid relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="right">
              <SectionHeader subtitle="The Challenge" title="Invoicing is Opaque & Error-Prone." light />
              <p className="text-xl text-slate-400 font-medium leading-relaxed mb-8">
                Inconsistent interpretation of Incoterms, changing surcharges, and manual carrier processes result in normalized overbilling.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Activity className="text-red-500" />, label: "Deviations", value: "Fragmented Data" },
                  { icon: <Database className="text-blue-500" />, label: "Source", value: "Surcharge Flux" },
                  { icon: <Container className="text-slate-400" />, label: "Manual", value: "Human Error" },
                  { icon: <Scale className="text-indigo-500" />, label: "Terms", value: "Incoterm Bias" },
                ].map((item, i) => (
                  <div key={i} className="p-6 glass rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                    <div className="mb-4">{item.icon}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">{item.label}</div>
                    <div className="text-white font-bold">{item.value}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="left">
               <div className="relative group">
                  <div className="absolute -inset-10 bg-blue-600/5 blur-[100px] rounded-full group-hover:bg-blue-600/10 transition-all"></div>
                  <div className="p-8 glass rounded-[3rem] border border-white/10 glow-red">
                    <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                       <Radar className="w-4 h-4 text-red-500" />
                       <span className="mono text-[10px] uppercase font-bold text-slate-500">Anomaly Detection: Ocean Freight</span>
                    </div>
                    <div className="space-y-4">
                       {Array.from({ length: 4 }).map((_, i) => (
                         <div key={i} className="flex items-center justify-between mono text-[10px] p-3 bg-white/5 rounded-lg border border-white/5">
                            <span className="text-slate-500">REF_{88219 + i}X</span>
                            <span className="text-blue-400 font-bold">CARRIER_BILL_MATCHING...</span>
                            <span className={`font-black ${i === 2 ? 'text-red-500' : 'text-green-500'}`}>{i === 2 ? 'FAILED' : 'OK'}</span>
                         </div>
                       ))}
                       <div className="mt-8 p-6 bg-red-500/10 border border-red-500/20 rounded-2xl">
                          <div className="flex items-center gap-4">
                             <AlertCircle className="w-6 h-6 text-red-500" />
                             <div>
                                <div className="text-white font-black text-xs uppercase">Deviation Identified</div>
                                <div className="text-red-400 text-[10px] uppercase font-bold">Unagreed Bunker Surcharge Applied</div>
                             </div>
                          </div>
                       </div>
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
          <SectionHeader subtitle="Step 01" title="The Post-Audit Engine." light />
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn direction="right">
              <p className="text-xl text-slate-400 font-medium leading-relaxed mb-10">
                Our starting point. We utilize proprietary AI trained on billions of data points to extract and normalize invoice structures from all major carriers and forwarders.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Carrier-Specific Layouts", desc: "Native intelligence for Maersk, MSC, Hapag, and more." },
                  { title: "Forwarder Billing Logic", desc: "Normalized interpretation of complex logistics providers." },
                  { title: "Line-Item Semantics", desc: "Deep extraction of operational data points across trade lanes." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-500 flex-shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white uppercase tracking-tight mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="left">
               <div className="relative p-12 glass rounded-[3rem] border border-white/10 overflow-hidden">
                  <div className="scanner-line"></div>
                  <div className="absolute top-0 right-0 p-12 opacity-5"><Cpu size={200} /></div>
                  <div className="space-y-4 relative z-10">
                    <div className="h-4 w-2/3 bg-white/10 rounded-full animate-pulse"></div>
                    <div className="h-4 w-full bg-white/5 rounded-full"></div>
                    <div className="h-4 w-3/4 bg-white/5 rounded-full"></div>
                    <div className="pt-8 grid grid-cols-2 gap-4">
                      <div className="p-4 bg-blue-600/10 border border-blue-600/20 rounded-xl text-center">
                        <div className="text-blue-500 text-xl font-black">95%+</div>
                        <div className="text-[8px] font-black uppercase text-slate-500 tracking-widest">Extraction Precision</div>
                      </div>
                      <div className="p-4 bg-indigo-600/10 border border-indigo-600/20 rounded-xl text-center">
                        <div className="text-indigo-400 text-xl font-black">200+</div>
                        <div className="text-[8px] font-black uppercase text-slate-500 tracking-widest">Carrier Formats</div>
                      </div>
                    </div>
                  </div>
               </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. AUTOMATED VALIDATION */}
      <section id="validation" className="py-32 bg-slate-950 ship-wake relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24 max-w-4xl mx-auto">
             <FadeIn>
               <h2 className="text-sm font-black text-blue-500 uppercase tracking-[0.4em] mb-6">Validation Intelligence</h2>
               <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-8">Systematic Contract <br/> Matching.</h3>
               <p className="text-xl text-slate-400 font-medium">Invoices are matched against contracted base rates, agreed surcharges, routing agreements, and exchange rate mechanisms.</p>
             </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Target className="text-blue-500" />, label: "Base Rates", desc: "Contracted terms enforced against actual billing." },
              { icon: <Activity className="text-indigo-500" />, label: "Surcharges", desc: "Validity period and trade lane specific check." },
              { icon: <Globe className="text-emerald-500" />, label: "Exchange Rates", desc: "Non-contractual markups identified instantly." },
              { icon: <Layers className="text-slate-400" />, label: "Incoterms", desc: "Ensuring liability matches the billing entity." },
              { icon: <CheckCircle2 className="text-blue-400" />, label: "Duplicates", desc: "Identification of redundant billing cycles." },
              { icon: <Box className="text-amber-500" />, label: "Equipment", desc: "Weight bracket and equipment type validation." },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="p-10 glass rounded-[2.5rem] group hover:bg-white/[0.05] transition-all border border-white/5">
                  <div className="mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="text-xl font-black text-white mb-3 uppercase tracking-tighter">{item.label}</h4>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CLAIMS DOCUMENTATION & FINANCIAL IMPACT */}
      <section className="py-32 bg-[#020617]">
        <div className="container mx-auto px-6">
          <div className="glass p-12 md:p-20 rounded-[4rem] relative overflow-hidden border border-white/5">
             <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
                <TrendingUp size={400} />
             </div>
             <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                <div>
                   <SectionHeader subtitle="Impact" title="Recovered Cash Flow." light />
                   <p className="text-xl text-slate-400 font-medium mb-12">
                     Every deviation is logged and categorized. The system produces a structured audit report used directly to substantiate claims against suppliers.
                   </p>
                   <div className="flex gap-10">
                      <div className="p-8 bg-blue-600 rounded-3xl text-white shadow-2xl shadow-blue-600/30">
                         <div className="text-5xl font-black">1–3%</div>
                         <div className="text-[10px] font-black uppercase tracking-widest mt-2">Refund Yield</div>
                      </div>
                      <div className="flex flex-col justify-center">
                         <div className="text-white font-black text-xl mb-1">Measurable & Defensible.</div>
                         <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest leading-none">Not theoretical. Real Cash.</div>
                      </div>
                   </div>
                </div>
                <div className="h-[400px]">
                   <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData}>
                        <defs>
                          <linearGradient id="colorRec" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 10, fill: '#475569'}} />
                        <YAxis hide />
                        <Tooltip contentStyle={{ background: '#0f172a', border: 'none', borderRadius: '12px', color: '#fff' }} />
                        <Area type="monotone" dataKey="spend" stroke="#334155" strokeWidth={2} fill="transparent" />
                        <Area type="monotone" dataKey="recovered" stroke="#2563eb" strokeWidth={4} fillOpacity={1} fill="url(#colorRec)" />
                      </AreaChart>
                   </ResponsiveContainer>
                   <div className="flex justify-center gap-10 mt-6">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                        <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Total Spend</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        <span className="text-[10px] font-black uppercase text-blue-500 tracking-widest">Recovered Capital</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. COMMERCIAL MODEL: GAIN SHARE */}
      <section id="gain-share" className="py-32 bg-slate-950 relative border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-white text-slate-950 rounded-full font-black text-xs uppercase tracking-[0.4em] mb-12 shadow-2xl">
                Aligned Incentives
              </div>
              <h3 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none mb-12">Outcome <br/> <span className="text-blue-600">Based.</span></h3>
              <p className="text-xl text-slate-400 font-medium mb-16 leading-relaxed">
                Our post-audit offering is strictly risk-free. No upfront fees, no fixed costs. We are paid solely based on what we recover.
              </p>
              <div className="grid sm:grid-cols-3 gap-6">
                 {["No Refund – No Payment", "No Startup Costs", "Full Alignment"].map(item => (
                   <div key={item} className="p-6 glass rounded-2xl border border-white/5 flex items-center justify-center gap-3 group hover:border-blue-600/30 transition-all">
                      <CheckCircle2 className="w-5 h-5 text-blue-500" />
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-300">{item}</span>
                   </div>
                 ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 6 & 7. PRE-AUDIT & CLEARING CENTER */}
      <section id="clearing" className="py-32 bg-[#020617] overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10">
             <FadeIn direction="right">
                <div className="p-16 glass rounded-[3rem] h-full relative group border border-white/5 hover:bg-white/[0.04] transition-all">
                   <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform"><ShieldCheck size={200} /></div>
                   <div className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-6 italic">Preventative Step</div>
                   <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-8 leading-none">Pre-Audit <br/> Evolution.</h3>
                   <p className="text-slate-400 mb-8 font-medium leading-relaxed">
                     Prevent cash leakage before payment occurs. Deviations are disputed proactively and resolved upstream with carriers.
                   </p>
                   <ul className="space-y-4">
                      {["Dispute Upstream", "Admin Load Reduction", "Instant Margin Protection"].map(li => (
                        <li key={li} className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-300">
                           <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div> {li}
                        </li>
                      ))}
                   </ul>
                </div>
             </FadeIn>
             <FadeIn direction="left" delay={0.2}>
                <div className="p-16 bg-blue-600 rounded-[3rem] h-full relative group overflow-hidden text-white shadow-2xl">
                   <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:rotate-12 transition-transform"><Anchor size={200} /></div>
                   <div className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-900 mb-6 italic">Full Lifecycle</div>
                   <h3 className="text-4xl font-black text-white uppercase tracking-tighter mb-8 leading-none">The Clearing <br/> Center.</h3>
                   <p className="text-blue-100 mb-8 font-medium leading-relaxed">
                     Our most comprehensive offering. A single controlled process from negotiated rate to paid invoice.
                   </p>
                   <div className="grid grid-cols-2 gap-3">
                      {["Tendering", "Rate Mgmt", "Pre-Audit", "Validation", "Payment", "Settlement"].map(li => (
                        <div key={li} className="px-4 py-2 bg-white/10 rounded-xl text-[8px] font-black uppercase tracking-widest border border-white/10 text-center">
                           {li}
                        </div>
                      ))}
                   </div>
                </div>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* 8. BOTTOM LINE */}
      <section className="py-40 bg-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
           <FadeIn>
              <h3 className="text-4xl md:text-[6rem] font-black text-white tracking-tighter uppercase leading-[0.8] mb-12">
                 The Systematic <br/> <span className="text-blue-600">Enforcer.</span>
              </h3>
              <div className="max-w-3xl mx-auto p-12 glass rounded-[3rem] relative border border-white/5">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-blue-600"></div>
                 <p className="text-2xl text-slate-300 font-medium leading-tight">
                   "This is not cost reduction through negotiation alone. <br/>
                   It is systematic enforcement of the agreements already in place."
                 </p>
              </div>
           </FadeIn>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32 bg-[#020617] relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-sm font-black text-blue-500 uppercase tracking-[0.4em] mb-8">Secure Your Capital</h2>
              <h3 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-12 uppercase">
                Let's Start <br/> The Audit.
              </h3>
              <div className="grid sm:grid-cols-2 gap-12">
                <div className="space-y-6 group">
                  <div className="text-white font-black text-2xl uppercase tracking-tighter group-hover:text-blue-500 transition-colors">Daniel Martin</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4 italic">International / Austria</div>
                  <div className="space-y-3 text-slate-400 text-sm font-medium">
                    <a href="mailto:daniel@martin-sorbo.com" className="flex items-center gap-3 hover:text-white transition-colors"><Mail className="w-4 h-4" /> daniel@martin-sorbo.com</a>
                    <a href="tel:+436764117351" className="flex items-center gap-3 hover:text-white transition-colors"><Phone className="w-4 h-4" /> +43 676 411 7351</a>
                  </div>
                </div>
                <div className="space-y-6 group">
                  <div className="text-white font-black text-2xl uppercase tracking-tighter group-hover:text-blue-500 transition-colors">Thomas Sorbo</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4 italic">Nordic / Norway</div>
                  <div className="space-y-3 text-slate-400 text-sm font-medium">
                    <a href="mailto:thomas@martin-sorbo.com" className="flex items-center gap-3 hover:text-white transition-colors"><Mail className="w-4 h-4" /> thomas@martin-sorbo.com</a>
                    <a href="tel:+4748361190" className="flex items-center gap-3 hover:text-white transition-colors"><Phone className="w-4 h-4" /> +47 483 61 190</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-12 rounded-[3rem] shadow-2xl relative border border-white/10">
               <h4 className="text-2xl font-black text-white mb-8 uppercase tracking-tighter">Audit Inquiry Form</h4>
               <form className="space-y-8">
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Contact Person</label>
                       <input type="text" className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white focus:border-blue-600 outline-none transition-all placeholder:text-slate-700" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Company</label>
                       <input type="text" className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white focus:border-blue-600 outline-none transition-all placeholder:text-slate-700" placeholder="Your organization" />
                    </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Annual Freight Spend</label>
                     <select className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white focus:border-blue-600 outline-none cursor-pointer appearance-none">
                        <option value="<1M" className="bg-slate-900">&lt; $1M USD</option>
                        <option value="1M-10M" className="bg-slate-900">$1M – $10M USD</option>
                        <option value="10M-50M" className="bg-slate-900">$10M – $50M USD</option>
                        <option value=">50M" className="bg-slate-900">$50M+ USD</option>
                     </select>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Message</label>
                     <textarea rows={3} className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-white focus:border-blue-600 outline-none transition-all resize-none placeholder:text-slate-700" placeholder="Project overview..."></textarea>
                  </div>
                  <button className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/30">
                    Submit Request
                  </button>
               </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 bg-slate-950 border-t border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white text-slate-950 rounded-lg flex items-center justify-center font-black text-lg">MS</div>
              <span className="font-bold tracking-tighter text-xl uppercase text-white">Martin & Sorbo</span>
            </div>
            
            <div className="flex gap-10">
              <a href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 hover:text-white transition-colors">Legal</a>
            </div>

            <p className="text-[10px] font-bold text-slate-800 uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Martin & Sorbo Intelligence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
