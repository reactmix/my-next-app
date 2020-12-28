const items = [
  { id: 1, name: 'table', price: 70 },
  { id: 2, name: 'chair', price: 50 },
  { id: 3, name: 'bookshelf', price: 210 },
]

const getItems = () => items
const getItemById = (id) => items.find(x => x.id === id)

export default { getItems, getItemById }