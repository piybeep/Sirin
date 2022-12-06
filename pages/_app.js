// Components
import SecHeader from '../components/SecHeader/SecHeader'
import Footer from '../components/Footer/Footer'

// Style
import '../globals.scss'

function MyApp({ Component, pageProps }) {

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <>
      <SecHeader />
      <div className='component'>
      <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

export default MyApp
