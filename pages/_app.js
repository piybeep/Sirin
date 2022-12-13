// redux
import { Provider } from 'react-redux'
import { setupStore } from '../src/store/store'
// Components
import SecHeader from '../components/SecHeader/SecHeader'
import Footer from '../components/Footer/Footer'
// form 
import Form from '../components/Form/Form'

// Style
import '../globals.scss'

function MyApp({ Component, pageProps }) {

  const store = setupStore()

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <Provider store={store}>
      <SecHeader />
      <Form/>
      <div className='component'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </Provider>
  )
}

export default MyApp
