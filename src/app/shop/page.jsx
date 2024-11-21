import {products} from "../components/data"
import king from "../components/product.module.css"

export default function ShopPage() {
    const productCat = products.map(product => (
        <section key={product.id} className="">
            <p>{product.id}</p>
            <h2>{product.name}</h2>
            <p>{product.brand}</p> 
        </section>
    ))
    return (
        <div className={king.product}>
            {productCat}
        </div>
    )
}
