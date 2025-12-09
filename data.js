// 推文数据存储
let tweetsData = [
    {
        "id": 1765291076351,
        "content": "💥Gate \"Cash-In Wednesday\" is here\nWednesday Exclusive · For Newcomers\nInvite 1 friend to sign up = Get $5 cash instantly!",
        "media": [
            {
                "type": "image",
                "url": "assets/media-1.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 12,
            "retweets": 5,
            "likes": 82,
            "views": 1584
        }
    },
    {
        "id": 1765291076662,
        "content": "Rate cut expectations are heating up — Gate launches $BTC Bull vs Bear Prediction!\n\n$100,000 prize pool up for grabs, with up to $8,000 per winner.\n\nWhether you're new or pro, there's a prize for you:\n✅ 10 $USDT for your first correct prediction\n✅ $70,000 for top-ranked players",
        "media": [
            {
                "type": "image",
                "url": "assets/media-2.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 4,
            "retweets": 3,
            "likes": 48,
            "views": 2267
        }
    },
    {
        "id": 1765291076558,
        "content": "$GUSD dual earnings, with APR up to 19.05%\n\n1️⃣Mint $GUSD and earn 4.4% APR\n2️⃣Stake in #Launchpool for up to 14.65% APR, claim $BOT $AVNT $PORTALS free airdrops every hour",
        "media": [
            {
                "type": "image",
                "url": "assets/media-3.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 3,
            "retweets": 17,
            "likes": 49,
            "views": 2466
        }
    },
    {
        "id": 1765291076455,
        "content": "Simple Earn Crazy Wednesday #6 is Live! \n\n$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT\n\nExtra 10% $USDT Rate-Up Voucher for participants",
        "media": [
            {
                "type": "image",
                "url": "assets/media-4.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 12,
            "retweets": 8,
            "likes": 101,
            "views": 1013
        }
    },
    {
        "id": 1765291076247,
        "content": "$GUSD dual earnings, with APR up to 19.05%\n\n1️⃣Mint $GUSD and earn 4.4% APR\n2️⃣Stake in #Launchpool for up to 14.65% APR, claim $BOT $AVNT $PORTALS free airdrops every hour",
        "media": [
            {
                "type": "image",
                "url": "assets/media-5.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 5,
            "retweets": 16,
            "likes": 50,
            "views": 733
        }
    },
    {
        "id": 1765291076144,
        "content": "$GUSD dual earnings, with APR up to 19.05%\n\n1️⃣Mint $GUSD and earn 4.4% APR\n2️⃣Stake in #Launchpool for up to 14.65% APR, claim $BOT $AVNT $PORTALS free airdrops every hour",
        "media": [
            {
                "type": "image",
                "url": "assets/media-6.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 7,
            "retweets": 3,
            "likes": 88,
            "views": 666
        }
    },
    {
        "id": 1765291077078,
        "content": "🏎️ VIP F1 Experience\n\nFeel the adrenaline — Gate VIPs hit the trackside for the ultimate Singapore Grand Prix experience!\n\n📈 Sometimes the charts aren't testing your skills… they're testing your patience.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-7.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 1,
            "retweets": 13,
            "likes": 106,
            "views": 2495
        }
    },
    {
        "id": 1765291076039,
        "content": "Simple Earn Crazy Wednesday #6 is Live! \n\n$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT\n\nExtra 10% $USDT Rate-Up Voucher for participants",
        "media": [
            {
                "type": "image",
                "url": "assets/media-8.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 7,
            "retweets": 17,
            "likes": 83,
            "views": 2286
        }
    },
    {
        "id": 1765291075935,
        "content": "🥂 Gate Exclusive VIP Dinner\n\nAn intimate dining experience with Gate's partners, friends, and VIPs — an evening to remember.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-9.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 11,
            "retweets": 14,
            "likes": 106,
            "views": 2322
        }
    },
    {
        "id": 1765291075832,
        "content": "Rate cut expectations are heating up — Gate launches $BTC Bull vs Bear Prediction!\n\n$100,000 prize pool up for grabs, with up to $8,000 per winner.\n\nWhether you're new or pro, there's a prize for you:\n✅ 10 $USDT for your first correct prediction\n✅ $70,000 for top-ranked players",
        "media": [
            {
                "type": "image",
                "url": "assets/media-10.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 13,
            "retweets": 24,
            "likes": 17,
            "views": 2180
        }
    },
    {
        "id": 1765291076767,
        "content": "$GUSD dual earnings, with APR up to 19.05%\n\n1️⃣Mint $GUSD and earn 4.4% APR\n2️⃣Stake in #Launchpool for up to 14.65% APR, claim $BOT $AVNT $PORTALS free airdrops every hour",
        "media": [
            {
                "type": "image",
                "url": "assets/media-11.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 10,
            "retweets": 16,
            "likes": 109,
            "views": 2312
        }
    },
    {
        "id": 1765291077180,
        "content": "🥂 Gate Exclusive VIP Dinner\n\nAn intimate dining experience with Gate's partners, friends, and VIPs — an evening to remember.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-12.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 2,
            "retweets": 6,
            "likes": 24,
            "views": 1109
        }
    },
    {
        "id": 1765291075728,
        "content": "Rate cut expectations are heating up — Gate launches $BTC Bull vs Bear Prediction!\n\n$100,000 prize pool up for grabs, with up to $8,000 per winner.\n\nWhether you're new or pro, there's a prize for you:\n✅ 10 $USDT for your first correct prediction\n✅ $70,000 for top-ranked players",
        "media": [
            {
                "type": "image",
                "url": "assets/media-13.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 7,
            "retweets": 9,
            "likes": 62,
            "views": 1620
        }
    },
    {
        "id": 1765291075624,
        "content": "Rate cut expectations are heating up — Gate launches $BTC Bull vs Bear Prediction!\n\n$100,000 prize pool up for grabs, with up to $8,000 per winner.\n\nWhether you're new or pro, there's a prize for you:\n✅ 10 $USDT for your first correct prediction\n✅ $70,000 for top-ranked players",
        "media": [
            {
                "type": "image",
                "url": "assets/media-14.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 9,
            "retweets": 2,
            "likes": 15,
            "views": 1346
        }
    },
    {
        "id": 1765291075520,
        "content": "\"The Power of Now\" wrapped in Dubai 🌟\n\nCrypto, AI, art & Web3 all in one room — sparks were flying!\n\nNot just an event, it's a community moment!\n\nGate Group is where culture meets innovation.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-15.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 14,
            "retweets": 9,
            "likes": 58,
            "views": 896
        }
    },
    {
        "id": 1765291075417,
        "content": "Gate is taking over @Token2049 week — back-to-back, non-stop vibes!\n\n🎶 Token of Love Music Festival (Oct 1)  \n🏁 Gate Singapore Grand Prix Reception (Oct 2)  \n🥂 Gate VIP Dinner (Oct 2)  \n🏎️ VIP F1 Experience (Oct 3–5)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-16.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 14,
            "retweets": 0,
            "likes": 71,
            "views": 2462
        }
    },
    {
        "id": 1765291076974,
        "content": "💥Gate \"Cash-In Wednesday\" is here\nWednesday Exclusive · For Newcomers\nInvite 1 friend to sign up = Get $5 cash instantly!",
        "media": [
            {
                "type": "image",
                "url": "assets/media-17.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 1,
            "retweets": 2,
            "likes": 87,
            "views": 1219
        }
    },
    {
        "id": 1765291075312,
        "content": "Rate cut expectations are heating up — Gate launches $BTC Bull vs Bear Prediction!\n\n$100,000 prize pool up for grabs, with up to $8,000 per winner.\n\nWhether you're new or pro, there's a prize for you:\n✅ 10 $USDT for your first correct prediction\n✅ $70,000 for top-ranked players",
        "media": [
            {
                "type": "image",
                "url": "assets/media-18.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 3,
            "retweets": 12,
            "likes": 19,
            "views": 1615
        }
    },
    {
        "id": 1765291075209,
        "content": "🥂 Gate Exclusive VIP Dinner\n\nAn intimate dining experience with Gate's partners, friends, and VIPs — an evening to remember.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-19.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 14,
            "retweets": 18,
            "likes": 51,
            "views": 1923
        }
    },
    {
        "id": 1765291075103,
        "content": "$GUSD dual earnings, with APR up to 19.05%\n\n1️⃣Mint $GUSD and earn 4.4% APR\n2️⃣Stake in #Launchpool for up to 14.65% APR, claim $BOT $AVNT $PORTALS free airdrops every hour",
        "media": [
            {
                "type": "image",
                "url": "assets/media-20.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 8,
            "retweets": 5,
            "likes": 50,
            "views": 1573
        }
    },
    {
        "id": 1765291076870,
        "content": "🏎️ VIP F1 Experience\n\nFeel the adrenaline — Gate VIPs hit the trackside for the ultimate Singapore Grand Prix experience!\n\n📈 Sometimes the charts aren't testing your skills… they're testing your patience.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-21.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 5,
            "retweets": 19,
            "likes": 93,
            "views": 816
        }
    },
    {
        "id": 1765291074998,
        "content": "Simple Earn Crazy Wednesday #6 is Live! \n\n$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT\n\nExtra 10% $USDT Rate-Up Voucher for participants",
        "media": [
            {
                "type": "image",
                "url": "assets/media-22.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 9,
            "retweets": 1,
            "likes": 70,
            "views": 1124
        }
    },
    {
        "id": 1765291074895,
        "content": "Gate is taking over @Token2049 week — back-to-back, non-stop vibes!\n\n🎶 Token of Love Music Festival (Oct 1)  \n🏁 Gate Singapore Grand Prix Reception (Oct 2)  \n🥂 Gate VIP Dinner (Oct 2)  \n🏎️ VIP F1 Experience (Oct 3–5)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-23.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 10,
            "retweets": 2,
            "likes": 86,
            "views": 645
        }
    },
    {
        "id": 1765291074791,
        "content": "Simple Earn Crazy Wednesday #6 is Live! \n\n$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT\n\nExtra 10% $USDT Rate-Up Voucher for participants",
        "media": [
            {
                "type": "image",
                "url": "assets/media-24.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 2,
            "retweets": 6,
            "likes": 54,
            "views": 2283
        }
    },
    {
        "id": 1765291074687,
        "content": "🏎️ VIP F1 Experience\n\nFeel the adrenaline — Gate VIPs hit the trackside for the ultimate Singapore Grand Prix experience!\n\n📈 Sometimes the charts aren't testing your skills… they're testing your patience.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-25.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 3,
            "retweets": 0,
            "likes": 11,
            "views": 922
        }
    },
    {
        "id": 1765291074583,
        "content": "Simple Earn Crazy Wednesday #6 is Live! \n\n$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT\n\nExtra 10% $USDT Rate-Up Voucher for participants",
        "media": [
            {
                "type": "image",
                "url": "assets/media-26.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 7,
            "retweets": 15,
            "likes": 27,
            "views": 943
        }
    },
    {
        "id": 1765291074479,
        "content": "🥂 Gate Exclusive VIP Dinner\n\nAn intimate dining experience with Gate's partners, friends, and VIPs — an evening to remember.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-27.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 4,
            "retweets": 3,
            "likes": 42,
            "views": 2416
        }
    },
    {
        "id": 1765291074376,
        "content": "💥Gate \"Cash-In Wednesday\" is here\nWednesday Exclusive · For Newcomers\nInvite 1 friend to sign up = Get $5 cash instantly!",
        "media": [
            {
                "type": "image",
                "url": "assets/media-28.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 12,
            "retweets": 17,
            "likes": 75,
            "views": 1195
        }
    },
    {
        "id": 1765291074271,
        "content": "Gate Initial Listing: $DL \n\n🔹 Trading Pair: $DL / $USDT\n🔹 Trading Starts: 12:00 PM, September 19th (UTC)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-29.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 13,
            "retweets": 19,
            "likes": 104,
            "views": 2332
        }
    },
    {
        "id": 1765291074169,
        "content": "Simple Earn Crazy Wednesday #6 is Live! \n\n$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT\n\nExtra 10% $USDT Rate-Up Voucher for participants",
        "media": [
            {
                "type": "image",
                "url": "assets/media-30.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 4,
            "retweets": 8,
            "likes": 95,
            "views": 1299
        }
    },
    {
        "id": 1765291074064,
        "content": "Rate cut expectations are heating up — Gate launches $BTC Bull vs Bear Prediction!\n\n$100,000 prize pool up for grabs, with up to $8,000 per winner.\n\nWhether you're new or pro, there's a prize for you:\n✅ 10 $USDT for your first correct prediction\n✅ $70,000 for top-ranked players",
        "media": [
            {
                "type": "image",
                "url": "assets/media-31.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 8,
            "retweets": 20,
            "likes": 38,
            "views": 1220
        }
    },
    {
        "id": 1765291073962,
        "content": "$GUSD dual earnings, with APR up to 19.05%\n\n1️⃣Mint $GUSD and earn 4.4% APR\n2️⃣Stake in #Launchpool for up to 14.65% APR, claim $BOT $AVNT $PORTALS free airdrops every hour",
        "media": [
            {
                "type": "image",
                "url": "assets/media-32.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 6,
            "retweets": 11,
            "likes": 62,
            "views": 967
        }
    },
    {
        "id": 1765291073859,
        "content": "Rate cut expectations are heating up — Gate launches $BTC Bull vs Bear Prediction!\n\n$100,000 prize pool up for grabs, with up to $8,000 per winner.\n\nWhether you're new or pro, there's a prize for you:\n✅ 10 $USDT for your first correct prediction\n✅ $70,000 for top-ranked players",
        "media": [
            {
                "type": "image",
                "url": "assets/media-33.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 9,
            "retweets": 23,
            "likes": 82,
            "views": 646
        }
    },
    {
        "id": 1765291073755,
        "content": "$GUSD dual earnings, with APR up to 19.05%\n\n1️⃣Mint $GUSD and earn 4.4% APR\n2️⃣Stake in #Launchpool for up to 14.65% APR, claim $BOT $AVNT $PORTALS free airdrops every hour",
        "media": [
            {
                "type": "image",
                "url": "assets/media-34.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 3,
            "retweets": 16,
            "likes": 78,
            "views": 2399
        }
    },
    {
        "id": 1765291073651,
        "content": "\"The Power of Now\" wrapped in Dubai 🌟\n\nCrypto, AI, art & Web3 all in one room — sparks were flying!\n\nNot just an event, it's a community moment!\n\nGate Group is where culture meets innovation.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-35.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 6,
            "retweets": 23,
            "likes": 61,
            "views": 723
        }
    },
    {
        "id": 1765291073548,
        "content": "\"The Power of Now\" wrapped in Dubai 🌟\n\nCrypto, AI, art & Web3 all in one room — sparks were flying!\n\nNot just an event, it's a community moment!\n\nGate Group is where culture meets innovation.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-36.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 8,
            "retweets": 22,
            "likes": 92,
            "views": 1091
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