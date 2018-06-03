require('dotenv').config()

const axios = require('axios')

const run = async () => {
  console.log(`Requesting tweet...`)
  await axios({
    method: 'POST',
    timeout: 10000,
    headers: {
      'x-admin-token': process.env.ADMIN_TOKEN
    },
    url: 'https://roleando-botserver.now.sh/_internal/tweet'
  })
  console.log(`✔︎ Tweet sent`)
}

run()
