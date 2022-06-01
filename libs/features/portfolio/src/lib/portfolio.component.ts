import { Component, OnInit } from '@angular/core';
import { Asset } from '@finastra/api-interfaces';

@Component({
  selector: 'finastra-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  assets: Asset[] = [
    {
      "addresse": "0x986368273648623",
      "name": "Bitcoin",
      "code": "BTC",
      "icon": "",
      "quantity": 1.78,
      "USDvalue": 12030.33,
      "h": 0.02
    },
    {
      "addresse": "0x986368266486224",
      "name": "Etherum",
      "code": "ETH",
      "icon": "",
      "quantity": 0.998,
      "USDvalue": 2030.33,
      "h": 0.82
    },
    {
      "addresse": "0x986368273648678",
      "name": "BNB",
      "code": "bnb",
      "icon": "",
      "quantity": 10.28,
      "USDvalue": 30.33,
      "h": 3.2
    }
  ];


    //  transactions: Transaction[] = [
    //    {position: 1, name: 'Bitcoin', quantity: 1.5, code: 'BTC'},
    //    {position: 2, name: 'Etherum', quantity: 0.2, code: 'ETH'},
    //    {position: 3, name: 'BNB', quantity: 1.90, code: 'bnb'},
    //  ];


  constructor() { }

  ngOnInit(): void {
  }

  handleClick(asset: Asset): void {
    console.log(asset);
  }

}
