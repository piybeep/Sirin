// redux
import { Provider } from 'react-redux'
import { setupStore } from '../src/store/store'
// Components
import SecHeader from '../components/SecHeader/SecHeader'
import Footer from '../components/Footer/Footer'
// form 
import Form from '../components/Form/Form'
// swiper
import "swiper/css";

// Style
import '../globals.scss'
import Head from 'next/head'
import FormWrapper from '../components/FormWrapper/FormWrapper'

function MyApp({ Component, pageProps }) {
  const store = setupStore()

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <Provider store={store}>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <FormWrapper />
      <SecHeader />
      <div className='component'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </Provider>
  )
}

export default MyApp
