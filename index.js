let tipo = document.getElementById("tipo")
let cantidadpesos = document.getElementById("cantidadpesos");
let nueva = document.getElementById("nueva");
let relacion = document.getElementById("relacion");

let cotizaciones = {
    Dolares: 105.75,
    Euros: 120.5,
  };

function validacionCampos(){
    if (!Number(cantidadpesos.value) || cantidadpesos.value < 0) {
        texto.innerText = "Error: Ingrese valor mayor a 0";
        return false;
    }

    if( tipo.selectedIndex == null || tipo.selectedIndex == 0 ) {
        texto.innerText = "Error: Seleccione tipo de billete";
        return false;
    }
    texto.innerText = "";
    return true;
}

function calculoCambio() {
    if (validacionCampos()) {
      let valorPesos = Number(cantidadpesos.value);
      let valorMoneda = Number(cotizaciones[tipo.value]);
      let precioFinal = valorPesos / valorMoneda;
      texto.innerText = "$ " + precioFinal.toFixed(2);
    }
  };

function validacionNuevaMoneda(){
    if (nueva.value == "") {
        texto2.innerText = "Error: Ingrese nombre de la moneda";
        return false;
    }

    if (!Number(relacion.value) || relacion.value < 0) {
        texto2.innerText = "Error: Ingrese valor mayor a 0";
        return false;
    }

    texto2.innerText = "";
    return true;
}

function nuevaMoneda() {
    if (validacionNuevaMoneda()) {
        let nombreMoneda = nueva.value;
        let valorMoneda = Number(relacion.value);
        tipo.options.add(new Option(nombreMoneda, nombreMoneda));
        cotizaciones[nombreMoneda] = valorMoneda;
    
        inputNombre.value = "";
        inputValor.value = "";
      }
}