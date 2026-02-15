document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    const discord = document.getElementById("discord").value;
    const experiencia = document.getElementById("experiencia").value;

    fetch("https://discord.com/api/webhooks/1472450259446796450/y8wlvKXPonH9WzXBnUWj_mU6QHJuKUIfqQya79uyzU7Ykfwwfk4CUogChbLPMn47yDQd", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content: ` Nueva Postulacion\n\n Nombre: ${nombre}\n Edad: ${edad}\n Discord: ${discord}\n Experiencia: ${experiencia}`
        })
    })
    .then(() => {
        document.getElementById("mensaje").innerText = "? Postulacion enviada correctamente";
        document.getElementById("formulario").reset();
    })
    .catch(() => {
        document.getElementById("mensaje").innerText = "? Error al enviar";
    });
});
