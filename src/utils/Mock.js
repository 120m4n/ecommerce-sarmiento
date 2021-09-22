const productos = [
    {id: 1,  title: "Arena 1",   description: "This is the product description", price: 100, pictureUrl: "https://i.ibb.co/Yksy3wt/3-1-313120060.jpg", categoria: "arena"},
    {id: 2,  title: "Arena 2",   description: "This is the product description", price: 200, pictureUrl: "https://i.ibb.co/cwr2w9S/3-1-313120040.jpg", categoria: "arena"},
    {id: 3,  title: "Arena 3", description: "This is the product description", price: 300, pictureUrl: "https://i.ibb.co/2h06pWt/3-1-313120034.jpg", categoria: "arena"},
    {id: 4,  title: "Arena 4", description: "This is the product description", price: 400, pictureUrl: "https://i.ibb.co/sWnHQyW/3-1-313120051.jpg", categoria: "arena"},
    {id: 5,  title: "Comida 1",description: "This is the product description", price: 500, pictureUrl: "https://i.ibb.co/cvp5Lbs/1-1-111110346-min.jpg", categoria: "comida"},
    {id: 6,  title: "Comida 2",   description: "This is the product description", price: 100, pictureUrl: "https://i.ibb.co/8chtpjg/1-1-111110354.jpg", categoria: "comida"},
    {id: 7,  title: "Comida 3",   description: "This is the product description", price: 200, pictureUrl: "https://i.ibb.co/fQgtdYC/1-1-111110847.jpg", categoria: "comida"},
    {id: 8,  title: "Comida 4", description: "This is the product description", price: 300, pictureUrl: "https://i.ibb.co/1dq8cXC/111110071-ed-min.jpg", categoria: "comida"},
    {id: 9,  title: "Comida 5", description: "This is the product description", price: 400, pictureUrl: "https://i.ibb.co/7rLFW0W/111110325-min.jpg", categoria: "comida"},
    {id: 10, title: "Comida 6",description: "This is the product description", price: 500, pictureUrl: "https://i.ibb.co/86PQHmZ/111111046-ed-min.jpg", categoria: "comida"},
    {id: 11, title: "Juguetes 1",   description: "This is the product description", price: 100, pictureUrl: "https://i.ibb.co/6sVxSfV/3-3-333302721-1.jpg", categoria: "juguetes"},
    {id: 12, title: "Juguetes 2",   description: "This is the product description", price: 200, pictureUrl: "https://i.ibb.co/SPBZD9R/303050663-min.jpg", categoria: "juguetes"},
    {id: 13, title: "Juguetes 3", description: "This is the product description", price: 300, pictureUrl: "https://i.ibb.co/wy6d8sJ/333302667-min.jpg", categoria: "juguetes"},
    {id: 14, title: "Juguetes 4", description: "This is the product description", price: 400, pictureUrl: "https://i.ibb.co/N15qnDG/333310365-min.jpg", categoria: "juguetes"},
    {id: 15, title: "Juguetes 5",description: "This is the product description", price: 500, pictureUrl: "https://i.ibb.co/vH4jRqh/333310775-min.jpg", categoria: "juguetes"}
    
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

