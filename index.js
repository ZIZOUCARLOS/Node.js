
const [metodo, ruta, title, price, category] = process.argv.slice(2);
const id = ruta.split("/")[1];

async function iniciar() {
  
  //GET de productos
  if (metodo === "GET") {
    const url = id ? `https://dummyjson.com/products/${id}` : "https://dummyjson.com/products";
    const res = await fetch(url);
    const datos = await res.json();
    
    console.log(id ? datos : datos.products); 
  }

 //POST de producto
  if (metodo === "POST") {
    const res = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, price, category }) 
    });
    
    console.log(await res.json()); 
  }
// Borrado de producto
  if (metodo === "DELETE") {
    const res = await fetch(`https://dummyjson.com/products/${id}`, {
      method: "DELETE"
    });
    
    console.log(await res.json()); 
  }
}

iniciar();