import { useEffect, useState } from 'react'
import instance from '~/apis'
import ProductList from '~/components/ProductList'
import { TProduct } from '~/interfaces/product'


const Home = () => {
  const [products, setProducts] = useState<TProduct[]>([])

  // ! Get API va lay ra duoc:
  // cach 1
  // useEffect(() => {
  //   fetch('http://localhost:3001/products')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data)
  //       return () => {
  //         console.log('unmount')
  //         //! cleanup function
  //       }
  //     })
  // }, [])

  // cach 2
  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const { data } = await instance.get('/products')
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllProducts()
  })

  /**
   * ! Dependency với 3 trường hợp:
   * ? undefined: không có dependency - re-render khi state được cập nhật.
   * ? []: empty array - chỉ re-render khi componentDidMount.
   * ? [state1, state2,...]: re-render khi một trong số các state được cập nhật.
   */

  return (
    <div>
     

      <ProductList products={products} />
    </div>
  )
}

export default Home
