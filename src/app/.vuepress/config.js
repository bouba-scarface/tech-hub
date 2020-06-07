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

    // Smooth scrolling
    smoothScroll: true,

    // GitHub options
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'salestim',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Open Source',
    // Optional options for generating "Edit this page" link
    //   if your docs are in a different repo from your main project:
    docsRepo: 'salestim/tech-hub',
    //   if your docs are not at the root of the repo:
    docsDir: 'src/app',
    //   if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    //   defaults to false, set to true to enable
    editLinks: true,
    //  custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Improve this page!',

    // Navbar: Horizontal navigation
    nav: [
      { text: 'No-Code Templates', link: '/nocode-templates/' },
      { text: 'Template Store', link: 'https://store.salestim.com' },
      { text: 'API & Webhooks', link: '/api/' },
      { text: 'Trust Center', link: '/platform/' }
    ],

    // Sidebar options
    displayAllHeaders: false,
    activeHeaderLinks: true,
    sidebarDepth: 1,

    // Sidebar: Vertical navigation
    sidebar: {
      '/': [
        {
          title: 'No-Code Templates',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['/nocode-templates/', 'Get Started'],
            '/nocode-templates/naming-conventions.md',
            '/nocode-templates/audience-targeting.md'
          ]
        },
        {
          title: 'API',
          collapsable: true,
          sidebarDepth: 1,
          children: [
            ['/api/', 'Overview'],
            ['/api/key-concepts', 'Key Concepts'],
            ['/api/getting-started', 'Getting Started'],
            ['/api/best-practices', 'Best Practices'],
            ['/api/explorer', 'API Explorer'],
            ['/api/use-sdks', 'Use SDKs'],
            ['/api/use-postman', 'Use Postman'],
            ['/api/use-power-platform', 'Use Power Platform'],
            ['/api/throttling', 'Throttling'],
            ['/api/reference/', 'REST API Reference'],
            ['/api/versions', 'Versions']
          ]
        },
        {
          title: 'Trust Center',
          collapsable: true,
          sidebarDepth: 1,
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
        },
        {
          title: 'Releases',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            ['/releases/releases.md', 'Downloads'],
            ['/releases/knownissues.md', 'Known Issues'],
            ['https://status.salestim.com', 'Status']
          ]
        }
      ]
    }
  }
}
