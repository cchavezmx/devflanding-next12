/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Link from 'next/link';

const Navbar = () => {
    return(
        <nav>
            <div className="desktop">
                <div className="menu align-items-center">
                    <div className="logo">
                        <Link href="/">
                            <img src="/assets/brand/white.png" alt=""/>
                        </Link>
                    </div>

                    <button className="btn third light">Ir a campus</button>
                    <Link href="/post/p1">
                    <button className="btn third light">Contenido</button>
                        </Link>
                    <button className="btn third light">comunidad</button>
                </div>
                <div className="menu">
                    <button className="btn second light">Sesiones informativas</button>
                    <button className="btn main">Inscribirme ahora</button>
                </div>
            </div>
            <div className="mobile">
                <div className="bar">
                    <Link href="/" className="logo">
                        <img src="/assets/brand/devf-hacker-emblem.png"/>
                    </Link>
                    <button className="btn menu" id="menu-toggle">
                        <i data-feather="grid"></i>
                    </button>
                </div>
                <div className="tiles">
                    <div className="d-flex gap-016">
                        <button className="btn big-btn stretch">ir a campus</button>
                        <button className="btn big-btn stretch">comunidad</button>
                    </div>


                    <div className="d-flex flex-direction-column gap-016">
                        <div className="d-flex">
                            <a href="code.html" className="btn big-btn program" data-aos="fade-up">
                                <h3>⌨️</h3>
                                <span>Programación</span>
                            </a>
                        </div>
                        <div className="d-flex gap-016">
                            <a href="data.html" className="btn big-btn program">
                                <h3>📀</h3>
                                <span>Ciencia de datos</span>
                            </a>
                            <a href="design.html" className="btn big-btn program">
                                <h3>🎨</h3>
                                <span>Diseño</span>
                            </a>
                        </div>
                    </div>
                    
                    <div className="actions">
                        <a href="#" className="action">
                            <span>¿Quiénes somos?</span>
                            <span>👾</span>
                        </a>
                        <a href="#" className="action">
                            <span>Casos de éxito</span>
                            <span>💪</span>
                        </a>
                        <a href="#" className="action">
                            <span>Ayuda</span>
                            <span>💬</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;