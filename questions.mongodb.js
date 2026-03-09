show('dbs')
use('shopApp')

db.createCollection('users')

db.users.find({name: 'Rahul'})