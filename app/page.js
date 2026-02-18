import ScrollPhysicsClient from '../components/ScrollPhysicsClient'

export default function Home() {
  return (
    <>
      <div className="grain-overlay" />
      <div className="vignette-overlay" />

      <nav className="navbar" id="navbar">
        <a href="#hero" className="nav-link">Experiencia</a>
        <a href="#about" className="nav-link">Maestros</a>
        <a href="#chapters" className="nav-link">Reservar</a>
      </nav>

      <main id="smooth-wrapper">
        <section className="hero-scroll" id="hero">
          <div className="sticky-frame">
            <div className="samurai-container">
              <img
                src="/samurai1.png"
                alt="Samurai Base"
                className="samurai-base"
                id="samurai1"
              />
              <img
                src="/samurai2.png"
                alt="Samurai Katana"
                className="samurai-upgraded"
                id="samurai2"
              />

              <div className="armor-layer" id="armor-parts">
                <img
                  src="/helmet.png"
                  className="armor-part"
                  id="part-helmet"
                  alt=""
                />
                <img
                  src="/body.png"
                  className="armor-part"
                  id="part-body"
                  alt=""
                />
                <img
                  src="/left_arm2.png"
                  className="armor-part"
                  id="part-left-arm"
                  alt=""
                />
                <img
                  src="/right_arm.png"
                  className="armor-part"
                  id="part-right-arm"
                  alt=""
                />
                <img
                  src="/shoulders.png"
                  className="armor-part"
                  id="part-shoulders"
                  alt=""
                />
              </div>
            </div>

            <div className="hero-overlay">
              <div className="text-mask">
                <h1 className="hero-title">SAMURAI KATANA</h1>
              </div>
              <div className="text-mask">
                <p className="hero-subtitle">
                  Alicante centro. Pescado de lonja. Corte a katana. Precisión ceremonial.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-container">
            <div className="reveal-mask">
              <h2 className="section-title">El Arte del Maestro</h2>
            </div>
            <div className="reveal-mask">
              <p className="section-text">
                La hoja no es metal: es técnica. Pescado fresco de lonja, forjado y cortado a
                katana por nuestro Maestro Samurai. En el corazón de Alicante, donde el mar
                dicta el menú, cada corte honra la tradición y la precisión ceremonial.
              </p>
            </div>
          </div>
        </section>

        <section className="chapters-section" id="chapters">
          <h2 className="section-title main-title">Los Siete Maestros</h2>
          <div className="chapters-grid">

            <div className="chapter-card">
              <span className="chapter-number">01/05</span>
              <h3>El Forjador</h3>
              <span className="chapter-subtitle">Hattori Hanzo</span>
              <p>La hoja no es metal: es técnica. Cada corte honra el mar de Alicante.</p>
            </div>

            <div className="chapter-card">
              <span className="chapter-number">02/05</span>
              <h3>La Disciplina</h3>
              <span className="chapter-subtitle">Pai Mei</span>
              <p>Ritual, pulso y silencio. Así nace el nigiri perfecto.</p>
            </div>

            <div className="chapter-card">
              <span className="chapter-number">03/05</span>
              <h3>El Líder</h3>
              <span className="chapter-subtitle">Kanbei Shimada</span>
              <p>Experiencia que guía la cocina. Orden antes del fuego.</p>
            </div>

            <div className="chapter-card">
              <span className="chapter-number">04/05</span>
              <h3>La Pasión</h3>
              <span className="chapter-subtitle">Kikuchiyo</span>
              <p>Impulso y carácter. Fusión local con alma samurái.</p>
            </div>

            <div className="chapter-card" style={{ gridColumn: '1 / -1', maxWidth: '680px', margin: '0 auto' }}>
              <span className="chapter-number">05/05</span>
              <h3>Los Siete</h3>
              <span className="chapter-subtitle">La Élite</span>
              <p>
                Estrategia (Gorōbei), precisión (Kyūzō), logística (Heihachi),
                aprendizaje (Katsushirō), lealtad (Shichirōji).
              </p>
            </div>

          </div>
        </section>

        <section className="armor-section" id="armor">
          <h2 className="section-title main-title">La Armadura del Sabor</h2>
          <div className="armor-grid">

            <div className="armor-card">
              <div className="card-image-wrap">
                <img src="/helmet.png" alt="Kabuto" className="card-img" />
              </div>
              <div className="card-content">
                <h3>Kabuto</h3>
                <span className="card-tag">Protección y Honor</span>
                <p>El casco forjado a medida de cada pieza. La presentación es la primera defensa del sabor.</p>
              </div>
            </div>

            <div className="armor-card">
              <div className="card-image-wrap">
                <img src="/body.png" alt="Do" className="card-img" />
              </div>
              <div className="card-content">
                <h3>Dō</h3>
                <span className="card-tag">El Núcleo de Hierro</span>
                <p>La coraza que protege la esencia. Nuestro recetario inmutable, forjado en la lonja.</p>
              </div>
            </div>

            <div className="armor-card">
              <div className="card-image-wrap">
                <img src="/left_arm.png" alt="Kote" className="card-img" />
              </div>
              <div className="card-content">
                <h3>Kote</h3>
                <span className="card-tag">Escudo de Precisión</span>
                <p>Las mangas blindadas del corte. Flexibilidad y control en cada filo de la katana.</p>
              </div>
            </div>

            <div className="armor-card">
              <div className="card-image-wrap">
                <img src="/shoulders.png" alt="Sode" className="card-img" />
              </div>
              <div className="card-content">
                <h3>Sode</h3>
                <span className="card-tag">El Manto de Acero</span>
                <p>Los hombros anchos de la tradición. Escudos móviles que canalizan la fuerza del maestro.</p>
              </div>
            </div>

          </div>
        </section>

        <section className="cta-section" id="reservar">
          <div className="about-container">
            <h2 className="section-title">Reserva Tu Mesa</h2>
            <div className="cta-buttons">
              <a href="#reservar" className="btn-primary">Reservar mesa</a>
              <a href="#armor" className="btn-secondary">Ver carta</a>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <p>&copy; {new Date().getFullYear()} SAMURAI KATANA — Alicante Centro Ciudad. Todos los derechos reservados.</p>
        </footer>
      </main>

      <ScrollPhysicsClient />
    </>
  )
}
