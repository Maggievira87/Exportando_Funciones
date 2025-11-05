function hoy () {
    const hoy = new Date();
    const dia = String(hoy.getDate()).padStart(2, '0');
    const mes = String(hoy.getMonth() + 1).padStart(2, '0'); // Los meses comienzan en 0
    const año = hoy.getFullYear();
    const fechaFormateada = `${dia}/${mes}/${año}`;
    return hoy;
    
}


export function crearUsuario(nombre, rol) {
    if(rol == "admin" || "cliente") {

        let usuario = {
            nombre: nombre,
            rol: rol,
            fechaRegistro: new Date().toLocaleDateString()
        }
        return usuario;
    } else console.log("Rol equivocado.");
}