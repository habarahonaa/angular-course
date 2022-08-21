import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data = {
    title: 'angular-course',
    terminalValue: ['> Update this using the input element above!'],
  };

  updateTerminal(newText: string): void {
    console.log(this.data.terminalValue);
    this.data.terminalValue.push(`> ${newText}`);
  }
}
