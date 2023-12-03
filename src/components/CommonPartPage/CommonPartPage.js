import Header from "../Header/Header"
import Footer from '../Footer/Footer'

export default function StandartPage({element: Component, ...props}) {
  return (
    <>
    <Header />
    <Component {...props} />
    <Footer />
    </>
  )
}