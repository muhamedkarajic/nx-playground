import { Component, inject, OnInit } from '@angular/core';
import { MyService } from '@muhamedkarajic/my-first-nx-lib';

@Component({
  selector: 'nx-playground-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-playgorund';
  x = inject(MyService);

  ngOnInit(): void {
    this.x.log3();
  }
}
