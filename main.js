var approxim = 1;

function calc() {
  var surd = parseFloat(document.getElementById("surd").value);
  var temp = 0.5 * (approxim + surd/approxim);
  if (approxim == temp) {
    return;
  }
  approxim = temp;
  document.getElementById("out").value = approxim;
  console.log(approxim);
  if (Math.sqrt(surd) != approxim) {
    setTimeout(function() {
      calc();
    }, 100);
  }
}

var input = document.getElementById("surd");

input.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById("submit").click();
  }
});
