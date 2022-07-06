class Producto {
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = parseInt (precio);
    }
}

const burguerClub = new Producto("burguer club", 745);
const cuatroQuesos = new Producto("cuatro quesos", 665);
const delizia = new Producto("delizia", 765);
const xxl = new Producto("xxl", 810);
const gorgonzola = new Producto("gorgonzola", 755);
let totalProductos = 0
let carrito = [];
let listaCompras = [];

function suma(numeroUno, numeroDos) {
    let resultado = numeroUno + numeroDos;
    return resultado;
}

function resta(numeroUno, numeroDos) {
    let resultado = numeroUno - numeroDos;
    return resultado;
}

function multiplicacion(numeroUno, numeroDos) {
    let resultado = numeroUno * numeroDos;
    return resultado;
}

function usuario(){
    nombreUsuario = prompt("Ingrese su nombre por favor")
    while (nombreUsuario === "") {
        nombreUsuario = prompt("Ingrese su nombre por favor")
    }
}

function menu() {
    let opcion = 0;
    
    do{
        opcion = parseInt(prompt("Bienvenido " + nombreUsuario + ", seleccione una opcion para continuar. (ESC para salir)\nEn el carrito hay actualmente " + carrito.length + " Productos.\n 1.Agregar productos al carrito\n 2.Pagar el total de la compra\n 3.Reiniciar carrito\n 4.Mostrar productos dentro del carrito"));
    
    switch (opcion) {
        case 1:
            agregarProducto()
            return menu()
        case 2:
            metodoPago()
            return mostrarTotal(totalProductos)
        case 3:
            reinicioCarrito()
            return menu()
        case 4:
            revisarCarrito()
            return menu()
        default: 
            alert("seleccione una opcion valida!!")
            
        } 
    } while (opcion !== "") 
}

function agregarProducto() {
    let seleccionarProducto = 0
    do {
        seleccionarProducto = parseInt(prompt("Seleccione el menu que desea agregar al carrito.\n su total hasta ahora es $" + totalProductos + "\n Actualmente hay " + carrito.length + " productos en el carrito.\n 1.burguer club $745\n 2.Cuatro quesos $665\n 3.Delizia $765\n 4. XXL\n 5. gorgonzola\n 0.Volver al menu anterior." ));

        if (seleccionarProducto === 1) {
            totalProductos = suma(totalProductos, burguerClub.precio)
            listaCompras.push(burguerClub)
            carrito.push ( burguerClub.nombre + ' $' + burguerClub.precio )
        }if (seleccionarProducto === 2) {
            totalProductos = suma(totalProductos, cuatroQuesos.precio)
            listaCompras.push(cuatroQuesos)
            carrito.push (cuatroQuesos.nombre + ' $' + cuatroQuesos.precio)
        }if (seleccionarProducto === 3) {
            totalProductos = suma(totalProductos, delizia.precio)
            listaCompras.push(delizia)
            carrito.push(delizia.nombre + ' $' + delizia.precio)
        }if (seleccionarProducto === 4) {
            totalProductos = suma(totalProductos, xxl.precio)
            listaCompras.push(xxl)
            carrito.push (xxl.nombre + ' $' + xxl.precio)
        }if (seleccionarProducto === 5) {
            totalProductos = suma(totalProductos, gorgonzola.precio)
            listaCompras.push(gorgonzola)
            carrito.push (gorgonzola.nombre + ' $' + gorgonzola.precio)
        }if (seleccionarProducto >= 6) {
            alert("Seleccione por favor una opcion valida")
        }

    }while (seleccionarProducto !== 0)

}

function mostrarTotal(resultado) {
    alert("El total a pagar es: $" + resultado + "\n !!muchas gracias por su compra!!");
    
}

function metodoPago() {
    let transferencia = totalProductos
    let efectivo = totalProductos * 0.90
    let credito = totalProductos * 1.15
    let metodoPago = 0

        metodoPago = parseInt(prompt("El total en el carrito es de: $" + totalProductos + "\nComo desea pagarlo?\n 1.Efectivo\n 2.Transferencia\n 3.Tarjeta de credito"));
        if (metodoPago === 1) {
            alert("Se ha aplicado un descuento del 10%");
            totalProductos = efectivo;

        }if (metodoPago === 2) {
            totalProductos = transferencia;

        }if (metodoPago === 3) {
            alert("Se ha aplicado un recargo del 15%");
            totalProductos = credito;

        }if (metodoPago >= 4) {
            alert("Seleccione una opcion valida")
            
        }
}
function reinicioCarrito() {
    alert("Se han eliminado todos los productos del carrito")
    totalProductos = multiplicacion(totalProductos, 0);
    carrito = []
    listaCompras = []
}

function revisarCarrito() {

    alert ("Los productos en su carrito son:\n" + carrito.join("\n") + "\n Total a pagar: $" + totalProductos)
}

function listaFiltrada() {
    const relojes = listaCompras.filter((listaCompras) => listaCompras.nombre.includes('burguer club'))
    const baratos = listaCompras.filter((listaCompras) => listaCompras.precio < 750)
    console.log("burguer club vendidas")
    console.log(burguerClub)
    console.log("combos baratos")
    console.log(baratos)
}

usuario()
menu()
listaFiltrada()
