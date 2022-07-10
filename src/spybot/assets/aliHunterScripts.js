export {
  getAlihunterVariables,
  clickOnLiveSalesButton,
  getSoldProductsList,
  getUpperSalesNumber
}

function getAlihunterVariables() {
  return {
    liveSalesClass: "_1fQDJexb8H_UJodrVYIjjD",
    productsIdName: "newSaleList",
    productClassName: "_3CQ96D6HM-X1ppK2Q6gWAF",
    productNameClass: "_1h0SwjHGr__FljITS6J2FA",
    productPriceClass: "_1jlBA3TjmrUfFXXCyWbfpV",
    productLinkClass: "_1ppspMRy3xYkn0jLnZ7ghC",
    productTimeClass: "_94ZmeYYiS8oR1zgGtS0xI",
    productImageClass: "._1aBWBWzOfdrmQY1Z-mLwkO > img",
    upperNumberClass: "_1fQDJexb8H_UJodrVYIjjD"
  }
}

function clickOnLiveSalesButton() {
  const { liveSalesClass } = getAlihunterVariables()
  const elLiveSalesButton = document.getElementsByClassName(liveSalesClass)

  if (elLiveSalesButton && elLiveSalesButton[2]) {
    elLiveSalesButton[2].click()
  }
}

function getSoldProductsList(onlyToday) {

  const {
    productsIdName,
    productClassName,
    productNameClass,
    productPriceClass,
    productLinkClass,
    productTimeClass,
    productImageClass
  } = getAlihunterVariables()

  const elSalesArr = document.getElementById(productsIdName)

  let productsArr = [];

  if (elSalesArr) {

    const products = elSalesArr.getElementsByClassName(productClassName)

    for (let x = 0; x < products.length; x++) {
      const element = products[x];
      if (element) {

        const productName = element.getElementsByClassName(productNameClass)[0].innerText;
        const productPrice = element.getElementsByClassName(productPriceClass)[0].innerText;
        const productTime = element.getElementsByClassName(productTimeClass)[0].innerText;
        const productLink = element.getElementsByClassName(productLinkClass)[0].getAttribute("href");
        const productImage = element.querySelector(productImageClass)?.getAttribute("src")
        const fixedProductPrice = Number(productPrice.split(" ")[0])

        const productObj = {
          productName,
          productPrice: fixedProductPrice,
          productTime,
          productLink,
          productImage
        }

        const productRow = x + " | " + productName + " | " + fixedProductPrice + " | " + productTime + " | " + productLink
        console.log(productRow)

        if (!onlyToday) {
          productsArr.push(productObj)
        } else {
          const isNotFromDaysAgo = productTime.toString().search("day") === -1
          const isNotFromMonthsAgo = productTime.toString().search("month") === -1
          if (isNotFromDaysAgo && isNotFromMonthsAgo) {productsArr.push(productObj)}
        }
      }

    }
  }

  return productsArr;
}

function getUpperSalesNumber() {

  const {
    upperNumberClass
  } = getAlihunterVariables()

  const elUpperNumber = document.getElementsByClassName(upperNumberClass)

  if (elUpperNumber) {

    if (elUpperNumber[2]) {
      var upperNumberCount = elUpperNumber[2].firstChild ? elUpperNumber[2].firstChild.innerText : ""
      upperNumberCount = upperNumberCount.replace("+", "")

      if (upperNumberCount === "") {
        return 0
      } else {
        return upperNumberCount;
      }
    } else {
      return -4
    }

  } else {
    return -5
  }
}

// function pera(){
//   <div class="_3CQ96D6HM-X1ppK2Q6gWAF _1NVk7IuQxy-04MTxnLio0t">
//     <div class="_3MKTqZAzt9ZahG8uCIFoOb _18D1FLGR-CZ9ud5nEQFieK">
//       <div class="_94ZmeYYiS8oR1zgGtS0xI">2 minutes ago</div>
//       <a class="_1ppspMRy3xYkn0jLnZ7ghC" href="https://quierobr.myshopify.com/products/xo-frizz™" target="__blank">
//         <div class="_79SyLYpovGcygTpVfZIPz">
//           <div class="_1aBWBWzOfdrmQY1Z-mLwkO">
//             <img src="https://cdn.shopify.com/s/files/1/0459/6829/4047/products/1_e145afea-0950-4f38-a8ba-c9eabc9ab7ab_70x70.jpg?v=1628659713" loading="lazy" alt="newSale-undefined"></div>
//           <div class="_3K0_8-CusHqoCIjsYg4EMv">
//             <div class="_1h0SwjHGr__FljITS6J2FA">Xô Frizz™</div>
//             <div style="display: flex; gap: 8px;">
//               <div class="_1jlBA3TjmrUfFXXCyWbfpV"> 89.9 BRL</div>
//             </div>
//           </div>
//         </div>
//         <div class="_2ByTXHK5eU5YdxJBPjkMlP _2q_66KqvNFFBZDkWNvw_gw PLhxH8_c7uWAETPFF6Ux-" data-ah-color="primary" data-ah-variant="outlined" data-ah-btn-disabled="false" data-ah-btn-loading="false" style="display: inline-flex;">Find Suppliers</div>
//       </a>
//     </div>
//   </div>
// }
