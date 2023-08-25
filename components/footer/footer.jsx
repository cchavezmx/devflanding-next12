/* eslint-disable @next/next/no-img-element */

const Footer = () => {
    return(
        <footer className="container py-048 d-flex flex-direction-column gap-048">
            <div>
                <img src="/assets/brand/white.png" alt="dev.f logo"/>
            </div>
            <menu>
                <div className="d-flex flex-direction-column gap-016">
                    <p className="caption text-secondary-light">Sitio</p>
                    <a href="#">Inicio</a>
                    <a href="#">Campus</a>
                    <a href="#">Comunidad</a>
                    <a href="#">Carreras</a>
                </div>
                <div className="d-flex flex-direction-column gap-016">
                    <p className="caption text-secondary-light">dev.f</p>
                    <a href="#">Nosotros</a>
                    <a href="#">Empleabilidad</a>
                    <a href="#">Testimoniales</a>
                    <a href="#">Trabaja con nosotros</a>
                    <a href="#">Conviértete en sensei</a>
                    <a href="#">Becas</a>
                </div>
                <div className="d-flex flex-direction-column gap-016">
                    <p className="caption text-secondary-light">Oferta educativa</p>
                    <a href="#">Coding</a>
                    <a href="#">Data science</a>
                    <a href="#">Product design</a>
                </div>
                <div className="d-flex flex-direction-column gap-016">
                    <p className="caption text-secondary-light">Legal</p>
                    <a href="#">Términos y condiciones</a>
                    <a href="#">Aviso de privacidad</a>
                    <a href="#">Reglamento interno</a>
                </div>
                <div className="d-flex flex-direction-column gap-016">
                    <p className="caption text-secondary-light">Para empresas</p>
                    <a href="#">Colaboraciones</a>
                    <a href="#">Capacitamos a tu personal</a>
                </div>
            </menu>

            <div className="awards">
                <div className="award">
                    <img src="/assets/logos/google.png" alt="Google"/>
                    <p className="caption">
                        Una de las 9 Startups seleccionadas por el Google Launchpad Accelerator de LATAM en 2019.
                    </p>
                </div>
                <div className="award">
                    <img src="/assets/logos/bid.png" alt="Banco interamericano de desarrollo"/>
                    <p className="caption">
                        Ganadores del primer lugar en el Desafío de Bootcamps en América Latina del BID Lab en 2020
                    </p>
                </div>
                <div className="award">
                    <img src="/assets/logos/redbox.png" alt="Redbox"/>
                    <p className="caption">
                        Reconocidos con el Premio Redbox como la Startup más innovadora de México en el 2017
                    </p>
                </div>
                <div className="award">
                    <img src="/assets/logos/forbes.png" alt="Forbes"/>
                    <p className="caption">
                        Reconocidos por Forbes como una de las 30 empresas promesa de México en 2018
                    </p>
                </div>
                <div className="award">
                    <img src="/assets/logos/holoniq.png" alt="HolonIQ"/>
                    <p className="caption">
                        Una de las 9 Startups seleccionadas por el Google Launchpad Accelerator de LATAM en el 2019
                    </p>
                </div>
                <div className="award">
                    <img src="/assets/logos/facebook.png" alt="Facebook"/>
                    <p className="caption">
                        Una de las 9 Startups seleccionadas por el Google Launchpad Accelerator de LATAM en el 2019
                    </p>
                </div>
                <div className="award">
                    <img src="/assets/logos/becalos.png" alt="Bécalos"/>
                    <p className="caption">
                        Una de las 9 Startups seleccionadas por el Google Launchpad Accelerator de LATAM en el 2019
                    </p>
                </div>
            </div>

            <div>
                <img src="/assets/logos/b-corp.png" alt="Empresa B certificada"/>
            </div>

            <div>
                <p className="small text-secondary-light">
                    Copyright © <span id="year">year</span> DEVF LABS. Todos los derechos reservados.
                </p>
                <p className="small text-secondary-light">
                    DEV.F ofrece una solución innovadora a la inclusión educativa con programas EdTech que ayudan a las personas a convertirse en desarrolladores de software, dieñadores de producto y científicos de datos, así como obtener habilidades tecnológicas para así conseguir oportunidades laborales de alta calidad de manera ágil y accesible.
                </p>
            </div>

            <div className="social d-flex">
                <div className="logos d-flex gap-024 align-items-center">
                    <a href="https://www.tiktok.com/@devfla?is_from_webapp=1&sender_device=pc" target="_blank">
                        <img src="/assets/logos/tiktok.png" alt="Tik Tok"/>
                    </a>
                    <a href="https://www.instagram.com/devfla" target="_blank">
                        <img src="/assets/logos/instagram.png" alt="Instagram"/>
                    </a>
                    <a href="https://twitter.com/devflatam" target="_blank">
                        <img src="/assets/logos/twitter.png" alt="La plataforma previamente conocida como twitter"/>
                    </a>
                    <a href="https://www.linkedin.com/school/devf" target="_blank">
                        <img src="/assets/logos/linkedin.png" alt="Linkedin"/>
                    </a>
                    <a href="https://www.youtube.com/channel/UCsdosmDCPT4GOxTcCltAfyA" target="_blank">
                        <img src="/assets/logos/youtube.png" alt="Youtube"/>
                    </a>
                    <a href="https://open.spotify.com/user/yzw46qsehl8mbvqin7id55u64?si=esiKygFcTAeRoGDyF3oWXA&nd=1" target="_blank">
                        <img src="/assets/logos/spotify.png" alt="Spotify"/>
                    </a>
                    <a href="https://discord.gg/mhzK5Dwm" target="_blank">
                        <img src="/assets/logos/discord.png" alt="Discord server"/>
                    </a>
                    <a href="https://www.twitch.tv/devflatam" target="_blank">
                        <img src="/assets/logos/twitch.png" alt="Canal de Twitch"/>
                    </a>
                    <a href="https://www.facebook.com/devfla/" target="_blank">
                        <img src="/assets/logos/facebook-circle.png" alt="Facebook profile"/>
                    </a>
                </div>
                <div>
                    <a href="https://twitter.com/search?q=gethacky" target="_blank">
                        <h5>#getHacky</h5>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;