var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function totalSales(company) {
  var tempRevenues = 0;
  for (var i = 0; i < company.sales.length; i++) {
    tempRevenues += company.sales[i];
  }
  return tempRevenues;
}

function findTheTaxRate(province, taxRates) {
  for (var i in taxRates) {
    if (province === i) {
      return taxRates[i];

    }
  }
}


function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var financialData = {};
  for (var i = 0; i < salesData.length; i++) {
    theRevenue = totalSales(salesData[i]);
    //console.log(salesData[i].province, taxRates);
    totalTaxes = theRevenue *(findTheTaxRate(salesData[i].province, taxRates));
    if (!financialData[salesData[i].name]) {
       financialData[salesData[i].name] = {totalSales: 0, totalTaxes: 0};
    }
        financialData[salesData[i].name].totalSales += theRevenue;
        financialData[salesData[i].name].totalTaxes += totalTaxes;
  }
  console.log(financialData);

}


var results = calculateSalesTax(companySalesData, salesTaxRates);

//calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/