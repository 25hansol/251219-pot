// src/assets
import project1 from '../assets/thu-coway.jpg';
import project2 from '../assets/thu-nostasy.jpg';
import project3 from '../assets/thu-worksout.jpg';
import project4 from '../assets/thu-pethroom.png';
import project5 from '../assets/thu-lewkin.jpg';
import project6 from '../assets/thu-naming.jpg';
import project7 from '../assets/thu-krazy-tiger.jpg';
import project8 from '../assets/thu-kimshardware.jpg';
import project9 from '../assets/thu-duorest.jpg';
import project10 from '../assets/thu-danselente.png';
import project11 from '../assets/thu-whiterabbit.png';
import project12 from '../assets/thu-ecocf.png';
import project13 from '../assets/thu-우리집동물원.png';
import project14 from '../assets/thu-pot.png';

export const ABOUT_ME = {
  intro: "꾸준한 과정을 통해 습관처럼 성장하는, 어제보다 나은 오늘의 프론트엔드 개발자를 목표로 합니다. ",
  skills: ["새로운 언어 활용 가능", "반응형 웹 최적화", "협업 중심 사고"],
};

export const EXPERIENCES = [
  {
    id: 1,
    company: "(주)솔루게이트",
    period: "2021.01 - 2024.03",
    role: "E커머스사업본부 UX개발팀 대리",
    achievements: [
      "글로벌 전자상거래 플랫폼 쇼피파이를 기반으로 한 웹 사이트 개발 및 유지보수",
      "Liquid 언어를 기반으로 반응형 웹 개발 20건 이상",
      "웹 표준 및 웹 접근성 준수를 통한 서비스 품질 개선",
      "Git, Figma, Zeplin 등을 통해 협업 프로젝트 진행 경험"
    ]
  }
];

export const EDUCATION = [
  {
    id: 1,
    school: "배화여자대학교",
    major: "컴퓨터공학과 전공",
    period: "2017.03 - 2020.02",
    status: "졸업"
  },
  {
    id: 2,
    school: "솔데스크",
    major: "오픈소스 자바 파이썬 R을 활용한 빅데이터 분석과정",
    period: "2020.02 - 2020.07",
    status: "수료"
  }
];

export const CERTIFICATIONS = [
  {
    id: 1,
    name: "JLPT N2",
    date: "2025.08",
    issuer: ""
  },
  {
    id: 2,
    name: "정보처리산업기사",
    date: "2025.06",
    issuer: "한국산업인력공단"
  },
  {
    id: 3,
    name: "GTQ 1급",
    date: "2019.09",
    issuer: "한국생산성본부"
  }
];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "개인 포트폴리오 사이트",
    img: project14,
    desc: "React를 기반으로 한 포트폴리오 웹 사이트를 제작했습니다.",
    tags: ["React", "JavaScript", "HTML5/CSS3", "notion"],
    details: "심플한 디자인을 기반으로 메인 페이지에서 간결하게 정보가 보일 수 있도록 제작했습니다. 디테일한 모션을 추가하여 포트폴리오 사이트의 몰입감을 높였습니다.",
    troubleshooting: "소개 및 정보와 프로젝트 내용을 보기 쉽게 정리하는 것을 목표로 했습니다. 데이터 필터링을 통해 작업 언어에 따라 프로젝트를 분류하여 볼 수 있도록 했습니다.",
    demo: "",
    performance: 100,
    isFeatured: true,
    category: "React"
  },
  {
    id: 2,
    title: "Coway AU",
    img: project1,
    desc: "코웨이의 호주 웹 사이트를 제작했습니다.",
    tags: ["Liquid", "JavaScript", "HTML5/CSS3", "Photoshop"],
    details: "모션 디자인을 중심으로 한 메인 페이지를 통해 역동적인 첫인상을 제공하고, 사진과 영상 매체를 적극 활용하여 시각적 몰입감을 높였습니다.",
    troubleshooting: "브랜드 전용 페이지를 구성하여 '코웨이'의 아이덴티티를 효과적으로 전달하며, SEO 최적화 및 사용자 행동 분석 기능을 추가하여 웹 사이트의 실효성과 접근성을 강화했습니다.",
    demo: "https://au.coway.com/",
    performance: 75,
    isFeatured: true,
    category: "Shopify",
  },
  {
    id: 3,
    title: "NOSTACY",
    img: project2,
    desc: "패션 브랜드 노스타시의 웹 사이트를 제작했습니다.",
    tags: ["Liquid", "JavaScript", "HTML5/CSS3", "Figma"],
    details: "브랜드의 정체성을 시각적으로 표현한 독창적인 디자인을 중심으로 웹 사이트를 제작했습니다.",
    troubleshooting: "헤더와 푸터 영역에 영상 요소를 적용해 몰입감과 집중도를 높였습니다. 또한 메인 페이지에서 제품 전시 영역을 구성하여 사용자의 관심을 유도하고 브랜드 및 상품에 대한 이해도를 높일 수 있는 구성으로 개발했습니다.",
    demo: "https://nostasy.com/",
    performance: 95,
    isFeatured: true,
    category: "Shopify"
  },
  {
    id: 4,
    title: "Worksout US",
    img: project3,
    desc: "패션 편집숍 웍스아웃의 글로벌 웹 사이트의 기능 업데이트를 진행했습니다.",
    tags: ["Liquid", "JavaScript", "HTML5/CSS3", "Figma"],
    details: "기존 한국 웹 사이트를 기반으로 글로벌 버전을 제작하면서, 다양한 사용자층에게 친화적인 기능을 추가하여 사용성과 접근성을 강화했습니다.",
    troubleshooting: "전체적인 UI 요소를 디테일하게 수정하며 글로벌 환경에 적합하도록 최적화 했으며, 기존 사이트와 일관된 브랜드 경험을 제공할 수 있도록 통일성를 유지하는데 중점을 두었습니다.",
    demo: "https://worksout.com/",
    performance: 65,
    category: "Shopify"
  },
  {
    id: 5,
    title: "Pethroom JP",
    img: project4,
    desc: "반려동물 용품 브랜드 페스룸의 일본 홈페이지를 제작했습니다.",
    tags: ["Liquid", "JavaScript", "HTML5/CSS3", "Photoshop"],
    details: "다양한 디바이스 환경에서도 일관된 사용자 경험을 제공할 수 있도록 반응형 웹으로 최적화된 웹 사이트를 제작했습니다.",
    troubleshooting: "소셜 로그인 기능을 도입해 접근성과 편의성을 높였습니다. 사용자 참여를 유도하기 위해 리뷰 기능을 추가하였고, 기존 한국 웹 사이트와 동일한 톤앤매너를 유지해 브랜드 일관성을 강화했습니다.",
    demo: "https://pethroom.jp/",
    performance: 65,
    isFeatured: true,
    category: "Shopify"
  },
  {
    id: 6,
    title: "Lewkin Global",
    img: project5,
    desc: "패션 쇼핑 브랜드 르킨의 웹 사이트를 제작했습니다.",
    tags: ["Liquid", "JavaScript", "HTML5/CSS3", "Photoshop"],
    details: "각 국가 별 웹 사이트를 별도로 구축한 뒤, 사용자의 접속 위치에 따라 해당 국가 사이트로 자동 연결되는 기능을 추가하여 총 8개 국가의 사이트를 제작했습니다.",
    troubleshooting: "웹 사이트 전반에 걸친 최적화와 검색 엔진 노출을 강화했으며, 반응형 레이아웃으로 다양한 디바이스 환경에서의 호환성을 확보했습니다. 또한 이미지 검색 기능을 도입하여 사용자 친화적인 탐색 경험을 제공했습니다.",
    demo: "https://lewkin.com/",
    performance: 90,
    isFeatured: true,
    category: "Shopify"
  },
  {
    id: 7,
    title: "NAMING US",
    img: project6,
    desc: "화장품 브랜드 네이밍의 글로벌 웹 사이트를 제작했습니다.",
    tags: ["Liquid", "JavaScript", "HTML5/CSS3", "Photoshop"],
    details: "기존 카페24 기반의 한국 웹 사이트를 바탕으로 글로벌 웹 사이트를 새롭게 제작했으며, 디자인 측면에서 위화감이 없이 동일한 톤앤매너를 유지하여 사용자 신뢰감을 높일 수 있도록 했습니다.",
    troubleshooting: "플랫폼 간 차이로 인해 일부 기능 구현이 제한되는 상황에서 적극적인 기술 컨설팅을 진행하였고, 대체 기능 개발을 통해 브랜드 일관성과 사용자 경험을 확보하였습니다.",
    demo: "",
    performance: 90,
    isFeatured: true,
    category: "Shopify"
  },
  {
    id: 8,
    title: "Krazy Tiger",
    img: project7,
    desc: "삼양 애니의 Krazy Tiger 웹 사이트를 제작했습니다.",
    tags: ["Liquid", "JavaScript", "HTML5/CSS3", "Photoshop"],
    details: "사용자와의 상호작용을 고려한 인터랙티브 요소를 적용하여 첫 방문부터 강렬한 인상을 줄 수 있도록 제작했습니다.",
    troubleshooting: "영상 콘텐츠를 연동하여 제품에 대한 직관적인 전달력을 높였으며, 구글 애널리틱스를 통해 사용자의 행동 데이터를 수집·분석할 수 있도록 했습니다.",
    demo: "https://www.krazytiger.com/",
    performance: 40,
    category: "Shopify"
  },
  {
    id: 9,
    title: "Kimshardware",
    img: project8,
    desc: "킴스하드웨어의 글로벌 웹 사이트를 제작했습니다.",
    tags: ["Liquid", "JavaScript", "HTML5/CSS3", "Photoshop"],
    details: "문고리 및 부자재 전문 판매 업체인 킴스하드웨어의 글로벌 웹 사이트를 구축했습니다.",
    troubleshooting: "글로벌 고객에게 브랜드 제품을 효과적으로 소개할 수 있도록 상품 설명과 특성을 소개할 수 있는 페이지를 추가했습니다. 제품 특성에 맞는 전시 구조와 검색 기능을 추가하여 구매 편의성을 높였습니다.",
    demo: "",
    performance: 100,
    category: "Shopify"
  },
  {
    id: 10,
    title: "Duorest",
    img: project9,
    desc: "의자 브랜드 듀오백의 글로벌 웹 사이트를 제작했습니다.",
    tags: ["Liquid", "JavaScript", "HTML5/CSS3", "Photoshop"],
    details: "기존에 운영하던 심플한 느낌의 웹 사이트에서 보다 효과적으로 제품을 나타낼 수 있도록 개선하여 제작했습니다.",
    troubleshooting: "디자인은 기존과 비슷한 느낌을 유지하되, 상품이 가진 특성을 한눈에 알아볼 수 있도록 하여 사용자 친화적인 인터페이스를 구성했습니다. 또한 소재와 기능에 따라 제품을 구별할 수 있는 기능을 추가하여 구매 편의성을 높였습니다.",
    demo: "",
    performance: 100,
    category: "Shopify"
  },
  {
    id: 11,
    title: "Danslent",
    img: project10,
    desc: "패션 소품 브랜드 Danslent의 글로벌 웹 사이트를 제작했습니다.",
    tags: ["Liquid", "JavaScript", "HTML5/CSS3", "Photoshop"],
    details: "패션 소품 브랜드이기 때문에 주기 별 상품을 소개할 수 있도록 하는 것에 중점을 두어 제작했습니다.",
    troubleshooting: "새로운 상품이 한눈에 들어올 수 있고, 콜렉션 별로 페이지를 나누어 사용자 편의성을 높였습니다. 또한 구독 기능을 추가하여 원하는 사용자에게 뉴스레터를 받을 수 있도록 하여 이를 통해 글로벌 판매 고객을 높일 수 있도록 했습니다.",
    demo: "https://danselente.com/",
    performance: 90,
    isFeatured: true,
    category: "Shopify"
  },
  {
    id: 12,
    title: "White Rabbit",
    img: project11,
    desc: "미용 소품 브랜드 화이트래빗의 글로벌 웹 사이트 리뉴얼을 진행했습니다.",
    tags: ["Liquid", "JavaScript", "HTML5/CSS3", "Photoshop"],
    details: "기존 카페24 기반의 한국 웹 사이트와는 다른 느낌으로 세련된 느낌을 강조하여 제작했습니다.",
    troubleshooting: "제품의 종류 별로 구별하여 소개하고, 특성에 맞는 전시 구조를 마련하여 사용자 친화적인 인터페이스를 설계하였습니다. 또한 블로그 기능을 추가하여 상품에 담긴 이야기를 고객에게 전달할 수 있도록 했습니다.",
    demo: "",
    performance: 80,
    category: "Shopify"
  },
  {
    id: 13,
    title: "ECOCF",
    img: project12,
    desc: "Spring, OracleDB를 기반으로 한 친환경 소재를 사용한 맞춤 커스텀 가구 웹 사이트를 개발하는 팀 프로젝트를 진행했습니다.",
    tags: ["Spring", "OracleDB", "JavaScript", "HTML5/CSS3", "Photoshop"],
    details: "사용자가 원하는 디자인의 가구를 친환경 소재만을 사용하여 맞춤형으로 컨설팅 해주는 웹 사이트를 기획 후 제작했습니다.",
    troubleshooting: "Spring과 Oracle DataBase를 기반으로 반응형 웹을 제작하여 다양한 환경에서 접속 가능하도록 만들었습니다. 리뷰 기능과 별점을 통해 고객의 만족도를 표현할 수 있고, 관리자 페이지와 고객 페이지를 분류하여 관리에 용이성을 높였습니다.",
    demo: "",
    performance: 70,
    category: "Spring"
  },
  {
    id: 14,
    title: "우리집 동물원",
    img: project13,
    desc: "AR 증강 현실을 활용하여 집에서 동물을 관람할 수 있도록 하는 간편한 동물원 어플을 개발했습니다.",
    tags: ["Unity", "C#", "HTML5/CSS3", "Photoshop"],
    details: "AR 증강 현실을 활용하여 동물원에 가지 않더라도 손쉽게 동물을 관람 및 관찰할 수 있는 어플을 제작했습니다. 주요 기능으로는 AR 카메라를 통한 동물 관람, 동물에 관한 정보를 간단히 기록한 동물 사전이 있습니다.",
    troubleshooting: "Unity 엔진을 기반으로 Vuforia를 연결하여 AR 카메라 기능을 구현했습니다. AR 카메라와 마커를 연결하고 그 마커를 버튼과 연결하여 제작했습니다.",
    demo: "",
    performance: 75,
    category: "Unity"
  }
];