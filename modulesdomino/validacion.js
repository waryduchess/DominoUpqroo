function validationFichas(fichas) {
  if (
    fichas.izquierda == well[well.length - 1].izquierda ||
    fichas.derecha == well[trash.length - 1].izquierda||
    fichas.izquierda == well[well.length - 1].derecha ||
    fichas.derecha == well[trash.length - 1].derecha
  ) {
    return true;
  } else {
    return false;
  }
}