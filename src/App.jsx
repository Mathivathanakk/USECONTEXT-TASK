import React, { createContext ,useState} from 'react';
import Cart from './Components/Cart';
import "./index.css"


export const mycontext=createContext('')

const App = () => {
    
    let products=[
        {
            "id": 1,
            "title": "iPhone 9",
            "description": "An apple mobile which is nothing like apple",
            "price": 549,
            "discountPercentage": 12.96,
            "rating": 4.69,
            "stock": 94,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
            "images": [
                
                
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStg3jC7cHxb_rigLmlvM3LFqKhLxUAIZRdAg&s",
               
            ]
        },
        {
            "id": 2,
            "title": "iPhone X",
            "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
            "price": 899,
            "discountPercentage": 17.94,
            "rating": 4.44,
            "stock": 34,
            "brand": "Apple",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
            "images": [
               
                "data:image/jpeg;base64,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",
                
            ]
        },
        {
            "id": 3,
            "title": "Samsung Universe 9",
            "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
            "price": 1249,
            "discountPercentage": 15.46,
            "rating": 4.09,
            "stock": 36,
            "brand": "Samsung",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
            "images": [
                
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYjvdVAAAkI5zQjwTzNGHDnuwICPfM5UjW5ynaTD0pcw&s"
            ]
        },
        {
            "id": 4,
            "title": "OPPOF19",
            "description": "OPPO F19 is officially announced on April 2021.",
            "price": 280,
            "discountPercentage": 17.91,
            "rating": 4.3,
            "stock": 123,
            "brand": "OPPO",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
            "images": [
              
               "data:image/jpeg;base64,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"
            ]
        },
        {
            "id": 5,
            "title": "Huawei P30",
            "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            "price": 499,
            "discountPercentage": 10.58,
            "rating": 4.09,
            "stock": 32,
            "brand": "Huawei",
            "category": "smartphones",
            "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
            "images": [
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSls7tfsj44UZPHpnCI0NJ0YPrtMWzfvP_KQ&s",
               
            ]
        }
    ]

    const[data,setData]=useState(products)
    
    return (
        <div>
            
            
            <mycontext.Provider value={[data,setData]}>
            
                <Cart />
            </mycontext.Provider>
        </div>
    );
};

export default App;