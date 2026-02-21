/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Scale, 
  Cpu, 
  PenTool, 
  Users, 
  Globe, 
  ArrowRight, 
  Menu, 
  X, 
  ChevronRight,
  FileText,
  Shield,
  Zap
} from 'lucide-react';
import { BYLAWS_DATA } from './constants';

const Navbar = ({ onOpenForm }: { onOpenForm: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 border-b border-black/5 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo removed as requested */}
        <div className="w-10 h-10 md:hidden" /> 

        <div className="hidden md:flex flex-1 justify-center items-center gap-10">
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="nav-link !text-[13px] !font-medium">Hakkımızda</a>
          <a href="#activities" onClick={(e) => scrollToSection(e, 'activities')} className="nav-link !text-[13px] !font-medium">Faaliyetler</a>
          <a href="#membership" onClick={(e) => scrollToSection(e, 'membership')} className="nav-link !text-[13px] !font-medium">Üyelik</a>
          <a href="#bylaws" onClick={(e) => scrollToSection(e, 'bylaws')} className="nav-link !text-[13px] !font-medium">Tüzük</a>
        </div>

        <div className="flex items-center">
          <button 
            onClick={onOpenForm}
            className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors"
          >
            Katılın
          </button>
        </div>

        <button 
          className="md:hidden p-2 ml-4"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-black/5 p-6 flex flex-col gap-6 md:hidden shadow-xl"
          >
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-lg font-medium">Hakkımızda</a>
            <a href="#activities" onClick={(e) => scrollToSection(e, 'activities')} className="text-lg font-medium">Faaliyetler</a>
            <a href="#membership" onClick={(e) => scrollToSection(e, 'membership')} className="text-lg font-medium">Üyelik</a>
            <a href="#bylaws" onClick={(e) => scrollToSection(e, 'bylaws')} className="text-lg font-medium">Tüzük</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onOpenForm }: { onOpenForm: () => void }) => {
  const scrollToBylaws = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('bylaws')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-blue-100/50 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 md:w-96 md:h-96 bg-emerald-100/50 rounded-full blur-3xl -z-10 animate-pulse" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl"
      >
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif leading-[1] md:leading-[0.9] mb-6 md:mb-8 tracking-tighter">
          Hukuk <br />
          <span className="italic text-zinc-400">Teknolojileri</span> <br />
          Derneği
        </h1>
        <p className="text-lg md:text-2xl text-zinc-600 max-w-2xl mx-auto mb-10 md:mb-16 font-light leading-relaxed">
          Hukuk hizmetlerini teknolojiyle dönüştürüyor, tasarımı adaletin kalbine yerleştiriyoruz.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center mt-20">
          <button 
            onClick={onOpenForm}
            className="bg-black text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-bold hover:scale-105 transition-transform flex items-center justify-center gap-2 group"
          >
            Bize Katılın <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a 
            href="#bylaws" 
            onClick={scrollToBylaws}
            className="bg-white border border-black/10 px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-bold hover:bg-zinc-50 transition-colors text-center"
          >
            Tüzüğü İncele
          </a>
        </div>
      </motion.div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="p-8 border border-black/5 rounded-3xl hover:border-black/20 transition-all group bg-white"
  >
    <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
      <Icon className="w-7 h-7" />
    </div>
    <h3 className="text-2xl font-serif mb-4">{title}</h3>
    <p className="text-zinc-500 leading-relaxed">{description}</p>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="section-padding bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl mb-8">Vizyonumuz & <br /><span className="italic text-zinc-400">Misyonumuz</span></h2>
            <p className="text-xl text-zinc-600 mb-10 leading-relaxed">
              Türkiye'de LegalTech ve LegalDesign ekosistemini inşa etmek için yola çıktık. 
              Hukukçular, tasarımcılar ve teknoloji uzmanlarını bir araya getirerek adalete erişimi kolaylaştırıyoruz.
            </p>
            <div className="space-y-6">
              {[
                { title: "LegalTech", desc: "Yapay zeka ve otomasyonun hukuk pratiğine entegrasyonu.", icon: Cpu },
                { title: "LegalDesign", desc: "Hukuki süreçlerin kullanıcı odaklı tasarımı.", icon: PenTool },
                { title: "Ekosistem", desc: "Disiplinlerarası bir topluluk ve ağ yapısı.", icon: Users },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1"><item.icon className="w-6 h-6 text-black" /></div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-zinc-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-zinc-200 rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src="https://picsum.photos/seed/legaltech/800/800" 
                alt="LegalTech" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 p-8 bg-black text-white rounded-3xl hidden md:block max-w-xs">
              <p className="text-lg font-serif italic">"Hukuk artık sadece bir metin değil, bir deneyimdir."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Activities = () => {
  return (
    <section id="activities" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl mb-6">Neler Yapıyoruz?</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">
            Hukuk ve teknolojinin kesişim noktasında somut değerler üretiyoruz.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Zap} 
            title="AR-GE & İnovasyon" 
            description="Yapay zeka ve blokzincir tabanlı hukuki çözümler geliştiriyoruz." 
            delay={0.1}
          />
          <FeatureCard 
            icon={Globe} 
            title="Uluslararası Ağ" 
            description="ELTA ve Stanford Legal Design Lab gibi küresel yapılarla iş birliği yapıyoruz." 
            delay={0.2}
          />
          <FeatureCard 
            icon={FileText} 
            title="Eğitim & Sertifika" 
            description="Dijital avukatlık ve hukuk tasarımı üzerine uzmanlık programları sunuyoruz." 
            delay={0.3}
          />
          <FeatureCard 
            icon={Shield} 
            title="Etik & Standartlar" 
            description="Hukukta yapay zeka kullanımı için etik rehberler hazırlıyoruz." 
            delay={0.4}
          />
          <FeatureCard 
            icon={Users} 
            title="Mentörlük" 
            description="LegalTech girişimlerine hızlandırma ve ağ desteği sağlıyoruz." 
            delay={0.5}
          />
          <FeatureCard 
            icon={PenTool} 
            title="Tasarım Atölyeleri" 
            description="Hukuki belgeleri kullanıcı dostu hale getiren workshoplar düzenliyoruz." 
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

const BylawsSection = () => {
  const [activeArticle, setActiveArticle] = useState(0);

  const handleDownload = () => {
    window.location.href = '/api/download-bylaws';
  };

  return (
    <section id="bylaws" className="section-padding bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-20 gap-8">
          <div>
            <span className="text-zinc-500 uppercase tracking-widest text-xs font-bold mb-4 block">Resmi Belgeler</span>
            <h2 className="text-4xl md:text-7xl">Dernek <br /><span className="italic text-zinc-600">Tüzüğü</span></h2>
          </div>
          <button 
            onClick={handleDownload}
            className="w-full md:w-auto px-8 py-4 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
          >
            Tam Metni İndir (PDF) <FileText className="w-5 h-5" />
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Mobile Tabs - Horizontal Scroll */}
          <div className="lg:hidden flex overflow-x-auto pb-4 gap-2 no-scrollbar">
            {BYLAWS_DATA.articles.map((article, index) => (
              <button
                key={article.id}
                onClick={() => setActiveArticle(index)}
                className={`whitespace-nowrap px-4 py-2 text-sm rounded-full border transition-all ${activeArticle === index ? 'bg-white text-black border-white' : 'border-white/20 text-white/60'}`}
              >
                Madde {article.id}
              </button>
            ))}
          </div>

          {/* Desktop Sidebar */}
          <div className="hidden lg:block lg:col-span-4 space-y-2">
            {BYLAWS_DATA.articles.map((article, index) => (
              <button
                key={article.id}
                onClick={() => setActiveArticle(index)}
                className={`w-full text-left p-4 rounded-xl transition-all flex items-center justify-between group ${activeArticle === index ? 'bg-white/10 border-white/20' : 'hover:bg-white/5 border-transparent'} border`}
              >
                <span className="font-medium text-sm">Madde {article.id}: {article.title}</span>
                <ChevronRight className={`w-4 h-4 transition-transform ${activeArticle === index ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeArticle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white/5 p-6 md:p-10 rounded-3xl border border-white/10 min-h-[300px] md:min-h-[400px]"
              >
                <h3 className="text-2xl md:text-3xl font-serif mb-6 md:mb-8 text-zinc-300">
                  {BYLAWS_DATA.articles[activeArticle].title}
                </h3>
                <div className="text-lg md:text-xl text-zinc-400 leading-relaxed space-y-4">
                  {Array.isArray(BYLAWS_DATA.articles[activeArticle].content) ? (
                    <ul className="list-disc pl-6 space-y-4">
                      {(BYLAWS_DATA.articles[activeArticle].content as string[]).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{BYLAWS_DATA.articles[activeArticle].content}</p>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const Founders = () => {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl mb-6">Kurucu <span className="italic text-zinc-400">Ekibimiz</span></h2>
          <p className="text-zinc-500">Vizyonumuzu hayata geçiren disiplinlerarası ekip.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {BYLAWS_DATA.founders.map((founder, i) => (
            <div key={i} className="text-center group">
              <div className="aspect-square bg-zinc-100 rounded-2xl mb-4 overflow-hidden grayscale group-hover:grayscale-0 transition-all">
                <img 
                  src={`https://picsum.photos/seed/${founder.name}/300/300`} 
                  alt={founder.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="font-bold text-sm">
                {founder.role === 'Başkan' || founder.role === 'Başkan Yardımcısı' || founder.role === 'Sayman' ? founder.name : ''}
              </h4>
              <p className="text-xs text-zinc-400 uppercase tracking-tighter mt-1">{founder.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('Başarıyla kaydoldunuz!');
        setEmail('');
      }
    } catch (err) {
      setStatus('Bir hata oluştu.');
    }
  };

  return (
    <footer className="bg-zinc-50 border-t border-black/5 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <p className="text-zinc-500 max-w-sm leading-relaxed">
            Hukuk Teknolojileri Derneği, Türkiye'de hukuk ve teknolojinin geleceğini şekillendirmek için çalışan bağımsız bir sivil toplum kuruluşudur.
          </p>
        </div>
        <div>
          <h5 className="font-bold mb-6 uppercase text-xs tracking-widest">Bağlantılar</h5>
          <ul className="space-y-4 text-zinc-500">
            <li><a href="#about" className="hover:text-black transition-colors">Hakkımızda</a></li>
            <li><a href="#activities" className="hover:text-black transition-colors">Etkinlikler</a></li>
            <li><a href="#membership" className="hover:text-black transition-colors">Üyelik</a></li>
            <li><a href="#bylaws" className="hover:text-black transition-colors">Tüzük</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-6 uppercase text-xs tracking-widest">Bülten</h5>
          <p className="text-zinc-500 text-sm mb-4">Gelişmelerden haberdar olun.</p>
          <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
            <div className="flex gap-2">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-posta" 
                required
                className="bg-white border border-black/10 rounded-lg px-4 py-2 text-sm flex-1 outline-none focus:border-black transition-colors"
              />
              <button type="submit" className="bg-black text-white px-4 py-2 rounded-lg text-sm font-bold">Kayıt</button>
            </div>
            {status && <p className="text-[10px] text-zinc-400 mt-1">{status}</p>}
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-400 text-xs">
        <p>© 2026 Hukuk Teknolojileri Derneği. Tüm hakları saklıdır.</p>
        <div className="flex gap-6">
          <a href="#" onClick={(e) => { e.preventDefault(); alert('Gizlilik Politikası yakında eklenecektir.'); }} className="hover:text-black">Gizlilik Politikası</a>
          <a href="#" onClick={(e) => { e.preventDefault(); alert('Kullanım Şartları yakında eklenecektir.'); }} className="hover:text-black">Kullanım Şartları</a>
        </div>
      </div>
    </footer>
  );
};

const Membership = ({ onOpenForm }: { onOpenForm: () => void }) => {
  const tiers = [
    { type: "Asıl Üye", price: "6.000 TL", entry: "500 TL", features: ["Oy kullanma hakkı", "Organlara seçilme", "Özel etkinlikler"] },
    { type: "Öğrenci Üye", price: "400 TL", entry: "Yok", features: ["Eğitim materyalleri", "Staj imkanları", "Etkinlik katılımı"] },
    { type: "Kurumsal Üye", price: "18.000 TL", entry: "2.000 TL", features: ["Logo gösterimi", "Kurumsal temsil", "Sektörel raporlar"] },
  ];

  return (
    <section id="membership" className="section-padding bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-4">Üyelik</h2>
          <p className="text-zinc-500">Ekosistemimize dahil olun, geleceği birlikte tasarlayalım.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm flex flex-col"
            >
              <h4 className="text-xl font-bold mb-2">{tier.type}</h4>
              <div className="mb-6">
                <span className="text-3xl font-serif font-bold">{tier.price}</span>
                <span className="text-zinc-400 text-sm ml-2">/ Yıl</span>
              </div>
              <div className="text-sm text-zinc-500 mb-6">Giriş Aidatı: {tier.entry}</div>
              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-zinc-600">
                    <div className="w-1.5 h-1.5 bg-black rounded-full" /> {feat}
                  </li>
                ))}
              </ul>
              <button 
                onClick={onOpenForm}
                className="w-full py-4 rounded-xl border border-black font-bold hover:bg-black hover:text-white transition-all"
              >
                Başvur
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MembershipForm = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', profession: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/membership-apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('Başvurunuz başarıyla alındı!');
        setTimeout(() => {
          onClose();
          setStatus('');
          setFormData({ name: '', email: '', phone: '', profession: '', message: '' });
        }, 2000);
      }
    } catch (err) {
      setStatus('Bir hata oluştu.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative bg-white w-full max-w-lg rounded-3xl p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
      >
        <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-zinc-100 rounded-full transition-colors">
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-3xl font-serif mb-2">Üyelik Ön Başvuru</h2>
        <p className="text-zinc-500 mb-8">Lütfen aşağıdaki bilgileri eksiksiz doldurunuz.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-2">Ad Soyad</label>
            <input 
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-zinc-50 border border-black/5 rounded-xl px-4 py-3 outline-none focus:border-black transition-colors"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2">E-posta</label>
              <input 
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-zinc-50 border border-black/5 rounded-xl px-4 py-3 outline-none focus:border-black transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2">Telefon</label>
              <input 
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-zinc-50 border border-black/5 rounded-xl px-4 py-3 outline-none focus:border-black transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-2">Meslek / Uzmanlık</label>
            <input 
              required
              value={formData.profession}
              onChange={(e) => setFormData({...formData, profession: e.target.value})}
              className="w-full bg-zinc-50 border border-black/5 rounded-xl px-4 py-3 outline-none focus:border-black transition-colors"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest mb-2">Mesajınız (Opsiyonel)</label>
            <textarea 
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-zinc-50 border border-black/5 rounded-xl px-4 py-3 outline-none focus:border-black transition-colors resize-none"
            />
          </div>
          <button 
            disabled={isSubmitting}
            className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-zinc-800 transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Gönderiliyor...' : 'Başvuruyu Tamamla'}
          </button>
          {status && <p className="text-center text-sm font-medium mt-4">{status}</p>}
        </form>
      </motion.div>
    </div>
  );
};

export default function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="selection:bg-black selection:text-white">
      <Navbar onOpenForm={() => setIsFormOpen(true)} />
      <Hero onOpenForm={() => setIsFormOpen(true)} />
      <About />
      <Activities />
      <Membership onOpenForm={() => setIsFormOpen(true)} />
      <BylawsSection />
      <Founders />
      <Footer />
      <AnimatePresence>
        {isFormOpen && <MembershipForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}
