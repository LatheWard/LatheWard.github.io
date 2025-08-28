window.document.body.style.background = "#000080"

const { createSpring } = anime;
anime({
  targets: '.logo.js',
  scale: [
    { to: 4.25, ease: 'inOut(3)', duration: 200 },
    { to: 1, ease: createSpring({ stiffness: 300 }) }
  ],
  loop: true,
  loopDelay: 250,
});