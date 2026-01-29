// 推文数据存储
let tweetsData = [
    {
        "id": 1769664909198,
        "content": "Simple Earn Crazy Wednesday #6 is Live! \n\n$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT\n\nExtra 10% $USDT Rate-Up Voucher for participants",
        "media": [
            {
                "type": "image",
                "url": "assets/media-1.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 2,
            "retweets": 20,
            "likes": 23,
            "views": 2178
        }
    },
    {
        "id": 1769664906335,
        "content": "$GUSD dual earnings, with APR up to 19.05%\n\n1️⃣Mint $GUSD and earn 4.4% APR\n2️⃣Stake in #Launchpool for up to 14.65% APR, claim $BOT $AVNT $PORTALS free airdrops every hour",
        "media": [
            {
                "type": "image",
                "url": "assets/media-2.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 15,
            "likes": 87,
            "views": 2463
        }
    },
    {
        "id": 1769664908483,
        "content": "💥Gate \"Cash-In Wednesday\" is here\nWednesday Exclusive · For Newcomers\nInvite 1 friend to sign up = Get $5 cash instantly!",
        "media": [
            {
                "type": "image",
                "url": "assets/media-3.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 14,
            "retweets": 24,
            "likes": 82,
            "views": 1512
        }
    },
    {
        "id": 1769664908074,
        "content": "\"The Power of Now\" wrapped in Dubai 🌟\n\nCrypto, AI, art & Web3 all in one room — sparks were flying!\n\nNot just an event, it's a community moment!\n\nGate Group is where culture meets innovation.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-4.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 11,
            "retweets": 12,
            "likes": 48,
            "views": 1023
        }
    },
    {
        "id": 1769664906131,
        "content": "Simple Earn Crazy Wednesday #6 is Live! \n\n$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT\n\nExtra 10% $USDT Rate-Up Voucher for participants",
        "media": [
            {
                "type": "image",
                "url": "assets/media-5.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 11,
            "retweets": 6,
            "likes": 90,
            "views": 1577
        }
    },
    {
        "id": 1769664909096,
        "content": "💥Gate \"Cash-In Wednesday\" is here\nWednesday Exclusive · For Newcomers\nInvite 1 friend to sign up = Get $5 cash instantly!",
        "media": [
            {
                "type": "image",
                "url": "assets/media-6.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 13,
            "retweets": 12,
            "likes": 37,
            "views": 1013
        }
    },
    {
        "id": 1769664908381,
        "content": "\"The Power of Now\" wrapped in Dubai 🌟\n\nCrypto, AI, art & Web3 all in one room — sparks were flying!\n\nNot just an event, it's a community moment!\n\nGate Group is where culture meets innovation.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-7.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 9,
            "retweets": 3,
            "likes": 98,
            "views": 2350
        }
    },
    {
        "id": 1769664908994,
        "content": "$GUSD dual earnings, with APR up to 19.05%\n\n1️⃣Mint $GUSD and earn 4.4% APR\n2️⃣Stake in #Launchpool for up to 14.65% APR, claim $BOT $AVNT $PORTALS free airdrops every hour",
        "media": [
            {
                "type": "image",
                "url": "assets/media-8.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 4,
            "retweets": 6,
            "likes": 21,
            "views": 1173
        }
    },
    {
        "id": 1769664908891,
        "content": "🏎️ VIP F1 Experience\n\nFeel the adrenaline — Gate VIPs hit the trackside for the ultimate Singapore Grand Prix experience!\n\n📈 Sometimes the charts aren't testing your skills… they're testing your patience.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-9.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 4,
            "retweets": 24,
            "likes": 67,
            "views": 1802
        }
    },
    {
        "id": 1769664908788,
        "content": "Gate Initial Listing: $DL \n\n🔹 Trading Pair: $DL / $USDT\n🔹 Trading Starts: 12:00 PM, September 19th (UTC)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-10.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 4,
            "retweets": 17,
            "likes": 82,
            "views": 1746
        }
    },
    {
        "id": 1769664908686,
        "content": "🥂 Gate Exclusive VIP Dinner\n\nAn intimate dining experience with Gate's partners, friends, and VIPs — an evening to remember.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-11.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 9,
            "retweets": 11,
            "likes": 13,
            "views": 1134
        }
    },
    {
        "id": 1769664909402,
        "content": "🥂 Gate Exclusive VIP Dinner\n\nAn intimate dining experience with Gate's partners, friends, and VIPs — an evening to remember.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-12.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 3,
            "retweets": 7,
            "likes": 65,
            "views": 1607
        }
    },
    {
        "id": 1769664908279,
        "content": "🥂 Gate Exclusive VIP Dinner\n\nAn intimate dining experience with Gate's partners, friends, and VIPs — an evening to remember.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-13.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 2,
            "retweets": 16,
            "likes": 51,
            "views": 773
        }
    },
    {
        "id": 1769664909300,
        "content": "Simple Earn Crazy Wednesday #6 is Live! \n\n$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT\n\nExtra 10% $USDT Rate-Up Voucher for participants",
        "media": [
            {
                "type": "image",
                "url": "assets/media-14.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 11,
            "retweets": 21,
            "likes": 98,
            "views": 1991
        }
    },
    {
        "id": 1769664907972,
        "content": "Simple Earn Crazy Wednesday #6 is Live! \n\n$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT\n\nExtra 10% $USDT Rate-Up Voucher for participants",
        "media": [
            {
                "type": "image",
                "url": "assets/media-15.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 7,
            "retweets": 17,
            "likes": 103,
            "views": 2031
        }
    },
    {
        "id": 1769664907870,
        "content": "$GUSD dual earnings, with APR up to 19.05%\n\n1️⃣Mint $GUSD and earn 4.4% APR\n2️⃣Stake in #Launchpool for up to 14.65% APR, claim $BOT $AVNT $PORTALS free airdrops every hour",
        "media": [
            {
                "type": "image",
                "url": "assets/media-16.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 10,
            "retweets": 18,
            "likes": 50,
            "views": 1812
        }
    },
    {
        "id": 1769664907768,
        "content": "🥂 Gate Exclusive VIP Dinner\n\nAn intimate dining experience with Gate's partners, friends, and VIPs — an evening to remember.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-17.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 4,
            "retweets": 8,
            "likes": 82,
            "views": 2227
        }
    },
    {
        "id": 1769664908585,
        "content": "💥Gate \"Cash-In Wednesday\" is here\nWednesday Exclusive · For Newcomers\nInvite 1 friend to sign up = Get $5 cash instantly!",
        "media": [
            {
                "type": "image",
                "url": "assets/media-18.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 12,
            "retweets": 14,
            "likes": 39,
            "views": 945
        }
    },
    {
        "id": 1769664907667,
        "content": "🏎️ VIP F1 Experience\n\nFeel the adrenaline — Gate VIPs hit the trackside for the ultimate Singapore Grand Prix experience!\n\n📈 Sometimes the charts aren't testing your skills… they're testing your patience.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-19.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 7,
            "retweets": 14,
            "likes": 82,
            "views": 580
        }
    },
    {
        "id": 1769664908176,
        "content": "Gate is taking over @Token2049 week — back-to-back, non-stop vibes!\n\n🎶 Token of Love Music Festival (Oct 1)  \n🏁 Gate Singapore Grand Prix Reception (Oct 2)  \n🥂 Gate VIP Dinner (Oct 2)  \n🏎️ VIP F1 Experience (Oct 3–5)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-20.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 12,
            "retweets": 12,
            "likes": 68,
            "views": 1039
        }
    },
    {
        "id": 1769664907565,
        "content": "Gate Initial Listing: $DL \n\n🔹 Trading Pair: $DL / $USDT\n🔹 Trading Starts: 12:00 PM, September 19th (UTC)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-21.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 12,
            "likes": 26,
            "views": 1374
        }
    },
    {
        "id": 1769664907463,
        "content": "\"The Power of Now\" wrapped in Dubai 🌟\n\nCrypto, AI, art & Web3 all in one room — sparks were flying!\n\nNot just an event, it's a community moment!\n\nGate Group is where culture meets innovation.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-22.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 3,
            "retweets": 10,
            "likes": 58,
            "views": 1425
        }
    },
    {
        "id": 1769664907359,
        "content": "Gate is taking over @Token2049 week — back-to-back, non-stop vibes!\n\n🎶 Token of Love Music Festival (Oct 1)  \n🏁 Gate Singapore Grand Prix Reception (Oct 2)  \n🥂 Gate VIP Dinner (Oct 2)  \n🏎️ VIP F1 Experience (Oct 3–5)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-23.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 1,
            "retweets": 20,
            "likes": 102,
            "views": 1376
        }
    },
    {
        "id": 1769664907257,
        "content": "Gate is taking over @Token2049 week — back-to-back, non-stop vibes!\n\n🎶 Token of Love Music Festival (Oct 1)  \n🏁 Gate Singapore Grand Prix Reception (Oct 2)  \n🥂 Gate VIP Dinner (Oct 2)  \n🏎️ VIP F1 Experience (Oct 3–5)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-24.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 3,
            "likes": 60,
            "views": 2108
        }
    },
    {
        "id": 1769664907156,
        "content": "Simple Earn Crazy Wednesday #6 is Live! \n\n$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT\n\nExtra 10% $USDT Rate-Up Voucher for participants",
        "media": [
            {
                "type": "image",
                "url": "assets/media-25.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 4,
            "retweets": 19,
            "likes": 31,
            "views": 880
        }
    },
    {
        "id": 1769664907055,
        "content": "🥂 Gate Exclusive VIP Dinner\n\nAn intimate dining experience with Gate's partners, friends, and VIPs — an evening to remember.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-26.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 13,
            "retweets": 18,
            "likes": 70,
            "views": 2493
        }
    },
    {
        "id": 1769664909504,
        "content": "Gate Initial Listing: $DL \n\n🔹 Trading Pair: $DL / $USDT\n🔹 Trading Starts: 12:00 PM, September 19th (UTC)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-27.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 13,
            "retweets": 0,
            "likes": 69,
            "views": 2249
        }
    },
    {
        "id": 1769664906952,
        "content": "Rate cut expectations are heating up — Gate launches $BTC Bull vs Bear Prediction!\n\n$100,000 prize pool up for grabs, with up to $8,000 per winner.\n\nWhether you're new or pro, there's a prize for you:\n✅ 10 $USDT for your first correct prediction\n✅ $70,000 for top-ranked players",
        "media": [
            {
                "type": "image",
                "url": "assets/media-28.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 6,
            "retweets": 11,
            "likes": 103,
            "views": 796
        }
    },
    {
        "id": 1769664906848,
        "content": "🥂 Gate Exclusive VIP Dinner\n\nAn intimate dining experience with Gate's partners, friends, and VIPs — an evening to remember.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-29.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 7,
            "retweets": 1,
            "likes": 41,
            "views": 683
        }
    },
    {
        "id": 1769664906744,
        "content": "$GUSD dual earnings, with APR up to 19.05%\n\n1️⃣Mint $GUSD and earn 4.4% APR\n2️⃣Stake in #Launchpool for up to 14.65% APR, claim $BOT $AVNT $PORTALS free airdrops every hour",
        "media": [
            {
                "type": "image",
                "url": "assets/media-30.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 4,
            "retweets": 17,
            "likes": 108,
            "views": 1036
        }
    },
    {
        "id": 1769664906641,
        "content": "$GUSD dual earnings, with APR up to 19.05%\n\n1️⃣Mint $GUSD and earn 4.4% APR\n2️⃣Stake in #Launchpool for up to 14.65% APR, claim $BOT $AVNT $PORTALS free airdrops every hour",
        "media": [
            {
                "type": "image",
                "url": "assets/media-31.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 2,
            "retweets": 17,
            "likes": 32,
            "views": 1323
        }
    },
    {
        "id": 1769664906538,
        "content": "Simple Earn Crazy Wednesday #6 is Live! \n\n$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT\n\nExtra 10% $USDT Rate-Up Voucher for participants",
        "media": [
            {
                "type": "image",
                "url": "assets/media-32.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 12,
            "retweets": 1,
            "likes": 88,
            "views": 2100
        }
    },
    {
        "id": 1769664906437,
        "content": "Gate Initial Listing: $DL \n\n🔹 Trading Pair: $DL / $USDT\n🔹 Trading Starts: 12:00 PM, September 19th (UTC)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-33.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 3,
            "retweets": 20,
            "likes": 26,
            "views": 1545
        }
    },
    {
        "id": 1769664906233,
        "content": "Simple Earn Crazy Wednesday #6 is Live! \n\n$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT\n\nExtra 10% $USDT Rate-Up Voucher for participants",
        "media": [
            {
                "type": "image",
                "url": "assets/media-34.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 8,
            "retweets": 11,
            "likes": 73,
            "views": 1525
        }
    },
    {
        "id": 1769664906029,
        "content": "Gate is taking over @Token2049 week — back-to-back, non-stop vibes!\n\n🎶 Token of Love Music Festival (Oct 1)  \n🏁 Gate Singapore Grand Prix Reception (Oct 2)  \n🥂 Gate VIP Dinner (Oct 2)  \n🏎️ VIP F1 Experience (Oct 3–5)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-35.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 11,
            "retweets": 24,
            "likes": 84,
            "views": 1266
        }
    },
    {
        "id": 1769664905926,
        "content": "Simple Earn Crazy Wednesday #6 is Live! \n\n$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT\n\nExtra 10% $USDT Rate-Up Voucher for participants",
        "media": [
            {
                "type": "image",
                "url": "assets/media-36.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 6,
            "retweets": 5,
            "likes": 49,
            "views": 1327
        }
    }
];

// 全局设置
let globalSettings = {
    "author": "Gate",
    "handle": "@Gate",
    "avatar": "assets/avatar.png"
};

// 获取所有推文
function getTweets() {
    return tweetsData;
}

// 添加新推文
function addTweet(tweet) {
    const newTweet = {
        id: Date.now(),
        ...tweet,
        time: "刚刚",
        stats: {
            comments: Math.floor(Math.random() * 15), // 0-14条评论
            retweets: Math.floor(Math.random() * 25), // 0-24次转发
            likes: Math.floor(Math.random() * 100) + 10, // 10-109个赞
            views: Math.floor(Math.random() * 2000) + 500 // 500-2499次浏览
        }
    };
    tweetsData.unshift(newTweet);
    return newTweet;
}

// 删除推文
function deleteTweet(id) {
    tweetsData = tweetsData.filter(tweet => tweet.id !== id);
}

// 更新推文顺序
function updateTweetOrder(newOrder) {
    tweetsData = newOrder;
}

// 更新推文统计
function updateTweetStats(id, type) {
    const tweet = tweetsData.find(t => t.id === id);
    if (tweet) {
        switch (type) {
            case 'like':
                // 点赞增长：8-35个，模拟真实的点赞爆发
                tweet.stats.likes += Math.floor(Math.random() * 28) + 8;
                // 点赞也会带来一些浏览量
                tweet.stats.views += Math.floor(Math.random() * 50) + 20;
                break;
            case 'retweet':
                // 转发增长：3-15个，转发相对较少但影响大
                tweet.stats.retweets += Math.floor(Math.random() * 13) + 3;
                // 转发会带来更多浏览量和一些点赞
                tweet.stats.views += Math.floor(Math.random() * 100) + 50;
                tweet.stats.likes += Math.floor(Math.random() * 15) + 5;
                break;
            case 'comment':
                // 评论增长：1-8个，评论最少但最有价值
                tweet.stats.comments += Math.floor(Math.random() * 8) + 1;
                // 评论会带来浏览量和一些点赞
                tweet.stats.views += Math.floor(Math.random() * 30) + 15;
                tweet.stats.likes += Math.floor(Math.random() * 10) + 2;
                break;
        }
        return tweet.stats;
    }
    return null;
}

// 获取全局设置
function getGlobalSettings() {
    return globalSettings;
}

// 更新全局设置
function updateGlobalSettings(settings) {
    globalSettings = { ...globalSettings, ...settings };
}