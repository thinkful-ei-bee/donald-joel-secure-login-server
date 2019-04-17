const bcrypt = require('bcryptjs')

bcrypt.hash('test-string', 16)
  .then(hash => console.log({ hash }))

