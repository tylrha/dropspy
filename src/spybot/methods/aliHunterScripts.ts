export {
  getAlihunterVariables,
  clickOnLiveSalesButton,
  getSoldProductsList,
  getUpperSalesNumber
};

function getAlihunterVariables() {
  return {
    liveSalesClass: '_1fQDJexb8H_UJodrVYIjjD',
    productsIdName: 'newSaleList',
    productClassName: '_3CQ96D6HM-X1ppK2Q6gWAF',
    productNameClass: '_1h0SwjHGr__FljITS6J2FA',
    productPriceClass: '_1jlBA3TjmrUfFXXCyWbfpV',
    productLinkClass: '_1ppspMRy3xYkn0jLnZ7ghC',
    productTimeClass: '_94ZmeYYiS8oR1zgGtS0xI',
    productImageClass: '._1aBWBWzOfdrmQY1Z-mLwkO > img',
    upperNumberClass: '_1fQDJexb8H_UJodrVYIjjD'
  };
}

function clickOnLiveSalesButton() {
  const { liveSalesClass } = getAlihunterVariables();
  const elLiveSalesButton = document.getElementsByClassName(liveSalesClass) as HTMLCollectionOf<HTMLElement>;

  if (elLiveSalesButton && elLiveSalesButton[2]) {
    elLiveSalesButton[2].click();
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
  } = getAlihunterVariables();

  const elSalesArr = document.getElementById(productsIdName);

  const productsArr = [];

  if (elSalesArr) {

    const products = elSalesArr.getElementsByClassName(productClassName);

    for (let x = 0; x < products.length; x++) {
      const element = products[x];
      if (element) {

        const elProductName = element.getElementsByClassName(productNameClass)[0] as HTMLElement;
        const productName = elProductName.innerText;

        const elProductPrice = element.getElementsByClassName(productPriceClass)[0] as HTMLElement;
        const productPrice = elProductPrice.innerText;

        const elProductTime = element.getElementsByClassName(productTimeClass)[0] as HTMLElement;
        const productTime = elProductTime.innerText;

        const productLink = element.getElementsByClassName(productLinkClass)[0].getAttribute('href');
        const productImage = element.querySelector(productImageClass)?.getAttribute('src');
        const fixedProductPrice = Number(productPrice.split(' ')[0]);

        const productObj = {
          productName,
          productPrice: fixedProductPrice,
          productTime,
          productLink,
          productImage
        };

        const productRow = x + ' | ' + productName + ' | ' + fixedProductPrice + ' | ' + productTime + ' | ' + productLink;
        console.log(productRow);

        if (!onlyToday) {
          productsArr.push(productObj);
        } else {
          const isNotFromDaysAgo = productTime.toString().search('day') === -1;
          const isNotFromMonthsAgo = productTime.toString().search('month') === -1;
          if (isNotFromDaysAgo && isNotFromMonthsAgo) {productsArr.push(productObj);}
        }
      }

    }
  }

  return productsArr;
}

function getUpperSalesNumber() {

  const {
    upperNumberClass
  } = getAlihunterVariables();

  const elUpperNumber = document.getElementsByClassName(upperNumberClass);

  if (elUpperNumber) {

    if (elUpperNumber[2]) {
      const elNumber = elUpperNumber[2].firstChild as HTMLElement;
      let upperNumberCount = elNumber ? elNumber.innerText : '';
      upperNumberCount = upperNumberCount.replace('+', '');

      if (upperNumberCount === '') {
        return 0;
      } else {
        return upperNumberCount;
      }
    } else {
      return -4;
    }

  } else {
    return -5;
  }
}
