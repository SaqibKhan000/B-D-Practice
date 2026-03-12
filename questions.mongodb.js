use('ecommerce')



db.products.find(
{},
{category: 1, _id: 0}
)