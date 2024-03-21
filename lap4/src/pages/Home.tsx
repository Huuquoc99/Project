import { useEffect, useState } from 'react'
import Product from '~/components/Product'
import { Tproduct2 } from '~/types/product2'

const Home = () => {
  const [products, setProducts] = useState<Tproduct2[]>([])

  // ! Get API va lay ra duoc:

  useEffect(() => {
    fetch('http://localhost:3002/product2')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
        return () => {
          console.log('unmount')
          //! cleanup function
        }
      })
  }, [])

  /**
   * ! Dependency với 3 trường hợp:
   * ? undefined: không có dependency - re-render khi state được cập nhật.
   * ? []: empty array - chỉ re-render khi componentDidMount.
   * ? [state1, state2,...]: re-render khi một trong số các state được cập nhật.
   */

  return (
    <div>
      <Product products={products} />
    </div>
  )
}

export default Home
