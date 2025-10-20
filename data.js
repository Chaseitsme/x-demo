// 推文数据存储
let tweetsData = [
    {
        "id": 1760436203267,
        "content": "Gate is taking over @Token2049 week — back-to-back, non-stop vibes!\n\n🎶 Token of Love Music Festival (Oct 1)  \n🏁 Gate Singapore Grand Prix Reception (Oct 2)  \n🥂 Gate VIP Dinner (Oct 2)  \n🏎️ VIP F1 Experience (Oct 3–5)",
        "media": [
            {
                "type": "video",
                "url": "assets/media-1.mp4"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 8,
            "retweets": 17,
            "likes": 43,
            "views": 2052
        }
    },
    {
        "id": 1760436203163,
        "content": "Simple Earn Crazy Wednesday #6 is Live! \n\n$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT\n\nExtra 10% $USDT Rate-Up Voucher for participants",
        "media": [
            {
                "type": "video",
                "url": "assets/media-2.mp4"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 14,
            "retweets": 12,
            "likes": 18,
            "views": 1778
        }
    },
    {
        "id": 1760436203054,
        "content": "💥Gate \"Cash-In Wednesday\" is here\nWednesday Exclusive · For Newcomers\nInvite 1 friend to sign up = Get $5 cash instantly!",
        "media": [
            {
                "type": "video",
                "url": "assets/media-3.mp4"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 9,
            "retweets": 15,
            "likes": 75,
            "views": 654
        }
    },
    {
        "id": 1760436202948,
        "content": "Gate is taking over @Token2049 week — back-to-back, non-stop vibes!\n\n🎶 Token of Love Music Festival (Oct 1)  \n🏁 Gate Singapore Grand Prix Reception (Oct 2)  \n🥂 Gate VIP Dinner (Oct 2)  \n🏎️ VIP F1 Experience (Oct 3–5)",
        "media": [
            {
                "type": "video",
                "url": "assets/media-4.mp4"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 10,
            "retweets": 3,
            "likes": 63,
            "views": 2003
        }
    },
    {
        "id": 1760436202729,
        "content": "\"The Power of Now\" wrapped in Dubai 🌟\n\nCrypto, AI, art & Web3 all in one room — sparks were flying!\n\nNot just an event, it's a community moment!\n\nGate Group is where culture meets innovation.",
        "media": [
            {
                "type": "video",
                "url": "assets/media-5.mp4"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 1,
            "retweets": 1,
            "likes": 62,
            "views": 2054
        }
    },
    {
        "id": 1760436202624,
        "content": "🥂 Gate Exclusive VIP Dinner\n\nAn intimate dining experience with Gate's partners, friends, and VIPs — an evening to remember.",
        "media": [
            {
                "type": "video",
                "url": "assets/media-6.mp4"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 1,
            "retweets": 15,
            "likes": 90,
            "views": 2397
        }
    },
    {
        "id": 1760436202516,
        "content": "💥Gate \"Cash-In Wednesday\" is here\nWednesday Exclusive · For Newcomers\nInvite 1 friend to sign up = Get $5 cash instantly!",
        "media": [
            {
                "type": "video",
                "url": "assets/media-7.mp4"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 2,
            "retweets": 10,
            "likes": 51,
            "views": 2122
        }
    },
    {
        "id": 1760436202407,
        "content": "$GUSD dual earnings, with APR up to 19.05%\n\n1️⃣Mint $GUSD and earn 4.4% APR\n2️⃣Stake in #Launchpool for up to 14.65% APR, claim $BOT $AVNT $PORTALS free airdrops every hour",
        "media": [
            {
                "type": "video",
                "url": "assets/media-8.mp4"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 14,
            "retweets": 11,
            "likes": 48,
            "views": 814
        }
    },
    {
        "id": 1760436202844,
        "content": "🏎️ VIP F1 Experience\n\nFeel the adrenaline — Gate VIPs hit the trackside for the ultimate Singapore Grand Prix experience!\n\n📈 Sometimes the charts aren't testing your skills… they're testing your patience.",
        "media": [
            {
                "type": "video",
                "url": "assets/media-9.mp4"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 14,
            "retweets": 9,
            "likes": 45,
            "views": 558
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