import './GuestScheduleSection.css'

const scheduleData = [
  { time: '08:00 - 08:30', name: 'Bapak Sutrisno & Keluarga', group: 'Sesi 1' },
  { time: '08:30 - 09:00', name: 'Ibu Kartini & Keluarga', group: 'Sesi 1' },
  { time: '09:00 - 09:30', name: 'Keluarga Besar Pak RT', group: 'Sesi 1' },
  { time: '09:30 - 10:00', name: 'Bapak Hendra & Keluarga', group: 'Sesi 2' },
  { time: '10:00 - 10:30', name: 'Ibu Sari & Keluarga', group: 'Sesi 2' },
  { time: '10:30 - 11:00', name: 'Rekan Kerja & Kolega', group: 'Sesi 2' },
  { time: '11:00 - 11:30', name: 'Bapak Agus & Keluarga', group: 'Sesi 3' },
  { time: '11:30 - 12:00', name: 'Ibu Dewi & Keluarga', group: 'Sesi 3' },
  { time: '12:00 - 13:00', name: 'Keluarga Besar dari Luar Kota', group: 'Sesi Khusus' },
  { time: '13:00 - 17:00', name: 'Umum / Terbuka untuk Semua', group: 'Sesi Resepsi' },
]

const GuestScheduleSection = () => {
  const groups = [...new Set(scheduleData.map(d => d.group))]

  return (
    <section className="schedule-section">
      <div className="section-header">
        <p className="section-subtitle">Jadwal Tamu</p>
        <h2 className="section-title">Tamu Menghadap</h2>
        <div className="gold-divider">
          <span>✦</span>
          <span className="line"></span>
          <span>✦</span>
        </div>
        <p className="event-intro">
          Untuk memastikan kelancaran acara, mohon kehadiran sesuai dengan jadwal yang telah ditentukan
        </p>
      </div>

      <div className="schedule-grid">
        {scheduleData.map((item, idx) => (
          <div key={idx} className={`schedule-row ${item.group === 'Sesi Khusus' || item.group === 'Sesi Resepsi' ? 'schedule-row--special' : ''}`}>
            <div className="schedule-time">
              <span className="time-icon">🕐</span>
              <span>{item.time}</span>
            </div>
            <div className="schedule-divider-dot">
              <div className="dot"></div>
              <div className="dot-line"></div>
            </div>
            <div className="schedule-name">
              <span>{item.name}</span>
              <span className="schedule-group-badge">{item.group}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="schedule-footer">
        <div className="schedule-note">
          <span>📝</span>
          <p>Harap hadir 10 menit sebelum waktu yang ditentukan</p>
        </div>
        <div className="schedule-note">
          <span>💐</span>
          <p>Pakaian resmi / formal dianjurkan</p>
        </div>
      </div>
    </section>
  )
}

const GuestScheduleUpdated = () => {
  const invitees = [
'Bapak Ajat Sudrajat (Orang Tua)',
'Bapak Romaya (Orang Tua)',
'Bapak Haji Hendra (Paman)',
'Bapak Ade Sukmawijaya (Paman)',
'Bapak Agus Mulayana (Kakak)',
'Bapak Nuryana (Kakak Ipar)',
'Bapak Yayan Hendayana, S.T. (Kepala Desa Cikamunding)',
"Bapak Ma'mun Soleh (Mantan Kepala Desa Cikamunding)",
'Bapak Didin Hidayatulloh, S.Sy. (Penyuluh KUA Cilograng)',
'Bapak Hendra Mulyadi S.Ag (Kepala KUA Cilograng)',
'Bapak Syamsul Anjar, S.Sn. (Dalang Muda Cikamunding)',
'Bapak Dudun Nurjaman, S.Pd. (Dewan Guru MA Andalusia Cilograng)',
'Bapak Deri Rusmawan, S.Pd. (Dewan Guru SDN 3 Cikamunding)',
'Bapak Mahadar Junaedi, S.Pd.I. (Dewan Guru SMK Yasmi Cilograng)',
'Bapak Hilah Fatahillah, S.Pd. (Ketua Karang Taruna Kecamatan Cilograng)',
  ]

  return (
    <section className="schedule-section invitee-section">
      <header className="invitee-heading">
        <p className="section-subtitle">Dengan hormat</p>
        <h2 className="section-title">Turut Mengundang</h2>
        <div className="gold-divider" aria-hidden="true"><span>✦</span><span className="line"></span><span>✦</span></div>
      </header>
      <ul className="invitee-list">
        {invitees.map((name) => (
          <li className="invitee-item" key={name}>
            <span className="invitee-dot" aria-hidden="true"></span>
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default GuestScheduleUpdated
