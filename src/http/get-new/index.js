let arc = require('@architect/functions')
let html = require('@architect/shared/html')
let render = require('@architect/shared/layout')

async function newMovie(req) {
  return {
    html: render(html`<${Form} />`)
  }
}

exports.handler = arc.http.async(newMovie)

function Form(props) {
  return html`
    <main>
      <h3>New Movie</h3>
      <form hx-post="/create">
        <div>
          <label for="title">Title</label>
          <input type="text" id="title" name="title" />
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </main>
  `
}

