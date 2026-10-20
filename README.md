# KDOB Journal — iPhone publishing starter

구성: Eleventy + GitHub + Cloudflare Pages + Decap CMS/Decap Turbo

## 1. GitHub에 올리기
1. GitHub에서 새 repository를 만듭니다. 예: `kdob-journal`
2. 이 ZIP의 압축을 풀고 **폴더 안의 파일 전체**를 repository 루트에 업로드합니다.
3. 기본 branch는 `main`으로 둡니다.

## 2. Cloudflare Pages 연결
1. Cloudflare Dashboard > Workers & Pages > Create > Pages > Connect to Git
2. GitHub 연결 후 `kdob-journal` repository 선택
3. Build command: `npm run build`
4. Build output directory: `_site`
5. Deploy

배포 후 `https://xxxxx.pages.dev` 형태의 주소가 생깁니다.

## 3. Decap Turbo 연결 (아이폰 관리자 로그인용)
1. Decap Turbo에 가입합니다.
2. Organization 생성 > GitHub 연결 > 해당 repository만 허용
3. Site를 하나 생성하고 repository를 연결합니다.
4. 발급된 **Turbo Site ID**를 복사합니다.
5. GitHub에서 `src/admin/config.yml`을 열고
   `REPLACE_WITH_YOUR_TURBO_SITE_ID`를 실제 Site ID로 교체해 Commit합니다.
6. Cloudflare Pages가 자동 재배포합니다.

## 4. 아이폰에서 글 올리기
Safari에서 아래 주소로 접속합니다.

`https://내사이트주소.pages.dev/admin/`

로그인 후:
- 글 > 새 글
- 제목/분류/대표사진 입력
- 본문 작성
- 본문 툴바의 이미지 버튼으로 사진 추가
- Publish

Publish하면 글과 사진이 GitHub repository에 저장되고, Cloudflare Pages가 자동으로 사이트를 다시 빌드합니다.

## 5. 사진 저장 위치
CMS에서 올린 사진은 `src/uploads/`에 저장됩니다.
글은 `src/posts/`에 Markdown(.md) 파일로 저장됩니다.

## 6. 로컬 미리보기(선택)
Node.js가 설치된 PC에서:

```
npm install
npm start
```

브라우저에서 안내되는 localhost 주소로 확인합니다.
