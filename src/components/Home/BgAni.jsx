import {  useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const BgAni = () => {
   const [ init, setInit ] = useState(false);

   useEffect(() => {
       initParticlesEngine(async (engine) => {
           
           await loadSlim(engine);
       }).then(() => {
           setInit(true);
       });
   }, []);

   const particlesLoaded = (container) => {
       console.log(container);
   };
   return (
      <div>
        { init && <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 20,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#0000ff",
                    },
                    links: {
                        color: "#00ff00",
                        distance: 50,
                        enable: true,
                        opacity: 0.1,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "out",
                        },
                        random: true,
                        speed: 2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 30,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "star",
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
}

         
      </div>
   );
};

export default BgAni;