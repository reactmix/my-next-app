import Head from 'next/head'
import Link from 'next/link'
import items from './data/items'

export const getServerSideProps = async () => {
  return {
    props: { 
      items: items.getItems()
    }
  }
}

export default function Home({ items }) {
  return (
    <div>
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
    </div>
  )
}
