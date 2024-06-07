import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationItemActivatedEvent } from '@epsilon/core-ui';
import { ChatbotService } from './services/chatbot.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public thisYear: string;
    messages: string[] = [];
  newMessage: string = '';

    public reactiveForm = new FormGroup(
        {
            inputDefault: new FormControl(),
            inputDisabled: new FormControl(
                { value: 'Input Value', disabled: true },
                Validators.required
            )
        },
        { updateOn: 'blur' }
    );

    public radioFormGroup: FormGroup = new FormGroup({
        inlineRadio: new FormControl('1')
    });

    constructor(private chatbotService: ChatbotService) {
        this.thisYear = new Date().getFullYear().toString();
    }

    public onClick(event: NavigationItemActivatedEvent): void {
        event.event.preventDefault();
    }

    sendMessage() {
        if (this.newMessage.trim() === '') return;
        
        this.messages.push(this.newMessage);
        this.chatbotService.sendMessage(this.newMessage).subscribe(response => {
          this.messages.push(response.reply);
        });
    
        this.newMessage = '';
      }
}