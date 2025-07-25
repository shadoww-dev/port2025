    // Mostrar animação suave
    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    fadeElements.forEach(el => observer.observe(el));


    // ALBUM SYSTEM

      function openAlbum() {
    document.getElementById("album").style.display = "block";
  }

  function closeAlbum() {
    document.getElementById("album").style.display = "none";
  }

  function filtrar(categoria) {
  const fotos = document.querySelectorAll(".foto");
  fotos.forEach(foto => {
    if (categoria === "todas" || foto.classList.contains(categoria)) {
      foto.style.display = "block";
    } else {
      foto.style.display = "none";
    }
  });
}

function abrirModal(img) {
  document.getElementById("imgModal").src = img.src;
  document.getElementById("modal").style.display = "flex";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}


const texto = "2025 : There's nothing to see here.";
const destino = document.getElementById('digit');
let i = 0;

function digitarLentamente() {
  if (i < texto.length) {
    destino.textContent += texto.charAt(i);
    i++;
    setTimeout(digitarLentamente, 100); // velocidade: 100ms por letra
  }
}

digitarLentamente(); // inicia o efeito

function mostrarMensagem() {
  const msg = document.getElementById("bloqueio-mensagem");
  if (msg) {
    msg.style.display = "block";
    setTimeout(() => {
      msg.style.display = "none";
    }, 3000); // desaparece em 3 segundos
  }
}

document.addEventListener("keydown", function (e) {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") ||
    (e.ctrlKey && e.key.toLowerCase() === "u")
  ) {
    e.preventDefault();
    mostrarMensagem();
  }
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  mostrarMensagem();
});
