export const ROLE_CONFIG = {
  frontend: {
    heroTitle: '프론트엔드 개발자 김한솔',
    heroKeyword: 'Front-end Developer',

    aboutIntro:
      '꾸준한 과정을 통해 습관처럼 성장하는, 어제보다 나은 오늘의 프론트엔드 개발자를 목표로 합니다.',

    projectFocus(project) {
      return project.desc;
    },

    techPriority: ['개발 기술', '마크업 및 디자인', '관리 및 협업'],

    visibleCategories: null,
  },

  publisher: {
    heroTitle: '웹 퍼블리셔 김한솔',
    heroKeyword: 'Web Publisher',

    aboutIntro:
      '디자이너와 개발자를 연결하고, 사용자 중심의 반응형 웹 퍼블리싱과 유지보수를 경험한 퍼블리셔입니다.',

    projectFocus(project) {
      return project.troubleshooting;
    },

    techPriority: ['마크업 및 디자인', '관리 및 협업', '개발 기술'],

    visibleCategories: ['Shopify'],
  },
};
