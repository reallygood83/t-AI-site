import React from 'react';
import Head from 'next/head';

const AiTools = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>AI 도구 - Teachers AI</title>
        <meta name="description" content="교사를 위한 다양한 AI 도구를 한 곳에서 만나보세요." />
      </Head>
      <main className="flex-1">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12 text-gray-800">AI <span className="text-indigo-600">도구</span></h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              선생님들을 위한 다양한 AI 기반 교육 도구를 한 곳에서 편리하게 이용하세요.
            </p>
          </div>
        </section>
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI 퀴즈 생성기 */}
              <a href="https://script.google.com/macros/s/AKfycbxQSnmZ96aPFwH_Vns3p2dsTyrk9xifsqZgRXzACiKPqqUHvflSOQZJAFPiv3GkkuLj/exec" target="_blank" rel="noopener noreferrer" className="block group">
                <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  <div className="h-48 bg-indigo-100 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img src="/quiz.png" alt="AI 퀴즈 생성기" className="w-16 h-16 object-contain" />
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
              <a href="https://script.google.com/macros/s/AKfycbztKlHC2e49fhtDJKA9DXOBWoZHDlWtPo7xNji4v2rJ5elrbOCBN3ePs1o43uEBAdgpQQ/exec" target="_blank" rel="noopener noreferrer" className="block group">
                <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                  <div className="h-48 bg-purple-100 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img src="/survey.png" alt="AI 설문 생성기" className="w-16 h-16 object-contain" />
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
                      <img src="/notice.png" alt="AI 통신문 생성기" className="w-16 h-16 object-contain" />
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
    </div>
  );
};

export default AiTools; 