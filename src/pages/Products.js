// import { useState, useEffect } from "react";
import {Link, useLoaderData} from "react-router-dom";

function Products() {
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     async function getProducts() {
    //         const response = await fetch('https://dummyjson.com/products');
    //         const {products} = await response.json();

    //         console.log(products);
    //         setProducts(products);
    //     }

    //     getProducts();
    // }, []);

    const products = useLoaderData();

    return (
        <div>
            <div>Products</div>

            <ul>
                {products && products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>{product.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Products;
