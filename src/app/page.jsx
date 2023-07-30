import Image from 'next/image'
import HeaderMobile from './layout/HeaderMobile/HeaderMobile'
import Intro from './main pages/Intro'
import Projet from './main pages/Projet'
import Competence from './main pages/Competence'
import Parcours from './main pages/Parcours'
import Contact from './main pages/Contact'
import Footer from './main pages/Footer'
export default function Home() {
  return (
    <main>
      <HeaderMobile/>
      <Intro/>
      <Projet/>
      <Competence/>
      <Parcours/>
      <Contact/>
      <Footer/>
      
    </main>
  )
}
