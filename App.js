class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

class UI {
  addProduct(product) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML = `
     <div class="card text-center mb-4">    
     <div class="card-body">
                    <strong>Name: </strong> ${product.name} , 
                    <strong>Price: </strong>  ${product.price} , 
                    <strong>Year: </strong>  ${product.year} 
                      <a href="#" class="btn btn-danger" name="delete" >Delete</a>
     </div>
     </div>
     `;

    productList.appendChild(element);
    this.resetForm(); 
  }

  deleteProduct(element) 
  {
        if(element.name === "delete")
        {
         element.parentElement.parentElement.parentElement.remove();  
        }
  }

  showMessage(message, cssClass) 
  {
    const div = document.createElement("div"); 
    div.className = `alert alert-${cssClass} mt-4`; 
    div.appendChild(document.createTextNode(message)); 
    // Showing DOM
    const container = document.querySelector(".container") 
    const app = document.querySelector("#app"); 
    container.insertBefore(div,app); 
    setTimeout(() => {
        document.querySelector(".alert").remove(); 
    }, 3000);
  }

  resetForm() 
  {
    document.getElementById("Product-Form").reset();
  }
}

//DOM events

document.getElementById("Product-Form").addEventListener(`submit`, (event) => {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const year = document.getElementById("year").value;
  const Interface = new UI();
  
  if(! (name === "" | price === "" || year === "") )
  {
    const producto = new Product(name, price, year);
    Interface.addProduct(producto);
    Interface.showMessage("¡Agregado exitosamente!", "success")
  } else{
    Interface.showMessage("¡Hay campos vacios en el formulario!", "danger")
  }

 


  event.preventDefault();
});


document.getElementById("product-list").addEventListener("click", (e) =>
{
       const ui = new UI(); 
       ui.deleteProduct(e.target); 
       ui.showMessage("¡Eliminado exitosamente!","danger"); 
})