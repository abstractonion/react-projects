import Image from "next/image"
import styles from "./home.module.css"
import Link from "next/link"
// import pic from "/fleurs.jpg"

export default function Home() {
  return (
    <main className="flex flex-col space-x-4">
      <div className="flex flex-col space-x-2 gap-20 px-12 items-center py-24">
        <div className="flex gap-6 flex-col items-center">
          <p className="text-gray-400 text-center flex text-[12px] tracking-widest font-semibold uppercase">Everyday essentials and unique finds</p>
          <h1 className="text-[64px] font-bold text-blue-950 leading-none tracking-tight">The wholesale platform <br />for alt-culture products</h1>
        </div>
        <Link href="/shop" className="bg-blue-700 text-white text-[16px] rounded-full h-[64px] w-auto px-8 items-center flex">Browse products</Link>
      </div>

      <div className="flex flex-wrap space-x-2 m-auto">
        <section className= {styles.image}>
        <Image src ="/fleurs.jpg" alt="flowers of lagos" width={'400'} height={'320'} className="rounded-[8px]"/>

        <Image className="rounded-[8px]" src ="/flow.jpg" alt="flowers of nnewi" width={'400'} height={'320'}/>

        <Image className="rounded-[8px]" src ="https://images.unsplash.com/photo-1595543127511-802f9e594fcc?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="flowers of lagos" width={'400'} height={'320'}/>

        <Image className="rounded-[8px]" src ="https://images.unsplash.com/photo-1711999290922-9c667ffb83e0?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="flowers of lagos" width={'400'} height={'320'}/>
        </section>
      </div>
    </main>
  )
}
