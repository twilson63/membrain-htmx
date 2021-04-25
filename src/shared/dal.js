const hyper = require('@hyper.io/connect')
const fetch = require('node-fetch')
const { compose, join, split, toLower } = require('ramda')

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
  ,
  create,
  get,
  update,
  'delete': remove 
}

function get(id) {
  return fetch(hyper.url('data') + '/' + id, {
    headers: { Authorization: `Bearer ${hyper.token()}` }
  }).then(r => r.json())
}

function remove(id) {
  return fetch(hyper.url('data') + '/' + id, {
    headers: { Authorization: `Bearer ${hyper.token()}` }
  }).then(r => r.json())
}

function update(id, movie) {
  return fetch(hyper.url('data') + '/' + id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${hyper.token()}`
    },
    body: JSON.stringify(movie)
  })
}

const toSlug = compose(join('-'), split(' '), toLower)

function create(movie) {
  movie.id = toSlug(movie.title)
  movie.type = 'movie'
  return fetch(hyper.url('data'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${hyper.token()}`
    },
    body: JSON.stringify(movie)
  }).then(r => r.json())
}
