import { Message } from "src/app/interfaces";

/**
 * Message to display if an item was successfully added
 */
export const ITEM_ADDED_MESSAGE: Message = {
  code: 1,
  type: 'success',
  message: 'Item was successfully added.'
}

/**
 * Message to display if item was not successfully added
 */
export const ITEM_NOT_ADDED_MESSAGE: Message = {
  code: 100,
  type: 'error',
  message: 'Item could not be added. Please try again later.'
}

/**
 * Message to display if an item was successfully added
 */
export const ITEM_DELETED_MESSAGE: Message = {
  code: 2,
  type: 'success',
  message: 'Item was successfully deleted.'
}

/**
 * Message to display if item was not successfully added
 */
export const ITEM_NOT_DELETED_MESSAGE: Message = {
  code: 200,
  type: 'error',
  message: 'Item could not be deleted. Please try again later.'
}

/**
 * Message to be displayed if user clicks on add without entering any item
 */
export const EMPTY_INPUT_MESSAGE: Message = {
  code: 1000,
  type: 'warning',
  message: 'Please enter an item to add.'
}
