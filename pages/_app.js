import '../styles/globals.css'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/footer'

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Navbar />
        <Component {...pageProps} />
      <Footer />
    </main>
  )
}

export default MyApp
