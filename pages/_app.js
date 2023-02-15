import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import Navbar from '@/Components/Navbar'
import '@/styles/globals.css'
import SiteState from '@/Context/siteState'

export default function App({ Component, pageProps }) {
  return<>
  <SiteState>
  <Header/>
  <Navbar/>
  <Component {...pageProps} />
  <Footer/>
  </SiteState>
  </> 
}
