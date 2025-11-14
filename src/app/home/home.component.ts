import { Component, computed, effect, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(){
  }

  cityList:any[] = ['Jaipur', 'Kota', 'Udaipur', 'Bundi'];

  tableData:any = [{}];

    ngOnInit(): void {
        this.dataForTable();
    }

  dataForTable(){
    this.tableData = [{
      id: 1,
      firstName: "Kunal",
      lastName: "Mahajan",
      address: "1523-A",
      city: "Kota",
    },
    {
      id: 1,
      firstName: "Mahesh",
      lastName: "Gupta",
      address: "1-G-13",
      city: "Talwandi",
    },{
      id: 2,
      firstName: "M",
      lastName: "Jangir",
      address: "Jaipur",
      city: "Jpr",
    },{
      id: 3,
      firstName: "Paru",
      lastName: "Lok",
      address: "1523-A",
      city: "Kota",
    },{
      id: 4,
      firstName: "Kunal",
      lastName: "Mahajan",
      address: "1523-A",
      city: "Kota",
    },{
      id: 5,
      firstName: "Kunal",
      lastName: "Mahajan",
      address: "1523-A",
      city: "Kota",
    },]
  }
}
