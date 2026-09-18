const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');

  menuButton.setAttribute('aria-expanded', String(open));
});


// Cierra el menú móvil cuando se selecciona una opción
document.querySelectorAll('.main-nav a').forEach(link => {

  link.addEventListener('click', () => {

    nav.classList.remove('open');

    menuButton?.setAttribute('aria-expanded', 'false');

  });

});


// ==========================================
// TARJETAS DE HABILIDADES
// ==========================================
// En celular se pueden girar tocándolas.
// También funcionan con Enter o espacio.

document.querySelectorAll('.flip-card').forEach(card => {

  card.addEventListener('click', () => {

    card.classList.toggle('is-flipped');

  });


  card.addEventListener('keydown', event => {

    if (event.key === 'Enter' || event.key === ' ') {

      event.preventDefault();

      card.classList.toggle('is-flipped');

    }

  });

});

// ==========================================================
// ANIMACIÓN AL HACER SCROLL
// Tarjetas de "Lo que yo hago"
// ==========================================================

const revealCards = document.querySelectorAll('.reveal-card');

const revealObserver = new IntersectionObserver(
  (entries, observer) => {

    entries.forEach(entry => {

      // Comprueba si la tarjeta entró en pantalla
      if (entry.isIntersecting) {

        // Activa la animación
        entry.target.classList.add('show');

        // Deja de observarla para que la animación
        // solamente ocurra una vez
        observer.unobserve(entry.target);
      }

    });

  },
  {
    // La animación comienza cuando aproximadamente
    // el 20% de la tarjeta es visible
    threshold: 0.2
  }
);


// Observamos cada tarjeta
revealCards.forEach(card => {
  revealObserver.observe(card);
});