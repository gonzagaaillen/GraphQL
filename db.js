let suppliers = [
  {id: '1', companyname: 'Temu', location: 'Manila'},
  {id: '2', companyname: 'Shoppe', location: 'Philippines'},
  {id: '3', companyname: 'Lazada', location: 'Korea'},
  {id: '4', companyname: 'Shein', location: 'Singapore'},
  {id: '5', companyname: 'Tiktok', location: 'China'},
]

let products = [
  {id: '1', productname: 'Absidy', supplierid: '1', price: '359'},
  {id: '2', productname: 'Chuchu Beauty', supplierid: '2', price: '158'},
  {id: '3', productname: 'Vice Cosmetics', supplierid: '3', price: '599'},
  {id: '4', productname: 'Get Ready With Me', supplierid: '4', price: '225'},
  {id: '5', productname: 'O.TWOO.O', supplierid: '5', price: '189'},
]

let orderitems = [
  {id: '1', orderid: '1', productid: '1', quantity: '2'},
  {id: '2', orderid: '2', productid: '2', quantity: '6'},
  {id: '3', orderid: '3', productid: '3', quantity: '1'},
  {id: '4', orderid: '4', productid: '4', quantity: '3'},
  {id: '5', orderid: '5', productid: '5', quantity: '9'},
]

let orders = [
  {id: '1', orderdate: 'January 2, 2024', customerid: '1', totalamount: '718'},
  {id: '2', orderdate: 'May 19, 2024', customerid: '2', totalamount: '948'},
  {id: '3', orderdate: 'December 30, 2023', customerid: '3', totalamount: '599'},
  {id: '4', orderdate: 'April 1, 2024', customerid: '4', totalamount: '675'},
  {id: '5', orderdate: 'February 9, 2024', customerid: '5', totalamount: '1701'},
]

let customers = [
  {id: '1', firstname: 'Aillen', lastname: 'Gonzaga', city: 'Cagayan de Oro', phone: '09637482731'},
  {id: '2', firstname: 'Bob Nino', lastname: 'Golosinda', city: 'Lanao Del Norte', phone: '09736920111'},
  {id: '3', firstname: 'Deither', lastname: 'Casagnap', city: 'Quezon City', phone: '09067382900'},
  {id: '4', firstname: 'Ivan Joshua', lastname: 'Ladera', city: 'Cebu City', phone: '09556276382'},
  {id: '5', firstname: 'Maria', lastname: 'Labo', city: 'Pangasinan', phone: '09758282731'},
]

export default { suppliers, products, orderitems, orders, customers }