import Image from "next/image"
import styles from "./home.module.css"
// import pic from "/fleurs.jpg"

export default function Home() {
  return (
    <main className="flex flex-col space-x-4 gap-8">
      <div className="flex flex-col space-x-2 gap-4 px-12 items-center py-24">
        <h1 className="text-[48px] font-bold text-blue-950">The Wholesale Platform for Alt-Culture Products</h1>
        <p className="text-gray-600">Browse more than 3000 goods on Toran</p>
      </div>
      <div className="flex flex-wrap space-x-2 m-auto">
        <section className= {styles.image}>
        <Image src ="/fleurs.jpg" alt="flowers of lagos" width={'200'} height={'160'}/>

        <Image src ="/flow.jpg" alt="flowers of nnewi" width={'200'} height={'160'}/>

        <Image src ="https://images.unsplash.com/photo-1595543127511-802f9e594fcc?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="flowers of lagos" width={'200'} height={'160'}/>

        <Image src ="https://images.unsplash.com/photo-1711999290922-9c667ffb83e0?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="flowers of lagos" width={'200'} height={'160'}/>
        </section>
      </div>
    </main>
  )
}
