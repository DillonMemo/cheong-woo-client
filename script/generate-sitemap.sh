# 여러 개의 스크립트를 쉽게 실행하기 위해서 쉘 스크립트를 만듭니다.
# generate-sitemap.sh

# 기존에 있던 퍼블릭 폴더 제거하고 빈 디렉토리를 만듦
rm -rf public
mkdir public
# 퍼블릭 폴더로 이동
cd public
# sitemap 폴더 생성
mkdir sitemap

# 스크립트 폴더로 이동해서 아래의 순서대로 실행
cd ..
cd script

# robots.txt 생성
node ./robots.js

# 정적 sitemap 생성
echo "정적 sitemap 생성중.."
node ./sitemap-common.js
echo "정적 sitemap 생성 완료!"

#동적 sitemap 생성
# echo "동적 sitemap 조회 및 생성중.."
# node ./sitemap-posts.js
# echo "동적 sitemap 생성 완료!"

# sitemap 압축 및 병합
echo "sitemap gzip 압축중"
node ./compress.js
node ./sitemap.js
echo "sitemap 압축 완료"

# Google 서치콘솔에 sitemap 업데이트 핑 전송
curl http://google.com/ping?sitemap=https://cheongwoo.kr/sitemap.xml
echo "\nGoogle에 sitemap 핑 전송"

# Naver 서치어드바이저에 sitemap 업데이트 핑 전송
# curl https://apis.naver.com/crawl/nsyndi/v2?ping_url=https://servetobottom.co.kr/sitemap.xml
# echo "\nNaver에 sitemap 핑 전송"