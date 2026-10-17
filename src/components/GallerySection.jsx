import { useState } from 'react'
import './GallerySection.css'

const photoFiles = [
  ['GaleriRegista1', 'WhatsApp Image 2026-10-16 at 19.38.06 (1).jpeg'],
  ['GaleriRegista1', 'WhatsApp Image 2026-10-16 at 19.38.06.jpeg'],
  ['GaleriRegista1', 'WhatsApp Image 2026-10-16 at 19.38.07 (1).jpeg'],
  ['GaleriRegista1', 'WhatsApp Image 2026-10-16 at 19.38.07.jpeg'],
  ['GaleriRegista1', 'WhatsApp Image 2026-10-16 at 19.38.08 (1).jpeg'],
  ['GaleriRegista1', 'WhatsApp Image 2026-10-16 at 19.38.08.jpeg'],
  ['GaleriRegista1', 'WhatsApp Image 2026-10-16 at 19.38.09 (1).jpeg'],
  ['GaleriRegista1', 'WhatsApp Image 2026-10-16 at 19.38.09 (2).jpeg'],
  ['GaleriRegista1', 'WhatsApp Image 2026-10-16 at 19.38.09.jpeg'],
  ['GaleriRegista2', 'WhatsApp Image 2026-10-16 at 19.50.08.jpeg'],
  ['GaleriRegista2', 'WhatsApp Image 2026-10-16 at 19.50.10 (1).jpeg'],
  ['GaleriRegista2', 'WhatsApp Image 2026-10-16 at 19.50.10.jpeg'],
  ['GaleriRegista2', 'WhatsApp Image 2026-10-16 at 19.50.11 (1).jpeg'],
  ['GaleriRegista2', 'WhatsApp Image 2026-10-16 at 19.50.11 (2).jpeg'],
  ['GaleriRegista2', 'WhatsApp Image 2026-10-16 at 19.50.11.jpeg'],
  ['GaleriRegista2', 'WhatsApp Image 2026-10-16 at 19.50.12.jpeg'],
]

const photos = photoFiles.map(([folder, filename], index) => ({
  id: index + 1,
  src: `/assets/${folder}/${encodeURIComponent(filename)}`,
  caption: `Kenangan Regista ${String(index + 1).padStart(2, '0')}`,
}))

const GallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activePhoto = photos[activeIndex]
  const previousPhoto = () => setActiveIndex((index) => (index - 1 + photos.length) % photos.length)
  const nextPhoto = () => setActiveIndex((index) => (index + 1) % photos.length)

  return (
    <section className="gallery-section" aria-labelledby="gallery-title">
      <header className="gallery-heading">
        <p className="gallery-eyebrow">Momen Ceria &amp; Penuh Berkah</p>
        <h2 id="gallery-title">Galeri Foto Kenangan Ananda Regista</h2>
        <p className="gallery-intro">
          Kumpulan potret senyuman manis dan kehangatan Ananda Regista bersama keluarga tercinta.
        </p>
      </header>

      <div className="gallery-frame">
        <div className="gallery-content">
          <div className="gallery-main">
            <div className="gallery-photo-stage">
              <img className="gallery-main-image" src={activePhoto.src} alt={activePhoto.caption} />
              <button className="gallery-nav prev" onClick={previousPhoto} aria-label="Foto sebelumnya">‹</button>
              <button className="gallery-nav next" onClick={nextPhoto} aria-label="Foto berikutnya">›</button>
            </div>
            <div className="gallery-main-overlay">
              <span className="gallery-caption-tag">Kenangan Regista</span>
              <div>
                <h3>{activePhoto.caption}</h3>
                <p>Momen indah yang selalu tersimpan di hati.</p>
              </div>
            </div>
          </div>

          <div className="gallery-controls">
            <div className="gallery-dots" aria-label="Pilih foto">
              {photos.map((photo, index) => (
                <button
                  key={photo.id}
                  className={`gallery-dot ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Tampilkan foto ${index + 1}`}
                  aria-current={index === activeIndex ? 'true' : undefined}
                />
              ))}
            </div>
            <div className="gallery-thumbnails">
              {photos.map((photo, index) => (
                <button
                  key={photo.id}
                  className={`gallery-thumb ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Pilih foto ${index + 1}`}
                  aria-current={index === activeIndex ? 'true' : undefined}
                >
                  <img src={photo.src} alt="" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GallerySection
