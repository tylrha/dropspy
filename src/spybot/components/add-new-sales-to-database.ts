import { LOGGER } from "../../../configs/configs";

import IAlihunterSale from "../interfaces/IAlihunterSale";
import IStoreSheets from "../interfaces/IStoreSheets";

export default async function addNewSaleToDatabase(alihunterSalesArr: IAlihunterSale[], currentStoreObj: IStoreSheets){

  if (!alihunterSalesArr){return}

  const {
    storeName,
    storeLink
  } = currentStoreObj

  for(let x = 0; x < alihunterSalesArr.length; x++){

    const curSoldProduct: IAlihunterSale = alihunterSalesArr[x]

    const {
      productLink,
      productName,
      productPrice,
      productTime,
      productImage
    } = curSoldProduct

    const saleObject = {
      storeName,
      storeLink,

      productLink,
      productName,
      productPrice,
      productTime,
      productImage
    }

    LOGGER(`Adicionando o produto: ${curSoldProduct.productName}`, {from: "SPYBOT", pid: true})
    console.log(saleObject)
  }

}
