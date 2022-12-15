// Components
import Header from '../components/main/Header/Header'
import Preview from '../components/main/Preview/Preview'
import About from '../components/main/About/About'
import Advantages from '../components/main/Advantages/Advantages'
import Rules from '../components/main/Rules/Rules'
import Video from '../components/main/Video/Video'
import Team from '../components/main/Team/Team'
import Reviews from '../components/main/Reviews/Reviews'
import Contact from '../components/main/Contacts/Contact'
import Footer from '../components/Footer/Footer'
import Menu from '../components/main/Menu/Menu'
// Form
import Form from '../components/Form/Form'
import { Provider } from 'react-redux'
import { setupStore } from '../src/store/store'

export default function Home() {
  return (
    <div className='component'>
      <Menu />
      <Preview />
      <About />
      <Advantages />
      <Rules />
      {/* <Video /> */}
      <Team />
      <Reviews />
      <Contact />
    </div>
  )
}

Home.getLayout = function PageLayout(page) {
  const store = setupStore()
  return (
    <Provider store={store}>
      <Header />
      <Form />
      {page}
      <Footer />
    </Provider>
  )
}