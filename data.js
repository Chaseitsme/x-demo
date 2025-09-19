// 推文数据存储
let tweetsData = [
    {
        "id": 1758279887216,
        "content": "Gate is taking over @Token2049 week — back-to-back, non-stop vibes!\n\n🎶 Token of Love Music Festival (Oct 1)  \n🏁 Gate Singapore Grand Prix Reception (Oct 2)  \n🥂 Gate VIP Dinner (Oct 2)  \n🏎️ VIP F1 Experience (Oct 3–5)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-1.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 58
        }
    },
    {
        "id": 1758279887109,
        "content": "Simple Earn Crazy Wednesday #6 is Live! \n\n$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT\n\nExtra 10% $USDT Rate-Up Voucher for participants",
        "media": [
            {
                "type": "image",
                "url": "assets/media-2.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 357
        }
    },
    {
        "id": 1758279887004,
        "content": "Gate Initial Listing: $DL \n\n🔹 Trading Pair: $DL / $USDT\n🔹 Trading Starts: 12:00 PM, September 19th (UTC)",
        "media": [
            {
                "type": "video",
                "url": "assets/media-3.mp4"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 101
        }
    },
    {
        "id": 1758279886882,
        "content": "Simple Earn Crazy Wednesday #6 is Live! \n\n$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT\n\nExtra 10% $USDT Rate-Up Voucher for participants",
        "media": [
            {
                "type": "image",
                "url": "assets/media-4.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 915
        }
    },
    {
        "id": 1758279886773,
        "content": "Rate cut expectations are heating up — Gate launches $BTC Bull vs Bear Prediction!\n\n$100,000 prize pool up for grabs, with up to $8,000 per winner.\n\nWhether you're new or pro, there's a prize for you:\n✅ 10 $USDT for your first correct prediction\n✅ $70,000 for top-ranked players",
        "media": [
            {
                "type": "image",
                "url": "assets/media-5.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 556
        }
    },
    {
        "id": 1758279886667,
        "content": "$GUSD dual earnings, with APR up to 19.05%\n\n1️⃣Mint $GUSD and earn 4.4% APR\n2️⃣Stake in #Launchpool for up to 14.65% APR, claim $BOT $AVNT $PORTALS free airdrops every hour",
        "media": [
            {
                "type": "image",
                "url": "assets/media-6.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 535
        }
    },
    {
        "id": 1758279882684,
        "content": "🏎️ VIP F1 Experience\n\nFeel the adrenaline — Gate VIPs hit the trackside for the ultimate Singapore Grand Prix experience!\n\n📈 Sometimes the charts aren't testing your skills… they're testing your patience.",
        "media": [
            {
                "type": "video",
                "url": "assets/media-7.mp4"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 715
        }
    },
    {
        "id": 1758279886561,
        "content": "🥂 Gate Exclusive VIP Dinner\n\nAn intimate dining experience with Gate's partners, friends, and VIPs — an evening to remember.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-8.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 415
        }
    },
    {
        "id": 1758279883016,
        "content": "💥Gate \"Cash-In Wednesday\" is here\nWednesday Exclusive · For Newcomers\nInvite 1 friend to sign up = Get $5 cash instantly!",
        "media": [
            {
                "type": "video",
                "url": "assets/media-9.mp4"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 232
        }
    },
    {
        "id": 1758279886457,
        "content": "Gate is taking over @Token2049 week — back-to-back, non-stop vibes!\n\n🎶 Token of Love Music Festival (Oct 1)  \n🏁 Gate Singapore Grand Prix Reception (Oct 2)  \n🥂 Gate VIP Dinner (Oct 2)  \n🏎️ VIP F1 Experience (Oct 3–5)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-10.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 876
        }
    },
    {
        "id": 1758279886353,
        "content": "\"The Power of Now\" wrapped in Dubai 🌟\n\nCrypto, AI, art & Web3 all in one room — sparks were flying!\n\nNot just an event, it's a community moment!\n\nGate Group is where culture meets innovation.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-11.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 228
        }
    },
    {
        "id": 1758279886251,
        "content": "Gate Initial Listing: $DL \n\n🔹 Trading Pair: $DL / $USDT\n🔹 Trading Starts: 12:00 PM, September 19th (UTC)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-12.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 723
        }
    },
    {
        "id": 1758279886146,
        "content": "\"The Power of Now\" wrapped in Dubai 🌟\n\nCrypto, AI, art & Web3 all in one room — sparks were flying!\n\nNot just an event, it's a community moment!\n\nGate Group is where culture meets innovation.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-13.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 273
        }
    },
    {
        "id": 1758279882907,
        "content": "🥂 Gate Exclusive VIP Dinner\n\nAn intimate dining experience with Gate's partners, friends, and VIPs — an evening to remember.",
        "media": [
            {
                "type": "video",
                "url": "assets/media-14.mp4"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 165
        }
    },
    {
        "id": 1758279886042,
        "content": "$GUSD dual earnings, with APR up to 19.05%\n\n1️⃣Mint $GUSD and earn 4.4% APR\n2️⃣Stake in #Launchpool for up to 14.65% APR, claim $BOT $AVNT $PORTALS free airdrops every hour",
        "media": [
            {
                "type": "image",
                "url": "assets/media-15.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 585
        }
    },
    {
        "id": 1758279885938,
        "content": "Rate cut expectations are heating up — Gate launches $BTC Bull vs Bear Prediction!\n\n$100,000 prize pool up for grabs, with up to $8,000 per winner.\n\nWhether you're new or pro, there's a prize for you:\n✅ 10 $USDT for your first correct prediction\n✅ $70,000 for top-ranked players",
        "media": [
            {
                "type": "image",
                "url": "assets/media-16.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 93
        }
    },
    {
        "id": 1758279885832,
        "content": "🥂 Gate Exclusive VIP Dinner\n\nAn intimate dining experience with Gate's partners, friends, and VIPs — an evening to remember.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-17.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 139
        }
    },
    {
        "id": 1758279885729,
        "content": "🥂 Gate Exclusive VIP Dinner\n\nAn intimate dining experience with Gate's partners, friends, and VIPs — an evening to remember.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-18.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 245
        }
    },
    {
        "id": 1758279885626,
        "content": "🏎️ VIP F1 Experience\n\nFeel the adrenaline — Gate VIPs hit the trackside for the ultimate Singapore Grand Prix experience!\n\n📈 Sometimes the charts aren't testing your skills… they're testing your patience.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-19.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 731
        }
    },
    {
        "id": 1758279885523,
        "content": "Simple Earn Crazy Wednesday #6 is Live! \n\n$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT\n\nExtra 10% $USDT Rate-Up Voucher for participants",
        "media": [
            {
                "type": "image",
                "url": "assets/media-20.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 633
        }
    },
    {
        "id": 1758279883126,
        "content": "Gate Initial Listing: $DL \n\n🔹 Trading Pair: $DL / $USDT\n🔹 Trading Starts: 12:00 PM, September 19th (UTC)",
        "media": [
            {
                "type": "video",
                "url": "assets/media-21.mp4"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 288
        }
    },
    {
        "id": 1758279885419,
        "content": "🥂 Gate Exclusive VIP Dinner\n\nAn intimate dining experience with Gate's partners, friends, and VIPs — an evening to remember.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-22.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 264
        }
    },
    {
        "id": 1758279885316,
        "content": "🏎️ VIP F1 Experience\n\nFeel the adrenaline — Gate VIPs hit the trackside for the ultimate Singapore Grand Prix experience!\n\n📈 Sometimes the charts aren't testing your skills… they're testing your patience.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-23.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 765
        }
    },
    {
        "id": 1758279885210,
        "content": "🥂 Gate Exclusive VIP Dinner\n\nAn intimate dining experience with Gate's partners, friends, and VIPs — an evening to remember.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-24.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 378
        }
    },
    {
        "id": 1758279885106,
        "content": "🏎️ VIP F1 Experience\n\nFeel the adrenaline — Gate VIPs hit the trackside for the ultimate Singapore Grand Prix experience!\n\n📈 Sometimes the charts aren't testing your skills… they're testing your patience.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-25.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 371
        }
    },
    {
        "id": 1758279885000,
        "content": "$GUSD dual earnings, with APR up to 19.05%\n\n1️⃣Mint $GUSD and earn 4.4% APR\n2️⃣Stake in #Launchpool for up to 14.65% APR, claim $BOT $AVNT $PORTALS free airdrops every hour",
        "media": [
            {
                "type": "image",
                "url": "assets/media-26.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 480
        }
    },
    {
        "id": 1758279884896,
        "content": "🥂 Gate Exclusive VIP Dinner\n\nAn intimate dining experience with Gate's partners, friends, and VIPs — an evening to remember.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-27.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 342
        }
    },
    {
        "id": 1758279884793,
        "content": "$GUSD dual earnings, with APR up to 19.05%\n\n1️⃣Mint $GUSD and earn 4.4% APR\n2️⃣Stake in #Launchpool for up to 14.65% APR, claim $BOT $AVNT $PORTALS free airdrops every hour",
        "media": [
            {
                "type": "image",
                "url": "assets/media-28.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 456
        }
    },
    {
        "id": 1758279884689,
        "content": "🏎️ VIP F1 Experience\n\nFeel the adrenaline — Gate VIPs hit the trackside for the ultimate Singapore Grand Prix experience!\n\n📈 Sometimes the charts aren't testing your skills… they're testing your patience.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-29.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 158
        }
    },
    {
        "id": 1758279884584,
        "content": "\"The Power of Now\" wrapped in Dubai 🌟\n\nCrypto, AI, art & Web3 all in one room — sparks were flying!\n\nNot just an event, it's a community moment!\n\nGate Group is where culture meets innovation.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-30.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 116
        }
    },
    {
        "id": 1758279884482,
        "content": "Simple Earn Crazy Wednesday #6 is Live! \n\n$USDT 3-Day Fixed Term with 16% APR + dual rewards in $USDT & $AVNT\n\nExtra 10% $USDT Rate-Up Voucher for participants",
        "media": [
            {
                "type": "image",
                "url": "assets/media-31.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 365
        }
    },
    {
        "id": 1758279884377,
        "content": "Gate is taking over @Token2049 week — back-to-back, non-stop vibes!\n\n🎶 Token of Love Music Festival (Oct 1)  \n🏁 Gate Singapore Grand Prix Reception (Oct 2)  \n🥂 Gate VIP Dinner (Oct 2)  \n🏎️ VIP F1 Experience (Oct 3–5)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-32.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 658
        }
    },
    {
        "id": 1758279884266,
        "content": "Gate Initial Listing: $DL \n\n🔹 Trading Pair: $DL / $USDT\n🔹 Trading Starts: 12:00 PM, September 19th (UTC)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-33.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 1
        }
    },
    {
        "id": 1758279884161,
        "content": "Rate cut expectations are heating up — Gate launches $BTC Bull vs Bear Prediction!\n\n$100,000 prize pool up for grabs, with up to $8,000 per winner.\n\nWhether you're new or pro, there's a prize for you:\n✅ 10 $USDT for your first correct prediction\n✅ $70,000 for top-ranked players",
        "media": [
            {
                "type": "image",
                "url": "assets/media-34.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 620
        }
    },
    {
        "id": 1758279884056,
        "content": "🏎️ VIP F1 Experience\n\nFeel the adrenaline — Gate VIPs hit the trackside for the ultimate Singapore Grand Prix experience!\n\n📈 Sometimes the charts aren't testing your skills… they're testing your patience.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-35.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 576
        }
    },
    {
        "id": 1758279883953,
        "content": "🥂 Gate Exclusive VIP Dinner\n\nAn intimate dining experience with Gate's partners, friends, and VIPs — an evening to remember.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-36.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 12
        }
    },
    {
        "id": 1758279883850,
        "content": "\"The Power of Now\" wrapped in Dubai 🌟\n\nCrypto, AI, art & Web3 all in one room — sparks were flying!\n\nNot just an event, it's a community moment!\n\nGate Group is where culture meets innovation.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-37.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 732
        }
    },
    {
        "id": 1758279883748,
        "content": "Gate is taking over @Token2049 week — back-to-back, non-stop vibes!\n\n🎶 Token of Love Music Festival (Oct 1)  \n🏁 Gate Singapore Grand Prix Reception (Oct 2)  \n🥂 Gate VIP Dinner (Oct 2)  \n🏎️ VIP F1 Experience (Oct 3–5)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-38.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 826
        }
    },
    {
        "id": 1758279882795,
        "content": "Rate cut expectations are heating up — Gate launches $BTC Bull vs Bear Prediction!\n\n$100,000 prize pool up for grabs, with up to $8,000 per winner.\n\nWhether you're new or pro, there's a prize for you:\n✅ 10 $USDT for your first correct prediction\n✅ $70,000 for top-ranked players",
        "media": [
            {
                "type": "video",
                "url": "assets/media-39.mp4"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 350
        }
    },
    {
        "id": 1758279883643,
        "content": "$GUSD dual earnings, with APR up to 19.05%\n\n1️⃣Mint $GUSD and earn 4.4% APR\n2️⃣Stake in #Launchpool for up to 14.65% APR, claim $BOT $AVNT $PORTALS free airdrops every hour",
        "media": [
            {
                "type": "image",
                "url": "assets/media-40.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 452
        }
    },
    {
        "id": 1758279883541,
        "content": "🏎️ VIP F1 Experience\n\nFeel the adrenaline — Gate VIPs hit the trackside for the ultimate Singapore Grand Prix experience!\n\n📈 Sometimes the charts aren't testing your skills… they're testing your patience.",
        "media": [
            {
                "type": "image",
                "url": "assets/media-41.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 916
        }
    },
    {
        "id": 1758279883437,
        "content": "💥Gate \"Cash-In Wednesday\" is here\nWednesday Exclusive · For Newcomers\nInvite 1 friend to sign up = Get $5 cash instantly!",
        "media": [
            {
                "type": "image",
                "url": "assets/media-42.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 863
        }
    },
    {
        "id": 1758279883334,
        "content": "Gate Initial Listing: $DL \n\n🔹 Trading Pair: $DL / $USDT\n🔹 Trading Starts: 12:00 PM, September 19th (UTC)",
        "media": [
            {
                "type": "image",
                "url": "assets/media-43.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 185
        }
    },
    {
        "id": 1758279883231,
        "content": "💥Gate \"Cash-In Wednesday\" is here\nWednesday Exclusive · For Newcomers\nInvite 1 friend to sign up = Get $5 cash instantly!",
        "media": [
            {
                "type": "image",
                "url": "assets/media-44.png"
            }
        ],
        "time": "刚刚",
        "stats": {
            "comments": 0,
            "retweets": 0,
            "likes": 0,
            "views": 742
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
            comments: 0,
            retweets: 0,
            likes: 0,
            views: Math.floor(Math.random() * 1000)
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
        const randomIncrease = Math.floor(Math.random() * 10) + 1;
        switch (type) {
            case 'like':
                tweet.stats.likes += Math.floor(Math.random() * 20) + 5;
                break;
            case 'retweet':
                tweet.stats.retweets += randomIncrease;
                break;
            case 'comment':
                tweet.stats.comments += randomIncrease;
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