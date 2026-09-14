console.log("Iniciando Servidor...");

// Excelente práctica: cortamos los dos primeros elementos inútiles
const args = process.argv.slice(2); 

const comando = args[0]; // Ej: 'GET', 'POST'
const dato = args.slice(1);    // Ej: '12345', 'miDato'

switch (comando) {
  case "GET":
    console.log("Método GET");
    console.log("Toma un DATO");
    break;

  case "POST":
    console.log("Método POST");
    if (dato) {
      // Usamos Template Literals (backticks) y args[1] (o la variable dato)
      console.log(`Recibimos ${dato} satisfactoriamente`);     
    } else {
      console.log("Error: No recibimos datos");
    }
    break;

  case "PUT":
    console.log("Método PUT");
    if (dato) {
      // Reemplazamos {id} fijo por la variable dinámica ${dato}
      console.log(`Modificamos el ítem con id: ${dato} satisfactoriamente`);
    } else {
      console.log("Error: Falta el ID para modificar");
    }
    break;

  case "DELETE":
    console.log("Método DELETE");
    if (dato) {
      // Reemplazamos {id} fijo por la variable dinámica ${dato}
      console.log(`El ítem con el id: ${dato} se eliminó con éxito`);
    } else {
      console.log("Error: Falta el ID para eliminar");
    }
    break;

  default:
    console.log("Comando incompleto o inválido");
}