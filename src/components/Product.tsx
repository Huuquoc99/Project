import { TProduct } from '~/interfaces/product'

type Props = { product: TProduct }
const Product = (props: Props) => {
  return (
    <>
      <h1>{props.product.title}</h1>
      <img src={props.product.thumbnail} alt={props.product.title} />
      <p>ID: {props.product.id}</p>
      <p>Title: {props.product.title}</p>
      <p>Gia: {props.product.price}</p>
      <p>discountPercentage: {props.product.discountPercentage}</p>
      <p>rating: {props.product.rating}</p>
      <p>stock: {props.product.stock}</p>
      <p>brand: {props.product.brand}</p>
      <p>category: {props.product.category}</p>
      <p>thumbnail: {props.product.thumbnail}</p>
      <p>description: {props.product.description}</p>
    </>
  )
}

export default Product
