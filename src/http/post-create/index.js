let arc = require('@architect/functions')
let html = require('@architect/shared/html')
let dal = require('@architect/shared/dal')

async function create(req) {
  const result = await dal.create(req.body)
  console.log(result)
  return {
    html: html`
      <div>
        <h3>Success</h3>
        <ul>
          <li><a href="/">Movie List</a></li>
          <li><a href="/new">Add another movie</a></li>
        </ul>
      </div>
    `
  }
}

exports.handler = arc.http.async(create)
