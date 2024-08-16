document.addEventListener("DOMContentLoaded", function(){
    const imagens = document.querySelectorAll(".habilidade");
    const descricaoTexto = document.getElementById("descricaoTexto");

    imagens.forEach(imagem => {
        imagem.addEventListener("mouseenter", function(){
            descricaoTexto.textContent = this.getAttribute("data-descricao");
            descricaoTexto.style.opacity = 1;
        });

        imagem.addEventListener("mouseleave", function() {
            descricaoTexto.style.opacity = 0;
        });
    });
});