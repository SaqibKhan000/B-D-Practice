use('users')

db.data.find(
    {
        email: {$type: 'string'}
    }
)