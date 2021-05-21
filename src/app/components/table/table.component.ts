import { Component, OnInit } from "@angular/core";
import { SharedService } from "../shared.service";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"],
})
export class TableComponent implements OnInit {
  carData = [
    {
      image: "https://i.ibb.co/C2YdqhZ/Hundai-Aura.webp",
      name: "Hundai Aura",
      cost: 500000,
      like: false,
    },
    {
      image: "https://i.ibb.co/Pzc4pqj/Gm-motors.jpg",
      name: "Hector",
      cost: 1150000,
      like: false,
    },
    {
      image: "https://i.ibb.co/MV9fZvB/maruti-suzki.webp",
      name: "Maruti Dzire",
      cost: 300000,
      like: false,
    },
    {
      image: "https://i.ibb.co/RC0Rvng/Tata-Altroz.webp",
      name: "TATA Altroz",
      cost: 100000,
      like: false,
    },
    {
      image: "https://i.ibb.co/dgNb8Hb/Honda-Amaze.webp",
      name: "Honda Amaze",
      cost: 300000,
      like: false,
    },
    {
      image: "https://i.ibb.co/cwnLcVZ/front-left-side-47.webp",
      name: "Ford Aspire",
      cost: 400000,
      like: false,
    },
    {
      image: "https://i.ibb.co/C2YdqhZ/Hundai-Aura.webp",
      name: "Hundai Aura-1",
      cost: 1100000,
      like: false,
    },
    {
      image: "https://i.ibb.co/Pzc4pqj/Gm-motors.jpg",
      name: "Hector-1",
      cost: 1000000,
      like: false,
    },
    {
      image: "https://i.ibb.co/MV9fZvB/maruti-suzki.webp",
      name: "Maruti Dzire-1",
      cost: 200000,
      like: true,
    },
    {
      image: "https://i.ibb.co/RC0Rvng/Tata-Altroz.webp",
      name: "TATA Altroz-1",
      cost: 300000,
      like: false,
    },
    {
      image: "https://i.ibb.co/dgNb8Hb/Honda-Amaze.webp",
      name: "Honda Amaze-1",
      cost: 150000,
      like: false,
    },
    {
      image: "https://i.ibb.co/cwnLcVZ/front-left-side-47.webp",
      name: "Ford Aspire-1",
      cost: 200000,
      like: false,
    },
  ];
  constructor(private _sharedService: SharedService) {}

  ngOnInit() {
    // this._sharedService.get().subscribe((res: any) => {
    //   if (!res) {
    //     this.carData = [];
    //   }
    //   this.carData = res;
    //   console.log(this.carData);
    // });
  }

  changeSelect(e) {
    let shortString = e.target.value;
    if (shortString === "Short By Cost asc") {
      this.carData = this.carData.sort((a, b) => a.cost - b.cost);
    }

    if (shortString === "Short By Cost desc") {
      this.carData = this.carData.sort((a, b) => b.cost - a.cost);
    }

    if (shortString === "Short By Name asc") {
      this.carData = this.carData.sort((a, b) => a.name.localeCompare(b.name));
      console.log(this.carData);
    }

    if (shortString === "Short By Name desc") {
      this.carData = this.carData.sort((a, b) => b.name.localeCompare(a.name));
      console.log(this.carData);
    }
  }
}
