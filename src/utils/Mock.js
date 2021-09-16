const productos = [
    {id: "1", title: "Producto 1", description: "This is the product description", price: 100, pictureUrl: "https://picsum.photos/200/300"},
    {id: "2", title: "Producto 2", description: "This is the product description", price: 200, pictureUrl: "https://picsum.photos/200/300"},
    {id: "3", title: "Producto 3", description: "This is the product description", price: 300, pictureUrl: "https://picsum.photos/200/300"},
    {id: "4", title: "Producto 4", description: "This is the product description", price: 400, pictureUrl: "https://picsum.photos/200/300"},
    {id: "5", title: "Producto 5", description: "This is the product description", price: 500, pictureUrl: "https://picsum.photos/200/300"},
    ]
    
export const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos);
    }, 2000);
})

export const getFetchById = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos[0]);
    }, 2000);
})   

