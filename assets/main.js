function mensajeDeBienvenida(nombreUsuario){
    Swal.fire({
        title: `Bienvenido/a ${nombreUsuario}`,
        text: `Gracias por visitar la pagina`,
        icon: `success`,
        confirmButtonTex: `Continuar`

    })
}

