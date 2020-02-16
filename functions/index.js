const path = require('path')
const os = require('os')
const fs = require('fs')
const svg2img = require('svg2img')
const functions = require('firebase-functions')
const admin = require('firebase-admin')
const spawn = require('child-process-promise').spawn
const { Nuxt } = require('nuxt-start')
const nuxtConfig = require('./nuxt.config.js')
const serviceAccount = require('./e-personality-firebase-adminsdk-8qnev-1131b8d3d2.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://e-personality.firebaseio.com',
  storageBucket: 'e-personality.appspot.com'
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

exports.svg = functions.https.onRequest(async (request, response) => {
  if (request.query.isLocal === 'true') {
    response.set('Access-Control-Allow-Origin', 'http://localhost:3000')
  } else {
    response.set(
      'Access-Control-Allow-Origin',
      'https://e-personality.firebaseapp.com'
    )
  }

  response.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST')
  response.set('Access-Control-Allow-Headers', 'Content-Type, authorization')

  const svgStyledHTML = request.query.svgHTML
    .replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg" ')
    .replace('width="100%"', 'width="600px"')
    .replace('height="100%"', 'height="400px"')

  const fileName = request.query.userId + '-cloud.png'
  await svg2img(svgStyledHTML, (e, buffer) => {
    const file = admin
      .storage()
      .bucket()
      .file(fileName)
    return file.save(buffer, { metadata: { contentType: 'image/jpeg' } })
  })

  const res = await admin
    .storage()
    .bucket()
    .file(fileName)
    .getSignedUrl({
      action: 'read',
      expires: '03-09-2491'
    })
  response.json({
    url: res[0]
  })
})

const config = {
  ...nuxtConfig,
  dev: false,
  buildDir: 'nuxt'
}
const nuxt = new Nuxt(config)

exports.ssrapp = functions.https.onRequest(async (req, res) => {
  await nuxt.ready()
  nuxt.render(req, res)
})
