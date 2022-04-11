let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let precioProducto = <HTMLInputElement>(
  document.getElementById("precioProducto")
);
let porcentajeDescuento = <HTMLInputElement>(
  document.getElementById("porcentajeDescuento")
);
let rotulo1 = <HTMLParagraphElement>document.getElementById("rotulo1");
let rotulo2 = <HTMLParagraphElement>document.getElementById("rotulo2");
let descuento: number;

btnEnviar.addEventListener("click", () => {
  rotulo1.innerHTML = "precio 1";
  rotulo2.innerHTML = "precio 2";
  descuento =
    Number(precioProducto.value) -
    (Number(precioProducto.value) * Number(porcentajeDescuento.value)) / 100;
  console.log("El precio con el descuento es de", descuento);
});
