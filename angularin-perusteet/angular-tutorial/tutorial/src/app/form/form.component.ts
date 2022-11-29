import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  disabled = false;

  ngOnInit() {
    setTimeout(() => {
      this.disabled = true;
    }, 2000);
  }
  onInput(event: any) {
    const value = event.target.value
    console.log(event);
    

}
}
