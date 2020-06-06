module.exports = {
  title: 'SalesTim | Tech Hub',
  description: 'SalesTim documentation for Citizen Developers, Developers and IT Pros',
  base: '/',
  dest: 'docs',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#483d8b' }],
    // ['link', { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css', integrity: 'sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr', crossorigin: 'anonymous' }],
    ['script', { src: 'https://www.googletagmanager.com/gtag/js?id=UA-5688830-15' }],
    // Bundle
    ['script', { type: 'text/javascript', src: '/js/bundle.js' }]
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
      { text: 'Get Started', link: '/' },
      { text: 'No-Code Templates', link: '/templates/' },
      { text: 'API', link: '/api/' },
      { text: 'Trust Center', link: '/platform/' },
      {
        text: 'Releases',
        items: [
          { text: 'Downloads', link: '/releases/releases.md' },
          { text: 'Known Issues', link: '/releases/knownissues.md' },
          { text: 'Status', link: 'https://status.salestim.com' }
        ]
      },
      {
        text: 'More',
        items: [
          { text: 'GitHub', link: 'https://github.com/SalesTim' },
          { text: 'Help Center', link: 'https://help.salestim.com' },
          { text: 'Website', link: 'https://www.salestim.com' }
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
          title: 'Get Started',
          children: [
            ['/', 'Overview'],
            '/gettingstarted/citizendevelopers.md',
            '/gettingstarted/developers.md',
            '/gettingstarted/itpros.md'
          ]
        },
        {
          title: 'No-Code Templates',
          children: [
            ['/templates/', 'Get Started'],
            '/templates/templatesnamingconventions.md',
            '/templates/templatesaudiencetargeting.md'
          ]
        },
        {
          title: 'API',
          children: [
            ['/api/', 'Getting Started'],
            ['/api/explorer/', 'API Explorer'],
            ['https://github.com/SalesTim/tech-hub/tree/master/src/app/api/reference/', 'API Reference']
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
