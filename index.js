import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs } from './schema.js'
import db from './db.js'

const resolvers = {
  Query: {
    suppliers() {
      return db.suppliers
    },
    supplier(_, args){
      return db.suppliers.find((supplier) => supplier.id === args.id)
    },
    products() {
      return db.products
    },
    product(_, args){
      return db.products.find((product) => product.id === args.id)
    },
    orderitems() {
      return db.orderitems
    },
    orderitem(_, args){
      return db.orderitems.find((orderitem) => orderitem.id === args.id)
    },
    orders() {
      return db.orders
    },
    order(_, args){
      return db.orders.find((order) => order.id === args.id)
    },
    customers() {
      return db.customers
    },
    customer(_, args){
      return db.customers.find((customer) => customer.id === args.id)
    }
  },
  Supplier: {
    products(parent) {
      return db.products.filter((p) => p.supplierid === parent.id)
    }
  },
  Product: {
    orderitems(parent) {
      return db.orderitems.filter((oi) => oi.productid === parent.id)
    },
    supplier(parent) {
      return db.suppliers.find((s) => s.id === parent.supplierid)
    }
  },
  OrderItem: {
    order(parent) {
      return db.orders.find((o) => o.id === parent.orderid)
    },
    product(parent) {
      return db.products.find((p) => p.id === parent.productid)
    }
  },
  Order: {
    orderitems(parent) {
      return db.orderitems.filter((oi) => oi.orderid === parent.id)
    },
    customer(parent) {
      return db.customers.find((c) => c.id === parent.customerid)
    }
  },
  Customer: {
    orders(parent) {
      return db.orders.filter((o) => o.customerid === parent.id)
    }
  },
  Mutation: {
    deletesupplier(_, args) {
      db.suppliers = db.suppliers.filter((s) => s.id !== args.id)
      return db.suppliers
    },
    addsupplier(_, args){
      let supplier = {
        ...args.supplier,
        id: Math.floor(Math.random() *10).toString()
      }
      db.suppliers.push(supplier)
      return supplier
    },
    updatesupplier(_, args) {
      db.suppliers = db.suppliers.map((s) => {
        if (s.id === args.id) {
          return {...s, ...args.edits}
        }
        return s
      })
      return db.suppliers.find((s) => s.id === args.id)
    },
    deleteproduct(_, args) {
      db.products = db.products.filter((p) => p.id !== args.id)
      return db.products
    },
    addproduct(_, args){
      let product = {
        ...args.product,
        id: Math.floor(Math.random() *10).toString()
      }
      db.products.push(product)
      return product
    },
    updateproduct(_, args) {
      db.products = db.products.map((p) => {
        if (p.id === args.id) {
          return {...p, ...args.edits}
        }
        return p
      })
      return db.products.find((p) => p.id === args.id)
    },
    deleteorderitem(_, args) {
      db.orderitems = db.orderitems.filter((oi) => oi.id !== args.id)
      return db.orderitems
    },
    addorderitem(_, args){
      let orderitem = {
        ...args.orderitem,
        id: Math.floor(Math.random() *10).toString()
      }
      db.orderitems.push(orderitem)
      return orderitem
    },
    updateorderitem(_, args) {
      db.orderitems = db.orderitems.map((oi) => {
        if (oi.id === args.id) {
          return {...oi, ...args.edits}
        }
        return oi
      })
      return db.orderitems.find((oi) => oi.id === args.id)
    },
    deleteorder(_, args) {
      db.orders = db.orders.filter((o) => o.id !== args.id)
      return db.orders
    },
    addorder(_, args){
      let order = {
        ...args.orders,
        id: Math.floor(Math.random() *10).toString()
      }
      db.orders.push(order)
      return order
    },
    updateorder(_, args) {
      db.orders = db.orders.map((o) => {
        if (o.id === args.id) {
          return {...o, ...args.edits}
        }
        return o
      })
      return db.orders.find((o) => o.id === args.id)
    },
    deletecustomer(_, args) {
      db.customers = db.customers.filter((c) => c.id !== args.id)
      return db.customers
    },
    addcustomer(_, args){
      let customer = {
        ...args.customers,
        id: Math.floor(Math.random() *10).toString()
      }
      db.customers.push(customer)
      return customer
    },
    updatecustomer(_, args) {
      db.customers = db.customers.map((c) => {
        if (c.id === args.id) {
          return {...c, ...args.edits}
        }
        return c
      })
      return db.customers.find((c) => c.id === args.id)
    }
  }
}

// server setup
const server = new ApolloServer({
  typeDefs,
  resolvers
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 }
})

console.log('Server ready at port', 4000)