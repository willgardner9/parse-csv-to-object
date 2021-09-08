const demoCsvString = `product, price, review, in_stock
Gold Romeo Square Hoops, 85.00, Stunning! I love them., true
Gold Siren Hoops, 110.00, , false
Half Moon Pearl Earrings, 70.00, Delightful! Dressy without being garish., true`;

//  random test data from Mockaroo
const demoCsvStringTwo = `id,first_name,last_name,email,ip_address
1,Audre,Licciardello,alicciardello0@geocities.jp,246.249.198.183
2,Stephana,Canner,scanner1@gnu.org,203.190.148.163
3,Georgi,Smithyman,gsmithyman2@cpanel.net,17.254.227.240
4,Nollie,Eastby,neastby3@opera.com,57.102.46.137
5,Eden,Bigglestone,ebigglestone4@g.co,108.176.244.169
6,Joseph,Woodhall,jwoodhall5@constantcontact.com,63.64.132.20
7,Margaretha,Bletso,mbletso6@github.io,12.224.235.143
8,Dyanne,Lingner,dlingner7@marriott.com,110.109.250.86
9,Caitlin,Hambly,chambly8@prweb.com,130.20.196.94
10,Gabriel,Traher,gtraher9@yolasite.com,178.239.218.14`;

//  optional second argument of the delimiter depending on csv format
const parseCsvStringToArrayOfObjects = (csvString, delimiter = ",") => {
  //  split csv by newlines to get array of all csv rows
  const allCsvRows = csvString.split("\n");

  //  csv headers are at index 0 of array of csv rows
  const csvHeaders = allCsvRows[0].split(delimiter);

  //  csv rows are all array items after index 0 (csv headers)
  const csvRowsWithoutHeaders = allCsvRows.splice(1);

  //  empty array that we will populate with objects
  const arrayOfProductObjects = [];

  //  loops over each data row, splits each data row into an array
  //  then loops over headers and matches each data row array item
  //  against the correct header
  csvRowsWithoutHeaders.forEach((row) => {
    //  empty object that we will populate with data from each row
    const productObject = {};

    //  split row into an array
    const arrayOfRow = row.split(delimiter);

    //  loop over each item in the array, matching it up
    //  with the correct csv header by index, and adding both
    //  the header and data as key: value pair to product object
    arrayOfRow.forEach((item, index) => {
      productObject[csvHeaders[index]] = item.trim();
    });

    //  push the product object to the array of product objects
    arrayOfProductObjects.push(productObject);
  });
  return arrayOfProductObjects;
};

console.log(parseCsvStringToArrayOfObjects(demoCsvString, ", "));

console.log(parseCsvStringToArrayOfObjects(demoCsvStringTwo));
