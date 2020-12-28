import Head from 'next/head'
import Link from 'next/link'
import items from './data/items'
import { motion, AnimatePresence } from "framer-motion"

export const getServerSideProps = async () => {
  return {
    props: { 
      items: items.getItems()
    }
  }
}

const transition = {
  ease: "easeInOut"
};

export default function Home({ items }) {
  return (
    <AnimatePresence>
    <motion.div
        initial={{ opacity: 0, x: '1000px' }}
        animate={{ opacity: 1, x: '0px' }}
        exit={{ opacity: 0, x: '-1000px' }}
        transition={transition}
      >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ul>
          {items.map(x => (
            <li key={ x.id }>
              <Link href={"/detail/?id="+x.id}>{ x.name }</Link>
            </li>
          ))}
        </ul>
      </main>
    </motion.div>
    </AnimatePresence>
  )
}
