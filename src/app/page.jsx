import Image from "next/image"
import styles from "./home.module.css"
// import pic from "/fleurs.jpg"

export default function Home() {
  return (
    <main className="flex flex-wrap space-x-2">
      <section className= {styles.image}>
      <Image src ="/fleurs.jpg" alt="flowers of lagos" width={'200'} height={'160'}/>

      <Image src ="/flow.jpg" alt="flowers of nnewi" width={'200'} height={'160'}/>

      <Image src ="https://images.unsplash.com/photo-1595543127511-802f9e594fcc?q=80&w=2934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="flowers of lagos" width={'200'} height={'160'}/>

      <Image src ="https://images.unsplash.com/photo-1711999290922-9c667ffb83e0?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="flowers of lagos" width={'200'} height={'160'}/>
      </section>
    </main>
  )
}
