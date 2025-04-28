import React, { useState } from 'react';
import Head from 'next/head';

const AiTools = () => {
  const [iframeUrl, setIframeUrl] = useState('');
  const [showIframe, setShowIframe] = useState(false);

  const openIframe = url => {
    setIframeUrl(url);
    setShowIframe(true);
  };

  const closeIframe = () => {
    setShowIframe(false);
    setIframeUrl('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>AI 도구 - Teachers AI</title>
        <meta name="description" content="교사를 위한 다양한 AI 도구를 한 곳에서 만나보세요." />
      </Head>
      {/* 네비게이션 바 */}
      <nav className="bg-indigo-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-3xl font-bold mr-2">👨‍🏫</div>
            <h1 className="text-2xl font-extrabold">Teachers <span className="text-yellow-300">AI</span></h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-yellow-200">서비스 소개</a>
            <a href="/ai-tools" className="hover:text-yellow-200">AI 도구</a>
            <a href="/community" className="hover:text-yellow-200">커뮤니티</a>
            <a href="https://www.notion.so/1b210244f997802f8557c739dd3986f6" className="hover:text-yellow-200">문의하기</a>
          </div>
          <div>
            <button className="bg-white text-indigo-600 px-4 py-2 rounded-full font-bold hover:bg-yellow-200 transition duration-300">
              시작하기
            </button>
          </div>
        </div>
      </nav>
      {/* iframe 모달 */}
      {showIframe && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl h-[80vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <span className="font-bold">외부 서비스</span>
              <button onClick={closeIframe} className="text-gray-500 hover:text-gray-700">닫기</button>
            </div>
            <div className="flex-1 overflow-hidden">
              <iframe src={iframeUrl} className="w-full h-full" title="외부 서비스" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" />
            </div>
          </div>
        </div>
      )}
      <main className="flex-1">
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">AI <span className="text-indigo-600">도구</span></h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              선생님들을 위한 다양한 AI 기반 교육 도구를 한 곳에서 편리하게 이용하세요.
            </p>
          </div>
        </section>
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI 퀴즈 생성기 */}
              <a href="#" onClick={e => {e.preventDefault(); openIframe('https://script.google.com/macros/s/AKfycbxQSnmZ96aPFwH_Vns3p2dsTyrk9xifsqZgRXzACiKPqqUHvflSOQZJAFPiv3GkkuLj/exec');}} className="block group">
                <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  <div className="h-48 bg-indigo-100 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl mb-4">📝</span>
                    </div>
                    <div className="absolute top-0 right-0 bg-indigo-500 text-white py-1 px-3 text-sm rounded-bl-lg">
                      인기
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-800 mb-2">AI 퀴즈 생성기</h3>
                    <p className="text-gray-600 mb-4">
                      원하는 주제와 난이도에 맞는 맞춤형 문제를 AI가 자동으로 생성해 드립니다. 객관식, 주관식, OX 문제 등 다양한 형태의 퀴즈를 손쉽게 만들 수 있습니다.
                    </p>
                    <div className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-800">
                      바로가기 <span className="ml-2 transition duration-300 group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </div>
              </a>
              {/* AI 설문 생성기 */}
              <a href="#" onClick={e => {e.preventDefault(); openIframe('https://script.google.com/macros/s/AKfycbztKlHC2e49fhtDJKA9DXOBWoZHDlWtPo7xNji4v2rJ5elrbOCBN3ePs1o43uEBAdgpQQ/exec');}} className="block group">
                <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  <div className="h-48 bg-purple-100 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl mb-4">📊</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-800 mb-2">AI 설문 생성기</h3>
                    <p className="text-gray-600 mb-4">
                      학생과 학부모를 위한 맞춤형 설문지를 손쉽게 제작할 수 있습니다. 다양한 질문 유형과 형식을 AI가 제안해 빠르게 설문을 완성하세요.
                    </p>
                    <div className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-800">
                      바로가기 <span className="ml-2 transition duration-300 group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </div>
              </a>
              {/* AI 통신문 생성기 */}
              <div className="block group cursor-not-allowed">
                <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 opacity-75">
                  <div className="h-48 bg-blue-100 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl mb-4">✉️</span>
                    </div>
                    <div className="absolute top-0 right-0 bg-yellow-500 text-white py-1 px-3 text-sm rounded-bl-lg">
                      준비중
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-800 mb-2">AI 통신문 생성기</h3>
                    <p className="text-gray-600 mb-4">
                      학부모님께 보내는 가정통신문을 AI가 작성해 드립니다. 행사 안내, 교육과정 안내 등 상황에 맞는 맞춤형 통신문을 빠르게 생성하세요.
                    </p>
                    <div className="flex items-center text-indigo-600 font-semibold">
                      준비중 <span className="ml-2">...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-gray-300 py-8 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2025 안양 박달초 김문정 ㅣ <a href="https://www.youtube.com/@%EB%B0%B0%EC%9B%80%EC%9D%98%EB%8B%AC%EC%9D%B8-p5v" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline">유튜브 배움의 달인</a></p>
        </div>
      </footer>
    </div>
  );
};

export default AiTools; 