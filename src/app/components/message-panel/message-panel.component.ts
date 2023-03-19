import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  Observable,
  Subscription,
} from 'rxjs';
import {
  delay,
  filter,
  map,
} from 'rxjs/operators';
import {
  Message,
  MessageType,
} from 'src/app/interfaces';
import {
  MessagePanelService,
} from 'src/app/services';

@Component({
  selector: 'app-message-panel',
  templateUrl: './message-panel.component.html',
  styleUrls: ['./message-panel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagePanelComponent implements OnInit, OnDestroy {
  /**
   * Type of message panel
   */
  @Input()
  public type?: MessageType;

  /**
   * Icons
   */
  public readonly ICONS: Record<string, string> = {
    'success': 'check_circle',
    'warning': 'report_problem',
    'error': 'clear'
  }

  /**
   * Messages of the current type
   */
  public messageToDisplay$?: Observable<string | undefined>;

  /**
   * Message
   */
  private message$?: Observable<Message | undefined>;

  /**
   * list of subscriptions
   */
  private subscriptions: Subscription[] = [];

  constructor(private messagesService: MessagePanelService) { }

  ngOnInit(): void {
    this.message$ = this.messagesService.listOfMessages$.pipe(
      map(messages => messages.find(message => message.type === this.type))
    );

    this.messageToDisplay$ = this.messagesService.listOfMessages$.pipe(
      map(messages => messages.find(message => message.type === this.type)?.message)
    );

    this.messageToDisplay$ = this.message$.pipe(map(message => message?.message));

    // Makes the panel disappear after 3sec by removing the message
    this.subscriptions.push(
      this.message$.pipe(filter(message => !!message), delay(3000)).subscribe((message) => {
        if (message) {
          this.messagesService.removeMessage(message);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
