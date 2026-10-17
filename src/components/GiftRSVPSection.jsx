import { useEffect, useState } from 'react'
import './GiftRSVPSection.css'

const GiftRSVPSection = () => {
  const [activeTab, setActiveTab] = useState('rsvp')
  const [formData, setFormData] = useState({
    name: '',
    attendance: 'hadir',
    guests: '1',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [copied, setCopied] = useState('')

  const bankAccounts = [
    { bank: 'BCA', number: '1234567890', name: 'Ahmad Fauzi' },
    { bank: 'BRI', number: '0987654321', name: 'Ahmad Fauzi' },
  ]

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(''), 2000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section className="giftrsvp-section">
      <div className="section-header">
        <p className="section-subtitle">Doa Restu & Kado</p>
        <h2 className="section-title">Doa Restu & Kado Dengan Selamat</h2>
        <div className="gold-divider">
          <span>✦</span>
          <span className="line"></span>
          <span>✦</span>
        </div>
      </div>

      <div className="giftrsvp-container">
        {/* RSVP Column */}
        <div className="rsvp-column">
          <div className="rsvp-card">
            <div className="rsvp-card-header">
              <h3>📋 Konfirmasi Kehadiran</h3>
              <p>Mohon isi form di bawah ini untuk konfirmasi kehadiran Anda</p>
            </div>

            {submitted ? (
              <div className="rsvp-success">
                <div className="success-icon">✅</div>
                <h4>Terima Kasih!</h4>
                <p>Konfirmasi kehadiran Anda telah kami terima. Kami sangat menantikan kehadiran Anda!</p>
                <button className="btn-gold" onClick={() => setSubmitted(false)}>Kirim Lagi</button>
              </div>
            ) : (
              <form className="rsvp-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Nama Lengkap</label>
                  <input
                    type="text"
                    placeholder="Masukkan nama lengkap Anda"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Konfirmasi Kehadiran</label>
                  <div className="attendance-options">
                    {['hadir', 'tidak-hadir', 'mungkin'].map(opt => (
                      <button
                        key={opt}
                        type="button"
                        className={`attendance-btn ${formData.attendance === opt ? 'active' : ''}`}
                        onClick={() => setFormData({...formData, attendance: opt})}
                      >
                        {opt === 'hadir' ? '✅ Hadir' : opt === 'tidak-hadir' ? '❌ Tidak Hadir' : '🤔 Mungkin'}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>Jumlah Tamu</label>
                  <select
                    value={formData.guests}
                    onChange={e => setFormData({...formData, guests: e.target.value})}
                  >
                    {[1,2,3,4,5].map(n => (
                      <option key={n} value={n}>{n} Orang</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label>Pesan & Doa</label>
                  <textarea
                    placeholder="Tulis pesan dan doa untuk Ananda Regista..."
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button type="submit" className="btn-primary rsvp-submit-btn">
                  Kirim Konfirmasi 🎉
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Gift Column */}
        <div className="gift-column">
          <div className="gift-card">
            <div className="gift-card-header">
              <h3>🎁 Kado Digital</h3>
              <p>Bagi yang ingin memberikan hadiah / kado secara digital, dapat melalui transfer ke rekening berikut</p>
            </div>

            <div className="bank-accounts">
              {bankAccounts.map((acc, idx) => (
                <div key={idx} className="bank-item">
                  <div className="bank-logo">{acc.bank}</div>
                  <div className="bank-info">
                    <p className="bank-name">{acc.bank}</p>
                    <p className="bank-number">{acc.number}</p>
                    <p className="bank-holder">a.n. {acc.name}</p>
                  </div>
                  <button
                    className="copy-btn"
                    onClick={() => handleCopy(acc.number, acc.bank)}
                  >
                    {copied === acc.bank ? '✓ Disalin!' : '📋 Salin'}
                  </button>
                </div>
              ))}
            </div>

            <div className="gift-address">
              <h4>📦 Kado Fisik</h4>
              <p>Dapat diantarkan langsung ke kediaman kami:</p>
              <div className="address-box">
                <p><strong>Keluarga Ahmad Fauzi</strong></p>
                <p>Jl. Merdeka No. 123</p>
                <p>Kelurahan Cipayung, Jakarta Timur</p>
                <p>DKI Jakarta 13840</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Closing message */}
      <div className="giftrsvp-closing">
        <div className="closing-ornament">✦</div>
        <p className="closing-text">
          Doa dan kehadiran Anda adalah hadiah terindah bagi kami dan Ananda Regista
        </p>
        <p className="closing-arabic">جَزَاكُمُ اللهُ خَيْرًا وَبَارَكَ اللهُ فِيكُمْ</p>
        <p className="closing-sub">Jazaakumullahu khairan wa baarakallahu fiikum</p>
        <div className="closing-family">
          <p>Keluarga Besar</p>
          <p className="family-name">Ahmad Fauzi & Siti Rahayu</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-ornament">
          <div className="footer-logo">🌿</div>
        </div>
        <p className="footer-brand">Khitanan Regista</p>
        <p className="footer-copy">© 2025 · Dibuat dengan ❤️ untuk Ananda Regista</p>
        <p className="footer-powered">Powered by React JS</p>
      </footer>
    </section>
  )
}

const GiftRSVPRedesigned = () => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [greetings, setGreetings] = useState([])
  const [loadingGreetings, setLoadingGreetings] = useState(true)
  const [savingGreeting, setSavingGreeting] = useState(false)
  const [greetingStatus, setGreetingStatus] = useState('')
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL?.replace(/\/$/, '')
  const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY

  useEffect(() => {
    if (!supabaseUrl || !supabaseKey) {
      setGreetingStatus('Ucapan online belum tersambung. Pengelola perlu mengatur koneksi database.')
      setLoadingGreetings(false)
      return
    }

    const controller = new AbortController()
    const loadGreetings = async () => {
      try {
        const response = await fetch(`${supabaseUrl}/rest/v1/greetings?select=id,name,message,created_at&order=created_at.desc&limit=100`, {
          headers: { apikey: supabaseKey, Authorization: `Bearer ${supabaseKey}` },
          signal: controller.signal,
        })
        if (!response.ok) throw new Error('Gagal memuat ucapan.')
        setGreetings(await response.json())
        setGreetingStatus('')
      } catch (error) {
        if (error.name !== 'AbortError') setGreetingStatus('Ucapan belum dapat dimuat. Silakan coba lagi nanti.')
      } finally {
        if (!controller.signal.aborted) setLoadingGreetings(false)
      }
    }

    loadGreetings()
    const refreshId = window.setInterval(loadGreetings, 15000)
    return () => {
      controller.abort()
      window.clearInterval(refreshId)
    }
  }, [supabaseUrl, supabaseKey])

  const handleGreeting = async (event) => {
    event.preventDefault()
    if (!supabaseUrl || !supabaseKey) {
      setGreetingStatus('Ucapan online belum tersambung. Pengelola perlu mengatur koneksi database.')
      return
    }

    setSavingGreeting(true)
    setGreetingStatus('')
    try {
      const response = await fetch(`${supabaseUrl}/rest/v1/greetings`, {
        method: 'POST',
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json',
          Prefer: 'return=representation',
        },
        body: JSON.stringify({ name: name.trim(), message: message.trim() }),
      })
      if (!response.ok) throw new Error('Gagal menyimpan ucapan.')
      const [savedGreeting] = await response.json()
      setGreetings((items) => [savedGreeting, ...items].slice(0, 100))
      setName('')
      setMessage('')
      setGreetingStatus('Ucapan berhasil dikirim.')
    } catch {
      setGreetingStatus('Ucapan belum berhasil disimpan. Silakan coba lagi.')
    } finally {
      setSavingGreeting(false)
    }
  }

  return (
    <section className="giftrsvp-section">
      <header className="giftrsvp-heading">
        <p className="section-subtitle">Doa Restu &amp; Kartu Ucapan</p>
        <h2 className="section-title">Doa Restu &amp; Kartu Ucapan Selamat</h2>
        <p className="giftrsvp-intro">Sampaikan doa dan ucapan terbaik untuk Ananda Regista dan keluarga.</p>
      </header>

      <div className="greeting-grid">
        <div className="greeting-compose">
          <div className="greeting-card-title">
            <span className="greeting-mark" aria-hidden="true">✦</span>
            <div>
              <h3>Kirim Doa &amp; Ucapan Selamat</h3>
              <p>Doa tulus Anda menjadi hadiah yang sangat berarti bagi keluarga.</p>
            </div>
          </div>
          <form className="greeting-form" onSubmit={handleGreeting}>
            <div className="form-group">
              <label htmlFor="greeting-name">Nama Pengirim / Keluarga</label>
              <input id="greeting-name" type="text" placeholder="Contoh: Bapak Ahmad & keluarga" value={name} onChange={(event) => setName(event.target.value)} maxLength={80} required />
            </div>
            <div className="form-group">
              <label htmlFor="greeting-message">Ucapan Doa &amp; Ucapan Selamat</label>
              <textarea id="greeting-message" placeholder="Tuliskan doa dan ucapan untuk Ananda Regista..." rows={4} value={message} onChange={(event) => setMessage(event.target.value)} maxLength={500} required />
            </div>
            <button type="submit" className="btn-primary rsvp-submit-btn" disabled={savingGreeting}>
              {savingGreeting ? 'Menyimpan…' : 'Kirim Doa & Restu'}
            </button>
            {greetingStatus && <p className="greeting-status" role="status">{greetingStatus}</p>}
          </form>
        </div>

        <div className="greeting-board" aria-live="polite">
          <div className="greeting-board-heading">
            <div>
              <h3>Ucapan Doa Para Tamu</h3>
              <p>{loadingGreetings ? 'Memuat ucapan…' : `${greetings.length} ucapan terbaru`}</p>
            </div>
            <span className="greeting-board-icon" aria-hidden="true">♡</span>
          </div>
          <div className="greeting-list">
            {greetings.length ? greetings.map((item) => (
              <article className="greeting-message" key={item.id}>
                <h4>{item.name}</h4>
                <p>{item.message}</p>
              </article>
            )) : loadingGreetings ? (
              <div className="greeting-empty"><p>Memuat ucapan…</p></div>
            ) : (
              <div className="greeting-empty">
                <span aria-hidden="true">✧</span>
                <p>Jadilah yang pertama mengirim doa dan ucapan untuk Regista.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <aside className="restaurant-card" aria-label="Ayam Penyet Cabe Ijo AA Sipit">
        <img src="/assets/Logo%20Ayam%20Penyet.jpeg" alt="Logo Ayam Penyet Cabe Ijo AA Sipit" />
        <div className="restaurant-info">
          <p className="restaurant-kicker"> Keluarga Besar</p>
          <h3>Ayam Penyet Cabe Ijo AA Sipit</h3>
          <p className="restaurant-tagline">Ingat pedas, ingat AA Sipit</p>
        </div>
        <a className="restaurant-contact" href="https://wa.me/6285706283725" target="_blank" rel="noreferrer">Hubungi WhatsApp</a>
      </aside>

      <footer className="invitation-footer">
        <a className="footer-identity" href="#beranda" aria-label="Kembali ke halaman utama">
          <img src="/assets/Logo%20Ayam%20Penyet.jpeg" alt="" />
          <span>
            <strong>Walimatul Khitan Regista</strong>
            <small>Dengan penuh syukur dan doa</small>
          </span>
        </a>
        <nav className="footer-links" aria-label="Tautan footer">
          <a href="#beranda">Beranda</a>
          <a href="#galeri">Galeri</a>
          <a href="#doa">Doa &amp; Ucapan</a>
        </nav>
        <p className="footer-copyright">© {new Date().getFullYear()} Keluarga Regista</p>
      </footer>
    </section>
  )
}

export default GiftRSVPRedesigned
