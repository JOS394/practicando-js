// CÃ³digo del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perÃ­metro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El Ã¡rea del cuadrado es: " + areaCuadrado + "cmË†2");
console.groupEnd();

// CÃ³digo del triÃ¡ngulo
console.group("TriÃ¡ngulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triÃ¡ngulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triÃ¡ngulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perÃ­metro del triÃ¡ngulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log("El Ã¡rea del triÃ¡ngulo es: " + areaTriangulo + "cmË†2");

console.groupEnd();

//crando funciones para html

function calcularPerimetroCuadrado(){
const input=document.getElementById("InputCuadrado");
const value=input.value;
const perimetro=perimetroCuadrado(value);
alert(perimetro);

};

function calcularAreaCuadrado(){
  const input=document.getElementById("InputCuadrado");
  const value=input.value;
  const area=areaCuadrado(value);
  alert(area);


};