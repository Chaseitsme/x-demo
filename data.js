// 推文数据存储
let tweetsData = [
    {
        "id": 1760582815563,
        "content": "Gate Initial Listing: $DL \n\n🔹 Trading Pair: $DL / $USDT\n🔹 Trading Starts: 12:00 PM, September 19th (UTC)",
        "media": [
            {
                "type": "video",
                "url": "assets/media-1.mp4"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 9,
            "retweets": 10,
            "likes": 18,
            "views": 1336
        }
    },
    {
        "id": 1760582815319,
        "content": "🥂 Gate Exclusive VIP Dinner\n\nAn intimate dining experience with Gate's partners, friends, and VIPs — an evening to remember.",
        "media": [
            {
                "type": "video",
                "url": "assets/media-2.mp4"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 2,
            "retweets": 16,
            "likes": 38,
            "views": 2487
        }
    },
    {
        "id": 1760582815199,
        "content": "💥Gate \"Cash-In Wednesday\" is here\nWednesday Exclusive · For Newcomers\nInvite 1 friend to sign up = Get $5 cash instantly!",
        "media": [
            {
                "type": "video",
                "url": "assets/media-3.mp4"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 12,
            "retweets": 0,
            "likes": 45,
            "views": 544
        }
    },
    {
        "id": 1760582815093,
        "content": "Gate Initial Listing: $DL \n\n🔹 Trading Pair: $DL / $USDT\n🔹 Trading Starts: 12:00 PM, September 19th (UTC)",
        "media": [
            {
                "type": "video",
                "url": "assets/media-4.mp4"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 2,
            "retweets": 14,
            "likes": 89,
            "views": 1947
        }
    },
    {
        "id": 1760582815428,
        "content": "Rate cut expectations are heating up — Gate launches $BTC Bull vs Bear Prediction!\n\n$100,000 prize pool up for grabs, with up to $8,000 per winner.\n\nWhether you're new or pro, there's a prize for you:\n✅ 10 $USDT for your first correct prediction\n✅ $70,000 for top-ranked players",
        "media": [
            {
                "type": "video",
                "url": "assets/media-5.mp4"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 9,
            "retweets": 20,
            "likes": 25,
            "views": 814
        }
    },
    {
        "id": 1760582814881,
        "content": "Gate Initial Listing: $DL \n\n🔹 Trading Pair: $DL / $USDT\n🔹 Trading Starts: 12:00 PM, September 19th (UTC)",
        "media": [
            {
                "type": "video",
                "url": "assets/media-6.mp4"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 14,
            "retweets": 1,
            "likes": 75,
            "views": 1927
        }
    },
    {
        "id": 1760582814776,
        "content": "\"The Power of Now\" wrapped in Dubai 🌟\n\nCrypto, AI, art & Web3 all in one room — sparks were flying!\n\nNot just an event, it's a community moment!\n\nGate Group is where culture meets innovation.",
        "media": [
            {
                "type": "video",
                "url": "assets/media-7.mp4"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 1,
            "retweets": 19,
            "likes": 58,
            "views": 1900
        }
    },
    {
        "id": 1760582814986,
        "content": "Rate cut expectations are heating up — Gate launches $BTC Bull vs Bear Prediction!\n\n$100,000 prize pool up for grabs, with up to $8,000 per winner.\n\nWhether you're new or pro, there's a prize for you:\n✅ 10 $USDT for your first correct prediction\n✅ $70,000 for top-ranked players",
        "media": [
            {
                "type": "video",
                "url": "assets/media-8.mp4"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 6,
            "retweets": 11,
            "likes": 77,
            "views": 1960
        }
    }
];

// 全局设置
let globalSettings = {
    "author": "Gate Design",
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