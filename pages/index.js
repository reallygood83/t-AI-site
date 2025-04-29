import React from 'react';
import Head from 'next/head';

const TeachersAI = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Head>
        <title>Teachers AI - 선생님들을 위한 AI 교육 도구</title>
        <meta name="description" content="교사를 위한 가장 신뢰할 수 있는 AI 플랫폼으로 쉽고 빠르게 교육 자료를 만들어보세요." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 네비게이션 바 */}
      <nav className="bg-indigo-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-3xl font-bold mr-2">👨‍🏫</div>
            <h1 className="text-2xl font-extrabold">Teachers <span className="text-yellow-300">AI</span></h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#intro" className="hover:text-yellow-200">서비스 소개</a>
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

      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              선생님들을 위한<br/>
              <span className="text-yellow-300">AI</span> 교육 도구
            </h2>
            <p className="text-xl mb-8">
              교사를 위한 가장 신뢰할 수 있는 AI 플랫폼으로 
              쉽고 빠르게 교육 자료를 만들어보세요.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-indigo-700 px-6 py-3 rounded-full font-bold hover:bg-yellow-200 transition duration-300 flex items-center justify-center" onClick={() => window.location.href='/ai-tools'}>
                지금 시작하기 →
              </button>
              <button onClick={() => window.location.href='/api-key'} className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-bold hover:bg-white hover:text-indigo-700 transition duration-300 flex items-center justify-center">
                API 발급받기
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden flex items-center justify-center min-h-[300px]">
              <img src="/main_image.png" alt="Teachers AI 메인 이미지" className="w-full h-auto object-cover max-h-[400px]" />
            </div>
          </div>
        </div>
      </section>

      {/* 소개 섹션 */}
      <section id="intro" className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">교사를 위한 <span className="text-indigo-600">AI 서비스</span></h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            교육 현장에서 필요한 다양한 도구를 AI의 도움으로 간편하게 만들어보세요.
            Google Gemini API를 사용해 무료로 이용 가능한 AI 서비스입니다.
          </p>
        </div>
      </section>

      {/* AI 도구 썸네일 섹션 */}
      <section id="services" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">제공 <span className="text-indigo-600">서비스</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI 퀴즈 생성기 */}
            <a href="https://script.google.com/macros/s/AKfycbz-RDjOjfRw_QB3At8FIcYPyd-rRCxiqenVqPcZCSm07DJsw77ZNGF2oIaPwe9ZDvQq/exec" target="_blank" rel="noopener noreferrer" className="block group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                <div className="h-48 bg-indigo-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl mb-4">📝</div>
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
                    <div className="text-6xl mb-4">📊</div>
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
                    <div className="text-6xl mb-4">✉️</div>
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
            
            {/* 카카오톡 오픈 카톡방 */}
            <a href="https://open.kakao.com/o/gubGYQ7g" target="_blank" rel="noopener noreferrer" className="block group" id="community">
              <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                <div className="h-48 bg-yellow-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl mb-4">💬</div>
                  </div>
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
            
            {/* Contact */}
            <a href="https://www.notion.so/1b210244f997802f8557c739dd3986f6" target="_blank" rel="noopener noreferrer" className="block group">
              <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 group-hover:shadow-xl group-hover:-translate-y-1">
                <div className="h-48 bg-green-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl mb-4">📞</div>
                  </div>
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
            
            {/* 추가 서비스 예정 */}
            <a href="https://pebble-stallion-abb.notion.site/1e310244f99780db82b5f36ffb6f71d1?pvs=4" target="_blank" rel="noopener noreferrer" className="block group">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-md overflow-hidden group">
                <div className="h-48 bg-opacity-20 bg-white relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl text-white mb-4">✨</div>
                  </div>
                </div>
                <div className="p-6 text-white">
                  <h3 className="font-bold text-xl mb-2">더 많은 서비스 준비 중</h3>
                  <p className="mb-4 text-indigo-100">
                    선생님들을 위한 더 다양한 AI 도구들이 곧 추가될 예정입니다. 기대해주세요!
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

      {/* 사용 방법 섹션 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">간단한 <span className="text-indigo-600">사용 방법</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-500 text-2xl font-bold mb-4">1</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Gemini API 키 발급</h3>
              <p className="text-gray-600">Google에서 무료로 제공하는 Gemini API 키를 발급받으세요.</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-500 text-2xl font-bold mb-4">2</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">API 키 입력</h3>
              <p className="text-gray-600">발급받은 API 키를 Teachers AI 서비스에 입력하세요.</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-500 text-2xl font-bold mb-4">3</div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">AI 도구 사용</h3>
              <p className="text-gray-600">원하는 AI 도구를 선택하여 바로 사용 시작!</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold hover:bg-indigo-700 transition duration-300" onClick={() => window.location.href='/ai-tools'}>
              시작하기
            </button>
          </div>
        </div>
      </section>

      {/* 사용자 후기 섹션 */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">선생님들의 <span className="text-indigo-600">사용 후기</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4">"퀴즈 생성기 덕분에 시험 문제 제작 시간이 절반으로 줄었어요. 학생들 수준에 맞는 문제를 빠르게 만들 수 있어 정말 편리합니다."</p>
              <div className="font-bold text-gray-800">김선생님, 중학교 국어</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4">"통신문 생성기가 정말 유용해요. 급하게 안내문을 보내야 할 때 큰 도움이 됩니다. 문구도 적절하고 형식도 완벽해요."</p>
              <div className="font-bold text-gray-800">이선생님, 초등학교</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-yellow-400 mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4">"설문 생성기로 학부모 상담 전 의견을 수렴했는데, 질문이 체계적이라 좋은 피드백을 많이 받을 수 있었습니다."</p>
              <div className="font-bold text-gray-800">박선생님, 고등학교 수학</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="bg-indigo-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">지금 바로 Teachers AI와 함께하세요</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Gemini API를 활용한 무료 AI 교육 도구로 더 효율적인 교육 환경을 만들어보세요.
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold hover:bg-yellow-200 transition duration-300 text-lg">
            무료로 시작하기
          </button>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center">
                <div className="text-2xl font-bold mr-2">👨‍🏫</div>
                <h2 className="text-xl font-bold text-white">Teachers <span className="text-yellow-300">AI</span></h2>
              </div>
              <p className="mt-2">선생님들을 위한 AI 교육 도구</p>
              <p className="mt-4 text-sm">© 2025 안양 박달초 김문정 ㅣ <a href="https://www.youtube.com/@%EB%B0%B0%EC%9B%80%EC%9D%98%EB%8B%AC%EC%9D%B8-p5v" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:underline">유튜브 배움의 달인</a></p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-white font-bold mb-4">서비스</h3>
                <ul className="space-y-2">
                  <li><a href="https://script.google.com/macros/s/AKfycbz-RDjOjfRw_QB3At8FIcYPyd-rRCxiqenVqPcZCSm07DJsw77ZNGF2oIaPwe9ZDvQq/exec" target="_blank" rel="noopener noreferrer" className="hover:text-white">AI 퀴즈 생성기</a></li>
                  <li><a href="https://script.google.com/macros/s/AKfycbztKlHC2e49fhtDJKA9DXOBWoZHDlWtPo7xNji4v2rJ5elrbOCBN3ePs1o43uEBAdgpQQ/exec" target="_blank" rel="noopener noreferrer" className="hover:text-white">AI 설문 생성기</a></li>
                  <li><a className="text-gray-500 cursor-not-allowed">AI 통신문 생성기</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-4">자료</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white">사용 가이드</a></li>
                  <li><a href="#" className="hover:text-white">API 키 발급 방법</a></li>
                  <li><a href="#" className="hover:text-white">자주 묻는 질문</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-bold mb-4">문의</h3>
                <ul className="space-y-2">
                  <li><a href="https://www.notion.so/1b210244f997802f8557c739dd3986f6" target="_blank" rel="noopener noreferrer" className="hover:text-white">이메일 문의</a></li>
                  <li><a href="https://open.kakao.com/o/gubGYQ7g" target="_blank" rel="noopener noreferrer" className="hover:text-white">오픈 카톡방</a></li>
                  <li><a href="https://pebble-stallion-abb.notion.site/1e310244f99780db82b5f36ffb6f71d1?pvs=4" target="_blank" rel="noopener noreferrer" className="hover:text-white">업데이트 소식</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TeachersAI; 