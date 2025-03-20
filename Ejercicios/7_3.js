//Ejercicio 7.3

let lista_3 = document.getElementById("ej7_3");

async function obtenerPokemon() {
    try {
        let response3 = await fetch("https://pokeapi.co/api/v2/pokemon-species/aegislash");
        let data3 = await response3.json();

        lista_3.textContent = `Color: ${data3.color.name}`;

    } catch (error) {
        console.error("Error al obtener datos:", error);
        lista_3.textContent = "Error al cargar los datos";
    }
}

obtenerPokemon();