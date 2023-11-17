(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();function u(t){gsap.to(t,{x:"-100%",duration:15,repeat:-1,ease:"linear",onComplete:function(){gsap.set(t,{x:"200%"})}})}u("#firstBannerText");u("#secondBannerText");u("#thirdBannerText");const m=window.innerWidth<768?"<br>":"",g=[{title:"為毛孩子謀福利！"+m+"推動寵物醫療保障方案",content:[{img:"/PiggyBank.svg",heading:"設立寵物醫療基金",caption:"每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用。"},{img:"/FirstAidKit.svg",heading:"提供醫療補助",caption:"每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力。"},{img:"/Handshake.svg",heading:"合作動物醫院",caption:"目前已有和超過 200 家動物醫院進行初步的合作討論。"}]},{title:"打造休閒天堂！"+m+"推廣寵物休閒與娛樂場所",content:[{img:"/Park.svg",heading:"建立寵物公園",caption:"每年撥款新台幣 5 億元，用於在各大都市建立專屬的寵物公園。根據初步規劃，預計在第一年內，將在全國範圍內建立至少 10 座寵物公園。"},{img:"/Storefront.svg",heading:"推廣寵物友善商家",caption:"鼓勵商家提供寵物友善的環境，並為參與的商家提供稅收優惠。預計在政策實施後的首年，將有超過 500 家商家加入此計畫。"},{img:"/PawPrint.svg",heading:"舉辦寵物活動和工作坊",caption:"與各大寵物社團和組織合作，每年舉辦至少 5 場大型的寵物活動，包括寵物才藝比賽、飼養知識工作坊等。"}]},{title:"推廣寵物飼養教育，讓愛更加專業",content:[{img:"./src/images/Buildings.svg",heading:"建立寵物飼養教育中心",caption:"每年撥款新台幣 3 億元，用於在全國各地建立專業的寵物飼養教育中心。預計在第一年內，在全國至少 5 大城市設立教育中心。"},{img:"./src/images/BowlFood.svg",heading:"推廣寵物飼養課程",caption:"與學校、社區組織和寵物社團合作，推出一系列免費的寵物飼養課程。預計每年將有超過 10,000 名市民受益。"},{img:"./src/images/Video.svg",heading:"製作教育資料",caption:"出版寵物飼養手冊、影片和線上課程，讓所有有意飼養寵物的家庭都能輕鬆取得正確的知識。"}]}];var d=0;const E=document.getElementById("issuesTitle"),r=document.getElementById("issuesContent");function h(){E.innerHTML=g[d].title,gsap.to(r,{opacity:0,duration:.3,onComplete:function(){r.innerHTML="",g[d].content.forEach(function(t){const n=document.createElement("li");n.className="flex flex-col max-w-[320px] items-center gap-sp-2 relative z-10";const o=document.createElement("img");o.src=t.img,o.className="w-[128px]";const a=document.createElement("p");a.className="issueListTitle",a.textContent=t.heading;const e=document.createElement("p");e.className="text-center text-Grayscale-4 text-base/[28px]",e.textContent=t.caption;const i=document.createElement("img");i.className="absolute top-16 -z-10",i.src="../src/images/IssueBackground.svg",n.appendChild(o),n.appendChild(a),n.appendChild(e),n.appendChild(i),r.appendChild(n)}),gsap.to(r,{opacity:1,duration:.3})}})}const f=document.getElementsByClassName("changeIssueBtn");Array.from(f).forEach(function(t){t.addEventListener("click",function(){Array.from(f).forEach(function(o){o.classList.remove("active")}),this.classList.add("active"),d=this.getAttribute("value"),h()})});h();const v=document.querySelector("html"),p=document.getElementById("hamburger"),s=document.getElementById("navMenu"),x=document.getElementsByTagName("main")[0];function L(t){document.querySelector(t)&&gsap.to(window,{duration:1,scrollTo:{y:t,offsetY:80}})}function c(t,n){document.querySelectorAll(t).forEach(a=>{a.addEventListener("click",function(e){window.innerWidth<768&&y(),e.preventDefault(),L(n)})})}c(".CandidateLink","#Candidate");c(".DonationsLink","#Donations");c(".EventsLink","#Events");c(".IssuesLink","#Issues");c(".ServiceLink","#Service");const B=document.getElementsByClassName("indexLink");Array.from(B).forEach(function(t){t.addEventListener("click",function(n){n.preventDefault(),gsap.to(window,{duration:1,scrollTo:{y:0}})})});window.innerWidth<768&&(x.addEventListener("click",function(t){t.target!==s&&t.target!==p&&y()}),p.addEventListener("click",function(){v.style.overflow="hidden",s.classList.remove("hidden"),s.classList.add("fixed"),s.classList.add("flex"),gsap.from(s,{duration:.5,x:"100%"}),gsap.to("html",{duration:.5,"--myBlur":4})}));function y(){v.style.overflow="auto",gsap.to(s,{duration:.5,x:"100%",onComplete:function(){s.classList.remove("fixed"),s.classList.add("hidden"),gsap.set(s,{x:"0%"})}}),gsap.to("html",{duration:.5,"--myBlur":0})}
