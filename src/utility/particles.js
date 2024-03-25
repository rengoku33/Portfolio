// eslint-disable-next-line
export default {
    smooth: true,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "bubble",
          parallax: {
            enable: false,
            force: 1,
            smooth: 10
          }
        }
      },
      modes: {
        bubble: {
          distance: 20,
          duration: 5,
          opacity: 1,
          size: 7
        }
      }
    },
    particles: {
      move: {
        direction: "none",
        distance: 12,
        enable: true,
        outModes: "none",
        speed: 0.3
      },
      number: {
        value: 390
      },
      shape: {
        type: ["circle"]
      },
      size: {
        value: {
          min: 0.3,
          max: 1.2
        }
      }
    },
    canvasMask: {
      enable: true,
      scale: 3,
      pixels: {
        filter: "pixelFilter"
      },
      image: {
        src: "https://particles.js.org/images/amongus_cyan.png"
      }
    },
    background: {
      color: "#000000",
      image: "",
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover"
    }
  }