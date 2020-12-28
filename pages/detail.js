import items from './data/items'

export const getServerSideProps = async (req) => {
  const id = parseInt(req.query.id)
  return {
    props: { 
      item: items.getItemById(id)
    }
  }
}

export default function Item({ item }) {
  return (
    <div>
      <main>
        <h1>{ item.name }</h1>
        <h2>${ item.price }</h2>
      </main>
    </div>
  )
}