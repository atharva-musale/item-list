import { Item } from "./item";

export interface ItemsStore {
  listOfItems: Item[],
  numberOfItems: number,
  costOfItems: number
}
