import { IItem } from "./item";

export interface ItemsStore {
  listOfItems: IItem[],
  numberOfItems: number,
  costOfItems: number
}
