import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import instance from '~/apis'
import { Tproduct2 } from '~/types/product2'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<Tproduct2 | null>(null)
  useEffect(() => {
    const getProduct = async () => {
      try {
        const { data } = await instance.get(`/products/${id}`)
        setProduct(data)
      } catch (error) {
        console.log(error)
      }
    }

    getProduct()
  })
  return (
    <div>
      <section className='MenuSection' id='menu-id'>
        <h1>OUR SPECIALTIES</h1>
        <p>Fresh Bakery Items with the Finest Ingredients</p>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-3 col-md-4 col-sm-6 col-12 mx-auto Bakery-menu'>
              <img src={product?.images} alt={product?.name} className='container-fluid'></img>
              <h3>{product?.name}</h3>
              <h6>
                ${product?.price}
                <span id='Weight'>{product?.klo}</span>
              </h6>
              <a href='#'>Order</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductDetail
