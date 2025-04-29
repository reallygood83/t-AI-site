import React from 'react';
import Head from 'next/head';

const SetupGuide = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>사용 설정 안내 - Teachers AI</title>
        <meta name="description" content="Teachers AI 서비스 사용을 위한 초기 설정 안내" />
      </Head>

      {/* 네비게이션 바 */}
      <nav className="bg-indigo-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="flex items-center hover:text-yellow-200">
            <div className="text-3xl font-bold mr-2">👨‍🏫</div>
            <h1 className="text-2xl font-extrabold">Teachers <span className="text-yellow-300">AI</span></h1>
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="hover:text-yellow-200">서비스 소개</a>
            <a href="/ai-tools" className="hover:text-yellow-200">AI 도구</a>
            <a href="/community" className="hover:text-yellow-200">커뮤니티</a>
            <a href="/api-key" className="hover:text-yellow-200">API 발급</a>
            <a href="/setup-guide" className="hover:text-yellow-200">사용 설정</a>
            <a href="https://www.notion.so/1b210244f997802f8557c739dd3986f6" className="hover:text-yellow-200">문의하기</a>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Teachers AI <span className="text-indigo-600">사용 설정 안내</span></h1>
            
            <div className="max-w-3xl mx-auto mb-8 bg-yellow-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4 text-gray-800">📢 사용 설정이 필요한 이유</h2>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Teachers AI는 <strong>완전 무료</strong>로 제공되며, 이를 위해 사용자 개인의 Gemini API를 활용합니다.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>본인의 Google 계정으로 즉시 접속할 수 있도록 <strong>최초 1회</strong>의 접속 허가가 필요합니다.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Google 계정당 <strong>1회만 설정</strong>하면 되며, 이후에는 별도의 설정 없이 바로 사용 가능합니다.</span>
                </li>
              </ul>
            </div>

            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 border-b">
                <h2 className="text-2xl font-bold text-gray-800">상세 설정 방법</h2>
              </div>
              <div className="aspect-[4/3] w-full">
                <iframe 
                  src="https://app.tango.us/app/embed/b41e14a4-3b0a-44f0-9569-2bd7bbd23383" 
                  style={{ minHeight: '640px' }}
                  sandbox="allow-scripts allow-top-navigation-by-user-activation allow-popups allow-same-origin"
                  security="restricted"
                  title="AI 도구 최초 사용 설정 안내"
                  width="100%"
                  height="100%"
                  referrerPolicy="strict-origin-when-cross-origin"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2025 안양 박달초 김문정 ㅣ <a href="https://www.youtube.com/@%EB%B0%B0%EC%9B%80%EC%9D%98%EB%8B%AC%EC%9D%B8-p5v" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline">유튜브 배움의 달인</a></p>
        </div>
      </footer>
    </div>
  );
};

export default SetupGuide; 