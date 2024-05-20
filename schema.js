export const typeDefs = `#graphql
 type Supplier {
  id: ID!
  companyname: String!
  location: String!
  products: [Product!]
 }
 type Product {
  id: ID!
  productname: String!
  price: Int!
  supplier: Supplier!
  orderitems: [OrderItem!]
 }
 type OrderItem {
  id: ID!
  quantity: Int!
  order: Order!
  product: Product!
 }
 type Order {
  id: ID!
  orderdate: String!
  totalamount: Int!
  customer: Customer!
  orderitems: [OrderItem!]
 }
 type Customer {
  id: ID!
  firstname: String!
  lastname: String!
  city: String!
  phone: Int!
  orders: [Order!]
 }
 type Query {
  suppliers: [Supplier]
  supplier(id: ID!): Supplier
  products: [Product]
  product(id: ID!): Product
  orderitems: [OrderItem]
  orderitem(id: ID!): OrderItem
  orders: [Order]
  order(id: ID!): Order
  customers: [Customer]
  customer(id: ID!): Customer
 }
 type Mutation {
  addsupplier(supplier: AddSupplierInput!): Supplier
  deletesupplier(id: ID!): [Supplier]
  updatesupplier(id: ID!, edits: EditSupplierInput!): Supplier

  addproduct(product: AddProductInput!): Product
  deleteproduct(id: ID!): [Product]
  updateproduct(id: ID!, edits: EditProductInput!): Product

  addorderitem(orderitem: AddOIInput!): OrderItem
  deleteorderitem(id: ID!): [OrderItem]
  updateorderitem(id: ID!, edits: EditOIInput!): OrderItem

  addorder(order: AddOrderInput!): Order
  deleteorder(id: ID!): [Order]
  updateorder(id: ID!, edits: EditOrderInput!): Order

  addcustomer(customer: AddCustomerInput!): Customer
  deletecustomer(id: ID!): [Customer]
  updatecustomer(id: ID!, edits: EditCustomerInput!): Customer
 }
 input AddSupplierInput {
  companyname: String!
  location: String!
 }
 input EditSupplierInput {
  companyname: String
  location: String
 }
 input AddProductInput{
  productname: String!
  price: Int!
 }
 input EditProductInput{
  productname: String
  price: Int
 }
 input AddOIInput {
  quantity: Int!
 }
 input EditOIInput {
  quantity: Int
 }
 input AddOrderInput {
  orderdate: String!
  totalamount: Int!
 }
 input EditOrderInput {
  orderdate: String
  totalamount: Int
 }
 input AddCustomerInput {
  firstname: String!
  lastname: String!
  city: String!
  phone: Int!
 }
 input EditCustomerInput {
  firstname: String
  lastname: String
  city: String
  phone: Int
 }
`