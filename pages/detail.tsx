import { GetServerSideProps } from 'next'
import items, { DataItem } from './data/items'
import { motion } from "framer-motion"
import styled from 'styled-components'

interface DetailProps {
  item: DataItem
}

export const getServerSideProps: GetServerSideProps<DetailProps> = async (context) => {
  const id = parseInt(context.query.id as string)
  const props = {
    item: items.getItemById(id)
  }
  return { props }
}

const transition = {
  ease: "easeInOut"
};

const Page = styled(motion.div)`
  position:absolute;
  top:0;
  left:0;
  width:100%;
`

export default function Detail({ item }: DetailProps) {
  return (
    <Page  style={{backgroundColor: '#333', color:'white'}}
        initial={{ opacity: 0, x: '1000px' }}
        animate={{ opacity: 1, x: '0px' }}
        exit={{ opacity: 0, x: '1000px' }}
        transition={transition}
      >
      <main>
        <h1>{ item.name }</h1>
        <h2>${ item.price }</h2>
      </main>
    </Page>
  )
}