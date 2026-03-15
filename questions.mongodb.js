use('users')

db.data.find(
    {postId: {$eq: 1}},
    {postId: 1, name: 1, email: 1}
)