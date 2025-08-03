import React, { useState } from 'react';
import './App.css';

const photoList = [
  "https://mblogthumb-phinf.pstatic.net/MjAyMzA1MzFfMjgg/MDAxNjg1NTA3OTM1NDM0.tq0_bUyNTpm-Yvi8OI-2Bupj8iSQpyFEQWJVKAkU6Qog.oLEDO08sPJ-2HX_syirHSOXPTEodoUHTYyuZgOoK2sIg.JPEG.s5we/7072-041.jpg?type=w800",
  "https://mblogthumb-phinf.pstatic.net/MjAyMzA1MzFfMTI3/MDAxNjg1NTAyMzMwNzA2.e3n2pweLKEkKzNGLfemk76xzRDSq79hYRcNUjQGJD0cg.-IPakZsmnYyOa8vD0QzKW58egige4SSY1z2inTGFGt0g.JPEG.s5we/01.jpg?type=w800",
  "https://mblogthumb-phinf.pstatic.net/MjAyMzA1MzFfODkg/MDAxNjg1NTA0NTk4NDgx.sEX20QB0UxCuu3CvcPoXoWVYvl4Ruel5uybPH8r4MvMg.saj0sy2yndvLUSOzer8Hqjx1rh8s_Oh4YABc9JEHr-Yg.JPEG.s5we/70%EB%85%84%EB%8C%80_%EB%AA%85%EB%8F%99_%ED%95%9C%EA%B5%AD%EC%9D%80%ED%96%89_%EC%95%9E_%EA%B1%B0%EB%A6%AC_%EB%AA%A8%EC%8A%B5.jpg?type=w800",
  "https://mblogthumb-phinf.pstatic.net/MjAyMzA1MzFfMjI5/MDAxNjg1NTA1MzY3OTk0.Vzf_8nAoGMXOGzYrjyEIGRRH8SnWA_DBXJqG3OcIwNog.oWAI_fr37fnpdtwdPnNq_ffS6eEUbxqrZD2yWzOw_kog.JPEG.s5we/7072-043.jpg?type=w800"
];

const getRandomPhoto = () => {
  const randomIndex = Math.floor(Math.random() * photoList.length);
  return photoList[randomIndex];
};

const urlList = ["allinonenews", "allinoneshopping", "allinonemusic", ""];

function next(index, setIndex) {
  const nextIndex = (index + 1) % urlList.length;
  setIndex(nextIndex);
}

function App() {
  const [photo] = useState(getRandomPhoto()); 
  const [index, setIndex] = useState(0);
  const url = urlList[index];

  const [customTitle, setCustomTitle] = useState('');
  const [customDomain, setCustomDomain] = useState('');

  const add = () => {
    const title = prompt("이름을 입력하세요:");
    const domain = prompt("url을 입력하세요:");

    if (title && domain) {
      setCustomTitle(title);
      setCustomDomain(domain);
    }
  };

  return (
    <>
      <nav>
        <div><a href="https://noinstagram.vercel.app/">홈</a></div>
        <div><a href="https://bamtolcompany.github.io">검색</a></div>
        <div><a href="https://bamtolcompany.github.io/allinonenews">뉴스</a></div>
        <div><a href="https://bamtolcompany.github.io/allinoneshopping/">쇼핑</a></div>
        <div><a href="https://finance.naver.com/">증권</a></div>
        <div><a href="https://noinstagram.vercel.app/support.html/">도움말</a></div>
        <div><a href="https://noinstagram.vercel.app/explanation.html">사이트 소개</a></div>
        <div><a href="https://noinstagram.vercel.app/privacy.html">개인정보 처리방침</a></div>
      </nav>

      <header>
        <h1>老인스타그램</h1>
      </header>
      <div className='menu-icon'>
    <a href="https://noinstagram.vercel.app/menu.html">
        <img src='https://i.namu.wiki/i/p3hKSRncBG8Fab1I3zdhhEOgxhcjxYQ7z0R5Zwi4jnLmZwXNJBFEI5UDO0MSCraOTze3XKUzdOZJdjDtc5hCDA.svg'/>
    </a>
      </div>
      <main>
        <h2>네이버 검색</h2>
        <input
          type="search"
          placeholder="네이버에서 검색하세요"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && e.target.value.trim() !== '') {
              const query = encodeURIComponent(e.target.value.trim());
              const naverSearchUrl = `https://search.naver.com/search.naver?query=${query}`;
              window.open(naverSearchUrl, '_blank');
            }
          }}
        />
        <h2 className='service'>추천 서비스</h2>
        <div className="sec">
          <a href="https://50plus.or.kr/">일자리 찾기</a>
          <a href="https://edu.nid.or.kr/common/greeting.do">치매 예방</a>
          <a href="https://www.디지털배움터.kr/entry.do">디지털 학습</a>
          <a href="https://www.50plus.or.kr/detail.do?id=3192181">취미 찾기</a>
        </div>

        <div className='realtime-search'>
          <p>옛날 사진</p>
          <img src={photo} alt="랜덤 옛날 사진" />
        </div>

        <div className='st'>
          <p>바로가기</p>
          <a href='https://naver.com'>바로가기 - 네이버 | </a>
          <a href='https://youtube.com'>바로가기 - 유튜브 | </a>
          {customDomain && customTitle && (
            <a href={customDomain} target="_blank" rel="noopener noreferrer">
              바로가기 - {customTitle}
            </a>
          )}
          <button onClick={add}>&#8853;바로가기 추가</button>
        </div>

        <iframe
          src={`https://bamtolcompany.github.io/${url}`}
          title="bamtolcompany iframe"
          style={{ width: "100%", height: "500px", border: "none" }}
        />
        <button onClick={() => next(index, setIndex)}>다음</button>
      </main>

      <footer>
        <p>&copy; bamtolcompany. All rights reserved. 노인스타그램 웹버전</p>
      </footer>
    </>
  );
}

export default App;
