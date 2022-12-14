import React from 'react';
import Head from 'next/head'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadImageShape } from "tsparticles-shape-image";
import { useCallback } from "react";

export default function Home() {
  const particlesInit = useCallback(async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  },[]);
  return (
    <>
      <div id="hero">
      <Particles
      id="tsparticles"
      init={particlesInit}

      options={{
        "fullScreen": {
            "enable": true,
            "zIndex": 1
        },

        // "particles": {
        //     "number": {
        //         "value": 10,
        //         "density": {
        //             "enable": false,
        //             "value_area": 800
        //         }
        //     },
        //     "color": {
        //         "value": "#fff"
        //     },
        //     "shape": {
        //         "type": "star",
        //         "options": {
        //             "sides": 5
        //         }
        //     },
        //     "opacity": {
        //         "value": 0.8,
        //         "random": false,
        //         "anim": {
        //             "enable": false,
        //             "speed": 1,
        //             "opacity_min": 0.1,
        //             "sync": false
        //         }
        //     },
        //     "size": {
        //         "value": 4,
        //         "random": false,
        //         "anim": {
        //             "enable": false,
        //             "speed": 40,
        //             "size_min": 0.1,
        //             "sync": false
        //         }
        //     },
        //     "rotate": {
        //         "value": 0,
        //         "random": true,
        //         "direction": "clockwise",
        //         "animation": {
        //             "enable": true,
        //             "speed": 5,
        //             "sync": false
        //         }
        //     },
        //     "line_linked": {
        //         "enable": true,
        //         "distance": 600,
        //         "color": "#ffffff",
        //         "opacity": 0.4,
        //         "width": 2
        //     },
        //     "move": {
        //         "enable": true,
        //         "speed": 2,
        //         "direction": "none",
        //         "random": false,
        //         "straight": false,
        //         "out_mode": "out",
        //         "attract": {
        //             "enable": false,
        //             "rotateX": 600,
        //             "rotateY": 1200
        //         }
        //     }
        // },
        // "interactivity": {
        //     "events": {
        //         "onhover": {
        //             "enable": true,
        //             "mode": ["grab"]
        //         },
        //         "onclick": {
        //             "enable": false,
        //             "mode": "bubble"
        //         },
        //         "resize": true
        //     },
        //     "modes": {
        //         "grab": {
        //             "distance": 400,
        //             "line_linked": {
        //                 "opacity": 1
        //             }
        //         },
        //         "bubble": {
        //             "distance": 400,
        //             "size": 40,
        //             "duration": 2,
        //             "opacity": 8,
        //             "speed": 3
        //         },
        //         "repulse": {
        //             "distance": 200
        //         },
        //         "push": {
        //             "particles_nb": 4
        //         },
        //         "remove": {
        //             "particles_nb": 2
        //         }
        //     }
        // },
        // "retina_detect": true,
        // "background": {
        //     "color": "#111",
        //     "image": "",
        //     "position": "50% 50%",
        //     "repeat": "no-repeat",
        //     "size": "cover"
        // }


        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 480.51896047731543
            }
          },
          color: {
            value: "#fff343"
          },
          shape: {
            // type: "star",
            // polygon: {
            //   nb_sides: 5
            // },
            type: "image",
            image: {
              src: "/gama1.png",
            }
          },
          opacity: {
            value: .8969687262243222,
            anim: {
              enable: false,
              speed: 1.5,
              opacity_min: .5,
              sync: true
            }
          },
          size: {
            value: 40,
            random: true,
            anim: {
              enable: true,
              speed: 5,
              size_min: 50,
            }
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            //direction: "bottom",
            speed: 5,
            random: true,
            //out_mode: "bounce",
            attract: {
              enable: false,
              rotateX: 3000,
              rotateY: 3000
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            },
            onclick: {
              enable: true,
              mode: "push"
            },
            resize: true
          },
          modes: {
            repulse: {
              distance: 80
            },
            push: {
              particles_nb: 1
            },
          }
        },
        retina_detect: true,
    }}
    />
      </div></>
  );
}
