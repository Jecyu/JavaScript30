/**
 * @Author: jecyu
 * @Date: 2017-12-21 6:31:31 pm 
 * @Modified By: jeCyu 
 * @Last Modified time: 2017-12-21 6:31:32 pm 
 */

// 1.监听键盘敲击事件，当按下A、S、D等键时
// 2.取得该键的值，取得所有key元素与audio元素的data-key值
// 3.设置与用户敲击键的值的key元素样式及播放对应的audio
// TODO 扩展：自动播放敲击一段音乐,键盘的样式跟着变换，敲击表教学

/**
 * 监听按钮事件
 */
function bindEvent() {
    var keys   = document.getElementsByClassName('key');
    var audios = document.getElementsByTagName('audio'); 

    document.addEventListener('keypress', function playMusic(event) {
        var keyName = event.key;
        // 字符的unicode值，转为大写值
        var keyCharCode = event.charCode - 32;  

        for (var i = 0, len = keys.length; i < len; i++) {
            var dataKey = keys[i].getAttribute('data-key');

            // datakey为String，因此不用全等
            if ( dataKey == keyCharCode) {
                play(keys[i], audios[i]);

            }
        }
        
    });

    document.addEventListener('keyup', function removeClass(event) {
        for (var i = 0, len = keys.length; i < len; i++) {
            if (keys[i].getAttribute('class') === 'key playing') {
                keys[i].setAttribute('class', 'key');
            }
        }
    });
}

/**
 * 播放指定的声音
 * @param {object} key key元素 
 * @param {object} audio audio元素
 */
function play(key, audio) {
    key.setAttribute('class', 'key playing');
    audio.play();
}

function page() {
   bindEvent();
}


window.onload = function() {
    page();
};
