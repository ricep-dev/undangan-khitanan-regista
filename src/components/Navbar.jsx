import { useState, useEffect } from 'react'
import './Navbar.css'

const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Galeri Foto', href: '#galeri' },
  { label: 'Hiburan Seni', href: '#hiburan' },
  { label: 'Turut Mengundang', href: '#tamu' },
  { label: 'Doa & Ucapan', href: '#doa' },
]

const Navbar = ({ guestName }) => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('beranda')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const sectionIds = navLinks.map((link) => link.href.slice(1))
      for (let index = sectionIds.length - 1; index >= 0; index -= 1) {
        const section = document.getElementById(sectionIds[index])
        if (section && section.getBoundingClientRect().top <= 88) {
          setActiveSection(sectionIds[index])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    const section = document.getElementById(href.slice(1))
    if (section) {
      window.scrollTo({
        top: section.getBoundingClientRect().top + window.scrollY - 76,
        behavior: 'smooth',
      })
    }
    setMenuOpen(false)
  }

  const links = (className) => navLinks.map((link) => {
    const id = link.href.slice(1)
    return (
      <li key={link.label}>
        <a
          href={link.href}
          className={`${className} ${activeSection === id ? 'active' : ''}`}
          onClick={(event) => { event.preventDefault(); handleNavClick(link.href) }}
        >
          {link.label}
        </a>
      </li>
    )
  })

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} aria-label="Navigasi utama">
        <div className="navbar-inner">
          <a className="navbar-logo" href="#beranda" onClick={() => handleNavClick('#beranda')}>
            <img className="logo-icon" src="/assets/Logo%20Ayam%20Penyet.jpeg" alt="Logo Ayam Penyet Cabe Ijo AA Sipit" />
            <span className="logo-text">
              <span className="logo-main">Walimatul Khitan</span>
              <span className="logo-sub">REGISTA</span>
            </span>
          </a>

          <ul className="navbar-links">{links('navbar-link')}</ul>

          <div className="navbar-right">
            <a className="navbar-promo" href="#doa" onClick={() => handleNavClick('#doa')}>
              <span aria-hidden="true">✦</span>
              <span>Ayam Penyet Cabe Ijo AA Sipit</span>
            </a>
            <button
              className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)}>
          <nav id="mobile-navigation" className="mobile-menu" aria-label="Navigasi ponsel" onClick={(event) => event.stopPropagation()}>
            <div className="mobile-menu-header">
              <span className="logo-text">
                <span className="logo-main">Walimatul Khitan</span>
                <span className="logo-sub">REGISTA</span>
              </span>
              <button className="mobile-close" onClick={() => setMenuOpen(false)} aria-label="Tutup menu">×</button>
            </div>
            <ul className="mobile-links">{links('mobile-link')}</ul>
          </nav>
        </div>
      )}
    </>
  )
}

export default Navbar
