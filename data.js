// 推文数据存储 - 初始状态为空
let tweetsData = [];

// 全局设置
let globalSettings = {
    author: 'Gate交易所',
    handle: '@gate_io',
    avatar: null
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