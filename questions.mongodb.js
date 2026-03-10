use('ecommerce')
db.createCollection('products')

db.products.updateMany(
    {category: 'Electronics'},
    {$inc: {
        price: 10
    }}
)