//create guest list
let guests = [ '', 1, 2, 3, 4, 5, 6, 7, 8];
let pasajeros = document.getElementById('pasajeros'); 

function opciones(lista, opcion){
    let elemento = "";
    for (let i = 0; i < lista.length; i++){
        elemento += "<option>" + lista[i] + "</option>";
    }
    opcion.innerHTML = elemento
} 
opciones(guests, pasajeros)

//selection guests
function obtenerPasajero(){
    let pasajeroSelect = document.getElementById("pasajeros");
    localStorage.setItem(pasajeroSelect.id, pasajeroSelect.value)
}

// Get Date
let checkIn = document.getElementById("check-in");
let checkOut = document.getElementById("check-out");

function obtenerFecha(){   
    localStorage.setItem(checkIn.id,checkIn.value);
    localStorage.setItem(checkOut.id, checkOut.value);


    let checkInDate = new Date(checkIn.value);
    let checkOutDate = new Date(checkOut.value);
    let dateTotal = checkOutDate - checkInDate;
    localStorage.setItem("dateTotal", Math.floor(dateTotal / (1000 * 60 * 60 * 24)));
}

let pasajerosDatos = document.getElementById("book")
pasajerosDatos.addEventListener("click", () =>{
    obtenerPasajero()
    obtenerFecha()
        if (checkIn.value,checkOut.value,pasajeros.value === null || checkIn.value,checkOut.value,pasajeros.value === ''){
            Toastify({
                text: "Complete todos los campos para continuar",
                duration: 3000,
                gravity: "top",
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                close: true,
                offset: {
                    x: 500,
                    y: 100 
                },
                }).showToast();
        }
        else if (checkIn.value >= checkOut.value){
            Toastify({
                text: "La fecha de salida debe ser mayor a la de ingreso",
                duration: 3000,
                gravity: "top",
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                close: true,
                offset: {
                    x: 500,
                    y: 100 
                },
                }).showToast();
        } else{    
            window.location.href = "pages/reservar.html";
        }
});

