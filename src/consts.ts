// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type {AnalyticsConfig} from "./types/analyticsTypes"

/**
 * title {string} website title
 * favicon {string} website favicon url
 * description {string} website description
 * author {string} author
 * avatar {string} Avatar used in the profile
 * motto {string} used in the profile
 * url {string} Website link
 * baseUrl {string} When using GitHubPages, you must enter the repository name, startWith '/', e.g. /repo_name
 * recentBlogSize {number} Number of recent articles displayed in the sidebar
 * archivePageSize {number} Number of articles on archive pages
 * postPageSize {number} Number of articles on blog pages
 * feedPageSize {number} Number of articles on feed pages
 * beian {string} Chinese policy
 * asideTagsMaxSize {number}
 *    0: disable,
 *    > 0: display the limited number of tags in the sidebar
 *    All tags will be displayed in single page "/tags".
 */
export const site = {
  title: 'The Ghastly Mirror 👻', // required
  favicon: '/favicon.svg', // required
  description: 'A blog all about gaming, photography and other hobbies ',
  author: "ghastlymirror", // required
  avatar: '/avatar.png', // required
  motto: 'A blog all about gaming, photography and other hobbies1',
  url: 'https://www.ghastlymirror.xyz',
  baseUrl: '', // When using GitHubPages, you must enter the repository name startWith '/'. e.g. '/astro-blog'
  recentBlogSize: 5,
  archivePageSize: 25,
  postPageSize: 10,
  feedPageSize: 20,
  beian: '',
  asideTagsMaxSize: 0,
}

/**
 * busuanzi {boolean} link: https://busuanzi.ibruce.info/
 * lang {string} Default website language
 * codeFoldingStartLines {number}
 * ga {string|false}
 * memosUrl {string} memos server url
 * memosUsername {string} memos login name
 * memosPageSize {number} 10
 */
export const config = {
  lang: 'en', // en | zh-cn | zh-Hant | cs
  codeFoldingStartLines: 16, // Need to re-run the project to take effect

  // memos config
  memosUrl: '', // https://xxxx.xxx.xx
  memosUsername: '', // login name
  memosPageSize: 10, // number
}

/**
 * Navigator
 * name {string}
 * iconClass {string} icon style
 * href {string}  link url
 * target {string} optional "_self|_blank" open in current window / open in new window
 */
export const categories = [
  {
    name: "Blog",
    iconClass: "ri-draft-line",
    href: "/blog/1",
  },

 
 
  {
    name: "Archive",
    iconClass: "ri-archive-line",
    href: "/archive/1",
  },

  {
    name: "Backlog",
    iconClass: "ri-gamepad-line",
    href: "https://www.backloggd.com/u/GhastlyMirror/",
  },

  {
    name: "Achievements",
    iconClass: "ri-medal-line",
    href: "https://www.exophase.com/user/ghastlymirror/",
  },



  {
    name: 'Now',
    iconClass: 'ri-pushpin-line',
    
    href: '/now',
  },
 
  {
    name: "Search",
    iconClass: "ri-search-line",
    href: "/search",
  },
 
  

  {
    name: "More",
    iconClass: "ri-more-fill",
    href: "javascript:void(0);",
    children: [
      {
        name: 'About',
        iconClass: 'ri-information-line',
        href: '/about',
      },
      {
        name: 'Blogroll',
        iconClass: 'ri-user-5-line',
        href: '/blogroll',
        target: '_self',
      },

      {
        name: "Message",
        iconClass: "ri-chat-1-line",
        href: "/message",
      },
      {
        name: "Feed",
        iconClass: "ri-lightbulb-flash-line",
        href: "/feed/1",
      },

      {
        name: "Disclaimer",
        iconClass: "ri-megaphone-line",
        href: "/disclaimer",
      },

    ]
  }
]

/**
 * Personal link address
 */
export const infoLinks = [
  {
    icon: 'ri-youtube-fill',
    name: 'youtube',
    outlink: 'https://www.youtube.com/channel/UCYkyDHJDh-KclwOFBH0M_Sg',
  },

  {
    icon: 'ri-mastodon-fill',
    name: 'mastodon',
    outlink: 'https://blorbo.social/@creaturefeature',
  },

  {
    icon: 'ri-bluesky-fill',
    name: 'bluesky',
    outlink: 'https://bsky.app/profile/creaturefeature.blorbo.social.ap.brid.gy',
  },

  
  {
    icon: 'ri-steam-fill',
    name: 'steam',
    outlink: 'https://steamcommunity.com/id/ghastlymirror/',
  },

  {
    icon: 'ri-rss-fill',
    name: 'rss',
    outlink: 'https://www.ghastlymirror.xyz/rss.xml',
  }
]

/**
 * donate
 * enable {boolean}
 * tip {string}
 * wechatQRCode: Image addresses should be placed in the public directory.
 * alipayQRCode: Image addresses should be placed in the public directory.
 * paypalUrl {string}
 */
export const donate = {
  enable: true,
  tip: "Thanks for reading. If you like what I do, feel free to send me a tip below! ☕",

  kofiUrl: "https://ko-fi.com/ghastlymirror",
}

/**
 * Friendship Links Page
 * name {string}
 * url {string}
 * avatar {string}
 * description {string}
 */
export const friendshipLinks =
  [
    // {
    //   name: "Cirry's Blog",
    //   url: 'https://cirry.cn',
    //   avatar: "https://cirry.cn/avatar.png",
    //   description: '前端开发的日常'
    // },
    {
      name: "Aywren´s Nook",
      url: "https://aywren.com/",
      avatar: "/images/blogroll/aywrenbutton.gif",
      description: "Gaming and Geek Blog"
    
    },

    {
      name: "The Collection Chamber",
      url: "https://collectionchamber.blogspot.com/",
      avatar: "/images/blogroll/collectionchamber.png",
      description: "A Vault Making Old Games Playable"
    },

    {
      name: "Elephant´s Eye on False Bay",
      url: "https://eefalsebay.blogspot.com/",
      avatar: "/images/blogroll/elephantbay.jpg",
      description: "Gardening for biodiversity on False Bay "
    },

    {
      name: "Tales of the Aggronaut",
      url: "https://aggronaut.com/",
      avatar: "/images/blogroll/aggronaut.jpeg",
      description: "Home of The Blaugust Challenge "
    },

    {
      name: "Nature Journeys",
      url: "https://petehillmansnaturephotography.wordpress.com/",
      avatar: "/images/blogroll/naturejourney.png",
      description: "A Wildlife Journal In Pictures"
    },

    {
      name: "Lost Letters",
      url: "https://lostletters.neocities.org/",
      avatar: "/images/blogroll/lostletters.png",
      description: "A cute 2000s Inspired Site"
    },

    {
      name: "Weird Biology",
      url: "https://www.weirdbiology.com/",
      avatar: "/images/blogroll/weirdbiology.gif",
      description: "Life is Weird on This Planet"
    },

    {
      name: "Bio Break",
      url: "https://biobreak.wordpress.com/",
      avatar: "/images/blogroll/biobreak.jpeg",
      description: "MMOs, retro gaming, music, and more"
    },

    {
      name: "Squaknet",
      url: "https://www.squakenet.com/",
      avatar: "/images/blogroll/squaknet.jpg",
      description: "Remembering good old PC games"
    },

    {
      name: "A Geek Girl´s Guide",
      url: "https://ageekgirlsguide.com/",
      avatar: "/images/blogroll/geekgirlguide.jpg",
      description: "A Girl´s Love for all things Geeky"
    },

    {
      name: "MMO Casual",
      url: "https://wowaltaddiction.blogspot.com/",
      avatar: "/images/blogroll/mmocasual.png",
      description: "A self confessed altoholic and sometimes casual raider"
    },

    {
      name: "Many Whelps",
      url: "https://manywelps.com/",
      avatar: "/images/blogroll/manywhelps.png",
      description: "Player of Games and Writer of Blogs"
    },

    {
      name: "A Nerdy Fujo Cries",
      url: "https://anerdyfujocries.wordpress.com/",
      avatar: "/images/blogroll/nerdyfujo.png",
      description: "Boys, Anime, Manga, and more Boys"
    },

    {
      name: "Monsterlady´s Diary",
      url: "https://monsterladysdiary.com/",
      avatar: "/images/blogroll/monsterlady.png",
      description: "A Blogger with vivid Imagination"
    },

    {
      name: "A Spot of Mummery",
      url: "https://spotofmummery.com/",
      avatar: "/images/blogroll/spotofmummery.jpg",
      description: "Fansite Dedicated to FFXIV"
    },

    {
      name: "OldGames Download",
      url: "https://oldgamesdownload.com/",
      avatar: "/images/blogroll/oldgames.png",
      description: "Museum of Abandonware Video Games"
    },

    {
      name: "Time to Loot",
      url: "https://www.timetoloot.com/",
      avatar: "/images/blogroll/timetoloot.jpg",
      description: "Finding Fun in Loot and Adventure"
    },

    {
      name: "Ally´s Site of the Day",
      url: "https://allyssotd.tumblr.com/",
      avatar: "/images/blogroll/allysite.jpg",
      description: "Recommending a New Site Everyday"
    },
{
    name: "FLAMED FURRY",
    url: "https://flamedfury.com/",
    avatar: "/images/blogroll/flamedfury.png",
    description: "A Love Letter to the Web"
  },

  {
  name: "Damage Control Blog",
  url: "https://www.dcgameblog.com/",
  avatar: "/images/blogroll/damagecontrol.png",
  description: "Video Game, Anime and Geek Culture News"
},

{
  name: "The Ancient Gaming Noob",
  url: "https://tagn.wordpress.com/",
  avatar: "/images/blogroll/ancientgamingnoob.png",
  description: "MMO Commentary"
},

{
  name: "Crystal Dreams",
  url: "https://www.crystal-dreams.us/",
  avatar: "/images/blogroll/crystaldream.jpg",
  description: "Cute Game Guides and Reviews"
},

{
  name: "Massively Overpowered",
  url: "https://massivelyop.com/",
  avatar: "/images/blogroll/massoverpowered.png",
  description: " Independent MMORPG news and opinions"
},

{
  name: "Imaginary Karin",
  url: "https://imaginarykarin.com/",
  avatar: "/images/blogroll/imaginarykarin.jpg",
  description: " Blog and Artwork by Karin Ogren"
},


{
  name: "The New Leaf Journal",
  url: "https://thenewleafjournal.com/",
  avatar: "/images/blogroll/newleafjournal.jpg",
  description: " Where the leaves are perennially virid"
},

{
  name: "Micro Maique",
  url: "https://maique.eu/",
  avatar: "/images/blogroll/maique.jpg",
  description: "A Geeky Photographer from Portugal"
},


{
  name: "Pretendo Network",
  url: "https://pretendo.network/",
  avatar: "/images/blogroll/pretendo.gif",
  description: "Keeping Wii U and 3DS Servers Alive"
},

{
  name: "Tanzi Media",
  url: "https://tanzi-media.com/",
  avatar: "/images/blogroll/mooseontheloose.gif",
  description: "The Personal Website of Steven"
},

{
  name: "The Virtual Moose",
  url: "https://tanzi-media.com/",
  avatar: "/images/blogroll/virtualmoose.jpg",
  description: "Makes Tiny Games Near Detroit"
},

{
  name: "Jefklak´s Codex",
  url: "https://jefklakscodex.com/",
  avatar: "/images/blogroll/jefklakcodex.jpg",
  description: "Opinionated Website About Nostalgic Games"
},

{
  name: "The Obscuritory",
  url: "https://obscuritory.com/",
  avatar: "/images/blogroll/obscurity.png",
  description: "For Games Unplayed and Unknown"
},

{
  name: "BinaryDigit.city",
  url: "https://binarydigit.city/",
  avatar: "/images/blogroll/binarydigit.jpeg",
  description: "Blog of a Photographer, Artist and Gamer"
},



  ]


/**
 * Comment Feature
 * enable {boolean}
 * type {string} required waline | giscus
 * walineConfig.serverUrl {string} server link
 * walineConfig.lang {string} link: https://waline.js.org/guide/features/i18n.html
 * walineConfig.pageSize {number} number of comments per page. default 10
 * walineConfig.wordLimit {number} Comment word s limit. When a single number is filled in, it 's the maximum number of comment words. No limit when set to 0
 * walineConfig.count {number} recent comment numbers
 * walineConfig.pageview {boolean} display the number of page views and comments of the article
 * walineConfig.reaction {string | string[]} Add emoji interaction function to the article
 * walineConfig.requiredMeta {string[]}  Set required fields, default anonymous
 * walineConfig.whiteList {string[]} set some pages not to display reaction
 */
export const comment = {
  enable: true,
  type: 'giscus', // waline | giscus,
  walineConfig: {
    serverUrl: "",
    lang: 'en',
    pageSize: 20,
    wordLimit: '',
    count: 5,
    pageview: true,
    reaction: true,
    requiredMeta: ["nick", "mail"],
    whiteList: ['/message/', '/friends/'],
  },

  // giscus config
  giscusConfig: {
    'data-repo': "ghastlymirror/ghastlyastro",
      'data-repo-id': "R_kgDONS7skg",
      'data-category': "Announcements",
      'data-category-id': "DIC_kwDONS7sks4CkfYs",
      'data-mapping': "pathname",
      'data-strict': "0",
      'data-reactions-enabled': "1",
      'data-emit-metadata': "0",
      'data-input-position': "top",
      'data-theme': "light",
      'data-lang': "en",
      'crossorigin': "anonymous",
  }

  //
}


/**
 * Analytics Feature Configuration
 *
 * This file centralizes the analytics configuration for the application.
 * It defines and exports the default settings for Umami and Google Analytics.
 */
export const analytics: AnalyticsConfig = {
  enable: false,
  umamiConfig: {
    enable: true,
    id: "081341e0-724a-4627-8ed2-7944311d27b3",
    url: "https://cloud.umami.is/script.js"
  },
  gaConfig: {
    enable: false,
    id: ""
  },
  busuanzi: false,
};