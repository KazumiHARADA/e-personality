const path = require('path')
const os = require('os')
const fs = require('fs')
const svg2img = require('svg2img')
const functions = require('firebase-functions')
const admin = require('firebase-admin')
const spawn = require('child-process-promise').spawn
const serviceAccount = require('./e-personality-firebase-adminsdk-8qnev-1131b8d3d2.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://e-personality.firebaseio.com',
  storageBucket: 'e-personality.appspot.com'
})

//const nuxtServer = require('./nuxt-server')

exports.devlog = functions.https.onRequest((request, response) => {
  response.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  response.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST')
  response.set('Access-Control-Allow-Headers', 'Content-Type, authorization')
  console.info('yobareta')
  console.info(request.query.message)
  response.json({ data: 'test message' })
})

exports.log = functions.https.onRequest((request, response) => {
  response.set(
    'Access-Control-Allow-Origin',
    'https://e-personality.firebaseapp.com'
  )
  response.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST')
  response.set('Access-Control-Allow-Headers', 'Content-Type, authorization')
  console.info(request.query.message)
  response.json({ data: 'test message' })
})

exports.svg = functions.https.onRequest((request, response) => {
  response.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  response.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST')
  response.set('Access-Control-Allow-Headers', 'Content-Type, authorization')

  console.info(request.body.svgHTML)

  svg2img(request.body.svgHTML, (e, buffer) => {
    fs.writeFileSync('foo1.png', buffer)
  })

  const bucket = admin.storage().bucket()
  const filePath = 'test.txt'
  const file = bucket.file(filePath)
  const txt = 'sample text'
  file
    .save(txt)
    .then(() => {
      return file.setMetadata({ contentType: 'text/html' })
    })
    .catch((e) => {
      console.log(e)
    })
  const text = admin
    .storage()
    .bucket()
    .file(filePath)
  text
    .getSignedUrl({
      action: 'read',
      expires: '03-09-2491'
    })
    .then((signedUrls) => {
      console.log(signedUrls[0])
      return response.json({ url: signedUrls[0] })
    })
    .catch((e) => {
      return console.log(e)
    })
})

//exports.nuxtServer = functions.https.onRequest(nuxtServer)
