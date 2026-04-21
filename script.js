// Particles Background Setup
if (typeof particlesJS !== 'undefined') {
    particlesJS("particles-js", {
        particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.3, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#6366f1", opacity: 0.3, width: 1 },
        move: { enable: true, speed: 1.5, direction: "none", random: true, straight: false, out_mode: "out", bounce: false }
        },
        interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
        modes: { grab: { distance: 180, line_linked: { opacity: 0.6 } }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });
}
  
// Custom Cursor Glow effect
document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".cursor-glow");
    if(cursor) {
        requestAnimationFrame(() => {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
        });
    }
});

// Glowing Cards Hover Effect (Mouse tracking)
document.querySelectorAll(".bento-box").forEach(box => {
    box.addEventListener("mousemove", e => {
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        box.style.setProperty("--mouse-x", `${x}px`);
        box.style.setProperty("--mouse-y", `${y}px`);
    });
});
  
// Initialize VanillaTilt for 3D card tilt effect
if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 3,
        speed: 400,
        glare: false,
        transition: true,
        easing: "cubic-bezier(.03,.98,.52,.99)"
    });
}
  
// GSAP Animations (Removed Bento Grid ScrollTrigger to fix conflict)
if (typeof gsap !== 'undefined') {
    // Header Load Animations
    const tl = gsap.timeline();
    tl.from("nav", { opacity: 0, y: -20, duration: 0.8, ease: "power3.out" })
      .from("header h1", { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" }, "-=0.4")
      .from("header h2", { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" }, "-=0.6")
      .from("header p", { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" }, "-=0.6")
      .from(".header-cta", { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" }, "-=0.6");
}
