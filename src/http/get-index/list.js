let html = require('@architect/shared/html')

module.exports = (props) => html`
<ul>
  ${props.movies.map(movie =>
    html`<li>${movie.title}</li>`
  )}
</ul>`
