window.onload = function () {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let palabra = 'secret';
    let estadoSecreto = 0;
    let input = document.querySelector('#titulo')

    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseover', function () {
        this.classList.toggle('red')
    })

    input.addEventListener('keypress', function (e) {
        let key = e.key;
        if (key === palabra[estadoSecreto]) {
            estadoSecreto++;
        } else { estadoSecreto = 0 }
        if (estadoSecreto === palabra.length) {
            alert("Secreto Magico")
        }
    })
}