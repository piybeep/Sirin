// Components
import MiniHeader from '../components/MiniHeader/MiniHeader'
import Footer from '../components/Footer/Footer'

// Style
import '../globals.scss'

function MyApp({ Component, pageProps }) {

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }

  return (
    <>
      <MiniHeader />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
