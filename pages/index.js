// Components
import Header from '../components/Header/Header'
import Preview from '../components/Preview/Preview'
import About from '../components/About/About'
import Advantages from '../components/Advantages/Advantages'
import Rules from '../components/Rules/Rules'
import Video from '../components/Video/Video'
import Team from '../components/Team/Team'
import Reviews from '../components/Reviews/Reviews'
import Contact from '../components/Contacts/Contact'
import Footer from '../components/Footer/Footer'
// Style
import s from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={s.container}>
      <Header/>
      <Preview/>
      <About/>
      <Advantages/>
      <Rules/>
      <Video/>
      <Team/>
      <Reviews/>
      <Contact/>
      <Footer/>
    </div>
  )
}
