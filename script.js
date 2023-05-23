function hitungLuas() {
  var sisiLuas = document.getElementById("sisi-luas").value;

  document.getElementById("output-luas").innerHTML =
    "<span>" + sisiLuas + "</span>";
  console.log(sisiLuas);

  document.getElementById("output-luas2").innerHTML =
    "<span>" + sisiLuas + "</span>";
  console.log(sisiLuas);

  let a1 = parseInt(sisiLuas);
  let a2 = sisiLuas * sisiLuas;

  document.getElementById("result").innerHTML = "<span>" + a2 + "</span>";
  console.log(a2);

  // hasil input niai persegi:
  var elemen = document.getElementById("hasilLuas");
  elemen.style.display = "block";
  var elemen1 = document.getElementById("btn-reset");
  elemen1.style.display = "block";
  return sisiLuas;
}
//Reset kalkulator
function resetLuas() {
  document.getElementById("sisi-luas").value = "";

  var elemen = document.getElementById("hasilLuas");
  elemen.style.display = "none";
}

//KELILING

// Make button function to get output for Keliling Persegi from the input value
function hitungKeliling() {
  var sisiKeliling = document.getElementById("sisi-keliling").value;
  var output = document.getElementById("output-keliling");

  document.getElementById("rumus-keliling").innerHTML = " 4 x " + sisiKeliling;
  document.getElementById("result-keliling").innerHTML = 4 * sisiKeliling;

  output.style.display = "block";
}

// Make the reset function to hide the output Keliling Persegi
function resetKeliling(flag) {
  document.getElementById("output-keliling").style.display =
    flag === 1 ? "block" : "none";
  document.getElementById("sisi-keliling").value = "";
}
