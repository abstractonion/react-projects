import React from 'react';
import { products } from '@/app/components/data';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/app/components/product.module.css'

export default function FruitPage({ params }) {
    const fruitDetails = products.find(fruit => fruit.name.split(' ').join('-') === params.slug);

    if (!fruitDetails) {
        return <p>Fruit not found</p>;
    }

    const relatedFruits = products.filter(fruit => fruit.category === fruitDetails.category && fruit.name !== fruitDetails.name).map(product => (
            <section key={product.id} className="flex flex-col items-center hover:shadow-3xl">
                <Link href={`/shop/${product.name.replace(/\s+/g, '-')}`}>
                    <Image src={product.imageUrl} alt={product.name} width={300} height={150} />
                    <p>ID: 100{product.id}</p>
                    <h2>{product.name}</h2>
                    <p>{product.category}</p>
                    <p><i>{product.brand}</i></p>
                </Link>
            </section>
        ));

    return (
        <div>
            <section>
                <div className='flex flex-col items-center'>
                    <h1>Fruit Name: {fruitDetails.name}</h1>
                    <Image src={fruitDetails.imageUrl} alt={fruitDetails.name} width={300} height={150} />
                    <p>{fruitDetails.brand}</p>
                    <p>{fruitDetails.description}</p>
                    <p>&#8358; {fruitDetails.price}</p>
                </div>

                <div className={styles.product}>
                    {relatedFruits}
                </div>
            </section>
        </div>
    );
}
