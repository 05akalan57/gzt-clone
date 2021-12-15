export default {
  meta: {
    title: 'Yeni nesil sosyal içerik platformu | GZT',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        name: 'description',
        content:
          'Yeni nesil sosyal haberler, trend içerikler, testler ve daha birçok içeriğe ulaşabileceğiniz yeni medya kaynağınız. Son dakika haberler, gündem haberleri, ...',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap',
      },
    ],
  },
  css: ['@/assets/styles.css'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
}
