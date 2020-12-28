import items from './data/items'
import { motion, AnimatePresence } from "framer-motion"

export const getServerSideProps = async (req) => {
  const id = parseInt(req.query.id)
  return {
    props: { 
      item: items.getItemById(id)
    }
  }
}

const transition = {
  ease: "easeInOut"
};

export default function Item({ item }) {
  return (
    <AnimatePresence>
    <motion.div
        initial={{ opacity: 0, x: '1000px' }}
        animate={{ opacity: 1, x: '0px' }}
        exit={{ opacity: 0, x: '-1000px' }}
        transition={transition}
      >
      <main>
        <h1>{ item.name }</h1>
        <h2>${ item.price }</h2>
      </main>
    </motion.div>
    </AnimatePresence>
  )
}