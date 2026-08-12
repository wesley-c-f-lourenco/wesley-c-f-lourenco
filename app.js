// ================================
// REVELAR CARDS DE PROJETO AO ROLAR
// ================================

const cardsProjeto = document.querySelectorAll(".card-projeto");

if ("IntersectionObserver" in window && cardsProjeto.length > 0) {
  const observador = new IntersectionObserver(
    entradas => {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("mostrar");
          observador.unobserve(entrada.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  cardsProjeto.forEach(card => observador.observe(card));
} else {
  cardsProjeto.forEach(card => card.classList.add("mostrar"));
}
