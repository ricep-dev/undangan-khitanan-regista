import './CoupleSectionKhitan.css'

const CoupleSectionKhitan = () => {
  return (
    <section className="couple-section">
      <div className="section-header">
        <p className="section-subtitle">Bismillahirrahmanirrahim</p>
        <h2 className="section-title">Yang Akan Dikhitan</h2>
        <div className="gold-divider">
          <span>✦</span>
          <span className="line"></span>
          <span>✦</span>
        </div>
      </div>

      <div className="couple-content">
        <p className="couple-intro">
          Dengan penuh rasa syukur dan kebahagiaan, kami mengumumkan pelaksanaan khitan putra kami
        </p>

        <div className="couple-cards">
          {/* Child card */}
          <div className="couple-card">
            <div className="card-photo-frame">
              <div className="card-photo-inner">
                <div className="card-photo-placeholder">
                  <span>👦</span>
                </div>
              </div>
              <div className="card-photo-ornament"></div>
            </div>
            <h3 className="card-name">Regista Putra Fauzi</h3>
            <p className="card-role">Putra Pertama</p>
            <div className="card-divider"></div>
            <p className="card-parents">Putra dari :<br />
              <strong>Bapak Ahmad Fauzi</strong><br />
              <strong>Ibu Siti Rahayu</strong>
            </p>
          </div>

          {/* Parents card */}
          <div className="couple-card">
            <div className="card-photo-frame">
              <div className="card-photo-inner">
                <div className="card-photo-placeholder family">
                  <span>👨‍👩‍👦</span>
                </div>
              </div>
              <div className="card-photo-ornament"></div>
            </div>
            <h3 className="card-name">Keluarga Besar</h3>
            <p className="card-role">Ahmad Fauzi</p>
            <div className="card-divider"></div>
            <p className="card-parents">
              Beralamat di :<br />
              <strong>Jl. Merdeka No. 123</strong><br />
              <strong>Kota Jakarta Timur</strong>
            </p>
          </div>
        </div>

        <div className="couple-quote-box">
          <p className="couple-quote">
            "Dan Kami ilhamkan kepada ibu Musa; Susuilah dia, dan apabila kamu khawatir terhadapnya maka jatuhkanlah dia ke sungai (Nil). Dan janganlah kamu khawatir dan jangan (pula) bersedih hati, karena sesungguhnya Kami akan mengembalikannya kepadamu..."
          </p>
          <p className="couple-quote-source">— Q.S. Al-Qashash: 7</p>
        </div>

        <button className="btn-gold">📍 Lihat Lokasi Acara</button>
      </div>
    </section>
  )
}

export default CoupleSectionKhitan
