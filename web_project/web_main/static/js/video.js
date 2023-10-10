function initializeVideoTabs(youtubeTabId, bilibiliTabId, containerId, defaultYoutubeURL, defaultBilibiliURL) {
    // Initialize the default video and tab
    toggleActiveClass(youtubeTabId, bilibiliTabId);
    showVideo(containerId, defaultYoutubeURL, 'youtube');
  
    // Add event listeners to toggle active class and video source
    document.getElementById(youtubeTabId).addEventListener('click', function() {
      toggleActiveClass(youtubeTabId, bilibiliTabId);
      showVideo(containerId, defaultYoutubeURL, 'youtube');
    });
  
    document.getElementById(bilibiliTabId).addEventListener('click', function() {
      toggleActiveClass(bilibiliTabId, youtubeTabId);
      showVideo(containerId, defaultBilibiliURL, 'bilibili');
    });
  }
  
function toggleActiveClass(activeId, inactiveId) {
    const activeElem = document.getElementById(activeId);
    const inactiveElem = document.getElementById(inactiveId);
    
    if (activeElem && inactiveElem) {
      activeElem.classList.add('is-active');
      inactiveElem.classList.remove('is-active');
    } else {
      console.error(`Element(s) not found. activeId: ${activeId}, inactiveId: ${inactiveId}`);
    }
  }
  
  
function showVideo(containerId, url, source) {
    let iframeHTML = '';
  
    if (document.getElementById(containerId)) {
      if (source === 'youtube') {
        iframeHTML = `<div class="publication-video">
                        <iframe src="${url}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                      </div>`;
      } else if (source === 'bilibili') {
        iframeHTML = `<div class="publication-video">
                        <iframe src="${url}&danmaku=0" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"
                            style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" 
                            sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"></iframe>
                      </div>`;
      }
  
      // Insert the iframe HTML into the specified container
      document.getElementById(containerId).innerHTML = iframeHTML;
    } else {
      console.error(`Element with ID '${containerId}' not found.`);
    }
  }
  
// Initialize the video tabs
document.addEventListener("DOMContentLoaded", function() {
    initializeVideoTabs('youtube-tab1', 'bilibili-tab1', 'video-container1', 
        'https://www.youtube.com/embed/4crx2AoS_XM', 
        'https://player.bilibili.com/player.html?aid=385980587&bvid=BV13d4y1Q75r&cid=771855555&p=0');
    initializeVideoTabs('youtube-tab2', 'bilibili-tab2', 'video-container2', 
        'https://www.youtube.com/embed/4crx2AoS_XM', 
        'https://player.bilibili.com/player.html?aid=385980587&bvid=BV13d4y1Q75r&cid=771855555&p=0');
    initializeVideoTabs('youtube-tab3', 'bilibili-tab3', 'video-container3', 
        'https://www.youtube.com/embed/4crx2AoS_XM', 
        'https://player.bilibili.com/player.html?aid=385980587&bvid=BV13d4y1Q75r&cid=771855555&p=0');
    // // Add more as needed
  });