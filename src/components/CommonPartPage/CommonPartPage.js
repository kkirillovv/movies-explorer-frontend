import Header from "../Header/Header"
import Footer from '../Footer/Footer'

function StandartPage({element: Component, ...props}) {
  return(
    <>
    <Header />
    <Component {...props} />
    <Footer />
    </>
  )
}

export default StandartPage