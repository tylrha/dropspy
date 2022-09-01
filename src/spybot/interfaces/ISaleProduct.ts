interface ISaleProduct {
  storeName: string;
  storeLink: string;
  productLink: string;
  productName: string;
  productPrice: number;
  productImage: string;
  lastSale: string;
  lastSaleIso: string;
  totalSales: number;
  totalRevenue: number;
}

export default ISaleProduct;
