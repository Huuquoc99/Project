import React from 'react'
import { Tproduct2 } from '~/types/product2'

type TProps = {
  products: Tproduct2[]
}

const Product = (props: TProps) => {
  return (
    <div>
      {props.products.map((product) => (
        <div key={product.id}>
          <section className='MenuSection' id='menu-id'>
            <div className='container '>
              <div className='row row-cols-md-4 g-4'>
                <div className='flexbox'>
                  <div className='col Bakery-menu'>
                   <div> <img src={product.images} alt={product.name} className='img-fluid'></img></div>
                    <div><h3>{product.name}</h3></div>
                    <div><h6>
                      ${product.price}
                      <span id='Weight'>{product.klo}</span>
                    </h6></div>
                    <div><a href='#'>Order</a></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  )
}

export default Product
