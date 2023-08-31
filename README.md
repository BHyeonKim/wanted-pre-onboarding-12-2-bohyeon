# TODO

### 만든 사람

김보현


### 프로젝트 실행 방법

npm install && npm run dev

### 배포 링크
https://bespoke-maamoul-dfa5a5.netlify.app/

### 구현사항
1. 무한 스크롤


https://github.com/BHyeonKim/wanted-pre-onboarding-12-2-bohyeon/assets/46583212/002322ea-8a93-4c5a-b470-1b3564d1f85e



2. 상세페이지
<img width="619" alt="스크린샷 2023-09-01 오전 2 07 47" src="https://github.com/BHyeonKim/wanted-pre-onboarding-12-2-bohyeon/assets/46583212/c45e5da3-83ce-458e-863d-0038484193ba">


### 사용 기술 스택

- bundler: vite
- language: typescript, scss
- library: react, octokit, classnames, react markdown, react-syntax-highlighter, github-markdown-css, redux toolkit



### Dependencies

redux toolkit: 1.9.5,
axios: 1.5.0,
classnames: 2.3.2,
github-markdown-css: 5.2.0,
octokit: 3.1.0,
react: 18.2.0,
react-dom: 18.2.0,
react-markdown: 8.0.7,
react-redux: 8.1.2,
react-router-dom: 6.15.0,
react-syntax-highlighter: 15.5.0

### Dev Dependencies

@octokit/types: 11.1.0,
@commitlint/cli: 17.7.1,
@commitlint/config-conventional: 17.7.0,
@types/node: 20.5.7,
@types/react: 18.2.15,
@types/react-dom: 18.2.7,
@types/react-syntax-highlighter: 15.5.7,
@typescript-eslint/eslint-plugin: 6.0.0,
@typescript-eslint/parser: 6.0.0,
@vitejs/plugin-react: 4.0.3,
commitlint: 17.7.1,
eslint: 8.45.0,
eslint-config-prettier: 9.0.0,
eslint-plugin-import: 2.28.1,
eslint-plugin-jsx-a11y: 6.7.1,
eslint-plugin-prettier: 5.0.0,
eslint-plugin-react: 7.33.2,
eslint-plugin-react-hooks: 4.6.0,
eslint-plugin-react-refresh: 0.4.3,
eslint-plugin-simple-import-sort: 10.0.0,
eslint-plugin-unused-imports: 3.0.0,
husky: 8.0.3,
lint-staged: 14.0.1,
prettier: 3.0.2,
sass: 1.66.1,
stylelint: 15.10.3,
stylelint-config-recess-order: 4.3.0,
stylelint-config-standard: 34.0.0,
stylelint-config-standard-scss: 10.0.0,
stylelint-declaration-strict-value: 1.9.2,
stylelint-scss: 5.1.0,
typescript: 5.0.2,
vite: 4.4.5,
vite-plugin-svgr: 3.2.0,
vite-tsconfig-paths: 4.2.0

### Project Structure
      📦src
      ┣ 📂assets
      ┃ ┣ 📂fonts
      ┃ ┣ 📂pngs
      ┃ ┗ 📂svgs
      ┣ 📂components
      ┃ ┣ 📂Banner
      ┃ ┣ 📂ErrorBoundary
      ┃ ┣ 📂IssueItem
      ┃ ┣ 📂IssueList
      ┃ ┣ 📂Layout
      ┃ ┗ 📂LoadingSpinner
      ┣ 📂hooks
      ┣ 📂pages
      ┃ ┣ 📂DetailPage
      ┃ ┗ 📂IssueListPage
      ┣ 📂redux
      ┣ 📂services
      ┣ 📂styles
      ┣ 📂types
      ┣ 📂utils
      ┣ 📜App.tsx
      ┣ 📜main.tsx
      ┗ 📜vite-env.d.ts
