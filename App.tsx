/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Clock, 
  Info, 
  Gift, 
  CheckCircle, 
  Menu, 
  X, 
  Copy, 
  Check, 
  Mountain, 
  Church, 
  Home as HomeIcon,
  Heart,
  Car,
  Utensils,
  Bed,
  Trees,
  ArrowUp
} from 'lucide-react';

// --- Watercolor Icons ---

const WatercolorHeart = ({ className = "", size = 24 }: { className?: string, size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={`pointer-events-none ${className}`}>
    <motion.path
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.6 }}
      transition={{ duration: 1.5 }}
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      stroke="var(--color-rose)"
      strokeWidth="1.5"
      fill="var(--color-rose)"
      fillOpacity="0.1"
    />
  </svg>
);

const WatercolorClock = ({ className = "", size = 20 }: { className?: string, size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={`pointer-events-none ${className}`}>
    <motion.circle
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.6 }}
      transition={{ duration: 1.5 }}
      cx="12" cy="12" r="10"
      stroke="var(--color-sage)"
      strokeWidth="1.5"
      fill="none"
    />
    <motion.path
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      d="M12 6v6l4 2"
      stroke="var(--color-sage)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const WatercolorMapPin = ({ className = "", size = 20 }: { className?: string, size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={`pointer-events-none ${className}`}>
    <motion.path
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.6 }}
      transition={{ duration: 1.5 }}
      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
      stroke="var(--color-sage)"
      strokeWidth="1.5"
      fill="var(--color-sage)"
      fillOpacity="0.1"
    />
    <motion.circle
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: 0.8 }}
      cx="12" cy="10" r="3"
      fill="var(--color-sage)"
      fillOpacity="0.4"
    />
  </svg>
);

const WatercolorTrees = ({ className = "", size = 24 }: { className?: string, size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={`pointer-events-none ${className}`}>
    <motion.path
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.6 }}
      transition={{ duration: 1.5 }}
      d="M12 2v8M12 10l-4 4M12 10l4 4M12 14v8M12 22l-6-6M12 22l6-6"
      stroke="var(--color-sage)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <motion.circle cx="12" cy="8" r="6" fill="var(--color-sage)" fillOpacity="0.1" />
  </svg>
);

const WatercolorCar = ({ className = "", size = 24 }: { className?: string, size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={`pointer-events-none ${className}`}>
    <motion.path
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.6 }}
      transition={{ duration: 1.5 }}
      d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM5.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
      stroke="var(--color-powder)"
      strokeWidth="1.5"
    />
    <motion.path
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 2 }}
      d="M2 13h20l-1-4h-18l-1 4zM4 9l2-5h12l2 5"
      stroke="var(--color-powder)"
      strokeWidth="1.5"
      fill="var(--color-powder)"
      fillOpacity="0.1"
    />
  </svg>
);

const WatercolorGift = ({ className = "", size = 28 }: { className?: string, size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={`pointer-events-none ${className}`}>
    <motion.rect
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.6 }}
      transition={{ duration: 1.5 }}
      x="3" y="10" width="18" height="11"
      stroke="var(--color-rose)"
      strokeWidth="1.5"
      fill="var(--color-rose)"
      fillOpacity="0.05"
    />
    <motion.path
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      d="M12 21V7M3 10h18"
      stroke="var(--color-rose)"
      strokeWidth="1.5"
    />
    <motion.path
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1, delay: 1 }}
      d="M12 7c-3-3-6 0-6 3h12c0-3-3-3-6-3z"
      fill="var(--color-rose)"
      fillOpacity="0.2"
    />
  </svg>
);

const WatercolorBed = ({ className = "", size = 20 }: { className?: string, size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={`pointer-events-none ${className}`}>
    <motion.path
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.6 }}
      transition={{ duration: 1.5 }}
      d="M2 4v16M2 11h20M2 17h20M22 4v16"
      stroke="var(--color-sage)"
      strokeWidth="1.5"
    />
    <motion.path
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.2 }}
      transition={{ duration: 1, delay: 1 }}
      d="M2 11h10v6H2z"
      fill="var(--color-powder)"
    />
  </svg>
);

const WatercolorMountain = ({ className = "", size = 20 }: { className?: string, size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={`pointer-events-none ${className}`}>
    <motion.path
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.6 }}
      transition={{ duration: 1.5 }}
      d="M3 20l9-16 9 16H3z"
      stroke="var(--color-sage)"
      strokeWidth="1.5"
      fill="var(--color-sage)"
      fillOpacity="0.1"
    />
    <motion.path
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 1 }}
      d="M9 10l3 3 3-3"
      stroke="var(--color-powder)"
      strokeWidth="1.5"
    />
  </svg>
);

const WatercolorUtensils = ({ className = "", size = 20 }: { className?: string, size?: number }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={`pointer-events-none ${className}`}>
    <motion.path
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 0.6 }}
      transition={{ duration: 1.5 }}
      d="M6 2v7M3 2v3a3 3 0 0 0 6 0V2M18 20V2a3 3 0 0 0-3 3v12h3zM6 20v-3"
      stroke="var(--color-rose)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// --- Components ---

const FloralAccent = ({ className = "", type = 1 }: { className?: string, type?: number }) => (
  <svg viewBox="0 0 100 100" className={`w-12 h-12 md:w-16 md:h-16 pointer-events-none ${className}`}>
    {type === 1 ? (
      <>
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 2 }}
          d="M50 80 Q60 50 50 20 M50 50 Q80 40 90 60 M50 50 Q20 40 10 60"
          stroke="var(--color-sage)"
          strokeWidth="1.5"
          fill="none"
        />
        <motion.circle
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.3 }}
          transition={{ delay: 1, duration: 1 }}
          cx="50" cy="20" r="5" fill="var(--color-rose)"
        />
        <motion.circle
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.3 }}
          transition={{ delay: 1.2, duration: 1 }}
          cx="90" cy="60" r="4" fill="var(--color-lavender)"
        />
      </>
    ) : (
      <>
        <motion.path
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 2 }}
          d="M20 80 Q50 70 80 80 M50 80 L50 40 Q30 20 50 10 Q70 20 50 40"
          stroke="var(--color-sage)"
          strokeWidth="1.5"
          fill="none"
        />
        <motion.path
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.2 }}
          transition={{ delay: 1, duration: 1.5 }}
          d="M50 10 Q65 0 80 10 Q65 20 50 10"
          fill="var(--color-powder)"
        />
        <motion.path
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.2 }}
          transition={{ delay: 1.2, duration: 1.5 }}
          d="M50 10 Q35 0 20 10 Q35 20 50 10"
          fill="var(--color-rose)"
        />
      </>
    )}
  </svg>
);

const HatIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <radialGradient id="grad-hat" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="var(--color-rose)" stopOpacity="0.15" />
        <stop offset="100%" stopColor="var(--color-rose)" stopOpacity="0" />
      </radialGradient>
    </defs>
    <motion.circle cx="50" cy="60" r="40" fill="url(#grad-hat)" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} />
    <motion.path
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2 }}
      d="M10 70 Q50 60 90 70 L90 80 Q50 90 10 80 Z"
      stroke="var(--color-sage)"
      strokeWidth="0.8"
      fill="var(--color-sage)"
      fillOpacity="0.05"
    />
    <motion.path
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
      d="M30 70 L30 40 Q50 15 70 40 L70 70"
      stroke="var(--color-sage)"
      strokeWidth="0.8"
      fill="none"
    />
    <motion.path
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
      d="M30 60 L70 60 L75 68 L25 68 Z"
      fill="var(--color-rose)"
      fillOpacity="0.4"
    />
    <motion.circle cx="70" cy="60" r="5" fill="var(--color-lavender)" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 2 }} />
  </svg>
);

const GiftIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <radialGradient id="grad-gift" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="var(--color-lavender)" stopOpacity="0.2" />
        <stop offset="100%" stopColor="var(--color-lavender)" stopOpacity="0" />
      </radialGradient>
    </defs>
    <motion.circle cx="50" cy="60" r="40" fill="url(#grad-gift)" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} />
    <motion.rect
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2 }}
      x="20" y="40" width="60" height="50"
      stroke="var(--color-sage)"
      strokeWidth="0.8"
      fill="var(--color-sage)"
      fillOpacity="0.05"
    />
    <motion.path
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 0.5 }}
      d="M20 40 Q50 0 80 40"
      stroke="var(--color-rose)"
      strokeWidth="1"
      fill="none"
    />
    <motion.path
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 2, delay: 0.7 }}
      d="M50 40 L50 90 M20 65 L80 65"
      stroke="var(--color-lavender)"
      strokeWidth="1"
    />
    <motion.path
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
      d="M50 40 L40 30 Q50 20 60 30 Z"
      fill="var(--color-rose)"
      fillOpacity="0.3"
    />
  </svg>
);

const CarIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-sage/40 fill-sage/5">
    <motion.path
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 2 }}
      d="M10 70 L20 70 Q25 60 30 70 L70 70 Q75 60 80 70 L90 70 L90 50 L70 50 L60 30 L30 30 L20 50 L10 50 Z"
      stroke="currentColor"
      strokeWidth="0.5"
      fill="none"
    />
    <motion.circle cx="25" cy="70" r="5" stroke="currentColor" strokeWidth="0.5" fill="none" />
    <motion.circle cx="75" cy="70" r="5" stroke="currentColor" strokeWidth="0.5" fill="none" />
    <motion.path d="M35 35 L55 35 L65 50 L35 50 Z" fill="var(--color-powder)" opacity="0.2" />
  </svg>
);

const NatureIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full text-sage/40 fill-sage/5">
    <motion.path
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 2 }}
      d="M20 90 L50 20 L80 90 Z"
      stroke="currentColor"
      strokeWidth="0.5"
      fill="none"
    />
    <motion.circle
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1, delay: 1 }}
      cx="75" cy="25" r="10"
      fill="var(--color-rose)"
      opacity="0.2"
    />
    <motion.path
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.3 }}
      transition={{ duration: 2, delay: 0.5 }}
      d="M10 90 Q50 80 90 90"
      stroke="var(--color-sage)"
      strokeWidth="1"
      fill="none"
    />
  </svg>
);

const MountainSilhouette = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 1000 300" className={`w-full pointer-events-none ${className}`} preserveAspectRatio="none">
    <motion.path
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 0.05 }}
      transition={{ duration: 3 }}
      d="M0 300 L200 150 L400 250 L600 100 L800 200 L1000 150 L1000 300 Z"
      fill="var(--color-sage)"
    />
    <motion.path
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 0.03 }}
      transition={{ duration: 4, delay: 0.5 }}
      d="M0 300 L150 200 L350 280 L550 150 L750 250 L1000 200 L1000 300 Z"
      fill="var(--color-powder)"
    />
  </svg>
);

const DecorativeSeparator = () => (
  <div className="flex items-center justify-center space-x-4 my-8 opacity-40">
    <div className="h-px w-12 bg-gradient-to-r from-transparent to-sage" />
    <WatercolorHeart size={16} />
    <div className="h-px w-12 bg-gradient-to-l from-transparent to-sage" />
  </div>
);

const ChurchIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <radialGradient id="grad-church" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="var(--color-sage)" stopOpacity="0.2" />
        <stop offset="100%" stopColor="var(--color-sage)" stopOpacity="0" />
      </radialGradient>
    </defs>
    <motion.circle cx="50" cy="60" r="40" fill="url(#grad-church)" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} />
    <motion.path 
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2.5, ease: "easeInOut" }}
      d="M50 5 L85 40 L85 95 L15 95 L15 40 Z" 
      stroke="var(--color-sage)" 
      strokeWidth="0.8" 
      fill="var(--color-sage)"
      fillOpacity="0.05"
    />
    <motion.path 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.3 }}
      transition={{ delay: 1, duration: 1.5 }}
      d="M42 95 L42 75 Q50 68 58 75 L58 95" 
      fill="var(--color-rose)" 
    />
    <motion.path d="M50 5 L50 -2 M45 -2 L55 -2" stroke="var(--color-gold)" strokeWidth="1" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 2 }} />
    <motion.circle cx="50" cy="30" r="10" stroke="var(--color-powder)" strokeWidth="0.5" fill="var(--color-powder)" fillOpacity="0.1" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 1.5 }} />
    <motion.path d="M25 50 L35 50 M25 65 L35 65 M65 50 L75 50 M65 65 L75 65" stroke="var(--color-sage)" strokeWidth="0.3" opacity="0.4" />
  </svg>
);

const HouseIllustration = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full">
    <defs>
      <radialGradient id="grad-house" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="var(--color-powder)" stopOpacity="0.2" />
        <stop offset="100%" stopColor="var(--color-powder)" stopOpacity="0" />
      </radialGradient>
    </defs>
    <motion.circle cx="50" cy="60" r="45" fill="url(#grad-house)" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} />
    <motion.path 
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2.5, ease: "easeInOut" }}
      d="M5 50 L50 15 L95 50 L95 95 L5 95 Z" 
      stroke="var(--color-sage)" 
      strokeWidth="0.8" 
      fill="var(--color-sage)"
      fillOpacity="0.05"
    />
    <motion.path 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.3 }}
      transition={{ delay: 1, duration: 1.5 }}
      d="M40 95 L40 75 Q50 68 60 75 L60 95" 
      fill="var(--color-rose)" 
    />
    <motion.rect x="20" y="60" width="15" height="15" stroke="var(--color-powder)" strokeWidth="0.5" fill="var(--color-powder)" fillOpacity="0.1" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.5 }} />
    <motion.rect x="65" y="60" width="15" height="15" stroke="var(--color-powder)" strokeWidth="0.5" fill="var(--color-powder)" fillOpacity="0.1" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.7 }} />
    <motion.path d="M50 15 L50 5" stroke="var(--color-sage)" strokeWidth="0.5" />
  </svg>
);

const Section = ({ id, title, children, className = "", showFloral = true, floralType = 1 }: { id: string, title?: string, children: React.ReactNode, className?: string, showFloral?: boolean, floralType?: number }) => {
  return (
    <section id={id} className={`py-8 md:py-16 px-6 md:px-12 max-w-5xl mx-auto relative ${className}`}>
      {title && (
        <div className="relative mb-6 md:mb-10">
          {showFloral && <FloralAccent type={floralType} className="absolute -top-8 -left-8 md:-top-12 md:-left-12 rotate-[-15deg] opacity-60" />}
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-cursive text-4xl md:text-6xl text-center text-sage relative z-10"
          >
            {title}
          </motion.h2>
          {showFloral && <FloralAccent type={floralType === 1 ? 2 : 1} className="absolute -bottom-8 -right-8 md:-bottom-12 md:-right-12 rotate-[165deg] opacity-60" />}
        </div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </section>
  );
};

const MapEmbed = ({ src }: { src: string }) => (
  <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-sm border border-sage/20 mt-8">
    <iframe
      src={src}
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
);

// --- Main App ---

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showIban, setShowIban] = useState(false);
  const [copied, setCopied] = useState(false);

  const iban = "IT65 I036 6901 6009 9391 8621 150";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(iban);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Cerimonia', href: '#cerimonia' },
    { name: 'Ricevimento', href: '#ricevimento' },
    { name: 'Dress Code', href: '#dresscode' },
    { name: 'Info', href: '#info' },
    { name: 'Lista', href: '#lista' },
    { name: 'RSVP', href: '#rsvp' },
    { name: 'Vacanze', href: '#vacanze' },
  ];

  return (
    <div className="min-h-screen watercolor-bg selection:bg-sage/20 relative">
      {/* Continuous Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <MountainSilhouette className="absolute bottom-0 left-0 opacity-10" />
        <motion.div 
          animate={{ 
            rotate: [0, 5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 -right-20 w-96 h-96 bg-powder/5 blur-3xl rounded-full" 
        />
        <motion.div 
          animate={{ 
            rotate: [0, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-40 -left-20 w-80 h-80 bg-rose/5 blur-3xl rounded-full" 
        />
      </div>

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-sage/5 ${
          isScrolled ? 'bg-warm-beige/95 backdrop-blur-md shadow-sm py-2' : 'bg-warm-beige/80 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-2 md:px-6 flex flex-col items-center space-y-2">
          <a href="#home" className="font-cursive text-xl md:text-2xl text-sage">
            Costantino & Ludovica
          </a>

          {/* Fixed Horizontal Menu */}
          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 md:gap-x-6">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="text-[9px] md:text-[11px] uppercase tracking-widest font-sans font-bold text-ink/60 hover:text-sage transition-colors whitespace-nowrap"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1920" 
            alt="Mountain landscape"
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-warm-beige/40 via-transparent to-warm-beige" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="font-cursive text-6xl md:text-9xl text-sage mb-2 md:mb-4 drop-shadow-sm">
              Costantino & Ludovica
            </h1>
            <p className="font-serif italic text-xl md:text-3xl text-ink/80 mb-6 md:mb-8 tracking-wide">
              11 luglio 2026 • Rivisondoli, Abruzzo
            </p>
            <div className="w-16 md:w-24 h-px bg-sage/30 mx-auto mb-8 md:mb-12" />
            <p className="max-w-2xl mx-auto text-base md:text-xl leading-relaxed font-serif text-ink/70 mb-8 md:mb-12 px-4">
              “Abbiamo scelto Rivisondoli, il nostro posto del cuore che custodisce i nostri ricordi più belli, dove l’aria è più leggera e profuma di libertà. Non vediamo l’ora di festeggiare insieme!”
            </p>
            <a 
              href="#rsvp" 
              className="inline-block px-8 md:px-10 py-3 md:py-4 bg-sage text-white rounded-full font-sans text-[10px] md:text-xs uppercase tracking-widest hover:bg-sage/90 transition-all hover:scale-105 shadow-md"
            >
              Conferma la tua presenza
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-sage/40"
        >
          <div className="w-px h-8 md:h-12 bg-sage/20 mx-auto" />
        </motion.div>
      </section>

      {/* Cerimonia */}
      <Section id="cerimonia" title="La Cerimonia" floralType={2}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-8">
            <ChurchIllustration />
          </div>
          <h3 className="text-2xl md:text-3xl font-serif mb-4 watercolor-text">Chiesa San Nicola di Bari</h3>
          <div className="flex flex-col items-center space-y-2 text-ink/70 mb-6">
            <div className="flex items-center space-x-2">
              <WatercolorClock size={16} />
              <span className="text-sm md:text-base">Ore 16:00</span>
            </div>
            <div className="flex items-center space-x-2">
              <WatercolorMapPin size={16} />
              <span className="text-sm md:text-base">Piazza Municipio, Rivisondoli (AQ)</span>
            </div>
          </div>
          <p className="text-base md:text-lg leading-relaxed text-ink/60 italic px-4">
            Un luogo intimo e senza tempo nel cuore del borgo, dove ci scambieremo le nostre promesse.
          </p>
        </div>
      </Section>

      <DecorativeSeparator />

      {/* Ricevimento */}
      <Section id="ricevimento" title="Il Ricevimento" className="bg-sage/5 rounded-[3rem] my-8">
        <div className="max-w-2xl mx-auto text-center py-4">
          <div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-8">
            <HouseIllustration />
          </div>
          <h3 className="text-2xl md:text-3xl font-serif mb-4 watercolor-text">Country Rivisondoli</h3>
          <div className="flex flex-col items-center space-y-2 text-ink/70 mb-6">
            <div className="flex items-center space-x-2">
              <WatercolorMapPin size={16} />
              <span className="text-sm md:text-base">Località Piè Lucente, Rivisondoli (AQ)</span>
            </div>
          </div>
          <p className="text-base md:text-lg leading-relaxed text-ink/60 italic px-4">
            Una casa immersa nel verde, tra le montagne che amiamo, per festeggiare insieme fino a tarda sera.
          </p>
        </div>
      </Section>

      <DecorativeSeparator />

      {/* Dress Code */}
      <Section id="dresscode" title="Dress Code" floralType={2}>
        <div className="max-w-2xl mx-auto text-center relative">
          <div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-8">
            <HatIllustration />
          </div>
          <FloralAccent className="absolute top-0 right-0 opacity-20 scale-150 hidden md:block" />
          <div className="flex justify-center space-x-4 mb-8">
            <WatercolorHeart size={24} />
            <WatercolorHeart size={24} />
            <WatercolorHeart size={24} />
          </div>
          <p className="text-xl md:text-2xl leading-relaxed font-serif italic text-ink/80 mb-8">
            “Indossa un bel cappello, perché l’eleganza comincia dalla testa!”
          </p>
          <div className="space-y-4 text-lg text-ink/70">
            <p>Siamo in montagna: di giorno fa caldo, ma la sera l’aria si rinfresca. Ti consigliamo di portare con te un capo in più.</p>
            <p>Il ricevimento si terrà in giardino: sono consigliate scarpe eleganti ma comode.</p>
          </div>
        </div>
      </Section>

      <DecorativeSeparator />

      {/* Info Utili */}
      <Section id="info" title="Info Utili" className="bg-powder/5 rounded-[3rem]" floralType={1}>
        <div className="grid md:grid-cols-2 gap-8 relative">
          <div className="p-8 bg-white/50 rounded-3xl border border-sage/10 shadow-sm backdrop-blur-sm relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 w-20 h-20 opacity-10 rotate-12">
              <CarIllustration />
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <WatercolorTrees size={24} />
              <h4 className="text-xl font-serif font-medium watercolor-text">Spostamenti</h4>
            </div>
            <p className="text-ink/70 leading-relaxed">
              La location del ricevimento si trova a pochi passi dalla chiesa. Potrete godervi una piacevole passeggiata tra le vie del borgo.
            </p>
          </div>
          <div className="p-8 bg-white/50 rounded-3xl border border-sage/10 shadow-sm backdrop-blur-sm">
            <div className="flex items-center space-x-4 mb-4">
              <WatercolorCar size={24} />
              <h4 className="text-xl font-serif font-medium watercolor-text">Parcheggio</h4>
            </div>
            <p className="text-ink/70 leading-relaxed">
              È possibile parcheggiare nei pressi della chiesa e nella piazza centrale di Rivisondoli. Vi consigliamo di arrivare con un po' di anticipo.
            </p>
          </div>
        </div>
      </Section>

      <DecorativeSeparator />

      {/* Lista Nozze */}
      <Section id="lista" title="Lista Nozze" floralType={2}>
        <div className="max-w-xl mx-auto p-6 md:p-10 bg-white/40 backdrop-blur-sm rounded-[2rem] md:rounded-[3rem] border border-sage/10 text-center shadow-sm relative overflow-hidden">
          <div className="w-32 h-32 md:w-48 md:h-48 mx-auto mb-8">
            <GiftIllustration />
          </div>
          <p className="text-base md:text-lg text-ink/70 mb-6 md:mb-8 leading-relaxed italic px-2">
            La vostra presenza è il regalo più bello. Se desiderate contribuire al nostro inizio insieme, potete farlo qui:
          </p>
          
          <AnimatePresence mode="wait">
            {!showIban ? (
              <motion.button
                key="reveal-btn"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowIban(true)}
                className="px-8 py-3 bg-sage/10 text-sage border border-sage/20 rounded-full font-sans text-[10px] md:text-xs uppercase tracking-widest hover:bg-sage/20 transition-all"
              >
                Fai un regalo
              </motion.button>
            ) : (
              <motion.div
                key="iban-details"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-6"
              >
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-widest text-sage font-sans font-bold">Beneficiari</p>
                  <p className="text-lg md:text-xl font-serif">Costantino Cardone & Ludovica Rea</p>
                </div>
                <div className="relative group max-w-xs mx-auto">
                  <p className="text-[10px] uppercase tracking-widest text-sage font-sans font-bold mb-2">IBAN</p>
                  <div 
                    onClick={copyToClipboard}
                    className="flex items-center justify-center space-x-2 p-3 bg-warm-beige/80 rounded-xl border border-sage/10 cursor-pointer hover:border-sage/30 transition-all group"
                  >
                    <span className="font-mono text-[11px] md:text-sm tracking-tighter text-ink/80 break-all">{iban}</span>
                    {copied ? <Check size={14} className="text-green-600 shrink-0" /> : <Copy size={14} className="text-sage/40 shrink-0 group-hover:text-sage" />}
                  </div>
                  {copied && (
                    <motion.span 
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] text-green-600 font-sans whitespace-nowrap"
                    >
                      Copiato negli appunti!
                    </motion.span>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Section>

      {/* RSVP */}
      <Section id="rsvp" title="RSVP">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-base md:text-lg text-ink/60 mb-8 md:mb-12 italic px-4">
            Vi preghiamo di confermare la vostra presenza entro il 1° giugno 2026.
          </p>
          <div className="min-h-[800px] md:min-h-[1200px] w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-lg border border-sage/10 bg-white">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSdFa5JhAC6kHjGIK-E19SUGuVFuT0XaJ9jiYA3ttSayl4wZvw/viewform?embedded=true" 
              width="100%" 
              height="1200px" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              className="opacity-90"
            >
              Caricamento...
            </iframe>
          </div>
        </div>
      </Section>

      {/* Vacanze */}
      <Section id="vacanze" title="Vacanze in Montagna" floralType={1}>
        <div className="text-center mb-8 md:mb-12 relative">
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-32 h-32 opacity-10">
            <NatureIllustration />
          </div>
          <FloralAccent className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-10 scale-[3] rotate-45" />
          <p className="text-lg md:text-xl text-ink/80 italic leading-relaxed max-w-2xl mx-auto px-4 relative z-10">
            Rivisondoli è un luogo magico. Vi invitiamo a fermarvi qualche giorno per godere della bellezza delle nostre montagne.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="space-y-3 p-4 bg-white/30 rounded-3xl border border-sage/5 backdrop-blur-sm">
            <div className="h-40 md:h-48 rounded-2xl overflow-hidden mb-4">
              <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800" alt="Dove dormire" className="w-full h-full object-cover opacity-70" referrerPolicy="no-referrer" />
            </div>
            <div className="flex items-center space-x-2">
              <WatercolorBed size={18} />
              <h4 className="text-lg md:text-xl font-serif watercolor-text">Dove dormire</h4>
            </div>
            <p className="text-ink/60 text-xs md:text-sm leading-relaxed">
              Dagli hotel storici ai b&b più accoglienti, Rivisondoli offre diverse soluzioni per il vostro soggiorno. Vi consigliamo di prenotare con anticipo.
            </p>
          </div>

          <div className="space-y-3 p-4 bg-white/30 rounded-3xl border border-sage/5 backdrop-blur-sm">
            <div className="h-40 md:h-48 rounded-2xl overflow-hidden mb-4">
              <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800" alt="Natura" className="w-full h-full object-cover opacity-70" referrerPolicy="no-referrer" />
            </div>
            <div className="flex items-center space-x-2">
              <WatercolorMountain size={18} />
              <h4 className="text-lg md:text-xl font-serif watercolor-text">Natura e passeggiate</h4>
            </div>
            <p className="text-ink/60 text-xs md:text-sm leading-relaxed">
              Il Parco Nazionale della Maiella offre sentieri mozzafiato. Una passeggiata sull'Altopiano delle Cinque Miglia è d'obbligo.
            </p>
          </div>

          <div className="space-y-3 p-4 bg-white/30 rounded-3xl border border-sage/5 backdrop-blur-sm">
            <div className="h-40 md:h-48 rounded-2xl overflow-hidden mb-4">
              <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800" alt="Sapori" className="w-full h-full object-cover opacity-70" referrerPolicy="no-referrer" />
            </div>
            <div className="flex items-center space-x-2">
              <WatercolorUtensils size={18} />
              <h4 className="text-lg md:text-xl font-serif watercolor-text">Sapori locali</h4>
            </div>
            <p className="text-ink/60 text-xs md:text-sm leading-relaxed">
              Non perdetevi i formaggi locali, la pasta alla chitarra e i dolci tipici della tradizione abruzzese.
            </p>
          </div>
        </div>
      </Section>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isScrolled && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-50 p-4 bg-sage text-white rounded-full shadow-lg hover:bg-sage/90 transition-all"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-12 px-6 text-center border-t border-sage/10">
        <p className="font-cursive text-3xl text-sage mb-4">Costantino & Ludovica</p>
        <p className="text-xs uppercase tracking-[0.3em] text-ink/40 font-sans">11 Luglio 2026 • Rivisondoli</p>
        <div className="mt-8 flex justify-center space-x-4 text-sage/30">
          <Heart size={16} fill="currentColor" />
        </div>
      </footer>
    </div>
  );
}
