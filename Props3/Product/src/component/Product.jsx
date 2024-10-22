import "./Product.css"

function Product(props) {
  

    return (
      <div className="product">
        <img src={props.image} alt="" />
        <h3>Name: {props.name}</h3>
        <h4>Price: {props.price}</h4>
        <p>{props.description}</p>
      </div>
    )
  }
  
  export default Product