
import ProductList from '~/components/ProductList'


const Home = () => {
  // const [products, setProducts] = useState<Tproduct2[]>([])

  // ! Get API va lay ra duoc:

  // useEffect(() => {
  //   fetch('http://localhost:3002/product2')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data)
  //       return () => {
  //         console.log('unmount')
  //         //! cleanup function
  //       }
  //     })
  // }, [])

  /**
   * ! Dependency với 3 trường hợp:
   * ? undefined: không có dependency - re-render khi state được cập nhật.
   * ? []: empty array - chỉ re-render khi componentDidMount.
   * ? [state1, state2,...]: re-render khi một trong số các state được cập nhật.
   */

  return (
    <div>
      
       {/* <h2 className="sessionTitle">Danh cho nam:</h2>
      <ProductList category="nam" />
      <br />
      <h2 className="sessionTitle">Danh cho nu:</h2>
      <ProductList category="nu" />
      <br /> */}
      {/* <h2 className="sessionTitle">Danh cho tre em:</h2>
      <ProductList category="kid" /> */}
      <ProductList category='KID'/>
    </div>
  )
}

export default Home
