import { Component, inject, OnInit } from '@angular/core';
import { MyService } from '@muhamedkarajic/my-first-nx-lib';

@Component({
  selector: 'nx-playground-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  x = inject(MyService);
  title = 'angular-playgorund';

  ngOnInit(): void {
    this.x.log3();
  }
}
