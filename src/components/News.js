import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "Tributes to Queen before England v SA cricket Test",
            "description": "Tributes are paid to Her Majesty Queen Elizabeth II on day three of the third Test between England and South Africa at The Oval.",
            "url": "https://www.bbc.co.uk/sport/cricket/62838463",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1189A/production/_126643817_englandteam.jpg",
            "publishedAt": "2022-09-10T10:36:07Z",
            "content": "Tributes were paid to Her Majesty Queen Elizabeth II on day three of the third Test between England and South Africa at The Oval.\r\nA minute's silence was observed before the national anthems, with Go… [+2135 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "England in Pakistan: Moeen Ali prepares to lead tourists in landmark series",
            "description": "England begin a historic tour of Pakistan after a 17-year absence and will fittingly be led by all-rounder Moeen Ali in the first T20.",
            "url": "https://www.bbc.co.uk/sport/cricket/62948705",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/948A/production/_126762083_gettyimages-1424665697.jpg",
            "publishedAt": "2022-09-20T05:08:29Z",
            "content": "England face Pakistan in four T20s in Karachi and three in Lahore\r\n<table><tr><th>Pakistan v England, first T20</th></tr>\r\n<tr><td>Venue: National Stadium, Karachi Date: 20 October Time: 15:30 BST</t… [+5635 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Jhulan Goswami: The highest wicket-taker in women's ODI history to retire",
            "description": "On Saturday, one of India's best female cricketers is set to play her last international game.",
            "url": "https://www.bbc.co.uk/news/world-asia-india-62956110",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/142A4/production/_126769528_gettyimages-1387013344-594x594.jpg",
            "publishedAt": "2022-09-24T00:10:51Z",
            "content": "By Annesha Ghosh Sports writer\r\nOn Saturday, Jhulan Goswami will play the last match of her two-decade-long career in international cricket.\r\nThe cricketer is set to retire at Lord's cricket ground, … [+6003 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Australia one-day captain Finch to retire after New Zealand series - Reuters.com",
            "description": "Australia's one-day cricket captain Aaron Finch will retire from the format's international matches following Sunday's final game of a three-match series against New Zealand, Cricket Australia said on Saturday.",
            "url": "https://www.reuters.com/lifestyle/sports/australia-one-day-captain-finch-retire-after-new-zealand-series-2022-09-10/",
            "urlToImage": "https://www.reuters.com/resizer/48JDkuwYvNSoAUVwxVg6ubjApV8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XRJNLZAP5FIOFCCQNUSOBVNWIA.jpg",
            "publishedAt": "2022-09-10T00:22:00Z",
            "content": "Sept 10 (Reuters) - Australia's one-day cricket captain Aaron Finch will retire from the format's international matches following Sunday's final game of a three-match series against New Zealand, Cric… [+717 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "ECB's high-performance review proposes domestic shake-up - Reuters",
            "description": "A new-look County Championship and a reduced fixture list across all formats are among the recommendations proposed in the high-performance review of men's cricket in England, published by the England & Wales Cricket Board (ECB) on Thursday.",
            "url": "https://www.reuters.com/lifestyle/sports/ecbs-high-performance-review-proposes-domestic-shake-up-2022-09-22/",
            "urlToImage": "https://www.reuters.com/resizer/jZVQBxMPup-INoykkwiMFr8Wli4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WX4W53G3ANKNDARSBBVGLDZKPU.jpg",
            "publishedAt": "2022-09-22T13:58:00Z",
            "content": "Sept 22 (Reuters) - A new-look County Championship and a reduced fixture list across all formats are among the recommendations proposed in the high-performance review of men's cricket in England, pub… [+2113 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Proposals from ECB's high-performance review 'unworkable' - Sussex chair - Reuters",
            "description": "Sussex chair Jon Filby said the recommendations proposed in the England & Wales Cricket Board's (ECB) high-performance review of men's cricket in England were needed for the game but were \"unworkable\" when looked at through a holistic lens.",
            "url": "https://www.reuters.com/lifestyle/sports/proposals-ecbs-high-performance-review-unworkable-sussex-chair-2022-09-23/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=111",
            "publishedAt": "2022-09-23T07:45:00Z",
            "content": "Sept 23 (Reuters) - Sussex chair Jon Filby said the recommendations proposed in the England &amp; Wales Cricket Board's (ECB) high-performance review of men's cricket in England were needed for the g… [+2012 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Sabina Graves",
            "title": "Disney Animation Marks 100 Years by Celebrating Its Own Wishing Star",
            "description": "It’s an important Disney character you probably never thought too much about: the star, as in the “When You Wish Upon a Star” that Jiminy Cricket sings about, the star that Princess Tiana looks up to ask for her palace restaurant, and the star that Simba gaze…",
            "url": "https://gizmodo.com/ariana-debose-wish-disney-animation-fairytale-d23-expo-1849526298",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/03a958741b1ba0fc9c94db58eea31f0c.jpg",
            "publishedAt": "2022-09-12T21:30:00Z",
            "content": "Its an important Disney character you probably never thought too much about: the star, as in the When You Wish Upon a Star that Jiminy Cricket sings about, the star that Princess Tiana looks up to as… [+2742 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "Mark Boucher to step down from South Africa head coach role after T20 World Cup",
            "description": "South Africa men's head coach Mark Boucher will step down from the role after this winter's T20 World Cup.",
            "url": "https://www.bbc.co.uk/sport/cricket/62883281",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/1F34/production/_126688970_boucherindex.png",
            "publishedAt": "2022-09-12T16:38:44Z",
            "content": "Before taking over as head coach, Mark Boucher, right, played 147 Tests for South Africa between 1997 and 2012\r\nSouth Africa men's head coach Mark Boucher will step down from the role after this wint… [+888 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Tanya Aldred",
            "title": "County cricket: Northants v Surrey, Warwickshire v Somerset – live",
            "description": "<ul><li>Live county cricket updates from 11am UK time</li><li>You can email Tanya with your thoughts</li></ul>The County Ground: Northants 339 and 209-5 v Surrey 421Edgbaston: Warwickshire 196 v Somerset 219 and 277-4 Continue reading...",
            "url": "https://www.theguardian.com/sport/live/2022/sep/15/county-cricket-northants-v-surrey-warwickshire-v-somerset-live",
            "urlToImage": "https://i.guim.co.uk/img/media/2669324ce0a40a27c23fbc3ae72c0b13501a58c2/0_232_3483_2090/master/3483.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=bbf162faf116c3306d1f8d1d003bdfa6",
            "publishedAt": "2022-09-15T09:02:08Z",
            "content": "Scores on the doors\r\nThe County Ground: Northants 339 and 209-5 v Surrey 421\r\nEdgbaston: Warwickshire 196 v Somerset 219 and 277-4\r\nHeadingley: Essex 225 and 162-9 BEAT Yorkshire 134 and 252 by one w… [+3425 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "James Wallace",
            "title": "Pakistan v England: first men’s T20 cricket international – live",
            "description": "<ul><li>Updates from Karachi where play begins at 3.30pm BST</li><li>Email James or tweet @Jimbo_Cricket your thoughts</li></ul>December 21, 2005. England’s weary cricketers trudge off the field under the misty haze of the Rawalpindi floodlights. A consolatio…",
            "url": "https://www.theguardian.com/sport/live/2022/sep/20/pakistan-england-first-mens-t20-cricket-international-live",
            "urlToImage": "https://i.guim.co.uk/img/media/1179137e47cf3aebfd3b4c9992839a328d3bcd51/235_318_4265_2558/master/4265.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=920c93500fe200d37516c75cec601cb6",
            "publishedAt": "2022-09-20T14:06:14Z",
            "content": "Teams:\r\nPakistan: Babar Azam (c), Mohammad Rizwan (wk), Haider Ali, Shan Masood, Iftikhar Ahmed, Khushdil Shah, Mohammad Nawaz, Usman Qadir, Haris Rauf, Naseem Shah, Shahnawaz Dahani\r\n(Derbyshires) S… [+3093 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Daniel Gallan",
            "title": "Pakistan v England: third men’s T20 cricket international – live",
            "description": "<ul><li>Live updates from Karachi, 3.30pm BST start</li><li>Get in touch! You can email Daniel or tweet him</li></ul>Hello and welcome to the live OBO report of the 3rd T20 international between Pakistan and England from Karachi. We’re all square in the serie…",
            "url": "https://www.theguardian.com/sport/live/2022/sep/23/pakistan-v-england-third-mens-t20-cricket-international-live",
            "urlToImage": "https://i.guim.co.uk/img/media/434c3d9c1d9a85da83f44bd758968ffa4fe2f526/122_0_3967_2379/master/3967.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=1eeb1608d1500503a20c816b63006544",
            "publishedAt": "2022-09-23T13:30:36Z",
            "content": "Will Jacks to debut. According to Matt Roller from ESPNCricinfo, itll Will Jacks. The 23-year-old off-spinning batter from Surrey. What a week its been for the south London club. After clinching the … [+110 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "James Wallace",
            "title": "Pakistan v England: fifth men’s T20 cricket international – live",
            "description": "<ul><li>Live updates from the 3.30pm BST start in Lahore</li><li>Get in touch! Email Jim or tweet @Jimbo_Cricket</li></ul>TEAMS: FOUR changes for England: Dawid Malan, Sam of the Currans, Chris Woakes and Mark Wood are in for England. Continue reading...",
            "url": "https://www.theguardian.com/sport/live/2022/sep/28/pakistan-v-england-fifth-mens-t20-cricket-international-live",
            "urlToImage": "https://i.guim.co.uk/img/media/7efd0b8865e865eb9bb714c4be99b09e4449c5e8/7_0_5561_3336/master/5561.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=7efa8b472a07dc2ee1a9cb792eba3950",
            "publishedAt": "2022-09-28T14:18:40Z",
            "content": "Show key events onlyPlease turn on JavaScript to use this feature\r\n1st over: Pakistan 7-0 (Babar 6, Rizwan 1) Woakes starts with a leg-side half volley to Rizwan who flicks for a single. Babar pulls … [+3903 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Gary Naylor",
            "title": "County cricket: Yorkshire down as Warwickshire survive in thriller",
            "description": "Liam Norwell was the hero for the Bears, but the White Rose wilted at the end of its most difficult season By Gary Naylor for the 99.94 Cricket BlogScenes! Absolute scenes at Edgbaston, as Liam Norwell, in the 11th over of a heroic spell, traps Mohammad Abbas…",
            "url": "https://amp.theguardian.com/sport/99-94-cricket-blog/2022/sep/30/county-cricket-yorkshire-warwickshire-liam-norwell",
            "urlToImage": "https://i.guim.co.uk/img/media/30521064dd007db690c7ec5a3b4540aa7b614cc8/0_0_2119_1273/master/2119.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=d9bec5439c213d17ecd1230adc7d4316",
            "publishedAt": "2022-09-30T10:45:00Z",
            "content": "Ball one: Norwell does well\r\nScenes! Absolute scenes at Edgbaston, as Liam Norwell, in the 11th over of a heroic spell, traps Mohammad Abbas in front of all three and sparks delirium in Warwickshire … [+8242 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Tanya Aldred",
            "title": "County cricket: Yorkshire v Essex, Northamptonshire v Surrey – live!",
            "description": "<ul><li>Updates on day one of the latest County Championship matches</li><li>Email Tanya here, tweet her @tjaldred or comment BTL</li></ul>Every game will observe a minute’s silence in memory of the Queen today, with players wearing black arm bands. Here is a…",
            "url": "https://www.theguardian.com/sport/live/2022/sep/12/county-cricket-yorkshire-v-essex-northamptonshire-v-surrey-and-more-live",
            "urlToImage": "https://i.guim.co.uk/img/media/a01d8df334125796fb5dd902bcae1acacf9e7d9a/255_0_3245_1947/master/3245.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=3271397000e3cd251e386fb49bf135e2",
            "publishedAt": "2022-09-12T09:16:11Z",
            "content": "Show key events onlyPlease turn on JavaScript to use this feature\r\nSo, in brief, while Hampshire rest this round, Surrey look to claw back their eight point deficit and retake their place at the top … [+1586 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Tanya Aldred",
            "title": "County cricket: Yorkshire v Essex, Northamptonshire v Surrey – live",
            "description": "<ul><li>All the scores and updates from around the grounds</li><li>Thoughts? You can email Tanya, tweet her or post BTL</li></ul>DIVISION ONEThe County Ground: Northants249-4 v Surrey Continue reading...",
            "url": "https://www.theguardian.com/sport/live/2022/sep/13/county-cricket-yorkshire-v-essex-northamptonshire-v-surrey-live",
            "urlToImage": "https://i.guim.co.uk/img/media/8e77c099eb57466893ab2bc9319f03ecb67eaa99/0_183_4691_2815/master/4691.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=e2e510f1e854792d40680b614b54aa33",
            "publishedAt": "2022-09-13T09:06:19Z",
            "content": "Scores on the doors\r\nDIVISION ONE\r\nThe County Ground: Northants249-4 v Surrey\r\nEdgbaston: Warwickshire v Somerset 182-8\r\nHeadingley: Yorkshire 134 all out v Essex \r\nDIVISION TWO\r\nGrace Road: Leiceste… [+3019 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Tanya Aldred at the Oval",
            "title": "County cricket: Surrey v Yorkshire, Hampshire v Kent – live",
            "description": "<ul><li>Live Championship updates from around the grounds</li><li>Email Tanya, tweet @TJAldred or you can post BTL</li></ul>DIVISION ONEChelmsford: Lancashire 131 and 73 BEAT Essex 107 and 59 by 38 runs Continue reading...",
            "url": "https://www.theguardian.com/sport/live/2022/sep/22/county-cricket-surrey-v-yorkshire-hampshire-v-kent-live",
            "urlToImage": "https://i.guim.co.uk/img/media/8b3e7eb426ba64021099456bf139d571411af08d/0_90_2700_1620/master/2700.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=dfaea5214cb8ebc8c3d87c5d881f17d5",
            "publishedAt": "2022-09-22T08:12:31Z",
            "content": "Scores on the doors\r\nDIVISION ONE\r\nChelmsford: Lancashire 131 and 73 BEAT Essex 107 and 59 by 38 runs\r\nBristol: Gloucestershire 255 v Warwickshire 274 and 58-5\r\nThe Rose Bowl:Hampshire 57 and 105-4 v… [+3024 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Tanya Aldred at Old Trafford",
            "title": "County cricket: Lancashire v Surrey, Warwickshire v Hampshire – live",
            "description": "<ul><li>Latest scores and news from final round of matches</li><li>And feel free to email or tweet Tanya, or post BTL</li></ul>DIVISION ONECanterbury: Kent v Somerset 195-9 Continue reading...",
            "url": "https://www.theguardian.com/sport/live/2022/sep/27/county-cricket-lancashire-v-surrey-warwickshire-v-hampshire-live",
            "urlToImage": "https://i.guim.co.uk/img/media/beda27d8ef0be3b66cab7a7bb694741009b98514/0_120_3600_2160/master/3600.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=9e2bb8ba89eed8fd709e7d04e50f0ddc",
            "publishedAt": "2022-09-27T09:01:28Z",
            "content": "Scores on the doors\r\nDIVISION ONE\r\nCanterbury: Kent v Somerset 195-9\r\nOld Trafford: Lancashire 414-5 v Surrey\r\nWantage Road: Northants v Essex 220-8\r\nEdgbaston: Warwicks 138-2 v Hampshire \r\nHeadingle… [+2660 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Andy Bull in Karachi",
            "title": "Karachi’s renowned Polo Grounds still fertile territory for Pakistani cricket",
            "description": "Hanif Mohammad and his four brothers learned the game here and today hundreds of cricketers play in overlapping matchesLate Sunday morning, and there is not a scrap of spare ground to be found at the Polo Grounds in downtown Karachi. Every last patch of its 2…",
            "url": "https://amp.theguardian.com/sport/2022/sep/18/the-renowned-polo-grounds-are-still-a-breeding-ground-for-pakistan-cricket",
            "urlToImage": "https://i.guim.co.uk/img/media/b704c87469726eae250e25f23bc8f4abdf09f385/0_247_4352_2611/master/4352.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=a6b14a3e435b9ca3eb1913367d1b211a",
            "publishedAt": "2022-09-18T16:38:08Z",
            "content": "Late Sunday morning, and there is not a scrap of spare ground to be found at the Polo Grounds in downtown Karachi. Every last patch of its 20 acres of path and grass is taken up with games of tape-ba… [+5361 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "James Wallace",
            "title": "England v India: second women’s T20 cricket international – live updates",
            "description": "<ul><li>Over-by-over updates from the the County Ground (6pm BST)</li><li>Email James here or send him a tweet @Jimbo_Cricket</li></ul>Amy Jones wins the toss and is all smiles at a sunlit Incora County Ground as she informs Lydia Greenway that they will have…",
            "url": "https://www.theguardian.com/sport/live/2022/sep/13/england-v-india-second-womens-t20-cricket-international-live",
            "urlToImage": "https://i.guim.co.uk/img/media/a9aa12b4c3ca075e80e8636869965dd30fb772c0/0_65_8014_4811/master/8014.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=5cfca1b32ec3d6fb82619f97660e6184",
            "publishedAt": "2022-09-13T16:36:26Z",
            "content": "Hello and welcome to this second T20I OBO of England v India at Derby.\r\nEngland prospered on a wet and cold one up in Durham on Sunday night, the conditions in early September in the north-east were … [+471 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Tanya Aldred",
            "title": "County cricket: Yorkshire v Essex, Northamptonshire v Surrey – live",
            "description": "<ul><li>County Championship updates from around the grounds</li><li>Email Tanya, send her a tweet or join the discussion BTL</li></ul>The County Ground: Northants 339 v Surrey 224-5Edgbaston: Warwickshire 196 v Somerset 219 and 13-2 Continue reading...",
            "url": "https://www.theguardian.com/sport/live/2022/sep/14/county-cricket-yorkshire-v-essex-northamptonshire-v-surrey-live",
            "urlToImage": "https://i.guim.co.uk/img/media/edb3919b96f788d1d872c71635632892b8828a28/0_0_5403_3243/master/5403.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=eceaa078ef8e224878ad6ad64c917804",
            "publishedAt": "2022-09-14T08:55:44Z",
            "content": "Michael Hussey and David Saker join England T20 World Cup coaching staff\r\nMore names for the merry-go-round, as ex- Australian international Michael Hussey and former England bowling coach David Sake… [+3445 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Tanya Aldred at the Oval",
            "title": "Surrey v Yorkshire, Hampshire v Kent: county cricket – live",
            "description": "<ul><li>Updates from the Oval and beyond on first day of play</li><li>Royal London Cup: Kent beat Lancs in 50-over showcase</li><li>Get in touch: email Tanya, tweet her or comment BTL</li></ul>1 Nottinghamshire 2152 Middlesex 188 Continue reading...",
            "url": "https://www.theguardian.com/sport/live/2022/sep/20/cricket-county-championship-surrey-yorkshire-hampshire-kent--live",
            "urlToImage": "https://i.guim.co.uk/img/media/dd31d511f6f233488def66fbb800a73e1e2e88c9/0_232_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=60559350c8fc09592fb091c24ad14f0e",
            "publishedAt": "2022-09-20T08:22:29Z",
            "content": "Fixtures\r\nDIVISION ONE\r\nChelmsoford: Essex v Lancashire\r\nBristol: Gloucestershire v Warwickshire\r\nThe Rosebowl:Hampshire v Kent\r\nTaunton: Somerset v Northants\r\nThe Oval: Surrey v Yorkshire\r\nDIVISION … [+1694 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Tanya Aldred at Old Trafford",
            "title": "County cricket: Lancashire v Yorkshire, Kent v Essex – live!",
            "description": "<ul><li>Live county championship updates from day two of four</li><li>Jennings hits record runs before Hill leads Yorkshire fightback</li></ul>Good morning from a damp Manchester, where the honeysuckle berries sag and autumn is touchable. It’s day two of the …",
            "url": "https://www.theguardian.com/sport/live/2022/sep/06/county-cricket-lancashire-v-yorkshire-kent-v-essex-and-more-live",
            "urlToImage": "https://i.guim.co.uk/img/media/c95a49d62263e17c91e6fc6df7668448a11f6fe0/0_142_4216_2531/master/4216.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=9750ae148372de8baba7d386eba521a0",
            "publishedAt": "2022-09-06T08:46:19Z",
            "content": "Good morning from a damp Manchester, where the honeysuckle berries sag and autumn is touchable. Its day two of the first September round of the County Championship, with seven games in play, weather … [+1063 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Tanya Aldred at Old Trafford",
            "title": "Lancashire v Yorkshire, Hampshire v Northants: county cricket – live!",
            "description": "<ul><li>Updates from the final day of the latest Championship matches</li><li>Get in touch! Contact Tanya by email, Twitter or comment BTL</li></ul>Division OneRose Bowl: Hampshire 400-9dec v Northants 175 and 153-3. Northants trail by 72 with 7 wickets in ha…",
            "url": "https://www.theguardian.com/sport/live/2022/sep/08/lancashire-v-yorkshire-hampshire-v-northants-county-cricket-live",
            "urlToImage": "https://i.guim.co.uk/img/media/771166191e8991b2da79e4fe8dec6cd0fad5d8ac/0_384_5878_3527/master/5878.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=9aed2a4d56573f89b727e3ae6974d419",
            "publishedAt": "2022-09-08T09:16:43Z",
            "content": "Show key events onlyPlease turn on JavaScript to use this feature\r\nHarry Brook wins his first Test cap\r\nAt The Oval, the start of play has been delayed till 11.30, toss till 11am. Best of CC-Live luc… [+3337 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Taha Hashim",
            "title": "Pakistan v England: second men’s T20 cricket international – live",
            "description": "<ul><li>Live over-by-over updates from the 3.30pm BST start</li><li>Get in touch! Feel free to mail Taha or tweet @TahaHash</li></ul>Teams:Pakistan: Babar Azam (c), Mohammad Rizwan (wk), Haider Ali, Shan Masood, Iftikhar Ahmed, Khushdil Shah, Mohammad Nawaz, …",
            "url": "https://www.theguardian.com/sport/live/2022/sep/22/pakistan-v-england-second-mens-t20-cricket-international-live-score-updates",
            "urlToImage": "https://i.guim.co.uk/img/media/9cbefcc4e6ca584f0d5487405b940c9bb29be7d7/0_53_4078_2446/master/4078.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=c2b4aa105e5fe7bfff010b7fed8003b7",
            "publishedAt": "2022-09-22T14:18:36Z",
            "content": "Teams:\r\nPakistan: Babar Azam (c), Mohammad Rizwan (wk), Haider Ali, Shan Masood, Iftikhar Ahmed, Khushdil Shah, Mohammad Nawaz, Usman Qadir, Haris Rauf, Mohammad Hasnain, Shahnawaz Dahani\r\nEngland: P… [+1788 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Tanya Aldred at Headingley",
            "title": "County cricket: Yorkshire v Gloucestershire, Warwickshire v Hampshire – live",
            "description": "<ul><li>Day three of the last round of County Championship matches</li><li>Get in touch! Email Tanya, tweet her or join the discussion BTL</li></ul>DIVISION ONECanterbury: Kent 405-7 v Somerset 202 Continue reading...",
            "url": "https://www.theguardian.com/sport/live/2022/sep/28/county-cricket-yorkshire-v-gloucestershire-warwickshire-v-hampshire-live",
            "urlToImage": "https://i.guim.co.uk/img/media/6774a70466a2cef53417373964a4042ea0f41b3a/0_370_5551_3331/master/5551.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=f83981477f4ad3b68a584529cc3cb258",
            "publishedAt": "2022-09-28T09:02:43Z",
            "content": "Scores on the doors\r\nDIVISION ONE\r\nCanterbury: Kent 405-7 v Somerset 202\r\nOld Trafford: Lancashire 512 v Surrey 123-5\r\nWantage Road: Northants 32-2 v Essex 263\r\nEdgbaston: Warwicks 272-4dec v Hampshi… [+3085 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Rob Smyth",
            "title": "Pakistan v England: sixth men’s T20 cricket international – live",
            "description": "<ul><li>Live updates from the 3.30pm BST start, hosts lead 3-2</li><li>The Spin: sign up and receive our weekly cricket email</li></ul>Sometimes, you don’t know what you’ve got till you’ve got it. Things we can’t foresee enrich our lives in ways we can’t imag…",
            "url": "https://www.theguardian.com/sport/live/2022/sep/30/pakistan-v-england-sixth-mens-t20-cricket-international-live",
            "urlToImage": "https://i.guim.co.uk/img/media/e40cd7c0c173c4e5523ad6c0261ea521d5a1b497/0_68_5000_3000/master/5000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=a873e4b7be9f7e6c6aa6a788534b9bb5",
            "publishedAt": "2022-09-30T13:30:40Z",
            "content": "Sometimes, you dont know what youve got till youve got it. Things we cant foresee enrich our lives in ways we cant imagine: true love, The Sopranos, memory foam. Who knew, for example, that once you … [+1318 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Australia's Starc, Marsh and Stoinis rested for India T20 tour - Reuters",
            "description": "Cricket Australia said on Wednesday that paceman Mitchell Starc and all-rounders Mitchell Marsh and Marcus Stoinis will miss the T20 tour of India with \"low level\" injuries.",
            "url": "https://www.reuters.com/lifestyle/sports/australias-starc-marsh-stoinis-rested-india-t20-tour-2022-09-14/",
            "urlToImage": "https://www.reuters.com/resizer/S2HFMC1StX5exPOkrOgwCs1phjE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/KJ6QWNN64NKPPLURTB2B2YNVI4.jpg",
            "publishedAt": "2022-09-14T06:26:00Z",
            "content": "MELBOURNE, Sept 14 (Reuters) - Cricket Australia said on Wednesday that paceman Mitchell Starc and all-rounders Mitchell Marsh and Marcus Stoinis will miss the T20 tour of India with \"low level\" inju… [+677 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Australia's Haynes calls time on glittering career - Reuters",
            "description": "Rachael Haynes, a core member of the Australia team that has dominated women's cricket for a generation, called time on her 13-year international career on Thursday.",
            "url": "https://www.reuters.com/lifestyle/sports/australias-haynes-calls-time-glittering-career-2022-09-15/",
            "urlToImage": "https://www.reuters.com/resizer/zMm8xoscC8ksGWffmTABXew4SvI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZBK2ISFFRRMAPJWHJCPIVW7FGU.jpg",
            "publishedAt": "2022-09-15T00:47:00Z",
            "content": "SYDNEY, Sept 15 (Reuters) - Rachael Haynes, a core member of the Australia team that has dominated women's cricket for a generation, called time on her 13-year international career on Thursday.\r\nThe … [+1643 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Elizabeth Yuko",
            "title": "The Difference Between Grasshoppers and Crickets (and How to Prevent Both From Invading Your Home This Fall)",
            "description": "Outside, the sound of grasshoppers and crickets chirping adds to the ambiance—especially in the summertime. But indoors, that noise can get annoying very quickly. Plus, while some people may not find grasshoppers and crickets as frightening as spiders, coming…",
            "url": "https://lifehacker.com/the-difference-between-grasshoppers-and-crickets-and-h-1849508617",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/cf7d992e072059c28fe72b5df52a6708.jpg",
            "publishedAt": "2022-09-10T15:00:00Z",
            "content": "Outside, the sound of grasshoppers and crickets chirping adds to the ambianceespecially in the summertime. But indoors, that noise can get annoying very quickly. Plus, while some people may not find … [+2378 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "T20 World Cup 2022: Australia name Tim David in 15-man squad for title defence",
            "description": "Australia include Singapore-born batter Tim David in their 15-man squad for their Twenty20 World Cup title defence.",
            "url": "https://www.bbc.co.uk/sport/cricket/62751764",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/F0AF/production/_126551616_gettyimages-1403519868.jpg",
            "publishedAt": "2022-09-01T10:06:36Z",
            "content": "Tim David has been playing for Southern Brave in this summer's Hundred competition\r\nAustralia have named Singapore-born batter Tim David in their squad for the Twenty20 World Cup this autumn.\r\nThe 26… [+1469 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Boucher concerned for test cricket amid rise of T20 leagues - Reuters.com",
            "description": "Outgoing South Africa coach Mark Boucher admits he is concerned about the diminishing amount of test cricket being played and believes recent results show the format has adapted to the modern game which prizes entertainment over grit.",
            "url": "https://www.reuters.com/lifestyle/sports/boucher-concerned-test-cricket-amid-rise-t20-leagues-2022-09-13/",
            "urlToImage": "https://www.reuters.com/resizer/maK9w02d6PYzIQum2CUMiYG7l20=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/A5LI45QBTFPFNC5VGD2SRYGK2Q.jpg",
            "publishedAt": "2022-09-13T05:03:00Z",
            "content": "LONDON, Sept 13 (Reuters) - Outgoing South Africa coach Mark Boucher admits he is concerned about the diminishing amount of test cricket being played and believes recent results show the format has a… [+2212 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Daniel Gallan (now, at the Oval) and Jim Wallace (later)",
            "title": "England v South Africa: third Test, day three – live!",
            "description": "<ul><li>The Spin: sign up for our free weekly cricket newsletter</li><li>And you can get in touch by mailing Daniel or via Twitter</li></ul>Good morning and welcome to day one\r\n day two\r\n day three of this third and final Test between England and South Africa…",
            "url": "https://www.theguardian.com/sport/live/2022/sep/10/cricket-england-v-south-africa-third-test-day-three-live-score-updates",
            "urlToImage": "https://i.guim.co.uk/img/media/f64ca697b2b4a58a1c2762ca4742839a2498d069/0_204_3500_2102/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=c1f09c616a51bcc2d1e472bacaf0fb69",
            "publishedAt": "2022-09-10T08:45:03Z",
            "content": "Good morning and welcome to day one\r\nday two\r\n day three of this third and final Test between England and South Africa.\r\nIf youre mourning the passing of Queen Elizabeth, I hope the cricket offers yo… [+958 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Simon Burnton",
            "title": "Joe Root backs England Test team to bring in new cricket audiences",
            "description": "<ul><li>‘I’ve never had more fun playing professional cricket’</li><li>Former captain ‘buzzing’ about progress this summer</li></ul>After England came from behind to beat South Africa 2-1 in the final series of the summer – three matches across which they sco…",
            "url": "https://amp.theguardian.com/sport/2022/sep/13/england-have-made-tests-as-attractive-as-the-hundred-believes-joe-root",
            "urlToImage": "https://i.guim.co.uk/img/media/bb7969faea7472fd3d64d144cf4f6149d00067c8/152_82_5714_3428/master/5714.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=a7b4d943ad560c4d2c78d802bb627a4c",
            "publishedAt": "2022-09-13T11:00:29Z",
            "content": "After England came from behind to beat South Africa 2-1 in the final series of the summer three matches across which they scored at 4.09 runs per over, a figure only exceeded in their entire history … [+3823 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Australia's Finch wants to carry on 'exciting' T20 journey - Reuters",
            "description": "Australia's Aaron Finch finds Twenty20 cricket \"exciting\" and has no immediate plans to quit the format, the 35-year-old said ahead of their three-match series against India on Monday.",
            "url": "https://www.reuters.com/lifestyle/sports/australias-finch-wants-carry-exciting-t20-journey-2022-09-20/",
            "urlToImage": "https://www.reuters.com/resizer/8MxtGndy8GsLdshAWADDyynHa50=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/AYUUUQGFCBNBXAG4UUU5G34JQI.jpg",
            "publishedAt": "2022-09-20T01:53:00Z",
            "content": "NEW DELHI, Sept 19 (Reuters) - Australia's Aaron Finch finds Twenty20 cricket \"exciting\" and has no immediate plans to quit the format, the 35-year-old said ahead of their three-match series against … [+2203 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Andy Bull in Lahore",
            "title": "‘Less cricket, higher intensity’: Dawid Malan backs ECB’s cuts to county game",
            "description": "<ul><li>England and Yorkshire batter adds: ‘Bowlers will be fitter’</li><li>Malan warns players ‘knackered’ by ‘12-months-a-year game’</li></ul>The England and Yorkshire batter Dawid Malan has given his unequivocal support to the England and Wales Cricket Boa…",
            "url": "https://amp.theguardian.com/sport/2022/sep/29/less-cricket-higher-intensity-dawid-malan-backs-ecb-cuts-county-game-england",
            "urlToImage": "https://i.guim.co.uk/img/media/2c89655b2fafd2e5a8bc795751788762c0f0f47f/464_52_1345_807/master/1345.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=ea28ac88da54832a677f9fa3370a111b",
            "publishedAt": "2022-09-29T17:00:15Z",
            "content": "The England and Yorkshire batter Dawid Malan has given his unequivocal support to the England and Wales Cricket Boards proposal to reduce the number of county championship matches.\r\nIn county cricket… [+3955 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Pope says McCullum helped him overcome fear of getting out - Reuters",
            "description": "England batsman Ollie Pope has credited head coach Brendon McCullum with helping him overcome the fear of losing his wicket in test cricket, saying the New Zealander changed his mindset.",
            "url": "https://www.reuters.com/lifestyle/sports/pope-says-mccullum-helped-him-overcome-fear-getting-out-2022-09-15/",
            "urlToImage": "https://www.reuters.com/resizer/AMmTmkc1RJU8e9tjOv1qxybLYNk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5I7AI4NM2VL6LG67HWSTWQOEA4.jpg",
            "publishedAt": "2022-09-15T04:47:00Z",
            "content": "Sept 15 (Reuters) - England batsman Ollie Pope has credited head coach Brendon McCullum with helping him overcome the fear of losing his wicket in test cricket, saying the New Zealander changed his m… [+1442 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Pakistan bring back Hayden for T20 World Cup role in Australia - Reuters",
            "description": "Former Australia opener Matthew Hayden will reunite with the Pakistan team to mentor the side at the Twenty20 World Cup in Australia beginning next month, the Pakistan Cricket Board (PCB) said on Friday.",
            "url": "https://www.reuters.com/lifestyle/sports/pakistan-bring-back-hayden-t20-world-cup-role-australia-2022-09-09/",
            "urlToImage": "https://www.reuters.com/resizer/lsENShhu0gtZOAr4bA1dILQSlfU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/KVUNXKJKNROWVMKRDBOHD4PCHM.jpg",
            "publishedAt": "2022-09-09T07:29:00Z",
            "content": "LAHORE, Pakistan, Sept 9 (Reuters) - Former Australia opener Matthew Hayden will reunite with the Pakistan team to mentor the side at the Twenty20 World Cup in Australia beginning next month, the Pak… [+1365 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Australia board appoints culture review author as ethics boss - Reuters",
            "description": "Cricket Australia (CA) has appointed Simon Longstaff as its inaugural ethics commissioner, four years after he led a scathing review of the board's culture in the wake of the Newlands ball-tampering scandal.",
            "url": "https://www.reuters.com/lifestyle/sports/australia-board-appoints-culture-review-author-ethics-boss-2022-09-06/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=109",
            "publishedAt": "2022-09-06T03:26:00Z",
            "content": "MELBOURNE, Sept 6 (Reuters) - Cricket Australia (CA) has appointed Simon Longstaff as its inaugural ethics commissioner, four years after he led a scathing review of the board's culture in the wake o… [+2130 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Hales called up by England for T20 World Cup after three-year absence - Reuters",
            "description": "England batsman Alex Hales is set to return to the national team after three years after the England and Wales Cricket Board (ECB) on Wednesday named him in their squad for next month's Twenty20 World Cup in Australia.",
            "url": "https://www.reuters.com/lifestyle/sports/hales-called-up-by-england-t20-world-cup-after-three-year-absence-2022-09-07/",
            "urlToImage": "https://www.reuters.com/resizer/N6-_oEO1t8DyDKsQL5CNnEiNps0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/S6FQC5T2TNKGPI6KYF7VRSGDZI.jpg",
            "publishedAt": "2022-09-07T09:42:00Z",
            "content": "Sept 7 (Reuters) - England batsman Alex Hales is set to return to the national team after three years after the England and Wales Cricket Board (ECB) on Wednesday named him in their squad for next mo… [+704 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Sporting events cancelled after Queen Elizabeth dies - Reuters",
            "description": "The world of sport reacted to the death of Queen Elizabeth on Thursday with a raft of cancellations across cricket, golf and rugby, while others paid tribute by holding a minute's silence.",
            "url": "https://www.reuters.com/lifestyle/sports/sporting-events-cancelled-after-queen-elizabeth-dies-2022-09-08/",
            "urlToImage": "https://www.reuters.com/resizer/NAudazqyyklKwI2fLcg5wNXi3eg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6LDQEF2UJ5KNXNXDWC7OFZD2FQ.jpg",
            "publishedAt": "2022-09-08T20:31:00Z",
            "content": "Sept 8 (Reuters) - The world of sport reacted to the death of Queen Elizabeth on Thursday with a raft of cancellations across cricket, golf and rugby, while others paid tribute by holding a minute's … [+2319 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "New Zealand's Allen says not in fight to dislodge Guptill - Reuters",
            "description": "Power hitter Finn Allen might be Martin Guptill's natural successor in New Zealand cricket but the young top order batsman says he is in no rush to dislodge his veteran team mate ahead of the T20 World Cup.",
            "url": "https://www.reuters.com/lifestyle/sports/new-zealands-allen-says-not-fight-dislodge-guptill-2022-09-20/",
            "urlToImage": "https://www.reuters.com/resizer/Mo5tBb2ZBFCZslWsLSqK7_v_p2E=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/GRYTABQJLJMW3OEZKCF4EXL2BA.jpg",
            "publishedAt": "2022-09-20T04:04:00Z",
            "content": "Sept 20 (Reuters) - Power hitter Finn Allen might be Martin Guptill's natural successor in New Zealand cricket but the young top order batsman says he is in no rush to dislodge his veteran team mate … [+1992 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Break and friendly dressing room rekindle Kohli's love for game - Reuters",
            "description": "A timely break away from the game and a friendly dressing room have helped Virat Kohli rediscover his love for cricket, the star batsman said after showing fresh sign of his resurgence at the ongoing Asia Cup.",
            "url": "https://www.reuters.com/lifestyle/sports/break-friendly-dressing-room-rekindle-kohlis-love-game-2022-09-05/",
            "urlToImage": "https://www.reuters.com/resizer/2juSIaVuOpaLjg2DJ3GboJw1868=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VUGWW6P4QBLTRHUROCVHUEZCBA.jpg",
            "publishedAt": "2022-09-05T07:00:00Z",
            "content": "DUBAI, Sept 5 (Reuters) - A timely break away from the game and a friendly dressing room have helped Virat Kohli rediscover his love for cricket, the star batsman said after showing fresh sign of his… [+1810 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "'My phone's here', Warner ready to talk leadership with Cricket Australia - Reuters.com",
            "description": "David Warner says he still considers leadership roles a privilege and is ready to talk to Cricket Australia about ending the ban imposed on him for his part in the Newlands ball-tampering incident.",
            "url": "https://www.reuters.com/lifestyle/sports/my-phones-here-warner-ready-talk-leadership-with-cricket-australia-2022-09-13/",
            "urlToImage": "https://www.reuters.com/resizer/tUW3vFacqBY29X_ItHyrM4CzM30=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SAUQF3A4TROFFACK44PSUF7KUU.jpg",
            "publishedAt": "2022-09-13T05:00:00Z",
            "content": "SYDNEY, Sept 13 (Reuters) - David Warner says he still considers leadership roles a privilege and is ready to talk to Cricket Australia about ending the ban imposed on him for his part in the Newland… [+1828 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "India fast bowler Shami out of Australia T20s due to COVID-19 - Reuters",
            "description": "India fast bowler Mohammed Shami has tested positive for COVID-19 and has been ruled out of the three Twenty20 internationals at home against Australia, the country's cricket board (BCCI) said on Sunday.",
            "url": "https://www.reuters.com/lifestyle/sports/india-fast-bowler-shami-out-australia-t20s-due-covid-19-2022-09-18/",
            "urlToImage": "https://www.reuters.com/resizer/VUvA9n_J0Ow6CrDDAr2QM486gbw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/EMOTKRJBCJKUNAW4WPQT7OWSSA.jpg",
            "publishedAt": "2022-09-18T07:51:00Z",
            "content": "MUMBAI, Sept 18 (Reuters) - India fast bowler Mohammed Shami has tested positive for COVID-19 and has been ruled out of the three Twenty20 internationals at home against Australia, the country's cric… [+887 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Pakistan court quashes terrorism charges against former PM Imran Khan - Reuters",
            "description": "A Pakistan high court on Monday quashed terrorism charges against former Prime Minister Imran Khan, his defence lawyers said, a relief for the former cricket star who has faced a spate of legal woes since being ousted from office.",
            "url": "https://www.reuters.com/world/asia-pacific/pakistan-court-quashes-terrorism-charges-against-former-pm-imran-khan-2022-09-19/",
            "urlToImage": "https://www.reuters.com/resizer/capP-ZauveRXixffAwce9BXt3HM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2M7NGVYKFZPLJM5XLHBUKXP54E.jpg",
            "publishedAt": "2022-09-19T11:21:00Z",
            "content": "ISLAMABAD, Sept 19 (Reuters) - A Pakistan high court on Monday quashed terrorism charges against former Prime Minister Imran Khan, his defence lawyers said, a relief for the former cricket star who h… [+2204 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Katich named head coach of Mumbai Indians' Cape Town team - Reuters",
            "description": "Mumbai Indians said on Thursday that former Australia batter Simon Katich has been named the head coach of their Cape Town franchise in the new T20 league in South Africa.",
            "url": "https://www.reuters.com/lifestyle/sports/katich-named-head-coach-mumbai-indians-cape-town-team-2022-09-15/",
            "urlToImage": "https://www.reuters.com/resizer/-p8FUAJdfFfMNoxqgp1upZAESMM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WI3UGGJPEBPPZMMC3JLAVYOBVQ.jpg",
            "publishedAt": "2022-09-15T08:06:00Z",
            "content": "MUMBAI, Sept 15 (Reuters) - Mumbai Indians said on Thursday that former Australia batter Simon Katich has been named the head coach of their Cape Town franchise in the new T20 league in South Africa.… [+1797 chars]"
        }
    ]
    constructor(){
        super();
        console.log("my constructor News")
        this.state={
            articles:this.articles,
            loading:false
        }
    }
    // async componentDidMount(){
    //     console.log("inside cdm.")
    //     let url = "https://newsapi.org/v2/top-headlines?country=de&category=sports&apiKey=ada6ce19b55a4330adf52d7b6bae2db4&page=2"
    //     let data = await fetch(url)
    //     let parsedData = await data.json()
    //     this.setState({
    //         articles:parsedData.articles
    //     })
    // }
    render() {
        
    return (
      <>
        <div className="container my-3">
            <h2>Giants IT News - Top Headlines </h2>
            <div className="row" >
            {this.state.articles.map((element)=>{ 
                return  <div className="col-md-4" key={element.url}>
                        <NewsItems title={element.title?element.title.slice(0,45):''} description={element.description?element.description.slice(0,88):''} imageUrl={element.urlToImage?element.urlToImage:''} newsUrl={element.url}></NewsItems>
                    </div>
            })}
            </div> 
            <div className="container d-flex justify-content-between">
                <button type="button" class="btn btn-info mx-2">Previous</button>
                <button type="button" class="btn btn-info mx-2">Next</button>
            </div>
        </div>
        
      </>
      
    )
  }
}

export default News