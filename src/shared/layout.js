const render = ctx => `
<!doctype html>
<html>
  <head>
    <title>Movies</title>
    <script src="https://unpkg.com/htmx.org@1.3.3"></script>
    <script src="https://unpkg.com/htmx.org/dist/ext/json-enc.js"></script>
  </head>
  <body>
    ${ctx}
  </body>
</html>
`

module.exports = render
