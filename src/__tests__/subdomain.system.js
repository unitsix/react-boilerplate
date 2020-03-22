import axios from 'axios'
import https from 'https'

describe('subdomain', () => {
  it('serves index page', async () => {
    const response = await axios(
      `https://${process.env.DOMAIN_NAME}`, {
        httpsAgent: new https.Agent({
          rejectUnauthorized: false
        })
      })
    expect(response.data).toMatch('<title>unitsix | react-boilerplate</title>')
  })
})
