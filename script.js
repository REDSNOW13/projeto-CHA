document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menuBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = navMenu.querySelectorAll('a');

    menuBtn.addEventListener('click', function () {
        navMenu.classList.toggle('show');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Evita o comportamento padrão de navegação do link
            const targetId = this.getAttribute('href').substring(1); // Obtém o ID do alvo do link
            const targetElement = document.getElementById(targetId); // Obtém o elemento alvo
            if (targetElement) {
                const offsetTop = targetElement.offsetTop; // Calcula a posição superior do elemento alvo
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth" // Rola suavemente para a posição do elemento alvo
                });
                navMenu.classList.remove('show'); // Fecha o menu após clicar em um link
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
  const lista = document.querySelectorAll('#equipe ul li');
  const imagemContainer = document.getElementById('imagem-container');
  const imagemEquipe = document.getElementById('imagem-equipe');

  lista.forEach(function(item) {
    item.addEventListener('click', function() {
      const imgSrc = item.getAttribute('data-img');
      imagemEquipe.src = imgSrc;
      imagemContainer.style.display = 'block';
    });
  });

  imagemContainer.addEventListener('click', function(event) {
    if (!event.target.closest('#imagem-equipe')) {
      imagemContainer.style.display = 'none';
    }
  });
});
// Quando o usuário rolar a página para baixo 20px do topo do documento, mostre o botão
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// Quando o usuário clicar no botão, role suavemente até o topo do documento
function topFunction() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}
document.addEventListener('DOMContentLoaded', function () {
  const listaItens = document.querySelectorAll('#receitas li');
  const imagemContainer = document.getElementById('imagem-receita');

  listaItens.forEach(function (item) {
    item.addEventListener('mouseover', function () {
      const imgSrc = item.getAttribute('data-img');
      imagemContainer.setAttribute('src', imgSrc);
      imagemContainer.setAttribute('alt', item.textContent);
    });

    item.addEventListener('mouseout', function () {
      imagemContainer.setAttribute('src', '');
      imagemContainer.setAttribute('alt', 'Imagem da receita');
    });
  });
});