import './EntertainmentSection.css'

const entertainments = [
  {
    id: 1,
    icon: '🎵',
    title: 'Hiburan Musik Islami',
    description: 'Penampilan sholawat dan musik Islami yang meriah dari grup musik terbaik',
    time: '13:00 - 15:00 WIB',
    tag: 'LIVE',
    features: ['Sholawat Nabi', 'Kasidah Modern', 'Nasyid Group']
  },
  {
    id: 2,
    icon: '🎭',
    title: 'Pesta Hiburan Seni',
    description: 'Pertunjukan seni budaya yang memukau dan menghibur seluruh tamu undangan',
    time: '15:00 - 17:00 WIB',
    tag: 'SENI',
    features: ['Tari Daerah', 'Atraksi Budaya', 'Pentas Seni']
  },
]

const EntertainmentSection = () => {
  return (
    <section className="entertain-section">
      <div className="section-header">
        <p className="section-subtitle">Kemeriahan</p>
        <h2 className="section-title">Semeriah Pesta Hiburan Seni</h2>
        <div className="gold-divider">
          <span>✦</span>
          <span className="line"></span>
          <span>✦</span>
        </div>
        <p className="event-intro">
          Nikmati berbagai hiburan seni dan pertunjukan istimewa yang akan memeriahkan acara khitan Ananda Regista
        </p>
      </div>

      <div className="entertain-grid">
        {entertainments.map((item) => (
          <div key={item.id} className="entertain-card">
            <div className="entertain-card-top">
              <div className="entertain-icon-wrap">
                <span className="entertain-icon">{item.icon}</span>
              </div>
              <div className="entertain-badge">{item.tag}</div>
            </div>
            <h3 className="entertain-title">{item.title}</h3>
            <p className="entertain-desc">{item.description}</p>
            <div className="entertain-time">
              <span>🕐</span>
              <span>{item.time}</span>
            </div>
            <ul className="entertain-features">
              {item.features.map((feat, i) => (
                <li key={i}>
                  <span className="feat-check">✓</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            <button className="entertain-btn">Selengkapnya →</button>
          </div>
        ))}
      </div>

      {/* Featured banner */}
      <div className="entertain-banner">
        <div className="banner-icon">🎊</div>
        <div className="banner-content">
          <h3>Spesial! Doorprize & Hadiah Menarik</h3>
          <p>Akan ada banyak hadiah menarik dan kejutan untuk para tamu undangan yang hadir</p>
        </div>
        <button className="btn-gold-outline">Info Lengkap</button>
      </div>
    </section>
  )
}

const EntertainmentShowcase = () => (
  <section className="entertain-section showcase-section">
    <div className="showcase-shell">
      <header className="showcase-heading">
        <p className="showcase-eyebrow"><span aria-hidden="true">♫</span> Pentas Budaya Sunda Akbar</p>
        <h2>Semarak Pesta Hiburan Seni</h2>
        <p>Sebagai ungkapan rasa syukur dan pelestarian adat seni Pasundan, perhelatan khitanan Ananda Regista dimeriahkan dengan pentas seni istimewa sepanjang hari.</p>
      </header>

      <div className="showcase-events">
        <article className="showcase-event">
          <div className="showcase-event-top">
            <span className="showcase-time">Pukul 09.00–17.00 WIB</span>
            <span className="showcase-symbol" aria-hidden="true">♫</span>
          </div>
          <h3>Pentas Siang: Musik Pongdut</h3>
          <p className="showcase-description">Suguhan seni pongdut kontemporer yang semarak, mengajak sanak saudara dan hadirin bersilaturahmi dalam keceriaan alunan kendang Sunda yang rancak.</p>
          <p className="showcase-detail"><span aria-hidden="true">♪</span> Panggung Gembira Syukuran Khitan Regista</p>
        </article>

        <article className="showcase-event showcase-event--dalang">
          <div className="showcase-event-top">
            <span className="showcase-time">Pukul 20.00 WIB s/d selesai</span>
            <img className="dalang-photo" src="/assets/Dalang%20Anjar.jpg" alt="Ki Dalang Anjar Muhtar" />
          </div>
          <h3>Pentas Malam: Wayang Golek</h3>
          <p className="showcase-subtitle">Pagelaran Akbar Bale Bandung</p>
          <p className="showcase-dalang-name">Ki Dalang Anjar Muhtar AS</p>
          <p className="showcase-description">Saksikan pagelaran seni Wayang Golek yang memadukan pitutur luhur, nilai-nilai kehidupan, dan pesan budi pekerti, diselingi guyonan khas Cepot dan Dawala yang menghibur. Sebuah persembahan seni budaya Sunda yang menghadirkan tuntunan dan tontonan dalam satu malam penuh makna.</p>
          <p className="showcase-detail"><span aria-hidden="true">✺</span> Melestarikan Seni Tradisi, Menghidupkan Warisan Budaya Sunda.</p>
        </article>
      </div>

      <aside className="guest-stars">
        <div className="guest-star-photos" aria-label="Foto bintang tamu">
          <img src="/assets/ohang.jpg" alt="Ohang" />
          <img src="/assets/Fanny%20Sabilla.jpg" alt="Fanny Sabilla" />
        </div>
        <div className="guest-stars-copy">
          <p className="guest-stars-eyebrow">Bintang Tamu Kehormatan</p>
          <h3>Mang Ohang &amp; Fanny Sabilla</h3>
          <p>Hadir memeriahkan gelak tawa dan suasana gembira di panggung hiburan.</p>
        </div>
        <span className="guest-stars-badge">Live Eksklusif Dari 19.00 WIB</span>
      </aside>
    </div>
  </section>
)

export default EntertainmentShowcase
