import React from 'react';
import Head from 'next/head';

const Community = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>커뮤니티 - Teachers AI</title>
        <meta name="description" content="선생님들을 위한 커뮤니티와 소통 공간" />
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
      <main className="flex-1">
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">커뮤니티</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              선생님들을 위한 소통과 정보 공유의 공간입니다.
            </p>
          </div>
        </section>
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* 카카오톡 오픈 카톡방 */}
              <a href="https://open.kakao.com/o/gubGYQ7g" target="_blank" rel="noopener noreferrer" className="block group">
                <div className="bg-yellow-100 rounded-xl shadow-md overflow-hidden transform transition duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  <div className="h-48 flex items-center justify-center">
                    <span className="text-6xl mb-4">💬</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-800 mb-2">카카오톡 오픈 카톡방</h3>
                    <p className="text-gray-600 mb-4">
                      선생님들과 함께 AI 도구 활용법을 공유하고 질문할 수 있는 커뮤니티입니다. 다양한 교육 아이디어와 팁을 나눠보세요.
                    </p>
                    <div className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-800">
                      참여하기 <span className="ml-2 transition duration-300 group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </div>
              </a>
              {/* 문의하기 */}
              <a href="https://www.notion.so/1b210244f997802f8557c739dd3986f6" target="_blank" rel="noopener noreferrer" className="block group">
                <div className="bg-green-100 rounded-xl shadow-md overflow-hidden transform transition duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  <div className="h-48 flex items-center justify-center">
                    <span className="text-6xl mb-4">📞</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-gray-800 mb-2">문의하기</h3>
                    <p className="text-gray-600 mb-4">
                      서비스 이용 중 궁금한 점이나 건의사항이 있으신가요? 언제든지 문의해주시면 빠르게 답변해드리겠습니다.
                    </p>
                    <div className="flex items-center text-indigo-600 font-semibold group-hover:text-indigo-800">
                      문의하기 <span className="ml-2 transition duration-300 group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </div>
              </a>
              {/* 더 많은 서비스 준비 중 */}
              <a href="https://pebble-stallion-abb.notion.site/1e310244f99780db82b5f36ffb6f71d1?pvs=4" target="_blank" rel="noopener noreferrer" className="block group">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-md overflow-hidden group">
                  <div className="h-48 flex items-center justify-center">
                    <span className="text-6xl text-white mb-4">✨</span>
                  </div>
                  <div className="p-6 text-white">
                    <h3 className="font-bold text-xl mb-2">더 많은 서비스 준비 중</h3>
                    <p className="mb-4 text-indigo-100">
                      선생님들을 위해 더 다양한 AI 도구들이 곧 추가될 예정입니다. 기대해주세요!
                    </p>
                    <div className="flex items-center font-semibold text-white group-hover:underline">
                      업데이트 소식 받기 <span className="ml-2 transition duration-300 group-hover:translate-x-1">→</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Community; 