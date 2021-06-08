import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CartService } from '../cart.service';

export interface Events {
  title: string;
  date: string;
}

@Component({
  selector: 'app-eventdaytable',
  templateUrl: './eventdaytable.component.html',
  styleUrls: ['./eventdaytable.component.css']
})
export class EventdaytableComponent implements OnInit {

  showMyContainer: boolean = false;
  shownormal: boolean = true;

  constructor(
    private cartService: CartService,
    private changeDetectorRefs: ChangeDetectorRef
  ) {}

  displayedColumns: string[] = ['title', 'startdate', 'enddate', 'starttime', 'endtime', 'repetition', 'reminder', 'notes'];
  public date: string = this.cartService.getData();
  public items: any = this.cartService.getItems();
  public dataSource: any = this.items;

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.items = this.forloop();
    this.dataSource = this.items;
    this.changeDetectorRefs.detectChanges();
  }

  setdata(date: string) {
    this.date = date;
  }

  forloop() {
    if (this.cartService.filter_group == true) {
      this.items = this.cartService.eventos_groups;
      let array: any = [];
      let newDate = new Date(this.date);
      newDate.setDate(newDate.getDate() + 1); //??
      for (let item of this.items) {
        let startdate = new Date(item.startdate)
        let enddate = new Date(item.enddate)
        let repetition = item.repetition;
        if (item.cadeira == this.cartService.groupFilter.cadeira && item.grupo == this.cartService.groupFilter.grupo) {
          if ((startdate <= newDate && newDate <= enddate)) {
            array.push(item)
          }
          if (+repetition) {
            if (startdate.getDate() + (+repetition) <= newDate.getDate() && enddate.getDate() + (+repetition) >= newDate.getDate()) {
              array.push(item)
            }
          }
        }
      }
      return array;
    }else if (this.cartService.filter_subgroup == true) {
      this.items = this.cartService.eventos_subgroups;
      let array: any = [];
      let newDate = new Date(this.date);
      newDate.setDate(newDate.getDate() + 1); //??
      for (let item of this.items) {
        let startdate = new Date(item.startdate)
        let enddate = new Date(item.enddate)
        let repetition = item.repetition;
        if (item.cadeira == this.cartService.subgroupFilter.cadeira && item.grupo == this.cartService.subgroupFilter.grupo && item.subgrupo == this.cartService.subgroupFilter.subgrupo) {
          if ((startdate <= newDate && newDate <= enddate)) {
            array.push(item)
          }
          if (+repetition) {
            if (startdate.getDate() + (+repetition) <= newDate.getDate() && enddate.getDate() + (+repetition) >= newDate.getDate()) {
              array.push(item)
            }
          }
        }
      }
      return array;
    }
    else{
      this.items = this.cartService.getItems();
      let array: any = [];
      let newDate = new Date(this.date);
      newDate.setDate(newDate.getDate() + 1); //??
      for (let item of this.items) {
        let startdate = new Date(item.startdate)
        let enddate = new Date(item.enddate)
        let repetition = item.repetition;
        if ((startdate <= newDate && newDate <= enddate)) {
          array.push(item)
        }
        if (+repetition) {
          if (startdate.getDate() + (+repetition) <= newDate.getDate() && enddate.getDate() + (+repetition) >= newDate.getDate()) {
            array.push(item)
          }
        }
      }
      return array;
    }
  }

}
