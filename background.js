chrome.runtime.onInstalled.addListener(() => {
    const delayInMinutes = .1;
    const periodInMinutes = .1;

    chrome.alarms.create("get-up-alarm", {
        delayInMinutes,
        periodInMinutes
    });
});

chrome.alarms.onAlarm.addListener(()=>{
    console.log('GET UP!');

    chrome.notifications.create('get-up-notification', {
        "type": "basic",
        "iconUrl": "icon/stand.png",
        "title": "Get Up!",
        "message": "It's been an hour... Get up and stretch your legs!"
    });
})