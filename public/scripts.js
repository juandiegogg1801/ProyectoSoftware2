async function registrar() {
    try {
        // Obtener los valores del formulario
        const formData = {
            name: document.getElementById("Nombres").value,
            last_name: document.getElementById("Apellidos").value,
            userInstitute: document.getElementById("UsuarioInstitucional").value,
            pass: document.getElementById("Contrasena").value,
            date: {
                day: parseInt(document.getElementById("Dia").value),
                month: parseInt(document.getElementById("Mes").value),
                year: parseInt(document.getElementById("Ano").value)
            },
            gender: document.querySelector('input[name="Genero"]:checked').value
        };
        console.log(JSON.stringify(formData));


        // Realizar la solicitud POST
        const response = await fetch("http://localhost:3000/registries", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        // Verificar si la respuesta fue exitosa
        if (response.ok) {
            // Si la respuesta es exitosa, mostrar mensaje de éxito
            alert('¡Registro exitoso!');
            // Redireccionar a la página de inicio de sesión
            window.location.href = "http://localhost:3200/";
        } else {
            // Si la respuesta no es exitosa, mostrar mensaje de error
            console.error("Error al registrar:", response.status);
            alert('Error al registrar. Por favor, inténtalo de nuevo.');
        }
    } catch (error) {
        // Si hay algún error en la solicitud, mostrar mensaje de error
        console.error('Error al enviar la solicitud:', error);
        alert('Error al registrar. Por favor, inténtalo de nuevo.');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Llenar los días del 1 al 31
    const diaSelect = document.getElementById("Dia");
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        diaSelect.appendChild(option);
    }

    // Llenar los años del 2024 al 1960
    const anoSelect = document.getElementById("Ano");
    for (let i = 2024; i >= 1960; i--) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        anoSelect.appendChild(option);
    }

    // Cambiar la cantidad de días según el mes y año seleccionados
    document.getElementById("Mes").addEventListener("change", ajustarDias);
    document.getElementById("Ano").addEventListener("change", ajustarDias);

    function ajustarDias() {
        const mes = document.getElementById("Mes").value;
        const ano = document.getElementById("Ano").value;
        const diasEnMes = new Date(ano, mes, 0).getDate();

        while (diaSelect.options.length > 1) {
            diaSelect.remove(1);
        }

        for (let i = 1; i <= diasEnMes; i++) {
            const option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            diaSelect.appendChild(option);
        }
    }

    // Manejar el envío del formulario de registro
    const registroForm = document.getElementById("registroForm");
    registroForm.addEventListener("submit", async function (event) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del formulario
        registrar(); // Llamar a la función para registrar
    });
});
