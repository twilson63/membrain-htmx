const hyper = require('@hyper.io/connect')
const fetch = require('node-fetch')

module.exports = {
  movies: () => fetch(hyper.url('data') + '/_query', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json',
      Authorization: `Bearer ${hyper.token()}` },
    body: JSON.stringify({
      selector: { type: 'movie' } 
    })
  }).then(r => r.json())
    .then(r => r.docs) 
}
