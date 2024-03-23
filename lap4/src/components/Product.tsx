import { Tproduct2 } from '~/types/product2'

type Props = {
  product: Tproduct2
}

const Product = (props: Props) => {
  return (
    <div>
      <section className='MenuSection' id='menu-id'>
        <h1>OUR SPECIALTIES</h1>
        <p>Fresh Bakery Items with the Finest Ingredients</p>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-3 col-md-4 col-sm-6 col-12 mx-auto Bakery-menu'>
              <img src={props.product.images} alt={props.product.name} className='container-fluid'></img>
              <h3>{props.product.name}</h3>
              <h6>
                ${props.product.price}
                <span id='Weight'>{props.product.klo}</span>
              </h6>
              <a href='#'>Order</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Product
