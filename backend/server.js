import  express from 'express'
import  products from './data/products.js'


const app = express()

app.get('/',(req,res) =>{
    res.send('API is running.')
})

// Endpoint to return all the products --> Setting up some routes
app.get('/api/products',(req,res) =>{
    res.json(products)
})
// Endpoint to return a single product
app.get('/api/products/:id',(req,res) =>{
    const product = products.find(p =>p._id === req.params.id)
    res.json(product)
})

app.listen(5000, console.log('server running on port 5000'))
