export type ImgType = {
  title: string;
  content?: React.ReactNode;
  tag: string;
  url: string;
};
export type FilterType = { name: string; status: boolean };
export const imgs: ImgType[] = [
  {
    title: "갈미 어린이공원 지하 공영주차장 조성공사",
    content: (
      <>
        <p>공사현장 : 경기도 의왕시 내손동</p>
        <p>공사기간 : 2020.06.29~2021.06.28</p>
        <div>
          <h4>개요 </h4>
          <p>- 대지면적 : 1,505.10M2 - 연면적 :2,755.97M2</p>
          <p>- 구조 : 철근</p>
          <p>콘크리트 구조 - 건축규모 : 지하 2층, 지상 1층</p>
        </div>
      </>
    ),
    tag: "건축",
    url: "/static/business/architecture/갈미_어린이공원_지하_공영주차장.jpg",
  },
  {
    title: "과천 새술막길 보수공사",
    content: (
      <>
        <p>공사현장 : 경기도 과천시 중앙동</p>
        <p>공사기간 : 2020.06.02~2020.11.02</p>
        <div>
          <h4>개요 </h4>
          <p>- 차도 및 인도 보수공사 </p>
        </div>
      </>
    ),
    tag: "토목",
    url: "/static/business/civil/과천_새술막길_보수.png",
  },
  {
    title: "의정부 청사 다목적시설 조성공사",
    content: (
      <>
        <p>공사현장 : 경기도 의정부시 시민로</p>
        <p>공사기간 : 2019.11.14~2020.04.15</p>
      </>
    ),
    tag: "건축",
    url: "/static/business/architecture/의정부청사_다목적시설.jpg",
  },
  {
    title: "고양 향동 공공주택지구 3-1근생 신축공사 청우프라자 신축공사",
    content: (
      <>
        <p>공사현장 : 경기 고양시 덕양구 꽃내음1길 21</p>
        <p>공사기간 : 2019.08.09~2020.06.30</p>
        <div>
          <h4>개요 </h4>
          <p>- 대지면적 : 912.6M2</p>
          <p>- 연면적 : 3,564M2 </p>
          <p>- 구조 : 철근 콘크리트 구조</p>
          <p>- 건축규모 : 지하 2층, 지상 5층</p>
        </div>
      </>
    ),
    tag: "건축",
    url: "/static/business/architecture/청우프라자.jpg",
  },
  {
    title: "일월초등학교 교사동 내진보강공사",
    content: (
      <>
        <p>공사현장 : 경기도 수원시 권선구</p>

        <p>공사기간 : 2019.12.24~2020.03.04</p>
        <div>
          <h4>개요</h4>
          <p>- 교사동 구조 보강공사</p>
        </div>
      </>
    ),
    tag: "시설물",
    url: "/static/business/facilities/일월초등학교_교사동.jpg",
  },
  {
    title: "경기도 하남시 단독주택 신축공사",
    content: (
      <>
        <p>대지위치 : 경기도 하남시 덕풍동 913-2</p>
        <div>
          <h4>분양면적</h4>
          <p>세대수 : 5</p>
        </div>
      </>
    ),
    tag: "주택",
    url: "/static/business/house/덕풍동_913-2.jpg",
  },
  {
    title: "경기도 하남시 단독주택 신축공사 (R6-8-4)",
    content: (
      <>
        <p>대지위치 : 경기도 하남시 덕풍동 891-4</p>
        <div>
          <h4>분양면적</h4>
          <p>세대수 : 5 </p>
        </div>
      </>
    ),
    tag: "주택",
    url: "/static/business/house/덕풍동_891-4.jpg",
  },
  {
    title: "설악도시계획도로 중로2-2호선 개설공사",
    content: (
      <>
        <p>공사현장 : 경기도 가평군 설악면</p>
        <p>공사기간 : 2019.05.08~2019.10.04</p>
        <div>
          <h4>개요</h4>
          <p>- 도로개설공사</p>
        </div>
      </>
    ),
    tag: "토목",
    url: "/static/business/civil/설악도시계획도로_중로2-2호선_개설공사.jpg",
  },
  {
    title: "경기도 하남시 단독주택 신축공사 (R6-8-3)",
    content: (
      <>
        <p>대지위치 : 경기도 하남시 덕풍동 891-2</p>
        <div>
          <h4>분양면적</h4>
          <p>세대수 : 5</p>
        </div>
      </>
    ),
    tag: "주택",
    url: "/static/business/house/덕풍동_891-2.png",
  },
  {
    title: "경기도 하남시 단독주택 신축공사 (R6-36-1)",
    content: (
      <>
        <p>대지위치 : 경기도 하남시 덕풍동 913</p>
        <div>
          <h4>분양면적</h4>
          <p>세대수 : 5</p>
        </div>
      </>
    ),
    tag: "주택",
    url: "/static/business/house/덕풍동_913-2.jpg",
  },
  {
    title: "의정부 동두천시 사회인 야구장 건립공사",
    content: (
      <>
        <p>공사현장 :경기도 동두천시 탑동동</p>
        <p>공사기간 : 2017.12.01~2018.10.17</p>
        <div>
          <h4>개요 </h4>
          <p>- 야구장 신축공사</p>
        </div>
      </>
    ),
    tag: "토목",
    url: "/static/business/civil/의정부_동두천시_사회인_야구장.jpg",
  },
  {
    title: "경기도 하남시 다가구주택 신축공사 (R6-16-3)",
    content: (
      <>
        <p>대지위치 : 경기도 하남시 덕풍동 902-2</p>
        <div>
          <h4>분양면적</h4>
          <p>세대수 : 5</p>
        </div>
      </>
    ),
    tag: "주택",
    url: "/static/business/house/덕풍동_902-2.png",
  },
  {
    title: "경기도 하남시 다가구주택 신축공사 (R6-32-2)",
    content: (
      <>
        <p>대지위치 : 경기도 하남시 덕풍동 852-1</p>
        <div>
          <h4>분양면적</h4>
          <p>세대수 : 5</p>
        </div>
      </>
    ),
    tag: "주택",
    url: "/static/business/house/덕풍동_852-1.png",
  },
  {
    title: "경기도 하남시 다가구주택 신축공사 (미사R3-8-2)",
    content: (
      <>
        <p>대지위치 : 경기도 하남시 망월동 868-1</p>
        <div>
          <h4>분양면적</h4>
          <p>세대수 : 5</p>
        </div>
      </>
    ),
    tag: "주택",
    url: "/static/business/house/망월동_868-1.png",
  },
  {
    title: "경기도 하남시 다가구주택 신축공사 (R6-3-1)",
    content: (
      <>
        <p>대지위치 : 경기도 하남시 덕풍동 858-1</p>
        <div>
          <h4>분양면적</h4>
          <p>세대수 : 5</p>
        </div>
      </>
    ),
    tag: "주택",
    url: "/static/business/house/덕풍동_858-1.png",
  },
  {
    title: "쉐바사옥 신축공사",
    content: (
      <>
        <p>공사현장 : 경기도 양평군 서종면 수능리</p>
        <p>공사기간 : 2012.10.15~2013.04.30</p>
      </>
    ),
    tag: "건축",
    url: "/static/business/architecture/쉐바사옥.jpg",
  },
  {
    title: "경기도 하남시 다가구주택 신축공사 (R6-30-2)",
    content: (
      <>
        <p>대지위치 : 경기도 하남시 덕풍동 850-1</p>
        <div>
          <h4>분양면적</h4>
          <p>세대수 : 5</p>
        </div>
      </>
    ),
    tag: "주택",
    url: "/static/business/house/덕풍동_850-1.png",
  },
  {
    title: "경기도 하남시 다가구주택 신축공사 (R6-31-3)",
    content: (
      <>
        <p>대지위치 : 경기도 하남시 덕풍동 854</p>
        <div>
          <h4>분양면적</h4>
          <p>세대수 : 5</p>
        </div>
      </>
    ),
    tag: "주택",
    url: "/static/business/house/덕풍동_854.png",
  },
  {
    title: "경기도 하남시 다가구주택 신축공사",
    content: (
      <>
        <p>대지위치 : 경기도 하남시 덕풍동 854-2</p>
        <div>
          <h4>분양면적</h4>
          <p>세대수 : 5</p>
        </div>
      </>
    ),
    tag: "주택",
    url: "/static/business/house/덕풍동_854-2.png",
  },
  {
    title: "서석면 보건지소 신축공사",
    content: (
      <>
        <p>공사현장 : 강원 홍천구 서석면 풍암리</p>
        <p>공사기간 : 2008.11.28~2009.08.07</p>
      </>
    ),
    tag: "건축",
    url: "/static/business/architecture/서석면_보건지소.jpg",
  },
  {
    title: "경기도 하남시 단독주택 신축공사 (773-3번지)",
    content: (
      <>
        <p>대지위치 : 경기도 하남시 덕풍동 773-3번지</p>
        <div>
          <h4>분양면적</h4>
          <p>세대수 : 2</p>
        </div>
      </>
    ),
    tag: "주택",
    url: "/static/business/house/덕풍동_773-3.jpg",
  },
  {
    title: "청우엘로이 다세대 신축공사",
    content: (
      <>
        <p>대지위치 : 경기도 광주시 오포읍 신현리 504-26</p>
        <div>
          <h4>분양면적</h4>
          <p>세대수 : 20</p>
        </div>
      </>
    ),
    tag: "주택",
    url: "/static/business/house/청우엘로이.jpg",
  },
];
