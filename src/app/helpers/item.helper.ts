import {
  IItem,
} from "../interfaces/item";

/**
 * Calculates total cost from the list of items
 *
 * @param items list of items
 * @returns total cost
 */
export function calculateTotalCost(items: IItem[]): number {
  const totalCostOfItems = items.reduce((total, currentValue) => {
    return total + currentValue.cost;
  }, 0);
  return totalCostOfItems;
}
