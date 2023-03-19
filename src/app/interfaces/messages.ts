export type MessageType = 'error' | 'warning' | 'success';

export interface Message {
  /**
   * Type of the message
   */
  type: MessageType;

  /**
   * Message code
   */
  code?: number;

  /**
   * Message to be displayed to the user
   */
  message: string;
}
