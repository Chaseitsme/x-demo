// 推文数据存储
let tweetsData = [
    {
        "id": 1769673719587,
        "content": "🥂 Gate Exclusive VIP Dinner\n\nAn intimate dining experience with Gate's partners, friends, and VIPs — an evening to remember.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-1.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 1,
            "retweets": 22,
            "likes": 18,
            "views": 1966
        }
    },
    {
        "id": 1769673705343,
        "content": "🏎️ VIP F1 Experience\n\nFeel the adrenaline — Gate VIPs hit the trackside for the ultimate Singapore Grand Prix experience!\n\n📈 Sometimes the charts aren't testing your skills… they're testing your patience.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-2.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 9,
            "retweets": 23,
            "likes": 102,
            "views": 1661
        }
    },
    {
        "id": 1769673703477,
        "content": "$GUSD dual earnings, with APR up to 19.05%\n\n1️⃣Mint $GUSD and earn 4.4% APR\n2️⃣Stake in #Launchpool for up to 14.65% APR, claim $BOT $AVNT $PORTALS free airdrops every hour",
        "media": [
            {
                "type": "image",
                "url": "assets/media-3.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 1,
            "retweets": 20,
            "likes": 99,
            "views": 2336
        }
    },
    {
        "id": 1769673719691,
        "content": "💥Gate \"Cash-In Wednesday\" is here\nWednesday Exclusive · For Newcomers\nInvite 1 friend to sign up = Get $5 cash instantly!",
        "media": [
            {
                "type": "image",
                "url": "assets/media-4.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 13,
            "likes": 60,
            "views": 1324
        }
    },
    {
        "id": 1769673702753,
        "content": "💥Gate \"Cash-In Wednesday\" is here\nWednesday Exclusive · For Newcomers\nInvite 1 friend to sign up = Get $5 cash instantly!",
        "media": [
            {
                "type": "image",
                "url": "assets/media-5.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 12,
            "retweets": 24,
            "likes": 12,
            "views": 629
        }
    },
    {
        "id": 1769673702651,
        "content": "$GUSD dual earnings, with APR up to 19.05%\n\n1️⃣Mint $GUSD and earn 4.4% APR\n2️⃣Stake in #Launchpool for up to 14.65% APR, claim $BOT $AVNT $PORTALS free airdrops every hour",
        "media": [
            {
                "type": "image",
                "url": "assets/media-6.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 6,
            "retweets": 20,
            "likes": 76,
            "views": 736
        }
    },
    {
        "id": 1769673705445,
        "content": "Rate cut expectations are heating up — Gate launches $BTC Bull vs Bear Prediction!\n\n$100,000 prize pool up for grabs, with up to $8,000 per winner.\n\nWhether you're new or pro, there's a prize for you:\n✅ 10 $USDT for your first correct prediction\n✅ $70,000 for top-ranked players",
        "media": [
            {
                "type": "image",
                "url": "assets/media-7.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 11,
            "retweets": 6,
            "likes": 31,
            "views": 1335
        }
    },
    {
        "id": 1769673703066,
        "content": "🏎️ VIP F1 Experience\n\nFeel the adrenaline — Gate VIPs hit the trackside for the ultimate Singapore Grand Prix experience!\n\n📈 Sometimes the charts aren't testing your skills… they're testing your patience.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-8.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 7,
            "retweets": 16,
            "likes": 59,
            "views": 1572
        }
    },
    {
        "id": 1769673705238,
        "content": "Gate is taking over @Token2049 week — back-to-back, non-stop vibes!\n\n🎶 Token of Love Music Festival (Oct 1)  \n🏁 Gate Singapore Grand Prix Reception (Oct 2)  \n🥂 Gate VIP Dinner (Oct 2)  \n🏎️ VIP F1 Experience (Oct 3–5)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-9.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 2,
            "retweets": 24,
            "likes": 64,
            "views": 961
        }
    },
    {
        "id": 1769673705135,
        "content": "$GUSD dual earnings, with APR up to 19.05%\n\n1️⃣Mint $GUSD and earn 4.4% APR\n2️⃣Stake in #Launchpool for up to 14.65% APR, claim $BOT $AVNT $PORTALS free airdrops every hour",
        "media": [
            {
                "type": "image",
                "url": "assets/media-10.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 8,
            "retweets": 16,
            "likes": 61,
            "views": 1885
        }
    },
    {
        "id": 1769673702346,
        "content": "Simple Earn Crazy Wednesday #6 is Live! \n\n$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT\n\nExtra 10% $USDT Rate-Up Voucher for participants",
        "media": [
            {
                "type": "image",
                "url": "assets/media-11.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 6,
            "retweets": 20,
            "likes": 64,
            "views": 865
        }
    },
    {
        "id": 1769673705033,
        "content": "Gate is taking over @Token2049 week — back-to-back, non-stop vibes!\n\n🎶 Token of Love Music Festival (Oct 1)  \n🏁 Gate Singapore Grand Prix Reception (Oct 2)  \n🥂 Gate VIP Dinner (Oct 2)  \n🏎️ VIP F1 Experience (Oct 3–5)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-12.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 12,
            "retweets": 13,
            "likes": 97,
            "views": 2125
        }
    },
    {
        "id": 1769673704932,
        "content": "Gate is taking over @Token2049 week — back-to-back, non-stop vibes!\n\n🎶 Token of Love Music Festival (Oct 1)  \n🏁 Gate Singapore Grand Prix Reception (Oct 2)  \n🥂 Gate VIP Dinner (Oct 2)  \n🏎️ VIP F1 Experience (Oct 3–5)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-13.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 2,
            "retweets": 3,
            "likes": 59,
            "views": 2055
        }
    },
    {
        "id": 1769673704827,
        "content": "Simple Earn Crazy Wednesday #6 is Live! \n\n$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT\n\nExtra 10% $USDT Rate-Up Voucher for participants",
        "media": [
            {
                "type": "image",
                "url": "assets/media-14.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 8,
            "retweets": 1,
            "likes": 23,
            "views": 2137
        }
    },
    {
        "id": 1769673704724,
        "content": "Rate cut expectations are heating up — Gate launches $BTC Bull vs Bear Prediction!\n\n$100,000 prize pool up for grabs, with up to $8,000 per winner.\n\nWhether you're new or pro, there's a prize for you:\n✅ 10 $USDT for your first correct prediction\n✅ $70,000 for top-ranked players",
        "media": [
            {
                "type": "image",
                "url": "assets/media-15.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 4,
            "retweets": 20,
            "likes": 64,
            "views": 969
        }
    },
    {
        "id": 1769673704620,
        "content": "💥Gate \"Cash-In Wednesday\" is here\nWednesday Exclusive · For Newcomers\nInvite 1 friend to sign up = Get $5 cash instantly!",
        "media": [
            {
                "type": "image",
                "url": "assets/media-16.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 3,
            "retweets": 13,
            "likes": 21,
            "views": 1133
        }
    },
    {
        "id": 1769673704516,
        "content": "Simple Earn Crazy Wednesday #6 is Live! \n\n$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT\n\nExtra 10% $USDT Rate-Up Voucher for participants",
        "media": [
            {
                "type": "image",
                "url": "assets/media-17.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 10,
            "retweets": 2,
            "likes": 97,
            "views": 1246
        }
    },
    {
        "id": 1769673704414,
        "content": "Gate is taking over @Token2049 week — back-to-back, non-stop vibes!\n\n🎶 Token of Love Music Festival (Oct 1)  \n🏁 Gate Singapore Grand Prix Reception (Oct 2)  \n🥂 Gate VIP Dinner (Oct 2)  \n🏎️ VIP F1 Experience (Oct 3–5)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-18.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 12,
            "retweets": 7,
            "likes": 91,
            "views": 527
        }
    },
    {
        "id": 1769673704308,
        "content": "Simple Earn Crazy Wednesday #6 is Live! \n\n$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT\n\nExtra 10% $USDT Rate-Up Voucher for participants",
        "media": [
            {
                "type": "image",
                "url": "assets/media-19.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 3,
            "retweets": 20,
            "likes": 69,
            "views": 1099
        }
    },
    {
        "id": 1769673705651,
        "content": "Gate is taking over @Token2049 week — back-to-back, non-stop vibes!\n\n🎶 Token of Love Music Festival (Oct 1)  \n🏁 Gate Singapore Grand Prix Reception (Oct 2)  \n🥂 Gate VIP Dinner (Oct 2)  \n🏎️ VIP F1 Experience (Oct 3–5)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-20.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 2,
            "retweets": 3,
            "likes": 17,
            "views": 2445
        }
    },
    {
        "id": 1769673704206,
        "content": "$GUSD dual earnings, with APR up to 19.05%\n\n1️⃣Mint $GUSD and earn 4.4% APR\n2️⃣Stake in #Launchpool for up to 14.65% APR, claim $BOT $AVNT $PORTALS free airdrops every hour",
        "media": [
            {
                "type": "image",
                "url": "assets/media-21.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 2,
            "retweets": 3,
            "likes": 23,
            "views": 1591
        }
    },
    {
        "id": 1769673704101,
        "content": "\"The Power of Now\" wrapped in Dubai 🌟\n\nCrypto, AI, art & Web3 all in one room — sparks were flying!\n\nNot just an event, it's a community moment!\n\nGate Group is where culture meets innovation.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-22.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 4,
            "retweets": 6,
            "likes": 16,
            "views": 1364
        }
    },
    {
        "id": 1769673703993,
        "content": "🏎️ VIP F1 Experience\n\nFeel the adrenaline — Gate VIPs hit the trackside for the ultimate Singapore Grand Prix experience!\n\n📈 Sometimes the charts aren't testing your skills… they're testing your patience.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-23.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 10,
            "retweets": 18,
            "likes": 104,
            "views": 773
        }
    },
    {
        "id": 1769673703891,
        "content": "\"The Power of Now\" wrapped in Dubai 🌟\n\nCrypto, AI, art & Web3 all in one room — sparks were flying!\n\nNot just an event, it's a community moment!\n\nGate Group is where culture meets innovation.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-24.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 7,
            "retweets": 17,
            "likes": 61,
            "views": 2136
        }
    },
    {
        "id": 1769673703790,
        "content": "Rate cut expectations are heating up — Gate launches $BTC Bull vs Bear Prediction!\n\n$100,000 prize pool up for grabs, with up to $8,000 per winner.\n\nWhether you're new or pro, there's a prize for you:\n✅ 10 $USDT for your first correct prediction\n✅ $70,000 for top-ranked players",
        "media": [
            {
                "type": "image",
                "url": "assets/media-25.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 7,
            "retweets": 3,
            "likes": 83,
            "views": 953
        }
    },
    {
        "id": 1769673703686,
        "content": "Gate is taking over @Token2049 week — back-to-back, non-stop vibes!\n\n🎶 Token of Love Music Festival (Oct 1)  \n🏁 Gate Singapore Grand Prix Reception (Oct 2)  \n🥂 Gate VIP Dinner (Oct 2)  \n🏎️ VIP F1 Experience (Oct 3–5)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-26.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 10,
            "retweets": 11,
            "likes": 15,
            "views": 2433
        }
    },
    {
        "id": 1769673703583,
        "content": "🏎️ VIP F1 Experience\n\nFeel the adrenaline — Gate VIPs hit the trackside for the ultimate Singapore Grand Prix experience!\n\n📈 Sometimes the charts aren't testing your skills… they're testing your patience.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-27.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 1,
            "retweets": 10,
            "likes": 41,
            "views": 2183
        }
    },
    {
        "id": 1769673705549,
        "content": "$GUSD dual earnings, with APR up to 19.05%\n\n1️⃣Mint $GUSD and earn 4.4% APR\n2️⃣Stake in #Launchpool for up to 14.65% APR, claim $BOT $AVNT $PORTALS free airdrops every hour",
        "media": [
            {
                "type": "image",
                "url": "assets/media-28.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 13,
            "retweets": 24,
            "likes": 68,
            "views": 1679
        }
    },
    {
        "id": 1769673703374,
        "content": "Simple Earn Crazy Wednesday #6 is Live! \n\n$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT\n\nExtra 10% $USDT Rate-Up Voucher for participants",
        "media": [
            {
                "type": "image",
                "url": "assets/media-29.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 6,
            "retweets": 8,
            "likes": 91,
            "views": 1391
        }
    },
    {
        "id": 1769673703271,
        "content": "🏎️ VIP F1 Experience\n\nFeel the adrenaline — Gate VIPs hit the trackside for the ultimate Singapore Grand Prix experience!\n\n📈 Sometimes the charts aren't testing your skills… they're testing your patience.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-30.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 13,
            "retweets": 8,
            "likes": 59,
            "views": 636
        }
    },
    {
        "id": 1769673703168,
        "content": "Gate Initial Listing: $DL \n\n🔹 Trading Pair: $DL / $USDT\n🔹 Trading Starts: 12:00 PM, September 19th (UTC)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-31.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 9,
            "retweets": 23,
            "likes": 108,
            "views": 766
        }
    },
    {
        "id": 1769673702964,
        "content": "🏎️ VIP F1 Experience\n\nFeel the adrenaline — Gate VIPs hit the trackside for the ultimate Singapore Grand Prix experience!\n\n📈 Sometimes the charts aren't testing your skills… they're testing your patience.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-32.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 14,
            "retweets": 12,
            "likes": 97,
            "views": 2385
        }
    },
    {
        "id": 1769673702859,
        "content": "Gate Initial Listing: $DL \n\n🔹 Trading Pair: $DL / $USDT\n🔹 Trading Starts: 12:00 PM, September 19th (UTC)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-33.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 7,
            "retweets": 18,
            "likes": 19,
            "views": 683
        }
    },
    {
        "id": 1769673702549,
        "content": "Gate Initial Listing: $DL \n\n🔹 Trading Pair: $DL / $USDT\n🔹 Trading Starts: 12:00 PM, September 19th (UTC)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-34.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 14,
            "retweets": 10,
            "likes": 71,
            "views": 1370
        }
    },
    {
        "id": 1769673702448,
        "content": "💥Gate \"Cash-In Wednesday\" is here\nWednesday Exclusive · For Newcomers\nInvite 1 friend to sign up = Get $5 cash instantly!",
        "media": [
            {
                "type": "image",
                "url": "assets/media-35.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 6,
            "likes": 83,
            "views": 651
        }
    },
    {
        "id": 1769673702243,
        "content": "\"The Power of Now\" wrapped in Dubai 🌟\n\nCrypto, AI, art & Web3 all in one room — sparks were flying!\n\nNot just an event, it's a community moment!\n\nGate Group is where culture meets innovation.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-36.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 3,
            "retweets": 21,
            "likes": 51,
            "views": 1398
        }
    },
    {
        "id": 1769673705753,
        "content": "Simple Earn Crazy Wednesday #6 is Live! \n\n$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT\n\nExtra 10% $USDT Rate-Up Voucher for participants",
        "media": [
            {
                "type": "image",
                "url": "assets/media-37.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 2,
            "retweets": 8,
            "likes": 43,
            "views": 1395
        }
    },
    {
        "id": 1769673702141,
        "content": "🥂 Gate Exclusive VIP Dinner\n\nAn intimate dining experience with Gate's partners, friends, and VIPs — an evening to remember.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-38.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 6,
            "retweets": 7,
            "likes": 68,
            "views": 1986
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