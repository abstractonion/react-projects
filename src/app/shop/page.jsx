import {products} from "../components/data"
import styles from "../components/product.module.css"

export default function ShopPage() {
    const productCat = products.map(product => (
        <section key={product.id} className="flex flex-col items-left hover:shadow-3xl">
            <p>{product.id}</p>
            <h2>{product.name}</h2>
            <p>{product.brand}</p> 
        </section>
    ))
    return (
        <div className={styles.product}>
            {productCat}
        </div>
    )
}
