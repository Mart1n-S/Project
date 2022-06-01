export interface Asset {
  addresse: string;
  name: string;
  code: string;
  icon: string;
  quantity: number;
  USDvalue: number;
  h: number;
};

 export interface Transaction {
   name: string;
   position: number;
   quantity: number;
   code: string;
 }