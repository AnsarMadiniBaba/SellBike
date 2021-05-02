import { Component, OnInit } from '@angular/core';
import { BikeDetails } from '../models/bikedetails.model';
import { ListViewEventData, RadListView } from "nativescript-ui-listview"

@Component({
  selector: 'ns-myads',
  templateUrl: './myads.component.html',
  styleUrls: ['./myads.component.css']
})
export class MyadsComponent implements OnInit {

  bikedetails: any;

  constructor() { }

  ngOnInit(): void {
    this.bikedetails = [{
      "images": "aaa",
      "brand": "aaa",
      "model": "aaa",
      "price": 123,
      "landmark": "aaa",
      "city": "aaa",
      "state": "aaa",
      "pin": "aaa",
      "dateposted": "aaa",
      "year": 2010,
      "kmdriven": 10000,
      "adid": "aaa",
      "owners": "aaa",
      "enginecap": "aaa",
      "numberofviwers": 1233,
      "numberoffavorites": 55,
      "adpostphone": 45236998
    },
    {
      "images": "aaa",
      "brand": "aaa",
      "model": "aaa",
      "price": 123,
      "landmark": "aaa",
      "city": "aaa",
      "state": "aaa",
      "pin": "aaa",
      "dateposted": "aaa",
      "year": 2010,
      "kmdriven": 10000,
      "adid": "aaa",
      "owners": "aaa",
      "enginecap": "aaa",
      "numberofviwers": 1233,
      "numberoffavorites": 55,
      "adpostphone": 45236998
    }];
  }

  // public onItemSelected(args: ListViewEventData) {
  //   const listview = args.object as RadListView;
  //   const selectedItems = listview.getSelectedItems() as Array<BikeDetails>;
  //   let routeExtras: NavigationExtras = {
  //     queryParams: { "bike": JSON.stringify(selectedItems) }
  //   }
  //   this.routerExtensions.navigate(["/deatils"], routeExtras);
  // }

}
