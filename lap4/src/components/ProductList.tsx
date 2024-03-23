import  { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import instance from '~/apis'
import { Tproduct2 } from '~/types/product2'

type Props = {
  category: string
}
const ProductList = (props: Props) => {
  console.log(props)
  const [products, setProducts] = useState<Tproduct2[]>([])
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await instance.get(`/products`)
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllProducts()
  }, [])
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <section className='MenuSection' id='menu-id'>
            <h1>OUR SPECIALTIES</h1>
            <p>Fresh Bakery Items with the Finest Ingredients</p>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-lg-3 col-md-4 col-sm-6 col-12 mx-auto Bakery-menu'>
                  <img src={product.images} alt={product.name} className='container-fluid'></img>
                  <Link to={`shop/${product.id}`}>
                    <h3>{product.name}</h3>
                  </Link>
                  <h6>
                    ${product.price}
                    <span id='Weight'>{product.klo}</span>
                  </h6>
                  <a href='#'>Order</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      ))}
    </div>
  )
}
export default ProductList
