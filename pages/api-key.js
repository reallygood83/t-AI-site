import React from 'react';
import Head from 'next/head';

const APIKey = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>API 발급받기 - Teachers AI</title>
        <meta name="description" content="Google AI Studio에서 Gemini API를 발급받는 방법을 안내합니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 네비게이션 바 */}
      <nav className="bg-indigo-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-3xl font-bold mr-2">👨‍🏫</div>
            <a href="/" className="text-2xl font-extrabold">Teachers <span className="text-yellow-300">AI</span></a>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-yellow-200">서비스 소개</a>
            <a href="/ai-tools" className="hover:text-yellow-200">AI 도구</a>
            <a href="/community" className="hover:text-yellow-200">커뮤니티</a>
            <a href="/api-key" className="hover:text-yellow-200">API 발급</a>
            <a href="https://www.notion.so/1b210244f997802f8557c739dd3986f6" className="hover:text-yellow-200">문의하기</a>
          </div>
          <div>
            <button className="bg-white text-indigo-600 px-4 py-2 rounded-full font-bold hover:bg-yellow-200 transition duration-300">
              시작하기
            </button>
          </div>
        </div>
      </nav>

      {/* API 발급 안내 섹션 */}
      <section className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Gemini API 발급받기</h1>
          <p className="text-gray-600 mb-8">
            Google AI Studio에서 Gemini API를 발급받는 방법을 단계별로 안내해드립니다.
            아래 가이드를 따라 진행해주세요.
          </p>
          <div className="text-center mb-8">
            <a 
              href="https://aistudio.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-bold hover:bg-indigo-700 transition duration-300"
            >
              발급 사이트 바로가기 →
            </a>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden" style={{height: "800px"}}>
            <iframe 
              src="https://app.tango.us/app/embed/ea16fb5b-d2d8-4863-b467-68d53f9ea746" 
              style={{minHeight: "800px"}}
              sandbox="allow-scripts allow-top-navigation-by-user-activation allow-popups allow-same-origin" 
              security="restricted" 
              title="제미나이 API 생성하기 via Google AI Studio" 
              width="100%" 
              height="100%" 
              referrerPolicy="strict-origin-when-cross-origin" 
              frameBorder="0" 
              webkitallowfullscreen="webkitallowfullscreen" 
              mozallowfullscreen="mozallowfullscreen" 
              allowFullScreen={true}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default APIKey; 