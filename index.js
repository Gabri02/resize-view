let timeout;

function mostraDimensioniFinestra() {
  if (timeout) {
    clearTimeout(timeout);
  }

  timeout = setTimeout(function() {
    let width = document.documentElement.clientWidth;
    let height = document.documentElement.clientHeight;

    alert("La finestra è stata ridimensionata. Nuove dimensioni: " + width + "x" + height);
  }, 500);
}

window.addEventListener("resize", mostraDimensioniFinestra);
