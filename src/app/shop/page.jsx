import {products} from "../components/data"
import styles from "../components/product.module.css"
import Image from 'next/image'

export default function ShopPage() {
    const productCat = products.map(product => (
        <section key={product.id} className="flex flex-col items-left hover:shadow-3xl">
            <Image src={product.imageUrl} alt={product.name} width={300} height={150}/>
            <p>ID: 100{product.id}</p>
            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <p><i>{product.brand}</i></p>
        </section>
    ))
    return (
        <div className={styles.product}>
            {productCat}
        </div>
    )
}
