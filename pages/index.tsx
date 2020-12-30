import Link from 'next/link'
import items from './data/items'
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"
import styled from 'styled-components'
import { useState } from 'react'
// import types
import { GetServerSideProps } from 'next'
import { DataItemList } from './data/items'

interface HomeProps {
  items: DataItemList
}

type FocusState = Number | null

export const getServerSideProps: GetServerSideProps<HomeProps> = async function() {
  const props = { 
    items: items.getItems() 
  }
  return { props }
}

const transition = {
  ease: "easeInOut"
};

const Bullet = styled(motion.span)`
  display:inline-block;
  width:10px;
  height:10px;
  background-color:red;
  border-radius: 5px;
  position:absolute;
  top:20px;
  left:-25px;
`

const ListItem = styled.li`
  position:relative;
  list-style:none;
  font-size:28pt;
`

const Page = styled(motion.div)`
  position:absolute;
  top:0;
  left:0;
  width:100%;
`

const animateBulletProps = {
  initial: { x: 0 },
  animate: { opacity: 1, x: 0 },
  exit: {opacity: 0, x: -100 },
  layoutId: "moving-bullet"
}

export default function Home({ items }: HomeProps) {

  const [ focus, setFocus ] = useState<FocusState>(null) 

  return (
    <Page
        initial={{ opacity: 0, x: '-1000px' }}
        animate={{ opacity: 1, x: '0px' }}
        exit={{ opacity: 1, x: '-1000px' }}
        transition={transition}
      >
      <main>
        <AnimateSharedLayout>
        <ul style={{backgroundColor: '#ccc'}}>
          {items.map(x => (
            <ListItem key={ x.id }>
              <span onMouseEnter={()=>setFocus(x.id)} onMouseLeave={()=>setFocus(null)}>
                <AnimatePresence>
                  {(focus === x.id) &&
                    <Bullet {...animateBulletProps}></Bullet>
                  }
                </AnimatePresence>
                <Link href={"/detail/?id="+x.id}>{ x.name }</Link>
              </span>
            </ListItem>
          ))}
        </ul>
        </AnimateSharedLayout>
      </main>
    </Page>
  )
}
