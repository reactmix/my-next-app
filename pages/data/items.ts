const items = [
  { id: 1, name: 'table', price: 70 },
  { id: 2, name: 'chair', price: 50 },
  { id: 3, name: 'bookshelf', price: 210 },
]

export interface DataItem { 
  id: number, 
  name: string, 
  price: number 
}

export type DataItemList = Array<DataItem>

interface GetItems {
  (): (DataItemList)
}

interface GetItemById {
  (id: number): (DataItem | undefined)
}

interface ItemsModel {
  getItems: GetItems
  getItemById: GetItemById
}

const itemsModel: ItemsModel = {
  getItems: () => items,
  getItemById: function(id){ 
    return items.find(x => x.id === id) 
  }
}

export default itemsModel