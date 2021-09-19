function adicionarFilme() {
  var campoFilmeFavorito = document.getElementById("filme").value;
  var elementoFilmeFavorito = "<img src =" + campoFilmeFavorito + ">";
  var elementolistaFilmes = document.getElementById("listaFilmes");
  elementolistaFilmes.innerHTML = elementoFilmeFavorito;
  document.getElementById("filme").value += "";
}

