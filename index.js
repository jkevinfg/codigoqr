const qrcode = require('qrcode');
const nodeHtmlToImage = require('node-html-to-image')
const url = "https://bionaturistaflores.com/menu.html"

const run = async () => {
  const QR = await qrcode.toDataURL(url);
  await nodeHtmlToImage({
    output: './image.png',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>
<body>
  <div class="container mt-5">
    <h2 class="text-center">ESCANEA EL QR PARA VER LA CARTA</h2>
    <img  class="rounded mx-auto d-block" style="width: 400px ; height:400px"  src="${QR}" alt="">
  </div>
</body>
</html>`
  })
  console.log("Generado");
}


run()





