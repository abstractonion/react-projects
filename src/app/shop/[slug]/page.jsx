import React from 'react'
import {fruits} from '@/app/components/data'
import Image from 'next/image'
import Link from 'next/link'

export default function FruitPage({params}) {
    const fruitDetails = fruits.find(fruit => fruit.name.split(' ').join('-') == params.slug)
    
    const relatedFruits = fruits.filter(fruit => (fruit.category == fruitDetails.category) && (fruitDetails.name !== fruit.name)).map(product =>(
        <section>
            
        </section>
    ))
  return (
    <div>page</div>
  )
}
