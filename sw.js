/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-6508c38cfa7fbba259f4.js"
  },
  {
    "url": "styles.30e6c0ef084cbd2707af.css"
  },
  {
    "url": "styles-407fe62976dc5310c43e.js"
  },
  {
    "url": "framework-a793333628dc306ded43.js"
  },
  {
    "url": "1c920f04-26eec49a111a43647b4f.js"
  },
  {
    "url": "2fb713ed-da6facb9d7f68b69d36a.js"
  },
  {
    "url": "439716bf-b3180291da37078facdd.js"
  },
  {
    "url": "6e2d9d0a-e4a97633315147485ae4.js"
  },
  {
    "url": "4119064d-d7c2ef241d1d4a1731e3.js"
  },
  {
    "url": "0e6451da-13557632f19c707c44e6.js"
  },
  {
    "url": "da011f70-14dec2ce47e157a11562.js"
  },
  {
    "url": "23420901-a75c38169dd6eed7ebbb.js"
  },
  {
    "url": "c2ec1d10-530b891c9acf160a030e.js"
  },
  {
    "url": "8edc3fe5-dfad9ab94e69c40ea6ea.js"
  },
  {
    "url": "43a99af2-3fd9ab644dfe023af277.js"
  },
  {
    "url": "c4169ad2-13445e3f7ff412a4a79a.js"
  },
  {
    "url": "cfc6b023-b15848dc687c14cf105e.js"
  },
  {
    "url": "app-7e091f95cfee48b5366e.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "2ba478a2736dc9e4ea48c6c8c1bfedb6"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-ceaecea2b5f7267fd251.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "a17bdce50dfbd2b6ae2014035803472d"
  },
  {
    "url": "page-data/sq/d/2102389209.json",
    "revision": "d7a222b303560bbfdd151915b12447c7"
  },
  {
    "url": "page-data/sq/d/2746626797.json",
    "revision": "1c9c9137d771ac69276282aed9a20a71"
  },
  {
    "url": "page-data/sq/d/3018647132.json",
    "revision": "c011a9d5c3c2a4b7149fce675f175f49"
  },
  {
    "url": "page-data/sq/d/3037994772.json",
    "revision": "d2a6c061a4cb55e96e44759a28b5806f"
  },
  {
    "url": "page-data/sq/d/63531786.json",
    "revision": "9baaf8ec796a1ec49b5757ea34de048e"
  },
  {
    "url": "page-data/sq/d/768070550.json",
    "revision": "df2496a9b296c94a1ebcac2a2fe98654"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "84cdff924811d37350c7b9153b96e726"
  },
  {
    "url": "polyfill-cf5d60cba3dd06c7e9e8.js"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "a64db7349ac4076a3cd9624a116aed0f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/learncloudnative`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/learncloudnative/app-7e091f95cfee48b5366e.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/learncloudnative/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
