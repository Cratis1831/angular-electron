import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ElectronService } from '../core/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  showFiller = false;
  data = [
    { id: 1, name: 'Rajesh', email: 'rajesh@gmail.com' },
    { id: 2, name: 'Paresh', email: 'paresh@gmail.com' },
    { id: 3, name: 'Naresh', email: 'naresh@gmail.com' },
    { id: 4, name: 'Suresh', email: 'suresh@gmail.com' },
    { id: 5, name: 'Karan', email: 'karan@gmail.com' },
    { id: 6, name: 'dummy', email: 'dummy@gmail.com' },
    { id: 7, name: 'dummy1', email: 'dummy@gmail.com' },
    { id: 8, name: 'dummy2', email: 'dummy@gmail.com' },
    { id: 9, name: 'dummy3', email: 'dummy@gmail.com' },
    { id: 10, name: 'dummy4', email: 'dummy@gmail.com' },
    { id: 11, name: 'dummy5', email: 'dummy@gmail.com' },
    { id: 12, name: 'dummy6', email: 'dummy@gmail.com' },
    { id: 13, name: 'dummy7', email: 'dummy@gmail.com' },
    { id: 14, name: 'dummy8', email: 'dummy@gmail.com' },
  ];
  displayedColumns = ['id', 'name', 'email'];
  constructor(
    private router: Router,
    private electronService: ElectronService
  ) {}

  ngOnInit(): void {}

  onTitleSet() {}
}
