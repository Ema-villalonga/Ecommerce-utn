import { useState } from 'react';
import './Products.css';

export default function Products({products}){
    
    const [buy, setBuy] = useState(false);

    function handleChange(){
        setBuy(true)
    }

    return (
      <main className="products">
        <ul>
          {products.slice(0, 10).map((product) => (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />

              <div>
                <strong>
                  {product.title} - Sku: {product.sku} - Description: {product.description}
                </strong>
              </div>

              <div className='box-price-stock'>
                <strong className='box-price'>
                  Price: ${product.price}
                </strong>
                <strong className='box-stock'>
                  Stock: {product.stock}
                </strong>
              </div>

              <div className="btn-buy">
                <button onClick={handleChange}>Comprar</button>
              </div>

              <div className="">
                <p className="mensagge-great">
                  {buy ? "Gracias por su compra" : ""}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    );
}