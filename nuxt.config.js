import axios from "axios"
let dynamicRoutes = () => {
  const routes = axios
    .get("https://nuxt.meidanm.com/wp-json/wc/store/products?page=1&per_page=100")
    .then(res => {
      return res.data.map(post => `/blog/${post.permalink.replace('https://nuxt.meidanm.com/product/','')}`)
    })
  console.log(routes)
  return routes
}

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Alata|Open+Sans&display=swap"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/mixins.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/posts.server.js",
    "~/plugins/tags.server.js",
    "~/plugins/dateformat.js"
  ],
  generate: {
    routes: dynamicRoutes
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
