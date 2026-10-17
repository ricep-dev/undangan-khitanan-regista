import { useState, useEffect, useRef } from 'react';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import GallerySection from './components/GallerySection';
import EntertainmentSection from './components/EntertainmentSection';
import GuestScheduleSection from './components/GuestScheduleSection';
import GiftRSVPSection from './components/GiftRSVPSection';

import './App.css';

/* ---------- Data dekorasi cover (deterministik, tanpa random) ---------- */

// Bintang berkelip di langit
const STARS = Array.from({ length: 30 }, (_, i) => ({
  left: (i * 37 + 11) % 100,
  top: (i * 53 + 7) % 68,
  size: 2 + (i % 3),
  delay: (i % 8) * 0.55,
  duration: 2.4 + (i % 5) * 0.7,
}));

// Partikel emas yang naik perlahan
const PARTICLES = Array.from({ length: 14 }, (_, i) => ({
  left: (i * 47 + 5) % 100,
  size: 3 + (i % 3) * 2,
  delay: (i * 1.7) % 11,
  duration: 10 + (i % 5) * 2.5,
  drift: (i % 2 ? 1 : -1) * (12 + (i % 4) * 9),
}));

/* ---------- Komponen dekorasi kecil ---------- */

// Lampion (fanous) yang berayun
const Lantern = ({ className, chain, duration, delay }) => (
  <div
    className={`lantern ${className}`}
    style={{
      '--chain': `${chain}px`,
      '--dur': `${duration}s`,
      '--delay': `${delay}s`,
    }}
  >
    <span className="lantern-chain"></span>
    <svg viewBox="0 0 60 96" aria-hidden="true">
      <circle cx="30" cy="6" r="5" fill="none" stroke="#e2b93f" strokeWidth="2" />
      <path d="M30 11 V18" stroke="#e2b93f" strokeWidth="2" />
      <path d="M16 28 Q30 8 44 28 Z" fill="#e2b93f" />
      <rect x="14" y="28" width="32" height="5" rx="2.5" fill="#c9a032" />
      <path
        d="M17 33 C8 52 8 66 17 82 L43 82 C52 66 52 52 43 33 Z"
        fill="rgba(244,208,90,.2)"
        stroke="#e2b93f"
        strokeWidth="2"
      />
      <path
        d="M30 33 V82 M23 33 C18 52 18 66 23 82 M37 33 C42 52 42 66 37 82"
        stroke="#e2b93f"
        strokeWidth="1"
        strokeOpacity=".7"
        fill="none"
      />
      <ellipse className="lantern-flame" cx="30" cy="58" rx="7" ry="13" />
      <rect x="13" y="82" width="34" height="5" rx="2.5" fill="#c9a032" />
      <path d="M23 87 L30 96 L37 87 Z" fill="#e2b93f" />
    </svg>
  </div>
);

// Pola geometris bintang-8 (khas ornamen Islam) yang berputar pelan
const Mandala = ({ className }) => (
  <svg className={`cover-mandala ${className}`} viewBox="0 0 200 200" aria-hidden="true">
    <g fill="none" stroke="currentColor" strokeWidth="0.6">
      <circle cx="100" cy="100" r="96" />
      <circle cx="100" cy="100" r="88" strokeDasharray="2 3" />
      <rect x="32" y="32" width="136" height="136" />
      <rect x="32" y="32" width="136" height="136" transform="rotate(45 100 100)" />
      <circle cx="100" cy="100" r="58" />
      <rect x="58" y="58" width="84" height="84" />
      <rect x="58" y="58" width="84" height="84" transform="rotate(45 100 100)" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <circle key={angle} cx="100" cy="36" r="12" transform={`rotate(${angle} 100 100)`} />
      ))}
      <circle cx="100" cy="100" r="14" />
    </g>
  </svg>
);

// Siluet masjid di bagian bawah dengan jendela yang menyala
const Mosque = () => (
  <div className="cover-mosque">
    <svg viewBox="0 0 800 160" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <g className="mosque-body">
        <rect x="0" y="138" width="800" height="22" />

        {/* kubah utama */}
        <rect x="310" y="105" width="180" height="55" />
        <path d="M310 105 Q310 52 400 52 Q490 52 490 105 Z" />
        <rect x="398" y="30" width="4" height="22" />
        <circle cx="400" cy="26" r="6" />

        {/* kubah kiri */}
        <rect x="220" y="120" width="80" height="40" />
        <path d="M220 120 Q220 88 260 88 Q300 88 300 120 Z" />
        <rect x="259" y="74" width="2" height="14" />

        {/* kubah kanan */}
        <rect x="500" y="120" width="80" height="40" />
        <path d="M500 120 Q500 88 540 88 Q580 88 580 120 Z" />
        <rect x="539" y="74" width="2" height="14" />

        {/* menara kiri */}
        <rect x="124" y="50" width="12" height="110" />
        <rect x="120" y="74" width="20" height="4" />
        <path d="M124 50 L130 20 L136 50 Z" />
        <circle cx="130" cy="16" r="3" />

        {/* menara kanan */}
        <rect x="664" y="50" width="12" height="110" />
        <rect x="660" y="74" width="20" height="4" />
        <path d="M664 50 L670 20 L676 50 Z" />
        <circle cx="670" cy="16" r="3" />

        {/* bangunan rendah di sisi luar */}
        <rect x="20" y="118" width="80" height="42" />
        <rect x="700" y="118" width="80" height="42" />
      </g>

      {/* jendela bercahaya */}
      <rect className="mosque-window" x="372" y="120" width="10" height="24" rx="5" style={{ animationDelay: '0s' }} />
      <rect className="mosque-window" x="418" y="120" width="10" height="24" rx="5" style={{ animationDelay: '1.2s' }} />
      <rect className="mosque-window" x="254" y="132" width="12" height="20" rx="6" style={{ animationDelay: '2.1s' }} />
      <rect className="mosque-window" x="534" y="132" width="12" height="20" rx="6" style={{ animationDelay: '0.7s' }} />
      <rect className="mosque-window" x="48" y="132" width="10" height="18" rx="5" style={{ animationDelay: '1.8s' }} />
      <rect className="mosque-window" x="742" y="132" width="10" height="18" rx="5" style={{ animationDelay: '2.6s' }} />
    </svg>
  </div>
);

/* ---------- Aplikasi ---------- */

function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const mainRef = useRef(null);
  const openTimerRef = useRef(null);

  // Nama tamu dari link, contoh: https://domain.com/?to=Bapak+Budi
  const [guestName] = useState(() => {
    const raw = new URLSearchParams(window.location.search).get('to');
    const name = raw ? raw.trim().slice(0, 60) : '';
    return name || 'Tamu Undangan';
  });

  // Menampilkan tombol scroll-to-top
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Bersihkan timer saat komponen dilepas
  useEffect(() => () => clearTimeout(openTimerRef.current), []);

  // Membuka undangan: cover memudar dulu, lalu isi undangan tampil
  const handleOpenInvitation = () => {
    if (isOpening) return;
    setIsOpening(true);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    openTimerRef.current = setTimeout(() => {
      setIsOpened(true);
      window.scrollTo({
        top: 0,
        behavior: 'instant',
      });
    }, reduceMotion ? 0 : 650);
  };

  // Scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="app">

      {/* Halaman sampul undangan */}
      {!isOpened && (
        <div className={`cover-screen ${isOpening ? 'cover-screen--closing' : ''}`}>
          <div className="cover-bg-pattern"></div>

          {/* ===== Latar islami bergerak ===== */}
          <div className="cover-decor" aria-hidden="true">
            <Mandala className="cover-mandala--outer" />
            <Mandala className="cover-mandala--inner" />

            {STARS.map((star, index) => (
              <span
                key={`star-${index}`}
                className="cover-star"
                style={{
                  left: `${star.left}%`,
                  top: `${star.top}%`,
                  width: star.size,
                  height: star.size,
                  animationDelay: `${star.delay}s`,
                  animationDuration: `${star.duration}s`,
                }}
              />
            ))}

            <span className="cover-moon"></span>

            <Lantern className="lantern--1" chain={46} duration={5.2} delay={0} />
            <Lantern className="lantern--2" chain={30} duration={4.6} delay={-1.4} />
            <Lantern className="lantern--3" chain={72} duration={5.8} delay={-2.2} />
            <Lantern className="lantern--4" chain={54} duration={5} delay={-0.8} />

            {PARTICLES.map((particle, index) => (
              <span
                key={`particle-${index}`}
                className="cover-particle"
                style={{
                  left: `${particle.left}%`,
                  width: particle.size,
                  height: particle.size,
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`,
                  '--drift': `${particle.drift}px`,
                }}
              />
            ))}

            <Mosque />
          </div>

          <div className="cover-content">

            <p className="cover-top">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
            </p>

            <p className="cover-label">
              Undangan Walimatul Khitan
            </p>

            {/* Foto Regista */}
            <div className="cover-photo">
              <div className="cover-photo-inner">
                <div className="cover-photo-placeholder">
                  <img
                    src="/assets/Regista2.png"
                    alt="Foto Regista"
                    className="cover-photo-image"
                  />
                </div>
              </div>

              {/* Ornamen lingkaran */}
              <div className="cover-photo-ring ring1"></div>
              <div className="cover-photo-ring ring2"></div>
            </div>

            <h1 className="cover-name">
              Regista
            </h1>

            <div className="cover-divider">
              <span className="cover-line"></span>
              <span className="cover-ornament">✦</span>
              <span className="cover-line"></span>
            </div>

            <p className="cover-from">
              Kepada Yth.
            </p>

            <p className="cover-guest">
              Bapak / Ibu / Saudara/i
            </p>

            <p className="cover-guest-name">
              {guestName}
            </p>

            <p className="cover-date">
              📅 Sabtu, 12 Desember 2026
            </p>

            <button
              className="cover-open-btn"
              onClick={handleOpenInvitation}
              disabled={isOpening}
            >
              <span className="btn-text">
                Buka Undangan
              </span>

              <span className="btn-icon">
                💌
              </span>
            </button>

            <p className="cover-footer">
              Dengan mengklik tombol di atas,
              Anda membuka undangan ini
            </p>
          </div>

          {/* Ornamen sudut */}
          <div className="corner corner-tl"></div>
          <div className="corner corner-tr"></div>
          <div className="corner corner-bl"></div>
          <div className="corner corner-br"></div>
        </div>
      )}

      {/* Isi utama undangan */}
      {isOpened && (
        <main
          ref={mainRef}
          className="main-content"
        >
          <Navbar guestName={`Kepada Yth. ${guestName}`} />

          <HeroSection />

          <div id="galeri">
            <GallerySection />
          </div>

          <div id="hiburan">
            <EntertainmentSection />
          </div>

          <div id="tamu">
            <GuestScheduleSection />
          </div>

          <div id="doa">
            <GiftRSVPSection />
          </div>
        </main>
      )}

      {/* Tombol kembali ke atas */}
      {isOpened && showScrollTop && (
        <button
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Kembali ke atas"
          title="Kembali ke atas"
        >
          ↑
        </button>
      )}

    </div>
  );
}

export default App;