import styles from '../styles/page.module.css'

export default function Home() {
  return (    
    <main className={styles.main}>
      <header className="container py-160 p-048 d-flex flex-direction-column gap-024 text-center">
        <h1>
            Aprende tecnología
        </h1>
        <p>
            Desde 2015 hemos capacitado a miles de hispanohablantes con cursos de programación, diseño y ciencia de datos.
        </p>
        <div id="call-to-actions">
            <a href="https://www.eventbrite.com.mx/o/devf-8131359852" target="_blank" className="btn second light">sesiones informativas</a>
            <button className="btn main">Inscríbete ahora</button>
        </div>
      </header>

      <section id="companies" className='container d-flex flex-direction-column gap-024'>
        <p className="text-center">Nuestros egresados trabajan en las empresas más innovadoras</p>
        <div className='text-center d-flex justify-content-center flex-wrap gap-024'>
            <img src="/assets/logos/google.png" alt="Logotipo Google" className="align-self-center"/>
            <img src="/assets/logos/facebook.png" alt="Logotipo Facebook" className="align-self-center"/>
            <img src="/assets/logos/microsoft.png" alt="Logotipo Microsoft" className="align-self-center"/>
            <img src="/assets/logos/uber.png" alt="Logotipo Uber" className="align-self-center"/>
            <img src="/assets/logos/amazon.png" alt="Logotipo Amazon" className="align-self-end"/>
            <img src="/assets/logos/apple.png" alt="Logotipo Apple Computer" className="align-self-center"/>
        </div>
        <a href="employability.html" className="btn third light align-self-center">ver más</a>
      </section>

      <section id="employability" className="container py-064 d-flex flex-direction-column gap-032">

        <div className="card horizontal bg-primary text-main-light">
            <div className="info">
                <h2>Haz despegar tu carrera</h2>
                <p>
                    Capacítate en las tecnologías más modernas y demandas en la industria tecnológica de hoy... y mañana.
                </p>
            </div>
            <div className="photo text-center pt-024 d-flex align-items-end">
                <img src="/assets/photos/rocket.png" alt="" data-aos="fade-up"/>
            </div>
        </div>

        <div className="row gap-032">
            <div className="card outline p-032 d-flex flex-direction-column gap-024">
                <div className="badge bg-primary">
                    <img src="/assets/photos/brain.png" alt="Desarrolla experiencia"/>
                </div>
                <h3>Obtén experiencia mientras estudias</h3>
                <p>
                    Aprende en modalidad hackathon. Construye productos reales en cada uno de tus módulos y construye un portafolio desde la primera semana.
                </p>
            </div>
            <div className="card outline p-032 d-flex flex-direction-column gap-024">
                <div className="badge bg-primary">
                    <img src="/assets/photos/award.png" alt="Garantía de empleabilidad"/>
                </div>
                <h3>Encuentra empleo o te devolvemos tu dinero</h3>
                <p>
                    Confiamos tanto en nuestros programas que estamos dispuestos a tomar la apuesta. Si no encuentras trabajo seis meses después de concluir tu Master, te regresamos tu inversión.
                </p>
            </div>
        </div>
      </section>

      {/* programas */}

      <section id="programs" className="container py-064 d-flex flex-direction-column gap-024">
          <h4 className="text-center">Programas</h4>

          <div className="card horizontal bg-white text-main-dark program">
              <div className="info d-flex flex-direction-column gap-016">
                  <h3>Master en code</h3>
                  <p>
                      Capacítate en las tecnologías más modernas y demandas en la industria tecnológica de hoy... y mañana.
                  </p>
                  <a href="code.html" className="btn main align-self-start">ver más</a>
              </div>
              <div className="photo text-center d-flex align-items-center">
                  <img src="/assets/photos/screenshot-coding.png" alt="Aprende programación" data-aos="fade-left"/>
              </div>
          </div>

          <div className="card horizontal bg-white text-main-dark program">
              <div className="info d-flex flex-direction-column gap-016">
                  <h3>Master en data</h3>
                  <p>
                      Capacítate en las tecnologías más modernas y demandas en la industria tecnológica de hoy... y mañana.
                  </p>
                  <button className="btn main align-self-start">ver más</button>
              </div>
              <div className="photo text-center d-flex align-items-center">
                  <img src="/assets/photos/screenshot-data.png" alt="Aprende data science" data-aos="fade-left"/>
              </div>
          </div>

          <div className="card horizontal bg-white text-main-dark program">
              <div className="info d-flex flex-direction-column gap-016">
                  <h3>Master en product design</h3>
                  <p>
                      Capacítate en las tecnologías más modernas y demandas en la industria tecnológica de hoy... y mañana.
                  </p>
                  <button className="btn main align-self-start">ver más</button>
              </div>
              <div className="photo text-center d-flex align-items-center">
                  <img src="/assets/photos/screenshot-design.png" alt="Aprende diseño de aplicaciones y sitios web" data-aos="fade-left"/>
              </div>
          </div>

      </section>

      <section id="methodology" className="container py-064 d-flex flex-direction-column gap-032">
          <h4 className="text-center">Metodología</h4>

          <div className="card vertical bg-aux-a text-main-light">
              <div className="info">
                  <h2>Clases en vivo con personas como tú</h2>
                  <p>
                      ¡Vive la experiencia de convivir con cientos de alumnos en toda América Latina y aprende con clases remotas en vivo con tus profesores! Participa desde cualquier lugar, pregunta, aporta y colabora.
                  </p>
              </div>
              <div className="photo text-center">
                  <img src="/assets/photos/class-screenshot.png" alt="Ejemplos de código y diseño UX" className="w-100" data-aos="fade-up"/>
              </div>
          </div>

          <div className="row gap-032">
              <div className="card outline p-032 d-flex flex-direction-column gap-024">
                  <div className="badge bg-aux-a">
                      <img src="/assets/photos/spanish.png" alt="Contenido en español"/>
                  </div>
                  <h3>Contenido en tu idioma</h3>
                  <p>
                      Con cientos de horas de video, lecturas, ejercicios y proyectos de práctica. El material complementario de dev.f te permite ahondar en los temas vistos en clase donde quieras y cuando quieras.
                  </p>
              </div>
              <div className="card outline p-032 d-flex flex-direction-column gap-024">
                  <div className="badge bg-aux-a">
                      <img src="/assets/photos/clap.png" alt="Pocos alumnos por sensei"/>
                  </div>
                  <h3>Educación hasta 8x más personal</h3>
                  <p>
                      Con cupos limitados de máximo 25 alumnos por sensei, tu educación es hasta ocho veces más personalizada que en otras lugares con hasta 200 alumnos por maestro.
                  </p>
              </div>
          </div>

      </section>

      <section id="community" className="container py-064 d-flex flex-direction-column gap-032">
          <h4 className="text-center">Comunidad</h4>

          <div className="card vertical bg-dark text-main-light outline">
              <div className="info">
                  <h2>Hackeando la educación desde 2015</h2>
                  <p>
                      ¡Vive la experiencia de convivir con cientos de alumnos en toda América Latina y aprende con clases remotas en vivo con tus profesores! Participa desde cualquier lugar, pregunta, aporta y colabora.
                  </p>
              </div>
              <div className="photo text-center">
                  <img src="/assets/photos/world.png" alt="Ejemplos de código y diseño UX" className="w-60"/>
              </div>
          </div>

          <div className="row gap-032">
              <div className="card outline p-032 text-center">
                  <h2 id="students" data-aos="zoom-in">students</h2>
                  <p>
                      estudiantes han concluido sus cursos con nosotros
                  </p>
              </div>
              <div className="card outline p-032 text-center">
                  <h2 id="hours" data-aos="zoom-in">hours.compeleted</h2>
                  <p>
                      horas de teoría y práctica completadas
                  </p>
              </div>
          </div>

          <div className="row gap-024">
              <div className="card bg-aux-b p-064 d-flex flex-direction-column gap-024 text-main-dark">
                  <p>
                      Confiamos tanto en nuestros programas que estamos dispuestos a tomar la apuesta. Si no encuentras trabajo seis meses después de concluir tu Master, te regresamos tu inversión.
                  </p>
                  <p className="bold">
                      Ximena Arteaga, Google Developer Expert, Generación 2019
                  </p>
                  <img src="/assets/photos/users/user-1.png" alt=""/>
              </div>
              <div className="card bg-aux-b p-064 d-flex flex-direction-column gap-024 text-main-dark">
                  <p>
                      Confiamos tanto en nuestros programas que estamos dispuestos a tomar la apuesta. Si no encuentras trabajo seis meses después de concluir tu Master, te regresamos tu inversión.
                  </p>
                  <p className="bold">
                      Ximena Arteaga, Google Developer Expert, Generación 2019
                  </p>
                  <img src="/assets/photos/users/user-2.png" alt=""/>
              </div>
              <div className="card bg-aux-b p-064 d-flex flex-direction-column gap-024 text-main-dark">
                  <p>
                      Confiamos tanto en nuestros programas que estamos dispuestos a tomar la apuesta. Si no encuentras trabajo seis meses después de concluir tu Master, te regresamos tu inversión.
                  </p>
                  <p className="bold">
                      Ximena Arteaga, Google Developer Expert, Generación 2019
                  </p>
                  <img src="/assets/photos/users/user-3.png" alt=""/>
              </div>
          </div>
      </section>

      <section id="more-info" className="container py-064 d-flex flex-direction-column gap-032">

          <div className="card bg-aux-c text-main-dark">
              <div className="info d-flex flex-direction-column gap-016">
                  <h2>Únete al equipo de senseis</h2>
                  <p>
                      ¿Eres un profesional apasionado por tu área y quieres compartir tus conocimientos? No esperes más y contáctate con nosotros, siempre estamos buscando personas como tú.
                  </p>
                  <button className="btn main align-self-start">ver más</button>
              </div>
          </div>
          

          <div className="card horizontal bg-white text-main-dark shadow-large-closer">
              <div className="info d-flex flex-direction-column gap-016">
                  <h2>¿Necesitas más información?</h2>
                  <p>
                      Únete a nuestras sesiones informativas y resuelve todas tus  dudas sobre dev.f, nuestros programas, los costos y más.
                  </p>
                  <a href="https://www.eventbrite.com.mx/o/devf-8131359852" target="_blank">
                      <button className="btn main align-self-start">ver sesiones informativas</button>
                  </a>
              </div>
              <div className="photo d-flex align-items-center">
                  <img src="/assets/photos/info-sesh.png" alt="Sesión informativa de dev.f"/>
              </div>
          </div>
      </section>      
    </main>
  )
}
