import './EventSection.css'

const events = [
  {
    id: 1,
    icon: '✂️',
    title: 'Acara Khitan',
    day: 'Sabtu',
    date: '25 Oktober 2025',
    time: '08:00 - 12:00 WIB',
    location: 'Rumah Kediaman',
    address: 'Jl. Merdeka No. 123, Jakarta Timur',
    color: 'green'
  },
  {
    id: 2,
    icon: '🎊',
    title: 'Resepsi & Walimah',
    day: 'Sabtu',
    date: '25 Oktober 2025',
    time: '12:00 - 17:00 WIB',
    location: 'Aula Keluarga',
    address: 'Jl. Merdeka No. 123, Jakarta Timur',
    color: 'gold'
  },
  {
    id: 3,
    icon: '🎵',
    title: 'Hiburan & Doa Bersama',
    day: 'Sabtu',
    date: '25 Oktober 2025',
    time: '17:00 - 21:00 WIB',
    location: 'Halaman Rumah',
    address: 'Jl. Merdeka No. 123, Jakarta Timur',
    color: 'green'
  },
]

const EventSection = () => {
  return (
    <section className="event-section">
      <div className="section-header">
        <p className="section-subtitle">Rangkaian</p>
        <h2 className="section-title">Rangkaian Acara Khitan</h2>
        <div className="gold-divider">
          <span>✦</span>
          <span className="line"></span>
          <span>✦</span>
        </div>
        <p className="event-intro">
          Dengan penuh kebahagiaan, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dalam rangkaian acara khitan putra kami
        </p>
      </div>

      <div className="event-cards">
        {events.map((event) => (
          <div key={event.id} className={`event-card event-card--${event.color}`}>
            <div className="event-card-icon">{event.icon}</div>
            <div className="event-card-content">
              <h3 className="event-card-title">{event.title}</h3>
              <div className="event-card-detail">
                <span className="event-icon-sm">📅</span>
                <span>{event.day}, {event.date}</span>
              </div>
              <div className="event-card-detail">
                <span className="event-icon-sm">🕐</span>
                <span>{event.time}</span>
              </div>
              <div className="event-card-detail">
                <span className="event-icon-sm">📍</span>
                <div>
                  <p className="event-location-name">{event.location}</p>
                  <p className="event-location-address">{event.address}</p>
                </div>
              </div>
              <button className="event-map-btn">Lihat di Maps →</button>
            </div>
          </div>
        ))}
      </div>

      {/* Map preview */}
      <div className="event-map-section">
        <div className="event-map-placeholder">
          <div className="map-pin">📍</div>
          <p>Jl. Merdeka No. 123, Jakarta Timur</p>
          <button className="btn-gold map-btn">Buka Google Maps</button>
        </div>
      </div>
    </section>
  )
}

export default EventSection
