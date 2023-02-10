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
