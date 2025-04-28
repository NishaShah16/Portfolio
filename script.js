// GSAP Animations
gsap.from(".navbar", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
gsap.from(".welcome-text h1, .about-section h2, .skills-section h2, .projects-section h2, .contact-section h2", { 
    duration: 1.5, 
    x: -200, 
    opacity: 0, 
    ease: "power4.out", 
    delay: 0.5 
});
gsap.from(".welcome-text p, .about-section p", { 
    duration: 1.5, 
    x: 200, 
    opacity: 0, 
    ease: "power4.out", 
    delay: 1 
});
gsap.from(".skills-list .skill-item", { 
    duration: 1, 
    y: 50, 
    opacity: 0, 
    stagger: 0.2, 
    ease: "power4.out",
    delay: 1.5 
});
