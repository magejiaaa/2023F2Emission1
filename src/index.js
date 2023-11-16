// banner文字動畫
function createBannerAnimation(elementId) {
    gsap.to(elementId, {
        x: "-100%",
        duration: 15,
        repeat: -1,
        ease: "linear",
        onComplete: function () {
            // 在動畫完成後設置回調函數
            gsap.set(elementId, { x: "200%" });
        },
    });
}

createBannerAnimation("#firstBannerText");
createBannerAnimation("#secondBannerText");
createBannerAnimation("#thirdBannerText");



// 政策議題內容替換
const issues = [
    {
        title: "為毛孩子謀福利！推動寵物醫療保障方案",
        content: [
            {
                img: "./src/images/PiggyBank.svg",
                heading: "設立寵物醫療基金",
                caption: "每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用。",
            },
            {
                img: "./src/images/FirstAidKit.svg",
                heading: "提供醫療補助",
                caption: "每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力。",
            },
            {
                img: "./src/images/Handshake.svg",
                heading: "合作動物醫院",
                caption: "目前已有和超過 200 家動物醫院進行初步的合作討論。",
            },
        ],
    },
    {
        title: "打造休閒天堂！推廣寵物休閒與娛樂場所",
        content: [
            {
                img: "./src/images/Park.svg",
                heading: "建立寵物公園",
                caption: "每年撥款新台幣 5 億元，用於在各大都市建立專屬的寵物公園。根據初步規劃，預計在第一年內，將在全國範圍內建立至少 10 座寵物公園。",
            },
            {
                img: "./src/images/Storefront.svg",
                heading: "推廣寵物友善商家",
                caption: "鼓勵商家提供寵物友善的環境，並為參與的商家提供稅收優惠。預計在政策實施後的首年，將有超過 500 家商家加入此計畫。",
            },
            {
                img: "./src/images/PawPrint.svg",
                heading: "舉辦寵物活動和工作坊",
                caption: "與各大寵物社團和組織合作，每年舉辦至少 5 場大型的寵物活動，包括寵物才藝比賽、飼養知識工作坊等。",
            },
        ],
    },
    {
        title: "推廣寵物飼養教育，讓愛更加專業",
        content: [
            {
                img: "./src/images/Buildings.svg",
                heading: "建立寵物飼養教育中心",
                caption: "每年撥款新台幣 3 億元，用於在全國各地建立專業的寵物飼養教育中心。預計在第一年內，在全國至少 5 大城市設立教育中心。",
            },
            {
                img: "./src/images/BowlFood.svg",
                heading: "推廣寵物飼養課程",
                caption: "與學校、社區組織和寵物社團合作，推出一系列免費的寵物飼養課程。預計每年將有超過 10,000 名市民受益。",
            },
            {
                img: "./src/images/Video.svg",
                heading: "製作教育資料",
                caption: "出版寵物飼養手冊、影片和線上課程，讓所有有意飼養寵物的家庭都能輕鬆取得正確的知識。",
            },
        ],
    },
];
var currentIssueIndex = 0; // 目前的 issues 索引
// 取得要放置資料的元素
const titleElement = document.getElementById("issuesTitle");
const contentElement = document.getElementById("issuesContent");

// 更新資料函式
function updateData() {
    titleElement.textContent = issues[currentIssueIndex].title;
    gsap.to(contentElement, {
        opacity: 0,
        duration: 0.3,
        onComplete: function () {
            // 清空內容
            contentElement.innerHTML = "";

            issues[currentIssueIndex].content.forEach(function (content) {
                const listItem = document.createElement("li"); // 建立新的 <li> 元素
                listItem.className = "flex flex-col max-w-[320px] items-center gap-sp-2 relative z-10";
        
                const listImg = document.createElement("img");
                listImg.src = content.img;
                listImg.className = "w-[128px]"
        
                const listTitle = document.createElement("p");
                listTitle.className = "issueListTitle";
                listTitle.textContent = content.heading;
        
                const listContent = document.createElement("p");
                listContent.className = "text-center text-Grayscale-4 text-base/[28px]";
                listContent.textContent = content.caption;
        
                const listBG = document.createElement("img");
                listBG.className = "absolute top-16 -z-10";
                listBG.src = "../src/images/IssueBackground.svg";
        
                listItem.appendChild(listImg);
                listItem.appendChild(listTitle);
                listItem.appendChild(listContent);
                listItem.appendChild(listBG);
        
                contentElement.appendChild(listItem);
            });

            gsap.to(contentElement, {
                opacity: 1,
                duration: 0.3
            });
        }
    });
}

// 取得所有帶有 changeIssueBtn 類別的按鈕元素
const changeIssueBtns = document.getElementsByClassName("changeIssueBtn");
// 切換資料的按鈕事件
// 逐個添加事件監聽器
Array.from(changeIssueBtns).forEach(function (button) {
    button.addEventListener("click", function () {
        // 移除所有按鈕的 'active' 類別
        Array.from(changeIssueBtns).forEach(function (btn) {
            btn.classList.remove('active');
        });
        // 將目前點擊的按鈕加上 'active' 類別
        this.classList.add('active');
        const issueIndex = this.getAttribute("value");
        // 切換到指定的 issues 索引
        currentIssueIndex = issueIndex;
        // 更新顯示的資料
        updateData();
    });
});

// 初始顯示第一個資料
updateData();


// 選單跳轉
function scrollToElement(elementId) {
    const element = document.querySelector(elementId);
    if (element) {
        gsap.to(window, { duration: 1, scrollTo: { y: elementId, offsetY: 80 } });
    }
}

// 設定點擊事件
function setupClickHandler(linkId, targetId) {
    const link = document.querySelector(linkId);
    if (link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            scrollToElement(targetId);
        });
    }
}

// 設定不同連結的點擊事件
setupClickHandler('#CandidateLink', '#Candidate');
setupClickHandler('#DonationsLink', '#Donations');
setupClickHandler('#EventsLink', '#Events');
setupClickHandler('#IssuesLink', '#Issues');
setupClickHandler('#ServiceLink', '#Service');