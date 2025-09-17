// 全局变量
let currentTheme = 'light';
let uploadedFiles = [];
// 全局设置现在从 data.js 获取

// DOM 元素
const body = document.body;
const tweetsContainer = document.getElementById('tweets-container');
const modalOverlay = document.getElementById('modal-overlay');
const mediaOverlay = document.getElementById('media-overlay');
const postButton = document.getElementById('post-button');
const closeModal = document.getElementById('close-modal');
const themeToggle = document.getElementById('theme-toggle');
const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
const addTweetButton = document.getElementById('add-tweet');
const fileInput = document.getElementById('file-input');
const uploadArea = document.getElementById('media-upload');
const mediaPreview = document.getElementById('media-preview');
const sortableTweets = document.getElementById('sortable-tweets');
const globalAuthor = document.getElementById('global-author');
const globalHandle = document.getElementById('global-handle');
const avatarInput = document.getElementById('avatar-input');
const avatarPreview = document.getElementById('avatar-preview');
const saveSettingsButton = document.getElementById('save-settings');
const exportButton = document.getElementById('export-data');
const randomTextSwitch = document.getElementById('random-text-switch');
const tweetContentTextarea = document.getElementById('tweet-content');

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    loadTheme();
    initializeGlobalSettings();
    renderTweets();
    renderSortableTweets();
    setupEventListeners();
});

// 设置事件监听器
function setupEventListeners() {
    // 主题切换
    themeToggle.addEventListener('click', toggleTheme);
    mobileThemeToggle.addEventListener('click', toggleTheme);
    
    // 弹窗控制
    postButton.addEventListener('click', openModal);
    closeModal.addEventListener('click', closeModalHandler);
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModalHandler();
        }
    });
    
    // 媒体预览弹窗
    mediaOverlay.addEventListener('click', closeMediaPreview);
    
    // 添加推文
    addTweetButton.addEventListener('click', handleAddTweet);
    
    // 文件上传
    fileInput.addEventListener('change', handleFileSelect);
    uploadArea.addEventListener('click', function() {
        fileInput.click();
    });
    
    // 拖拽上传
    uploadArea.addEventListener('dragover', function(e) {
        e.preventDefault();
        uploadArea.style.borderColor = 'var(--accent-color)';
    });
    
    uploadArea.addEventListener('dragleave', function(e) {
        e.preventDefault();
        uploadArea.style.borderColor = 'var(--border-color)';
    });
    
    uploadArea.addEventListener('drop', function(e) {
        e.preventDefault();
        uploadArea.style.borderColor = 'var(--border-color)';
        const files = Array.from(e.dataTransfer.files);
        handleFiles(files);
    });
    
    // 全局设置
    saveSettingsButton.addEventListener('click', handleSaveSettings);
    avatarInput.addEventListener('change', handleAvatarUpload);
    
    // 数据管理
    exportButton.addEventListener('click', handleExportData);
    
    // 随机文字开关
    randomTextSwitch.addEventListener('change', handleRandomTextToggle);
}

// 主题切换
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    body.className = currentTheme + '-theme';
    localStorage.setItem('theme', currentTheme);
}

// 加载主题
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        currentTheme = savedTheme;
        body.className = currentTheme + '-theme';
    }
}

// 渲染推文列表
function renderTweets() {
    const tweets = getTweets();
    tweetsContainer.innerHTML = '';
    
    tweets.forEach(tweet => {
        const tweetElement = createTweetElement(tweet);
        tweetsContainer.appendChild(tweetElement);
    });
}

// 创建推文元素
function createTweetElement(tweet) {
    const tweetDiv = document.createElement('div');
    tweetDiv.className = 'tweet';
    tweetDiv.dataset.id = tweet.id;
    
    const settings = getGlobalSettings();
    const avatarText = tweet.author.charAt(0).toUpperCase();
    let avatarHtml = '';
    
    if (tweet.avatar || settings.avatar) {
        const avatarSrc = tweet.avatar || settings.avatar;
        avatarHtml = `<img src="${avatarSrc}" alt="头像" style="width: 100%; height: 100%; object-fit: cover;">`;
    } else {
        avatarHtml = avatarText;
    }
    
    let mediaHtml = '';
    if (tweet.media && tweet.media.length > 0) {
        const media = tweet.media[0];
        const mediaClass = media.isLong ? 'tweet-media long-media' : 'tweet-media';
        
        if (media.type === 'image') {
            mediaHtml = `
                <div class="${mediaClass}">
                    <img src="${media.url}" alt="推文图片" onclick="openMediaPreview('${media.url}', 'image')">
                </div>
            `;
        } else if (media.type === 'video') {
            mediaHtml = `
                <div class="${mediaClass}">
                    <video src="${media.url}" onclick="openMediaPreview('${media.url}', 'video')"></video>
                </div>
            `;
        }
    }
    
    tweetDiv.innerHTML = `
        <div class="tweet-header">
            <div class="tweet-avatar">${avatarHtml}</div>
            <div class="tweet-author">${tweet.author}</div>
            <div class="tweet-handle">${tweet.handle}</div>
            <div class="tweet-time">·${tweet.time}</div>
        </div>
        <div class="tweet-content">${tweet.content}</div>
        ${mediaHtml}
        <div class="tweet-actions">
            <button class="action-button" onclick="handleAction(${tweet.id}, 'comment')">
                <svg viewBox="0 0 24 24">
                    <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z"/>
                </svg>
                <span>${formatNumber(tweet.stats.comments)}</span>
            </button>
            <button class="action-button" onclick="handleAction(${tweet.id}, 'retweet')">
                <svg viewBox="0 0 24 24">
                    <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"/>
                </svg>
                <span>${formatNumber(tweet.stats.retweets)}</span>
            </button>
            <button class="action-button" onclick="handleAction(${tweet.id}, 'like')">
                <svg viewBox="0 0 24 24">
                    <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"/>
                </svg>
                <span>${formatNumber(tweet.stats.likes)}</span>
            </button>
            <button class="action-button">
                <svg viewBox="0 0 24 24">
                    <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10H6V21H4zm9.248 0v-7h2v7h-2z"/>
                </svg>
                <span>${formatNumber(tweet.stats.views)}</span>
            </button>
            <button class="action-button">
                <svg viewBox="0 0 24 24">
                    <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.29 3.3-1.42-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"/>
                </svg>
            </button>
        </div>
    `;
    
    return tweetDiv;
}

// 处理交互动作
function handleAction(tweetId, action) {
    const newStats = updateTweetStats(tweetId, action);
    if (newStats) {
        // 更新显示的数字
        const tweetElement = document.querySelector(`[data-id="${tweetId}"]`);
        const actionButtons = tweetElement.querySelectorAll('.action-button');
        
        actionButtons[0].querySelector('span').textContent = formatNumber(newStats.comments);
        actionButtons[1].querySelector('span').textContent = formatNumber(newStats.retweets);
        actionButtons[2].querySelector('span').textContent = formatNumber(newStats.likes);
        actionButtons[3].querySelector('span').textContent = formatNumber(newStats.views);
        
        // 添加动画效果
        const button = actionButtons[action === 'comment' ? 0 : action === 'retweet' ? 1 : 2];
        button.style.transform = 'scale(1.1)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
        
        // 添加颜色效果
        if (action === 'like') {
            button.classList.add('liked');
            setTimeout(() => button.classList.remove('liked'), 1000);
        } else if (action === 'retweet') {
            button.classList.add('retweeted');
            setTimeout(() => button.classList.remove('retweeted'), 1000);
        }
    }
}

// 格式化数字显示
function formatNumber(num) {
    if (num >= 10000) {
        return (num / 10000).toFixed(1) + '万';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// 打开媒体预览
function openMediaPreview(url, type) {
    const previewImage = document.getElementById('preview-image');
    const previewVideo = document.getElementById('preview-video');
    
    if (type === 'image') {
        previewImage.src = url;
        previewImage.style.display = 'block';
        previewVideo.style.display = 'none';
    } else {
        previewVideo.src = url;
        previewVideo.style.display = 'block';
        previewImage.style.display = 'none';
    }
    
    mediaOverlay.style.display = 'flex';
}

// 关闭媒体预览
function closeMediaPreview() {
    mediaOverlay.style.display = 'none';
    document.getElementById('preview-image').src = '';
    document.getElementById('preview-video').src = '';
}

// 打开管理弹窗
function openModal() {
    modalOverlay.style.display = 'flex';
    renderSortableTweets();
}

// 关闭管理弹窗
function closeModalHandler() {
    modalOverlay.style.display = 'none';
    clearForm();
}

// 清空表单
function clearForm() {
    const isRandomTextMode = randomTextSwitch.checked;
    
    if (isRandomTextMode) {
        // 随机文字模式下，重新生成随机文案
        tweetContentTextarea.value = getRandomPresetText();
    } else {
        // 普通模式下，清空内容
        tweetContentTextarea.value = '';
    }
    
    uploadedFiles = [];
    mediaPreview.innerHTML = '';
}

// 处理文件选择
function handleFileSelect(e) {
    const files = Array.from(e.target.files);
    handleFiles(files);
}

// 处理文件
function handleFiles(files) {
    files.forEach(file => {
        if (file.type.startsWith('image/') || file.type.startsWith('video/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const fileData = {
                    type: file.type.startsWith('image/') ? 'image' : 'video',
                    url: e.target.result,
                    isLong: false // 默认为方形，可以后续调整
                };
                uploadedFiles.push(fileData);
                renderMediaPreview();
            };
            reader.readAsDataURL(file);
        }
    });
}

// 渲染媒体预览
function renderMediaPreview() {
    mediaPreview.innerHTML = '';
    uploadedFiles.forEach((file, index) => {
        const previewItem = document.createElement('div');
        previewItem.className = 'media-preview-item';
        
        if (file.type === 'image') {
            previewItem.innerHTML = `
                <img src="${file.url}" alt="预览">
                <button class="remove-media" onclick="removeMedia(${index})">×</button>
            `;
        } else {
            previewItem.innerHTML = `
                <video src="${file.url}"></video>
                <button class="remove-media" onclick="removeMedia(${index})">×</button>
            `;
        }
        
        mediaPreview.appendChild(previewItem);
    });
}

// 移除媒体文件
function removeMedia(index) {
    uploadedFiles.splice(index, 1);
    renderMediaPreview();
}

// 添加推文
function handleAddTweet() {
    let content = document.getElementById('tweet-content').value.trim();
    const isRandomTextMode = randomTextSwitch.checked;
    
    // 随机文字模式：如果开启且没有内容，自动生成随机文案
    if (isRandomTextMode && !content) {
        content = getRandomPresetText();
    }
    
    // 检查是否有内容
    if (!content) {
        alert('请填写推文内容');
        return;
    }
    
    // 随机文字模式下，如果没有媒体文件，提示用户
    if (isRandomTextMode && uploadedFiles.length === 0) {
        alert('随机文字模式下请至少上传一个图片或视频');
        return;
    }
    
    const settings = getGlobalSettings();
    const newTweet = {
        author: settings.author,
        handle: settings.handle,
        content,
        media: uploadedFiles.length > 0 ? uploadedFiles : null,
        avatar: settings.avatar
    };
    
    addTweet(newTweet);
    renderTweets();
    renderSortableTweets();
    clearForm();
    
    // 显示成功提示
    const button = addTweetButton;
    const originalText = button.textContent;
    button.textContent = '添加成功！';
    button.style.backgroundColor = '#00ba7c';
    setTimeout(() => {
        button.textContent = originalText;
        button.style.backgroundColor = 'var(--accent-color)';
    }, 1500);
}

// 处理随机文字开关
function handleRandomTextToggle() {
    const isChecked = randomTextSwitch.checked;
    
    if (isChecked) {
        // 开启随机文字模式
        tweetContentTextarea.placeholder = '随机文字模式已开启，将自动配置预置文案';
        tweetContentTextarea.style.backgroundColor = 'var(--bg-secondary)';
        tweetContentTextarea.readOnly = true;
        
        // 如果当前没有内容，自动填入随机文案
        if (!tweetContentTextarea.value.trim()) {
            tweetContentTextarea.value = getRandomPresetText();
        }
    } else {
        // 关闭随机文字模式
        tweetContentTextarea.placeholder = '推文内容';
        tweetContentTextarea.style.backgroundColor = 'var(--bg-primary)';
        tweetContentTextarea.readOnly = false;
    }
}

// 渲染可排序的推文列表
function renderSortableTweets() {
    const tweets = getTweets();
    sortableTweets.innerHTML = '';
    
    tweets.forEach(tweet => {
        const tweetElement = createSortableTweetElement(tweet);
        sortableTweets.appendChild(tweetElement);
    });
    
    // 初始化拖拽排序
    if (window.Sortable) {
        new Sortable(sortableTweets, {
            animation: 150,
            ghostClass: 'sortable-ghost',
            chosenClass: 'sortable-chosen',
            dragClass: 'sortable-drag',
            onEnd: function(evt) {
                const newOrder = Array.from(sortableTweets.children).map(el => {
                    const id = parseInt(el.dataset.id);
                    return getTweets().find(t => t.id === id);
                });
                updateTweetOrder(newOrder);
                renderTweets();
            }
        });
    }
}

// 创建可排序的推文元素
function createSortableTweetElement(tweet) {
    const tweetDiv = document.createElement('div');
    tweetDiv.className = 'sortable-tweet';
    tweetDiv.dataset.id = tweet.id;
    
    let mediaHtml = '';
    if (tweet.media && tweet.media.length > 0) {
        mediaHtml = '<div class="sortable-tweet-media">';
        tweet.media.forEach(media => {
            if (media.type === 'image') {
                mediaHtml += `<img src="${media.url}" alt="媒体">`;
            } else {
                mediaHtml += `<video src="${media.url}"></video>`;
            }
        });
        mediaHtml += '</div>';
    }
    
    tweetDiv.innerHTML = `
        <div class="sortable-tweet-header">
            <div class="sortable-tweet-author">${tweet.author} ${tweet.handle}</div>
            <button class="delete-tweet" onclick="handleDeleteTweet(${tweet.id})">删除</button>
        </div>
        <div class="sortable-tweet-content">${tweet.content}</div>
        ${mediaHtml}
    `;
    
    return tweetDiv;
}

// 删除推文
function handleDeleteTweet(id) {
    deleteTweet(id);
    renderTweets();
    renderSortableTweets();
    
    // 显示删除成功提示
    showDeleteNotification();
}

// 显示删除提示
function showDeleteNotification() {
    // 创建提示元素
    const notification = document.createElement('div');
    notification.className = 'delete-notification';
    notification.textContent = '推文已删除';
    
    // 添加到页面
    document.body.appendChild(notification);
    
    // 显示动画
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // 自动隐去
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 2000);
}

// 加载 Sortable.js 库
function loadSortableJS() {
    if (!window.Sortable) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/sortablejs@1.15.0/Sortable.min.js';
        script.onload = function() {
            renderSortableTweets();
        };
        document.head.appendChild(script);
    }
}

// 初始化全局设置
function initializeGlobalSettings() {
    const settings = getGlobalSettings();
    globalAuthor.value = settings.author;
    globalHandle.value = settings.handle;
    if (settings.avatar) {
        avatarPreview.innerHTML = `<img src="${settings.avatar}" alt="头像">`;
    }
}

// 处理保存设置
function handleSaveSettings() {
    const newSettings = {
        author: globalAuthor.value.trim() || 'Gate交易所',
        handle: globalHandle.value.trim() || '@gate_io'
    };
    
    if (!newSettings.handle.startsWith('@')) {
        newSettings.handle = '@' + newSettings.handle;
        globalHandle.value = newSettings.handle;
    }
    
    updateGlobalSettings(newSettings);
    
    // 显示成功提示
    const button = saveSettingsButton;
    const originalText = button.textContent;
    button.textContent = '保存成功！';
    button.style.backgroundColor = '#00ba7c';
    setTimeout(() => {
        button.textContent = originalText;
        button.style.backgroundColor = 'var(--accent-color)';
    }, 1500);
}

// 处理头像上传
function handleAvatarUpload(e) {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function(e) {
            updateGlobalSettings({ avatar: e.target.result });
            avatarPreview.innerHTML = `<img src="${e.target.result}" alt="头像">`;
        };
        reader.readAsDataURL(file);
    }
}

// 导出数据功能 - 生成完整项目
async function handleExportData() {
    const tweets = getTweets();
    const settings = getGlobalSettings();
    const zip = new JSZip();
    const assetsFolder = zip.folder("assets");
    let mediaCounter = 1;
    
    // 处理推文数据，生成新的 data.js 内容
    const processedTweets = [];
    const processedGlobalSettings = { ...settings };
    
    // 处理全局头像
    if (settings.avatar && settings.avatar.startsWith('data:')) {
        const avatarFileName = `avatar.png`;
        const avatarData = settings.avatar.split(',')[1];
        assetsFolder.file(avatarFileName, avatarData, {base64: true});
        processedGlobalSettings.avatar = `assets/${avatarFileName}`;
    }
    
    // 处理每条推文
    for (const tweet of tweets) {
        const processedTweet = { ...tweet };
        
        // 处理推文头像
        if (tweet.avatar && tweet.avatar.startsWith('data:')) {
            const avatarFileName = `avatar-${tweet.id}.png`;
            const avatarData = tweet.avatar.split(',')[1];
            assetsFolder.file(avatarFileName, avatarData, {base64: true});
            processedTweet.avatar = `assets/${avatarFileName}`;
        }
        
        // 处理媒体文件
        if (tweet.media && tweet.media.length > 0) {
            processedTweet.media = [];
            for (const media of tweet.media) {
                if (media.url.startsWith('data:')) {
                    const extension = media.type === 'image' ? 'png' : 'mp4';
                    const fileName = `media-${mediaCounter}.${extension}`;
                    const mediaData = media.url.split(',')[1];
                    assetsFolder.file(fileName, mediaData, {base64: true});
                    
                    processedTweet.media.push({
                        type: media.type,
                        url: `assets/${fileName}`,
                        isLong: media.isLong
                    });
                    mediaCounter++;
                } else {
                    processedTweet.media.push(media);
                }
            }
        }
        
        processedTweets.push(processedTweet);
    }
    
    // 生成新的 data.js 文件内容
    const dataJsContent = `// 推文数据存储
let tweetsData = ${JSON.stringify(processedTweets, null, 4)};

// 全局设置
let globalSettings = ${JSON.stringify(processedGlobalSettings, null, 4)};

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
}`;
    
    // 读取当前的 HTML、CSS、JS 文件并添加到 ZIP
    try {
        // 添加 data.js
        zip.file("data.js", dataJsContent);
        
        // 添加其他项目文件
        const htmlResponse = await fetch('index.html');
        const htmlContent = await htmlResponse.text();
        zip.file("index.html", htmlContent);
        
        const cssResponse = await fetch('styles.css');
        const cssContent = await cssResponse.text();
        zip.file("styles.css", cssContent);
        
        const jsResponse = await fetch('script.js');
        const jsContent = await jsResponse.text();
        zip.file("script.js", jsContent);
        
        // 添加预置文案文件
        const presetTextsResponse = await fetch('preset-texts.js');
        const presetTextsContent = await presetTextsResponse.text();
        zip.file("preset-texts.js", presetTextsContent);
        
        // 添加 README 文件
        const readmeContent = `# X 推文展示页面

这是一个静态的推文展示页面项目。

## 使用方法

1. 直接打开 index.html 文件即可查看推文
2. 点击"发帖"按钮可以管理推文内容
3. 媒体文件存储在 assets 文件夹中

## 文件结构

- index.html - 主页面
- script.js - JavaScript 逻辑
- styles.css - 样式文件
- data.js - 推文数据
- assets/ - 媒体文件文件夹

导出时间: ${new Date().toLocaleString('zh-CN')}
`;
        zip.file("README.md", readmeContent);
        
        // 生成并下载 ZIP 文件
        const content = await zip.generateAsync({type: "blob"});
        const link = document.createElement('a');
        link.href = URL.createObjectURL(content);
        link.download = `x-tweets-project-${new Date().toISOString().split('T')[0]}.zip`;
        link.click();
        
        // 显示成功提示
        showExportNotification();
        
    } catch (error) {
        alert('导出失败：' + error.message);
        console.error('Export error:', error);
    }
}





// 显示导出成功提示
function showExportNotification() {
    const notification = document.createElement('div');
    notification.className = 'export-notification';
    notification.textContent = '项目导出成功！';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 2000);
}



// 页面加载完成后加载 Sortable.js
window.addEventListener('load', loadSortableJS);