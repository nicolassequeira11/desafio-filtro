const URL = "https://fakestoreapi.com/products";
const contenedor = document.getElementById("info");
const filtrar = document.getElementById("rangeFilterCount");
const limpiar = document.getElementById("clearRangeFilter");

document.addEventListener("DOMContentLoaded", () => {
    // Fetch a URL y organizamos la info obtenida del JSON en un listado

        // FETCH

        fetch(URL)
        .then(response => response.json())
        .then(data => {
            let products = data; // Constante para trabajar sobre la info de cada producto.
            
            console.log(products)
            // Función que muestra los productos
            function showProducts(array){
                let content = "";
                array.forEach(product => {
                    content += 
                    `
                    <div class="w-75 m-auto list-group-item container-products">
                        <h2>${product.title}</h2>
                        <p>${product.price}</p>
                    </div>
                    `;
                contenedor.innerHTML = content;
                });
            }
            
            showProducts(products);

            //FILTROS

            // Filtrar por rango de precio
            filtrar.addEventListener("click", ()=>{

                let precioMin = document.getElementById("rangeFilterCountMin").value;
                let precioMax = document.getElementById("rangeFilterCountMax").value;

                let productosRangoPrecio =   
                products.filter((product) => product.price >= precioMin && product.price <= precioMax);

                showProducts(productosRangoPrecio);

            });        


            // Limpiar filtros
            limpiar.addEventListener("click", ()=>{

                showProducts(products);

            });             
            
        })
        // Mensaje de error por si ocurre un error al cargar el fetch.
        .catch(error => {
            console.error("Error al cargar los productos:", error);
        });

        //FIN FETCH

    
});