import {
  Injectable,
} from "@angular/core";
import {
  Subject,
} from "rxjs";
import {
  Message,
} from "src/app/interfaces";

@Injectable({
  providedIn: 'root'
})
export class MessagePanelService {
  /**
   * List of messages
   */
  private messages: Message[] = [];

  /**
   * Subject to store the messages
   */
  private messagesSubject$ = new Subject<Message[]>();
  public listOfMessages$ = this.messagesSubject$.asObservable();

  constructor() {}

  /**
   * Adds a message to the list of messages
   *
   * @param message message to be added
   */
  public pushMessage(message: Message) {
    this.messages.push(message);
    this.messagesSubject$.next(this.messages);
  }

  /**
   * Removes a message
   *
   * @param message message to be deleted
   */
  public removeMessage(message: Message) {
    const index = this.messages.findIndex(msg => message.code === msg.code);
    if (index === -1) return;
    this.messages.splice(index, 1);
    this.messagesSubject$.next(this.messages);
  }

  /**
   * Resets all messages
   */
  public resetMessages() {
    this.messages = [];
    this.messagesSubject$.next(this.messages);
  }
}
