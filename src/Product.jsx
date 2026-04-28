import "./Product.css";


function Product({title,price}){
    return(
        <div className="Product">
            <h4>Product : {title}</h4>
            <h5>Price : {price}</h5>
        </div>
    )
}

export default Product;