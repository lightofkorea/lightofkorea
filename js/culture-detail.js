const cultureData = [
  {
    "id": 1,
    "category": "K-pop",
    "krCategory": "K-pop",
    "name": "BLACKPINK",
    "intro": "‘DDU-DU DDU-DU’, ‘Kill This Love’, ‘How You Like That’ 등 강렬한 히트곡으로 주목받은 걸그룹입니다.\n세련된 스타일과 무대 장악력으로 글로벌 팬층을 넓혀왔습니다.",
    "history": "지수, 제니, 로제, 리사",
    "region": "MTV VMA, Billboard Women in Music 등\n세계 투어와 글로벌 차트 성과로 영향력을 입증한 팀",
    "img_url1": "img/cul/blackpink.jpg",
    "img_url2": "https://ticketimage.interpark.com/Play/image/large/23/23011804_p.gif",
    "img_url3": "https://img.sbs.co.kr/newsnet/etv/upload/2022/09/29/30000793367_1280.jpg",
    "img_url4": "https://img.vogue.co.kr/vogue/2023/12/style_658e4472d575b-1400x933.jpeg"
  },
   {
    "id": 2,
    "category": "K-pop",
    "krCategory": "K-pop",
    "name": "BTS",
    "intro": "‘Dynamite’, ‘Butter’, ‘Spring Day’ 등 다수의 히트곡으로 전 세계적인 사랑을 받은 그룹입니다.\n강한 퍼포먼스와 진정성 있는 메시지로 K-POP의 영향력을 크게 넓혔습니다.",
    "history": "RM, 진, 슈가, 제이홉, 지민, 뷔, 정국",
    "region": "Billboard Music Awards, American Music Awards, MTV VMA 등\n글로벌 주요 시상식에서 꾸준한 성과를 이어온 대표 아티스트",
    "img_url1": "https://i3n.news1.kr/system/photos/2026/3/13/7795846/high.jpg",
    "img_url2": "https://www.chosun.com/resizer/v2/VJXDJIEDUJCETPJIAZBENMDLHM.jpg?auth=0f483afe6b47ab21fa809faf3524c5de94f720b636a13435af61d330408242a6&width=616",
    "img_url3": "https://cdn.jongnonews.com/news/photo/202603/1786_2246_4222.jpg",
    "img_url4": "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1097661412.jpg?crop=0.665xw:1.00xh;0.173xw,0&resize=1400:*"
  },
  {
    "id": 3,
    "category": "K-pop",
    "krCategory": "K-pop",
    "name": "NewJeans",
    "intro": "‘Attention’, ‘Hype Boy’, ‘Ditto’, ‘Super Shy’ 등 감각적인 히트곡으로 빠르게 주목받은 그룹입니다.\n자연스러운 무드와 세련된 사운드로 새로운 흐름을 보여주었습니다.",
    "history": "민지, 하니, 다니엘, 해린, 혜인",
    "region": "국내 주요 시상식 신인상·대상 수상\n데뷔 초부터 음원과 화제성을 함께 이끈 팀",
    "img_url1": "https://www.esquirekorea.co.kr/resources/online/online_image/2025/11/17/76985028-d8fe-4632-817c-535ad6568d66.jpg",
    "img_url2": "https://img.vogue.co.kr/vogue/2023/07/style_64ab7e8d97503.jpeg",
    "img_url3": "img/cul/newjeans.jpg",
    "img_url4": "https://file2.nocutnews.co.kr/newsroom/image/2023/09/01/202309011650045428_0.jpg"
  },
  {
    "id": 4,
    "category": "K-pop",
    "krCategory": "K-pop",
    "name": "SEVENTEEN",
    "intro": "‘Don’t Wanna Cry’, ‘Super’, ‘HOT’, ‘Very Nice’ 등으로 큰 사랑을 받은 퍼포먼스 중심 그룹입니다.\n자체 제작 역량과 탄탄한 팀워크로 완성도 높은 무대를 선보여 왔습니다.",
    "history": "에스쿱스, 정한, 조슈아, 준, 호시, 원우, 우지, 도겸, 민규, 디에잇, 승관, 버논, 디노",
    "region": "MAMA Awards, Golden Disc Awards, Asia Artist Awards 등\n공연과 앨범 부문 모두에서 강한 성과를 보여준 그룹",
    "img_url1": "https://cf.asiaartistawards.com/news/21/2026/01/2026012114020560265_1.jpg",
    "img_url2": "https://cdn.newsbuzz.co.kr/news/photo/202511/16796_17711_275.jpg",
    "img_url3": "https://spnimage.edaily.co.kr/images/Photo/files/NP/S/2024/03/PS24033100111.jpg",
    "img_url4": "https://i.namu.wiki/i/NrCJdLNUVsoDDmLQlMT9aflHKUjYqhQzDqoTyF9s4YibSEgCnSMPweQBqIHGW9iWDo3YfHkt20LxGE_qxN41XQ.webp"
  }
]



// 1. 페이지를 그리는 핵심 함수
function renderCultureDetail() {
    const params = new URLSearchParams(window.location.search);
    
    // 주소창에 ?id=숫자 가 없으면 기본값으로 1번(블랙핑크)을 보여줌
    const targetId = params.get("id") || "1"; 

    const detailList = document.getElementById("detail-list");
    const categoryTitle = document.getElementById("detail-category-title");
    const categoryText = document.getElementById("detail-category-text");

    if (!detailList) return;

    // cultureData 배열에서 ID 번호가 일치하는 데이터만 필터링
    const items = cultureData.filter(v => v.id === Number(targetId));
    
    // 이전 화면 잔상 삭제
    detailList.innerHTML = "";

    if (items.length > 0) {
        // [수정] 브라우저 탭 제목과 상단 카테고리명을 K-Culture로 통일
        document.title = `한국의 빛-K-Culture`;

        if (categoryTitle) categoryTitle.textContent = "K-Culture";
        if (categoryText) categoryText.textContent = "음악과 퍼포먼스로 세계를 사로잡은 K-POP 아티스트를 만나보세요.";

        // 찾은 데이터를 화면에 뿌려줌 (사진 4장 번호 맞춤)
        items.forEach((item) => {
            detailList.innerHTML += `
                <div class="item">
                    <div class="detail-text">
                        <h3 class="detail-name">${item.name}</h3>
                        <div class="info">
                            <div class="info-box"><h4>소개</h4><p>${item.intro}</p></div>
                            <div class="info-box"><h4>멤버</h4><p>${item.history}</p></div>
                            <div class="info-box"><h4>수상</h4><p>${item.region}</p></div>
                        </div>
                    </div>
                    <div class="detail-thumb">
                        <div class="thumb-grid">
                            <img src="${item.img_url1}" alt="사진1">
                            <img src="${item.img_url2}" alt="사진2">
                            <img src="${item.img_url3}" alt="사진3">
                            <img src="${item.img_url4}" alt="사진4">
                        </div>
                    </div>
                </div>
            `;
        });
    }
}

// 2. [추가] HTML 구조가 읽히자마자 바로 실행 (더 빠른 로딩)
document.addEventListener("DOMContentLoaded", renderCultureDetail);

// 3. [추가] 목록으로 돌아가기 버튼 자동 기능 (ID 없어도 '목록' 글자 찾아서 연결)
window.addEventListener('load', function() {
    const allElements = document.querySelectorAll('a, button, div, p, span');
    let backButton = null;
    
    allElements.forEach(el => {
        if (el.innerText && el.innerText.includes('목록')) {
            backButton = el;
        }
    });

    if (backButton) {
        backButton.style.cursor = 'pointer'; 
        backButton.onclick = function() {
            window.location.href = 'culture-index.html';
        };
    }
});