import '../styles/globals.css'
import { AnimatePresence } from "framer-motion"
import { useRouter } from "next/router"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  
  return (
    <AnimatePresence>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  )
}

export default MyApp
