import {
  Item,
} from "../interfaces/item";

/**
 * Calculates total cost from the list of items
 *
 * @param items list of items
 * @returns total cost
 */
export function calculateTotalCost(items: Item[]): number {
  return items.reduce((total, currentValue) => {
    return total + currentValue.cost;
  }, 0);
}

/**
 * Creates new Item
 *
 * @param itemName name of the new item
 * @returns new item
 */
export function createNewItem(id: number, itemName: string, cost = 100): Item {
  return { id: id, name: itemName, cost: cost };
}
