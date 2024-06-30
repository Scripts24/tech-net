const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 600,
    reset: true
})


sr.reveal(`.section-title`, { interval: 100 })
sr.reveal(`.title-brand `, { distance: '0px', opacity: 0.3, interval: 100, reset: false })
sr.reveal(`.img-about`, { origin: 'left' })
sr.reveal(`.text-about `, { origin: 'right' })
sr.reveal(`.form-contact `, { origin: 'bottom' })
sr.reveal('.service', { rotate: { x: 0, y: 180, z: 0 }, interval: 600, delay: 1000 });