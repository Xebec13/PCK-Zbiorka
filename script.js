document.addEventListener("DOMContentLoaded", () => {
  const menuOpen = document.getElementById("menu-open");
  const menuClose = document.getElementById("menu-close");
  const mobileMenu = document.getElementById("mobile-menu");

  menuOpen.addEventListener("click", () => {
    mobileMenu.classList.remove("opacity-0", "pointer-events-none");
    mobileMenu.classList.add("opacity-100");
    menuOpen.style.display = "none"; // ukrycie tylko przycisku, nie całego nav
  });

  menuClose.addEventListener("click", () => {
    mobileMenu.classList.add("opacity-0", "pointer-events-none");
    mobileMenu.classList.remove("opacity-100");
    menuOpen.style.display = "block"; // przywrócenie przycisku
  });
});

gsap.registerPlugin(ScrollTrigger);

// Animacja obrazka
gsap.from("header img", {
  x: -100,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});

// Animacja napisów (po kolei)
gsap.from("header h1", {
  x: 100,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  stagger: 0.5, // każdy <h1> jeden po drugim
  delay: 0.3
});

gsap.utils.toArray(".h-\\[50dvh\\] .space-y-1").forEach((el, i) => {
  gsap.to(el, {
    xPercent: 15 * (i % 2 === 0 ? -1 : 1), // lewy w prawo, prawy w lewo
    ease: "none",
    scrollTrigger: {
      trigger: el,
      start: "top bottom",   // kiedy wchodzi w viewport
      end: "bottom top",     // do końca
      scrub: true            // płynny ruch przy scrollu
    }
  });
});
gsap.from(".text-center.space-y-3", {
  x: 200,          // startuje przesunięty w prawo
  opacity: 0,      // startuje przezroczysty
  duration: 1.2,   // czas animacji
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".text-center.space-y-3",
    start: "top 80%",   // gdy górna krawędź elementu dotknie 80% viewportu
    toggleActions: "play none none reverse"
  }
});

gsap.from("main .grid > div", {
  scrollTrigger: {
    trigger: "main .grid",     // sekcja kroków
    start: "top 80%",          // zacznie gdy sekcja wpadnie w viewport
    toggleActions: "play none none reverse"
  },
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  stagger: 0.3   // kolejno co 0.3s
});

gsap.from(".about-text h1, .about-text div img", {
  scrollTrigger: {
    trigger: ".about-text",
    start: "top 80%",
    toggleActions: "play none none reverse",
  },
  x: -100,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

gsap.from(".about-text p", {
  scrollTrigger: {
    trigger: ".about-text",
    start: "top 75%",
    toggleActions: "play none none reverse",
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
});

gsap.from(".about-text .signature", {
  scrollTrigger: {
    trigger: ".about-text",
    start: "top 70%",
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  scale: 0.8,
  duration: 1,
  delay: 0.3,
  ease: "back.out(1.7)",
});

let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

gsap.utils.toArray(".about-image-bg").forEach((section) => {
  const img = section.querySelector(".about-image");

  gsap.fromTo(img,
    { y: "-15%" },  // start przesunięcia obrazu
    {
      y: "15%",     // koniec przesunięcia obrazu
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    }
  );
});
gsap.fromTo(
  ".helpHeader",
  { x: -100, opacity: 0 },
  {
    x: 0,
    opacity: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".helpHeader",
      start: "top 80%",
      end: "top 60%",
      scrub: true
    }
  }
);
gsap.utils.toArray(".list").forEach((item, i) => {
  gsap.fromTo(item,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      ease: "none",
      scrollTrigger: {
        trigger: item,
        start: "top 90%",
        end: "top 60%",
        scrub: true
      }
    }
  );
});
gsap.fromTo(
  ".footerBg img",
  { scale: 0.99 },     // delikatny start
  {
    scale: 1,       // zoom w trakcie scrolla
    transformOrigin: "100% 50%",
    ease: "none",
    scrollTrigger: {
      trigger: "footer",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      // markers: true
    }
  }
);