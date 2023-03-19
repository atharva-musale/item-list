import { Item } from "./item";

/**
 * Provides a model for storing data for all items
 */
export interface ItemsStore {
  /**
   * List of items
   */
  listOfItems: Item[],

  /**
   * Iumber of items
   */
  numberOfItems: number,

  /**
   * Total cost of items
   */
  costOfItems: number
}
