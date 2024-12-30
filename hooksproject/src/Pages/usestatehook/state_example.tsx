import React from "react";
import './state_example.scss';
import {data} from './dataset'

const UseStateDemo: React.FC = () =>{

    const [products, setProducts] = React.useState(data);
    const [countOfProduct, setCountOfProducts] = React.useState(data.length);
    

    const handleDeleteAll = () => {
        setProducts([]);
        setCountOfProducts(0);
    }

    const handleDelete = (id: number) => {
        const updateProducts = products.filter((x) => x.id !== id);
        setProducts(updateProducts);
        setCountOfProducts(updateProducts.length);
    }

    const handleReset = () => {
        setProducts(data);
        setCountOfProducts(data.length);
    }

    console.log("component rendered")

    return (
        <>
        <h1>useState Demo page</h1>
        <div className="cards">
            <h2>Items: {countOfProduct}</h2>
            {products.map((product) =>{
                return <div className="card" key = {product.id}>
                    <p>{product.name}, Rs. {product.price}</p>
                    <button className="btn-delete" onClick={() => handleDelete(product.id)}>Delete</button>
                </div>
            })}
            <button onClick={handleDeleteAll}>Delete All</button>
            <button onClick={handleReset}>Reset</button>
        </div>
        
        </>
    );
};

export default UseStateDemo;