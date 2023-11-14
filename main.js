import './src/index.css'

function createBannerAnimation(elementId) {
    gsap.to(elementId, {
        x: '-100%',
        duration: 15,
        repeat: -1,
        ease: "linear",
        onComplete: function () {
            // 在動畫完成後設置回調函數
            gsap.set(elementId, { x: '200%' });
        }
    });
}

createBannerAnimation("#firstBannerText");
createBannerAnimation("#secondBannerText");
createBannerAnimation("#thirdBannerText");