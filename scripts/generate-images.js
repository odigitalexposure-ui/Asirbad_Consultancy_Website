import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/images');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// 1. Hero Consultancy Image (1200x800)
const heroSvg = `
<svg width="1200" height="800" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="heroBg" x1="0" y1="0" x2="1200" y2="800" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0B1D30" />
      <stop offset="60%" stop-color="#142B45" />
      <stop offset="100%" stop-color="#0B1D30" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#DFC89B" />
      <stop offset="50%" stop-color="#B69A64" />
      <stop offset="100%" stop-color="#8F7441" />
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#B69A64" stroke-width="0.75" stroke-opacity="0.12" />
    </pattern>
  </defs>

  <!-- Deep Navy Base -->
  <rect width="1200" height="800" fill="url(#heroBg)" />
  <rect width="1200" height="800" fill="url(#grid)" />

  <!-- Outer Editorial Gold Double Border -->
  <rect x="30" y="30" width="1140" height="740" stroke="#B69A64" stroke-width="1.5" stroke-opacity="0.4" fill="none" />
  <rect x="42" y="42" width="1116" height="716" stroke="#B69A64" stroke-width="0.75" stroke-opacity="0.2" fill="none" />
  
  <!-- Architectural Corner Ornaments -->
  <path d="M30 60 V30 H60" stroke="#B69A64" stroke-width="2.5" />
  <path d="M1170 60 V30 H1140" stroke="#B69A64" stroke-width="2.5" />
  <path d="M30 740 V770 H60" stroke="#B69A64" stroke-width="2.5" />
  <path d="M1170 740 V770 H1140" stroke="#B69A64" stroke-width="2.5" />

  <!-- Central Financial Ledger & Tax Dossier Graphic -->
  <!-- Document 1: Background Dossier Sheet -->
  <g transform="translate(480, 140) rotate(-6)">
    <rect width="460" height="520" rx="6" fill="#183656" stroke="#B69A64" stroke-width="1" stroke-opacity="0.3" filter="drop-shadow(0 20px 30px rgba(0,0,0,0.5))"/>
    <line x1="40" y1="50" x2="220" y2="50" stroke="#B69A64" stroke-width="2" stroke-opacity="0.6"/>
    <line x1="40" y1="80" x2="380" y2="80" stroke="#E9E8E3" stroke-width="1" stroke-opacity="0.2"/>
    <line x1="40" y1="110" x2="350" y2="110" stroke="#E9E8E3" stroke-width="1" stroke-opacity="0.2"/>
    <line x1="40" y1="140" x2="390" y2="140" stroke="#E9E8E3" stroke-width="1" stroke-opacity="0.2"/>
  </g>

  <!-- Document 2: Primary Tax Statement Document -->
  <g transform="translate(540, 120)">
    <rect width="480" height="540" rx="8" fill="#F8F6F0" filter="drop-shadow(0 25px 50px rgba(0,0,0,0.6))"/>
    
    <!-- Document Header -->
    <rect x="0" y="0" width="480" height="60" rx="8 8 0 0" fill="#0B1D30" />
    <text x="35" y="38" font-family="'Playfair Display', Georgia, serif" font-size="18" font-weight="600" fill="#F8F6F0" letter-spacing="1">TAXATION &amp; ADVISORY LEDGER</text>
    <rect x="390" y="20" width="55" height="22" rx="4" fill="#B69A64" />
    <text x="417" y="35" font-family="sans-serif" font-size="10" font-weight="700" fill="#0B1D30" text-anchor="middle">VERIFIED</text>

    <!-- Document Content Lines & Tables -->
    <text x="40" y="100" font-family="sans-serif" font-size="12" font-weight="600" fill="#0B1D30" letter-spacing="1">ANNUAL TAX RETURN COMPUTATION</text>
    <line x1="40" y1="115" x2="440" y2="115" stroke="#B69A64" stroke-width="1.5" />
    
    <!-- Table Rows -->
    <rect x="40" y="135" width="400" height="32" rx="4" fill="#E9E8E3" fill-opacity="0.5" />
    <text x="55" y="156" font-family="sans-serif" font-size="12" fill="#142B45">Gross Taxable Income Assessment</text>
    <text x="420" y="156" font-family="sans-serif" font-size="12" font-weight="600" fill="#142B45" text-anchor="end">COMPUTED</text>

    <rect x="40" y="175" width="400" height="32" rx="4" fill="#FFFFFF" />
    <text x="55" y="196" font-family="sans-serif" font-size="12" fill="#555F6B">Chapter VI-A Statutory Allowances</text>
    <text x="420" y="196" font-family="sans-serif" font-size="12" font-weight="600" fill="#B69A64" text-anchor="end">OPTIMIZED</text>

    <rect x="40" y="215" width="400" height="32" rx="4" fill="#E9E8E3" fill-opacity="0.5" />
    <text x="55" y="236" font-family="sans-serif" font-size="12" fill="#142B45">Goods &amp; Services Tax (GST) Input Credit</text>
    <text x="420" y="236" font-family="sans-serif" font-size="12" font-weight="600" fill="#142B45" text-anchor="end">RECONCILED</text>

    <rect x="40" y="255" width="400" height="32" rx="4" fill="#FFFFFF" />
    <text x="55" y="276" font-family="sans-serif" font-size="12" fill="#555F6B">Advance Tax &amp; TDS Reconciliation (26AS / AIS)</text>
    <text x="420" y="276" font-family="sans-serif" font-size="12" font-weight="600" fill="#B69A64" text-anchor="end">MATCHED</text>

    <!-- Graphical Chart Simulation -->
    <rect x="40" y="310" width="400" height="110" rx="6" fill="#F0ECE1" stroke="#E9E8E3" stroke-width="1" />
    <text x="55" y="335" font-family="sans-serif" font-size="11" font-weight="600" fill="#0B1D30">STATUTORY COMPLIANCE TIMELINE</text>
    <line x1="55" y1="390" x2="385" y2="390" stroke="#0B1D30" stroke-width="1" stroke-opacity="0.3" />
    <!-- Bar charts -->
    <rect x="75" y="355" width="22" height="35" rx="3" fill="#142B45" />
    <rect x="135" y="345" width="22" height="45" rx="3" fill="#142B45" />
    <rect x="195" y="335" width="22" height="55" rx="3" fill="#142B45" />
    <rect x="255" y="330" width="22" height="60" rx="3" fill="#B69A64" />
    <rect x="315" y="325" width="22" height="65" rx="3" fill="#B69A64" />
    <rect x="375" y="320" width="22" height="70" rx="3" fill="#142B45" />

    <!-- Official Stamp & Seal -->
    <g transform="translate(330, 435)">
      <circle cx="45" cy="45" r="40" stroke="#B69A64" stroke-width="2" stroke-dasharray="4 2" fill="none"/>
      <circle cx="45" cy="45" r="34" stroke="#B69A64" stroke-width="1" fill="none"/>
      <text x="45" y="42" font-family="'Playfair Display', serif" font-size="10" font-weight="700" fill="#B69A64" text-anchor="middle">ASIRBAD</text>
      <text x="45" y="55" font-family="sans-serif" font-size="7" font-weight="600" fill="#142B45" text-anchor="middle" letter-spacing="1">VERIFIED</text>
    </g>

    <text x="40" y="480" font-family="sans-serif" font-size="11" fill="#555F6B">Consultant: Gobinda Kumar Mukherjee</text>
    <text x="40" y="500" font-family="sans-serif" font-size="10" fill="#88929D">GSTIN: 19AEJPL6529E1ZA • Sodepur, Kolkata</text>
  </g>

  <!-- Left Side Editorial Badge & Crest -->
  <g transform="translate(100, 220)">
    <circle cx="120" cy="120" r="90" fill="#142B45" stroke="#B69A64" stroke-width="2"/>
    <circle cx="120" cy="120" r="76" stroke="#B69A64" stroke-width="1" stroke-opacity="0.5" stroke-dasharray="3 3"/>
    
    <!-- Balance Scale of Tax Clarity -->
    <path d="M120 75 V145" stroke="#DFC89B" stroke-width="3" stroke-linecap="round"/>
    <path d="M90 92 H150" stroke="#DFC89B" stroke-width="3" stroke-linecap="round"/>
    <path d="M90 92 L75 125 H105 Z" fill="none" stroke="#DFC89B" stroke-width="2"/>
    <path d="M150 92 L135 125 H165 Z" fill="none" stroke="#DFC89B" stroke-width="2"/>
    <circle cx="120" cy="72" r="5" fill="#DFC89B"/>
    <rect x="105" y="145" width="30" height="6" rx="2" fill="#DFC89B"/>

    <text x="120" y="245" font-family="'Playfair Display', Georgia, serif" font-size="20" font-weight="700" fill="#F8F6F0" text-anchor="middle">ASIRBAD</text>
    <text x="120" y="270" font-family="sans-serif" font-size="11" font-weight="600" fill="#B69A64" letter-spacing="2" text-anchor="middle">TAXATION &amp; ADVISORY</text>
    <text x="120" y="300" font-family="sans-serif" font-size="12" fill="#E9E8E3" text-anchor="middle" fill-opacity="0.8">Integrity • Clarity • Precision</text>
    <line x1="50" y1="320" x2="190" y2="320" stroke="#B69A64" stroke-width="1" stroke-opacity="0.4" />
    <text x="120" y="340" font-family="sans-serif" font-size="11" fill="#DFC89B" text-anchor="middle">Sodepur, Kolkata</text>
  </g>

  <!-- Foreground Elegant Fountain Pen -->
  <g transform="translate(860, 460) rotate(-35)">
    <rect x="0" y="0" width="24" height="240" rx="6" fill="#0B1D30" stroke="#B69A64" stroke-width="1"/>
    <rect x="0" y="60" width="24" height="12" fill="url(#goldGrad)" />
    <path d="M0 240 L12 285 L24 240 Z" fill="url(#goldGrad)" />
    <line x1="12" y1="250" x2="12" y2="280" stroke="#0B1D30" stroke-width="1.5" />
    <circle cx="12" cy="265" r="2" fill="#0B1D30"/>
  </g>
</svg>
`;

// 2. About Consultancy Image (1200x800)
const aboutSvg = `
<svg width="1200" height="800" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="aboutBg" x1="0" y1="0" x2="1200" y2="800" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0E2338" />
      <stop offset="100%" stop-color="#071321" />
    </linearGradient>
    <pattern id="dotPattern" width="30" height="30" patternUnits="userSpaceOnUse">
      <circle cx="15" cy="15" r="1" fill="#B69A64" fill-opacity="0.15" />
    </pattern>
  </defs>

  <rect width="1200" height="800" fill="url(#aboutBg)" />
  <rect width="1200" height="800" fill="url(#dotPattern)" />

  <rect x="40" y="40" width="1120" height="720" stroke="#B69A64" stroke-width="1" stroke-opacity="0.3" fill="none"/>
  <rect x="52" y="52" width="1096" height="696" stroke="#B69A64" stroke-width="0.5" stroke-opacity="0.15" fill="none"/>

  <!-- Left: Architectural Pillars of Trust -->
  <g transform="translate(100, 120)">
    <rect width="440" height="560" rx="8" fill="#142B45" stroke="#B69A64" stroke-width="1" stroke-opacity="0.4" />
    <rect x="0" y="0" width="440" height="70" rx="8 8 0 0" fill="#0B1D30" />
    <text x="35" y="42" font-family="'Playfair Display', serif" font-size="20" font-weight="600" fill="#F8F6F0">FOUNDATIONS OF ADVISORY</text>
    
    <!-- Four Core Pillars -->
    <g transform="translate(35, 105)">
      <rect width="370" height="85" rx="6" fill="#0B1D30" fill-opacity="0.5" stroke="#B69A64" stroke-width="0.75" stroke-opacity="0.3"/>
      <circle cx="35" cy="42" r="18" fill="#B69A64" fill-opacity="0.2"/>
      <text x="35" y="48" font-family="'Playfair Display', serif" font-size="16" font-weight="700" fill="#DFC89B" text-anchor="middle">01</text>
      <text x="70" y="36" font-family="sans-serif" font-size="14" font-weight="600" fill="#F8F6F0">Understanding Client Context</text>
      <text x="70" y="58" font-family="sans-serif" font-size="12" fill="#E9E8E3" fill-opacity="0.7">Evaluating personal and commercial fiscal realities.</text>
    </g>

    <g transform="translate(35, 205)">
      <rect width="370" height="85" rx="6" fill="#0B1D30" fill-opacity="0.5" stroke="#B69A64" stroke-width="0.75" stroke-opacity="0.3"/>
      <circle cx="35" cy="42" r="18" fill="#B69A64" fill-opacity="0.2"/>
      <text x="35" y="48" font-family="'Playfair Display', serif" font-size="16" font-weight="700" fill="#DFC89B" text-anchor="middle">02</text>
      <text x="70" y="36" font-family="sans-serif" font-size="14" font-weight="600" fill="#F8F6F0">Direct Statutory Guidance</text>
      <text x="70" y="58" font-family="sans-serif" font-size="12" fill="#E9E8E3" fill-opacity="0.7">Clear explanations without confusing jargon.</text>
    </g>

    <g transform="translate(35, 305)">
      <rect width="370" height="85" rx="6" fill="#0B1D30" fill-opacity="0.5" stroke="#B69A64" stroke-width="0.75" stroke-opacity="0.3"/>
      <circle cx="35" cy="42" r="18" fill="#B69A64" fill-opacity="0.2"/>
      <text x="35" y="48" font-family="'Playfair Display', serif" font-size="16" font-weight="700" fill="#DFC89B" text-anchor="middle">03</text>
      <text x="70" y="36" font-family="sans-serif" font-size="14" font-weight="600" fill="#F8F6F0">Meticulous Documentation</text>
      <text x="70" y="58" font-family="sans-serif" font-size="12" fill="#E9E8E3" fill-opacity="0.7">Organized filing, verification, and proof archives.</text>
    </g>

    <g transform="translate(35, 405)">
      <rect width="370" height="85" rx="6" fill="#0B1D30" fill-opacity="0.5" stroke="#B69A64" stroke-width="0.75" stroke-opacity="0.3"/>
      <circle cx="35" cy="42" r="18" fill="#B69A64" fill-opacity="0.2"/>
      <text x="35" y="48" font-family="'Playfair Display', serif" font-size="16" font-weight="700" fill="#DFC89B" text-anchor="middle">04</text>
      <text x="70" y="36" font-family="sans-serif" font-size="14" font-weight="600" fill="#F8F6F0">Transparent Communication</text>
      <text x="70" y="58" font-family="sans-serif" font-size="12" fill="#E9E8E3" fill-opacity="0.7">Honest, reliable advice built on statutory truth.</text>
    </g>
  </g>

  <!-- Right: Formal Editorial Seal & Identity Details -->
  <g transform="translate(600, 120)">
    <rect width="500" height="560" rx="8" fill="#F8F6F0" filter="drop-shadow(0 20px 40px rgba(0,0,0,0.5))"/>
    
    <rect x="30" y="30" width="440" height="500" stroke="#B69A64" stroke-width="1" stroke-opacity="0.4" fill="none" />
    <rect x="40" y="40" width="420" height="480" stroke="#B69A64" stroke-width="0.5" stroke-opacity="0.2" fill="none" />

    <!-- Center Crest -->
    <circle cx="250" cy="150" r="60" fill="#0B1D30" stroke="#B69A64" stroke-width="2"/>
    <circle cx="250" cy="150" r="52" stroke="#B69A64" stroke-width="1" stroke-opacity="0.5" stroke-dasharray="3 3"/>
    <text x="250" y="158" font-family="'Playfair Display', serif" font-size="28" font-weight="700" fill="#F8F6F0" text-anchor="middle">AC</text>

    <text x="250" y="240" font-family="'Playfair Display', serif" font-size="22" font-weight="700" fill="#0B1D30" text-anchor="middle">ASIRBAD CONSULTANCY</text>
    <text x="250" y="265" font-family="sans-serif" font-size="11" font-weight="600" fill="#B69A64" letter-spacing="2" text-anchor="middle">TAXATION &amp; FINANCIAL CONSULTING</text>
    <line x1="100" y1="285" x2="400" y2="285" stroke="#B69A64" stroke-width="1" />

    <text x="70" y="325" font-family="sans-serif" font-size="13" font-weight="600" fill="#142B45">Principal Consultant:</text>
    <text x="70" y="348" font-family="'Playfair Display', serif" font-size="18" font-weight="600" fill="#0B1D30">Gobinda Kumar Mukherjee</text>
    
    <text x="70" y="390" font-family="sans-serif" font-size="13" font-weight="600" fill="#142B45">Registered Practice Location:</text>
    <text x="70" y="412" font-family="sans-serif" font-size="13" fill="#555F6B">Ashirbad, Iswar Chatterjee Road,</text>
    <text x="70" y="432" font-family="sans-serif" font-size="13" fill="#555F6B">108/1, Uttar Pally, Sodepur, Kolkata – 700110</text>
    <text x="70" y="452" font-family="sans-serif" font-size="12" fill="#B69A64">Landmark: Water Tank</text>

    <line x1="70" y1="475" x2="430" y2="475" stroke="#E9E8E3" stroke-width="1" />
    <text x="70" y="498" font-family="sans-serif" font-size="12" font-weight="600" fill="#142B45">Statutory GSTIN: 19AEJPL6529E1ZA</text>
  </g>
</svg>
`;

// 3. Taxation Services Image (1200x800)
const servicesSvg = `
<svg width="1200" height="800" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="servBg" x1="0" y1="0" x2="1200" y2="800" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0B1D30" />
      <stop offset="50%" stop-color="#142B45" />
      <stop offset="100%" stop-color="#0B1D30" />
    </linearGradient>
  </defs>

  <rect width="1200" height="800" fill="url(#servBg)" />
  
  <rect x="35" y="35" width="1130" height="730" stroke="#B69A64" stroke-width="1.5" stroke-opacity="0.3" fill="none" />
  <rect x="45" y="45" width="1110" height="710" stroke="#B69A64" stroke-width="0.5" stroke-opacity="0.15" fill="none" />

  <!-- Title Ribbon -->
  <text x="600" y="110" font-family="'Playfair Display', serif" font-size="28" font-weight="700" fill="#F8F6F0" text-anchor="middle">TAXATION &amp; ADVISORY CAPABILITIES</text>
  <text x="600" y="140" font-family="sans-serif" font-size="13" font-weight="600" fill="#B69A64" letter-spacing="3" text-anchor="middle">STRUCTURED STATUTORY ASSISTANCE</text>
  <line x1="450" y1="160" x2="750" y2="160" stroke="#B69A64" stroke-width="1" />

  <!-- 4 Central Quadrant Cards representing major services -->
  <!-- Card 1: Income Tax Return & Advisory -->
  <g transform="translate(100, 200)">
    <rect width="470" height="230" rx="8" fill="#F8F6F0" stroke="#B69A64" stroke-width="1" filter="drop-shadow(0 15px 30px rgba(0,0,0,0.4))"/>
    <rect x="0" y="0" width="470" height="45" rx="8 8 0 0" fill="#0B1D30" />
    <text x="25" y="28" font-family="'Playfair Display', serif" font-size="16" font-weight="600" fill="#F8F6F0">INCOME TAX CONSULTANCY &amp; FILING</text>
    
    <text x="25" y="75" font-family="sans-serif" font-size="13" font-weight="600" fill="#142B45">Comprehensive Individual &amp; Professional Support</text>
    <text x="25" y="100" font-family="sans-serif" font-size="12" fill="#555F6B">• ITR-1 to ITR-4 preparation &amp; verification</text>
    <text x="25" y="125" font-family="sans-serif" font-size="12" fill="#555F6B">• Reconciliation of Form 26AS, AIS, and TIS</text>
    <text x="25" y="150" font-family="sans-serif" font-size="12" fill="#555F6B">• Old vs. New tax regime comparative evaluation</text>
    <text x="25" y="175" font-family="sans-serif" font-size="12" fill="#555F6B">• Capital gains calculation on assets &amp; securities</text>
    <line x1="25" y1="195" x2="445" y2="195" stroke="#E9E8E3" stroke-width="1"/>
    <text x="25" y="215" font-family="sans-serif" font-size="11" font-weight="600" fill="#B69A64">ACCURATE • COMPLIANT • TIMELY</text>
  </g>

  <!-- Card 2: GST Services -->
  <g transform="translate(630, 200)">
    <rect width="470" height="230" rx="8" fill="#F8F6F0" stroke="#B69A64" stroke-width="1" filter="drop-shadow(0 15px 30px rgba(0,0,0,0.4))"/>
    <rect x="0" y="0" width="470" height="45" rx="8 8 0 0" fill="#0B1D30" />
    <text x="25" y="28" font-family="'Playfair Display', serif" font-size="16" font-weight="600" fill="#F8F6F0">GST CONSULTANCY &amp; RETURN FILING</text>

    <text x="25" y="75" font-family="sans-serif" font-size="13" font-weight="600" fill="#142B45">Goods &amp; Services Tax Advisory &amp; Compliance</text>
    <text x="25" y="100" font-family="sans-serif" font-size="12" fill="#555F6B">• Monthly and quarterly GSTR-1 outward return</text>
    <text x="25" y="125" font-family="sans-serif" font-size="12" fill="#555F6B">• GSTR-3B monthly tax summary &amp; tax settlement</text>
    <text x="25" y="150" font-family="sans-serif" font-size="12" fill="#555F6B">• Input Tax Credit (ITC) reconciliation with GSTR-2B</text>
    <text x="25" y="175" font-family="sans-serif" font-size="12" fill="#555F6B">• Classification, rates, and registration advisory</text>
    <line x1="25" y1="195" x2="445" y2="195" stroke="#E9E8E3" stroke-width="1"/>
    <text x="25" y="215" font-family="sans-serif" font-size="11" font-weight="600" fill="#B69A64">TRANSPARENT • THOROUGH • RELIABLE</text>
  </g>

  <!-- Card 3: Tax Planning & Documentation -->
  <g transform="translate(100, 470)">
    <rect width="470" height="230" rx="8" fill="#F8F6F0" stroke="#B69A64" stroke-width="1" filter="drop-shadow(0 15px 30px rgba(0,0,0,0.4))"/>
    <rect x="0" y="0" width="470" height="45" rx="8 8 0 0" fill="#0B1D30" />
    <text x="25" y="28" font-family="'Playfair Display', serif" font-size="16" font-weight="600" fill="#F8F6F0">TAX PLANNING &amp; DOCUMENTATION</text>

    <text x="25" y="75" font-family="sans-serif" font-size="13" font-weight="600" fill="#142B45">Strategic Organization for Financial Peace</text>
    <text x="25" y="100" font-family="sans-serif" font-size="12" fill="#555F6B">• Legitimate tax-saving investment advisory</text>
    <text x="25" y="125" font-family="sans-serif" font-size="12" fill="#555F6B">• Structured archiving of past returns &amp; challans</text>
    <text x="25" y="150" font-family="sans-serif" font-size="12" fill="#555F6B">• Bank statements &amp; investment proofs collation</text>
    <text x="25" y="175" font-family="sans-serif" font-size="12" fill="#555F6B">• Advance tax installment projections (234B/C)</text>
    <line x1="25" y1="195" x2="445" y2="195" stroke="#E9E8E3" stroke-width="1"/>
    <text x="25" y="215" font-family="sans-serif" font-size="11" font-weight="600" fill="#B69A64">PRUDENT • LAWFUL • SYSTEMATIC</text>
  </g>

  <!-- Card 4: Business Support & Consultation -->
  <g transform="translate(630, 470)">
    <rect width="470" height="230" rx="8" fill="#F8F6F0" stroke="#B69A64" stroke-width="1" filter="drop-shadow(0 15px 30px rgba(0,0,0,0.4))"/>
    <rect x="0" y="0" width="470" height="45" rx="8 8 0 0" fill="#0B1D30" />
    <text x="25" y="28" font-family="'Playfair Display', serif" font-size="16" font-weight="600" fill="#F8F6F0">BUSINESS TAX SUPPORT &amp; CONSULTATION</text>

    <text x="25" y="75" font-family="sans-serif" font-size="13" font-weight="600" fill="#142B45">Personalized One-on-One Advisory</text>
    <text x="25" y="100" font-family="sans-serif" font-size="12" fill="#555F6B">• Presumptive taxation scheme (Sec 44AD / 44ADA)</text>
    <text x="25" y="125" font-family="sans-serif" font-size="12" fill="#555F6B">• TDS on contractor, rent, and commission payments</text>
    <text x="25" y="150" font-family="sans-serif" font-size="12" fill="#555F6B">• One-on-one consultation with Gobinda Kr. Mukherjee</text>
    <text x="25" y="175" font-family="sans-serif" font-size="12" fill="#555F6B">• Property sale &amp; capital gains tax planning</text>
    <line x1="25" y1="195" x2="445" y2="195" stroke="#E9E8E3" stroke-width="1"/>
    <text x="25" y="215" font-family="sans-serif" font-size="11" font-weight="600" fill="#B69A64">PRACTICAL • PERSONALIZED • FOCUSED</text>
  </g>
</svg>
`;

// 4. Consultant Authentic Placeholder Image (800x1000 - Portrait)
const consultantSvg = `
<svg width="800" height="1000" viewBox="0 0 800 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="consultantBg" x1="0" y1="0" x2="800" y2="1000" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#0B1D30" />
      <stop offset="60%" stop-color="#142B45" />
      <stop offset="100%" stop-color="#081626" />
    </linearGradient>
    <pattern id="consGrid" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="12" cy="12" r="0.75" fill="#B69A64" fill-opacity="0.18" />
    </pattern>
  </defs>

  <rect width="800" height="1000" fill="url(#consultantBg)" />
  <rect width="800" height="1000" fill="url(#consGrid)" />

  <!-- Outer Architectural Framing -->
  <rect x="35" y="35" width="730" height="930" stroke="#B69A64" stroke-width="1.5" stroke-opacity="0.4" fill="none" />
  <rect x="45" y="45" width="710" height="910" stroke="#B69A64" stroke-width="0.75" stroke-opacity="0.2" fill="none" />
  
  <!-- Corner Marks -->
  <path d="M35 65 V35 H65" stroke="#B69A64" stroke-width="2.5" />
  <path d="M765 65 V35 H735" stroke="#B69A64" stroke-width="2.5" />
  <path d="M35 935 V965 H65" stroke="#B69A64" stroke-width="2.5" />
  <path d="M765 935 V965 H735" stroke="#B69A64" stroke-width="2.5" />

  <!-- Top Badge -->
  <rect x="250" y="65" width="300" height="34" rx="4" fill="#0B1D30" stroke="#B69A64" stroke-width="1" />
  <text x="400" y="87" font-family="sans-serif" font-size="11" font-weight="700" fill="#DFC89B" letter-spacing="2" text-anchor="middle">ASIRBAD CONSULTANCY</text>

  <!-- Central Silhouette & Monogram Emblem -->
  <g transform="translate(400, 360)">
    <!-- Outer Rings -->
    <circle cx="0" cy="0" r="170" fill="#0B1D30" stroke="#B69A64" stroke-width="2" stroke-opacity="0.6"/>
    <circle cx="0" cy="0" r="155" stroke="#B69A64" stroke-width="1" stroke-opacity="0.3" stroke-dasharray="4 4"/>
    
    <!-- Professional Silhouette (Head & Shoulders) in dignified charcoal-navy -->
    <path d="M -90 150 C -90 90, -50 70, -35 50 C -45 40, -45 0, -35 -20 C -25 -40, 25 -40, 35 -20 C 45 0, 45 40, 35 50 C 50 70, 90 90, 90 150 Z" 
          fill="#1C3857" stroke="#B69A64" stroke-width="1.5" stroke-opacity="0.5"/>
    
    <!-- Monogram Medallion over silhouette -->
    <circle cx="0" cy="10" r="46" fill="#0B1D30" stroke="#B69A64" stroke-width="2"/>
    <text x="0" y="20" font-family="'Playfair Display', Georgia, serif" font-size="28" font-weight="700" fill="#F8F6F0" text-anchor="middle">GKM</text>
  </g>

  <!-- Editorial Info Plate -->
  <g transform="translate(100, 600)">
    <rect width="600" height="300" rx="6" fill="#F8F6F0" filter="drop-shadow(0 20px 40px rgba(0,0,0,0.5))"/>
    <rect x="15" y="15" width="570" height="270" stroke="#B69A64" stroke-width="1" stroke-opacity="0.3" fill="none"/>

    <text x="300" y="70" font-family="'Playfair Display', Georgia, serif" font-size="26" font-weight="700" fill="#0B1D30" text-anchor="middle">Gobinda Kumar Mukherjee</text>
    <text x="300" y="100" font-family="sans-serif" font-size="13" font-weight="600" fill="#B69A64" letter-spacing="2" text-anchor="middle">OWNER / CONSULTANT</text>
    <line x1="150" y1="120" x2="450" y2="120" stroke="#B69A64" stroke-width="1" />

    <text x="300" y="155" font-family="sans-serif" font-size="13" fill="#555F6B" text-anchor="middle">Taxation &amp; Financial Consultancy</text>
    <text x="300" y="180" font-family="sans-serif" font-size="12" fill="#555F6B" text-anchor="middle">Sodepur, Kolkata • West Bengal</text>
    <text x="300" y="210" font-family="sans-serif" font-size="12" font-weight="600" fill="#142B45" text-anchor="middle">Phone: +91 98300 39464</text>
    <text x="300" y="235" font-family="sans-serif" font-size="12" fill="#142B45" text-anchor="middle">asirbadconsultancy@gmail.com</text>

    <!-- Authentic Placeholder Notice -->
    <rect x="100" y="252" width="400" height="22" rx="4" fill="#E9E8E3" />
    <text x="300" y="267" font-family="sans-serif" font-size="10" font-weight="600" fill="#555F6B" text-anchor="middle" letter-spacing="0.5">AUTHENTIC PORTRAIT PLACEHOLDER FOR GOBINDA KR. MUKHERJEE</text>
  </g>
</svg>
`;

async function generate() {
  console.log('Rendering WebP images using Sharp...');
  
  await sharp(Buffer.from(heroSvg))
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'hero-consultancy.webp'));
  console.log('Created hero-consultancy.webp');

  await sharp(Buffer.from(aboutSvg))
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'about-consultancy.webp'));
  console.log('Created about-consultancy.webp');

  await sharp(Buffer.from(servicesSvg))
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'taxation-services.webp'));
  console.log('Created taxation-services.webp');

  await sharp(Buffer.from(consultantSvg))
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'consultant-placeholder.webp'));
  console.log('Created consultant-placeholder.webp');

  console.log('All WebP images generated successfully!');
}

generate().catch(err => {
  console.error('Error generating images:', err);
  process.exit(1);
});
