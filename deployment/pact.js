import pact from '@pact-foundation/pact-node'
import path from 'path'

const log = val => console.log(val);

log(`Deploying to ${process.env.PACT_BROKER_URL}`)

const opts = {
  pactUrls: [ path.resolve(process.cwd(), 'pacts') ],
  pactBroker: process.env.PACT_BROKER_URL,
  pactBrokerUsername: process.env.PACT_BROKER_USERNAME,
  pactBrokerPassword: process.env.PACT_BROKER_PASSWORD,
  consumerVersion: '0.0.0'
}

pact.publishPacts(opts).then(log);

