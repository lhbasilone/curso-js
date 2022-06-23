function solicName() {
    alert("Bienvenido a EL CLUB DEL BAJON");
    let nombre = prompt('Ingrese su nombre');
    while (nombre === '') {
        nombre = prompt('Ingrese su nombre');
    }
    alert("hora de saciar el hambre " + nombre.toUpperCase())

    return nombre;
}

//list1

function listProduct(){
    let producto;
    do {    
    producto = parseInt(prompt("Introduci el numero de tu bajon! : \n 1) Burguer club\n 2) Cuatro quesos\n 3) Delizia\n 4) XXL\n 5)Gorgonzola "))
} while (producto < 1 || producto > 5);
switch (producto) {
    case 1:
        return 'Burguer club';
    case 2:
        return 'Cuatro quesos';
    case 3:
        return 'Delizia';
    case 4:
        return 'XXL';
    case 5:
        return 'Gorgonzola';
    }
    
}

//valor

function precioProduct(nombre) {

    if (nombre === 'burguer club') {
        return 745;
    }else if (nombre === 'Cuatro quesos') {
        return 665; 
    }else if (nombre === 'Delizia') {
        return 765; 
    }else if (nombre === 'XXL') {
        return 810;
    } else {
        return 755; 
    }
}

//monto1

function primerCobro(producto,precio,nombre) {
    alert(
        nombre.toUpperCase() +
        ' elegiste : ' +
        producto +
        ' Tiene un costo de $ ' +
        precio + ' pesos');
        
} 

//list2


function secondlistProduct() {
    alert(
        "El combo viene con papas!");
    let agregados;
    do {    
     agregados = parseInt(prompt('Deseas agregar una coca? : \n1) SI\n 2) NO'))
} while (agregados < 1 || agregados > 2);
switch (agregados) {
    case 1:
        return 'SI';
    case 2:
        return "NO";
    }
}

//valor2

function precioSecondlist(nombre2) {
     if (nombre2 === 'SI') {
        return 250;
    } else {
        return 0; 
    }
}
 
//monto_final

function segundoCobro(producto2,precio2,nombre) {
    alert(
        nombre.toUpperCase() +
        ', agregaste : ' +
        producto2 +
        ' por lo tanto cuesta $ ' +
        precio2 + ' pesos');
    
    let cash = parseInt(prompt('ingresa el monto $ :'))
    if (cash > precio) {
        alert(nombre + " tu vuelto es " + (cash - (precio + precio2)));
    } else if (cash < precio) {
        alert('NO TE ALCANZA')
        cash = parseInt(prompt('ingrese monto $ :'))
        alert(nombre + " tu vuelto es " + (cash - (precio + precio2)));
    } 
    alert('Que tengas un buen bajon!');
    }


//variables

let nomCliente = solicName();
let nomProducto = listProduct();
let precio = precioProduct(nomProducto);

primerCobro(nomProducto, precio, nomCliente);

let agregado = secondlistProduct();
let precio2 = precioSecondlist(agregado);

segundoCobro(agregado, precio2, nomCliente);
