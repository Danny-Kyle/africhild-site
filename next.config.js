/** Static export: deployable free on Cloudflare Pages, Netlify, Vercel or GitHub Pages. */
module.exports = { output: 'export', trailingSlash: true, images: { unoptimized: true },
  // If served at https://<user>.github.io/<repo>, also add:
  // basePath: '/<repo>',
  // assetPrefix: '/<repo>/',
};
