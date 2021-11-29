import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout/Layout'
import Menubar from '../components/Menubar/Menubar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <Menubar/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
}

export default MyApp
