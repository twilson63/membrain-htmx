let arc = require('@architect/functions')
let html = require('@architect/shared/html')
let { movies } = require('@architect/shared/dal')
let List = require('./list')

const render = ctx => `
<!doctype html>
<html>
  <head>
    <title>Movies</title>
  </head>
  <body>
    ${ctx}
  </body>
</html>
`

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
      <${List} movies=${movieList} />
    </main>`
}
