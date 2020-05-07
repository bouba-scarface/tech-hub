module.exports = {
  title: 'SalesTim | Tech Hub',
  description: 'SalesTim documentation for Citizen Developers, Developers and IT Pros',
  base: '/',
  dest: 'docs',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#483d8b' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/color.png' }],
    ['link', { rel: 'mask-icon', href: '/color.png', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/color.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#483d8b' }],
    ['link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css', integrity: 'sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr', crossorigin: 'anonymous' }],
    ['script', { src: '/js/intercom.js' }],
    ['script', { src: 'https://www.googletagmanager.com/gtag/js?id=UA-5688830-15' }],
    ['script', { src: '/js/googleAnalytics.js' }]
  ],
  plugins: [
    '@vuepress/active-header-links', {
      sidebarLinkSelector: '.sidebar-link',
      headerAnchorSelector: '.header-anchor',
      headerTopOffset: 120
    },
    '@vuepress/last-updated',
    {
      transformer: (timestamp, lang) => {
        const moment = require('moment')
        moment.locale(lang)
        return moment(timestamp).fromNow()
      }
    }
  ],
  themeConfig: {

    logo: '/color.png',

    // Algolia search
    algolia: {
      apiKey: 'a108a2d4f0180bd3f301ba9047a897f7',
      indexName: 'salestimhelpcenter'
    },

    // Footer options
    lastUpdated: 'Last Updated',

    // Navbar: Horizontal navigation
    nav: [
      { text: '🚀 Get Started', link: '/gettingstarted/' },
      { text: '🧙🏼‍♂️ Templates', link: '/templates/' },
      { text: '👩🏼‍💻 API', link: '/api/' },
      { text: 'Trust Center', link: '/platform/' },
      {
        text: '📦 Releases',
        items: [
          { text: '📥 Downloads', link: '/releases/releases.md' },
          { text: '🚩 Known Issues', link: '/releases/knownissues.md' },
          { text: '🚦 Status', link: 'https://status.salestim.com' }
        ]
      },
      {
        text: '👩‍🎓 More',
        items: [
          { text: '🐱‍👤 GitHub', link: 'https://github.com/SalesTim' },
          { text: '💁🏼‍♀️ Help Center', link: 'https://help.salestim.com' },
          { text: '🌍 Website', link: 'https://www.salestim.com' }
        ]
      }
    ],

    // Sidebar options
    displayAllHeaders: false,
    activeHeaderLinks: true,
    sidebarDepth: 1,

    // Sidebar: Vertical navigation
    sidebar: {
      '/': [
        {
          title: '🚀 Get Started',
          children: [
            ['/gettingstarted/', '👋🏼 Overview'],
            '/gettingstarted/citizendevelopers.md',
            '/gettingstarted/developers.md',
            '/gettingstarted/itpros.md'
          ]
        },
        {
          title: '🧙🏼‍♂️ No-Code Templates',
          children: [
            ['/templates/', '👋🏼 Overview'],
            '/templates/templatesnamingconventions.md',
            '/templates/templatesaudiencetargeting.md'
          ]
        },
        {
          title: '👩🏼‍💻 API Reference',
          children: [
            ['/api/', '👋🏼 Overview'],
          ]
        },
        {
          title: 'Trust Center',
          children: [
            ['/platform/', 'Overview'],
            '/platform/supportedclients.md',
            '/platform/sso.md',
            '/platform/userroles.md',
            '/platform/access.md',
            '/platform/infrastructurekeycomponents.md',
            '/platform/apppermissions.md',
            '/platform/datamanagement.md',
            '/platform/securedevelopment.md',
            '/platform/securitypolicy.md',
            '/platform/privacyandcompliance.md',
            '/platform/classification.md'
          ]
        }
      ]
    }
  }
}
