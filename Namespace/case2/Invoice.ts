namespace Runoob {
  export namespace invoiceApp {
    export class Invoice {
      public caculateDiscount(price:number) {
        return price * 0.40
      }
    }
  }
}