import { Component, OnInit } from '@angular/core';
import {BeltService} from '../belt.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pets: any;
  petdetail: any;
  petToEdit: any;

  constructor(
    private _beltService: BeltService
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    const obsItem = this._beltService.getAll();
    obsItem.subscribe(data => {
      this.pets = data['data'];
    });
  }

}
