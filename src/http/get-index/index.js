let arc = require('@architect/functions')
let html = require('@architect/shared/html')
let { movies } = require('@architect/shared/dal')
let List = require('./list')
let render = require('@architect/shared/layout')

async function index(req) {
  return {
    html: render( await html`<${Main} />`) 
  }
}

exports.handler = arc.http.async(index)    


async function Main() {
  const movieList = await movies()
  return html`
    <main>
      <h1>The Movie Db</h1>
      <a href="/new">Add New</a>
      <${List} movies=${movieList} />
    </main>`
}
