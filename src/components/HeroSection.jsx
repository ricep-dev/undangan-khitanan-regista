import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import './HeroSection.css'

/* ---------- Konstanta acara ---------- */
const ADDRESS =
  '39QH+5MW, Kp. Pasir Bodas, RT.001/RW.005, Cikamunding, Kec. Cilograng, Kabupaten Lebak, Banten 42393'

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`

// Acara: Sabtu, 12 Desember 2026 pukul 09.00 WIB (asumsi selesai 13.00 WIB)
const CALENDAR_URL = `https://calendar.google.com/calendar/render?${new URLSearchParams({
  action: 'TEMPLATE',
  text: 'Walimatul Khitan Regista',
  dates: '20261212T090000/20261212T130000',
  ctz: 'Asia/Jakarta',
  details: 'Tasyakuran & Walimatul Khitan Regista, putra dari Bapak AA Sipit & Ibu Resi Dayanti.',
  location: ADDRESS,
}).toString()}`

const EVENT_DATE = new Date('2026-12-12T09:00:00+07:00')

// Bintang berkelip (deterministik, tanpa random)
const STARS = Array.from({ length: 26 }, (_, i) => ({
  left: (i * 37 + 11) % 100,
  top: (i * 53 + 7) % 34,
  size: 2 + (i % 3),
  delay: (i % 8) * 0.55,
  duration: 2.4 + (i % 5) * 0.7,
}))

/* ---------- Dekorasi ---------- */

// Pola geometris bintang-8 yang berputar pelan di belakang foto
const Mandala = ({ className }) => (
  <svg className={className} viewBox="0 0 200 200" aria-hidden="true">
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
)

/* ---------- Animasi muncul saat di-scroll ---------- */
const useReveal = (ref) => {
  useLayoutEffect(() => {
    const root = ref.current
    if (!root) return undefined

    const items = root.querySelectorAll('[data-reveal]')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'))
      return undefined
    }

    root.classList.add('hero-reveal-ready')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    items.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ref])
}

/* ---------- Hero ---------- */
const HeroSection = () => {
  const sectionRef = useRef(null)
  useReveal(sectionRef)

  return (
    <section className="hero-section" id="beranda" ref={sectionRef}>
      <div className="hero-bg-pattern"></div>

      {/* Bintang berkelip */}
      <div className="hero-decor" aria-hidden="true">
        {STARS.map((star, index) => (
          <span
            key={index}
            className="hero-star"
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
      </div>

      {/* Tag label */}
      <div className="hero-tag">
        <span className="tag-icon">🌙</span>
        <span>TASYAKURAN & WALIMATUL KHITAN</span>
      </div>

      {/* Title */}
      <div className="hero-title-block">
        <p className="hero-script">Menyambut Berkah & Kesalehan</p>
        <h1 className="hero-main-title">Walimatul Khitan</h1>
        <h2 className="hero-name-title">Regista</h2>
        <div className="hero-divider-line">
          <span className="div-line"></span>
          <span className="div-ornament">❧</span>
          <span className="div-line"></span>
        </div>
        <p className="hero-parents-label">Putra / Putri tercinta dari Pasangan</p>
        <p className="hero-parents-name">
          <strong>Bapak AA Sipit</strong> &amp; <strong>Ibu Resi Dayanti</strong>
        </p>
      </div>

      {/* Photo frame */}
      <div className="hero-photo-container">
        <Mandala className="hero-mandala hero-mandala--outer" />
        <Mandala className="hero-mandala hero-mandala--inner" />

        <div className="hero-photo-frame">
          <div className="hero-photo-ring ring-outer"></div>
          <div className="hero-photo-ring ring-inner"></div>
          <div className="hero-photo-inner">
            <div className="hero-photo-placeholder">
              <img className="hero-regista-photo" src="/assets/Regista2.png" alt="Regista" />
              <span>👦</span>
            </div>
          </div>
          <div className="hero-photo-deco deco-tl">✦</div>
          <div className="hero-photo-deco deco-tr">✦</div>
          <div className="hero-photo-deco deco-bl">✦</div>
          <div className="hero-photo-deco deco-br">✦</div>
        </div>
      </div>

      {/* Date */}
      <div className="hero-date-box">
        <span className="hero-date-icon" aria-hidden="true">📅</span>
        <span className="hero-date-text">
          <strong>Sabtu, 12 Desember 2026</strong>
          <small>Pukul 09.00 WIB</small>
        </span>
      </div>

      {/* Countdown */}
      <div className="hero-countdown-label">MENGHITUNG HARI BAHAGIA MENUJU ACARA</div>
      <CountdownTimer />

      {/* CTA */}
      <div className="hero-buttons">
        <a
          href={CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-hero-primary"
        >
          <span aria-hidden="true">📆</span> Simpan ke Google Calendar
        </a>
      </div>

      <div className="hero-location-card" data-reveal="up">
        <div className="hero-location-heading">
          <span className="hero-location-pin" aria-hidden="true">📍</span>
          <div>
            <p className="hero-location-eyebrow">LOKASI ACARA</p>
            <h3>Temukan lokasi kami</h3>
          </div>
        </div>
        <a
          className="hero-location-map"
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Buka lokasi acara di Google Maps"
        >
          <img src="/assets/Alamat.png" alt="Peta lokasi acara" />
          <span className="hero-map-open">Buka peta <span aria-hidden="true">↗</span></span>
        </a>
        <p className="hero-location-address">
          39QH+5MW, Kp. Pasir Bodas, RT.001/RW.005, Cikamunding, Kec. Cilograng,<br className="hero-address-break" /> Kabupaten Lebak, Banten 42393
        </p>
        <a
          className="hero-location-directions"
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span aria-hidden="true">📍</span> Lihat petunjuk arah
        </a>
      </div>

      {/* Info card below */}
      <InfoCard />
    </section>
  )
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const updateTimer = () => {
      const diff = EVENT_DATE - new Date()
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)
    return () => clearInterval(interval)
  }, [])

  const units = [
    { value: timeLeft.days, label: 'HARI' },
    { value: timeLeft.hours, label: 'JAM' },
    { value: timeLeft.minutes, label: 'MENIT' },
    { value: timeLeft.seconds, label: 'DETIK' },
  ]

  return (
    <div className="countdown-container">
      {units.map(({ value, label }) => (
        <div key={label} className="countdown-item">
          <div className="countdown-box">
            {/* key = value, supaya angka beranimasi tiap kali berganti */}
            <span key={value} className="countdown-number">{String(value).padStart(2, '0')}</span>
          </div>
          <span className="countdown-label">{label}</span>
        </div>
      ))}
    </div>
  )
}

const InfoCard = () => {
  return (
    <div className="info-card" data-reveal="up">
      <div className="info-card-header">
        <h3>Assalamu'alaikum Warahmatullahi Wabarakatuh</h3>
        <p className="info-card-sub">
          Dengan memohon rahmat dan ridho Allah SWT, kami sekeluarga bermaksud menyelenggarakan
          Syukuran Khitanan putra/putri kami tercinta.
        </p>
        <h4 className="info-card-name">Regista</h4>
        <p className="info-card-desc">
          Semoga ananda selalu diberikan kesehatan menjadi pribadi yang sholeh/i cerdas.
          Kami kepada Allah Swt Tuhan Allahu, berbuat kepada keduanya dengan kebaikan selama
          hidup di dunia, serta berbagai pergaulan hidup di agama, nusa, dan bangsa. Aamiin Ya
          Rabbah Aamiin.
        </p>
      </div>

      <div className="info-parents-cards">
        {/* Father */}
        <div className="parent-card parent-card--father" data-reveal="left">
          <div className="parent-photo">
            <img className="parent-portrait" src="/assets/Ayah.jpeg" alt="Ayah Regista bersama Regista" />
            <div className="parent-photo-placeholder" aria-hidden="true"><span>👨‍👩‍👦</span></div>
          </div>
          <div className="parent-info">
            <p className="parent-role">AYAH KAMI TERCINTA</p>
            <h4 className="parent-name">AA Sipit</h4>
            <p className="parent-detail">Sosok ayah yang penuh kasih,</p>
            <p className="parent-detail">pelindung keluarga yang senantiasa berjuang,</p>
            <p className="parent-address">serta menjadi teladan dalam setiap langkah.</p>
            <div className="parent-link">
              <span>🌿</span>
              <span>Ayah & Pelindung Keluarga</span>
            </div>
          </div>
        </div>

        {/* Mother */}
        <div className="parent-card parent-card--mother" data-reveal="right">
          <div className="parent-photo">
            <img className="parent-portrait" src="/assets/Ibu.jpeg" alt="Ibu Regista bersama Regista" />
            <div className="parent-photo-placeholder" aria-hidden="true"><span>🏡</span></div>
          </div>
          <div className="parent-info">
            <p className="parent-role">IBU KAMI TERCINTA</p>
            <h4 className="parent-name">Ibu Resi Dayanti</h4>
            <p className="parent-detail">Sosok ibu yang penuh kelembutan,</p>
            <p className="parent-detail">sumber kasih sayang dan doa yang tak pernah putus,</p>
            <p className="parent-detail">serta madrasah pertama bagi keluarga.</p>
            <div className="parent-link">
              <span>🌸</span>
              <span>Ibu & Madrasah Utama</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom quote */}
      <div className="info-quote">
        <p>
          ""Dengan segala kerendahan hati, kami memohon doa restu agar senantiasa diberikan keberkahan, kesehatan, dan kebahagiaan. Semoga setiap doa yang terucap menjadi kebaikan, serta setiap langkah selalu dalam lindungan dan ridha Allah SWT.""
        </p>
        <p className="info-quote-sign">— SALAM HANGAT KELUARGA BESAR AA SIPIT &amp; RESI DAYANTI</p>
      </div>

      {/* Ikon dekoratif */}
      <div className="info-card-open" aria-hidden="true">
        <span className="open-icon">↗</span>
      </div>
    </div>
  )
}

export default HeroSection