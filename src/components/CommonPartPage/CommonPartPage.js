import Header from "../Header/Header"
import Footer from '../Footer/Footer'

export default function CommonPartPage({element: Component, ...props}) {
  return (
    <>
      <Header loggedIn={props.loggedIn} />
      <Component {...props} />
      <Footer />
    </>
  )
}