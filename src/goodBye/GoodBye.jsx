import React from 'react';

function Start() {
    return (
        <section className="body-font flex flex-col justify-center items-center min-h-screen bg-healix-gray text-gray-800 p-8">
            <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8 space-y-6">
                <h1 className="text-4xl font-bold text-center text-healix-navy-hover">즐거웠어요! - HEALIX 개발진 일동</h1>
                <p className="text-lg text-center">
                    안타깝게도 힐릭스의 여러 기능들이 비용적인 문제로 인해 서비스를 종료하게 되었습니다.<br/>
                    (전국 모든 병원 데이터를 DB에 가지고 있었거든요... ㅋㅋㅋ)
                    도메인도 곧 만료된답니다! ㅠㅠ <br/>
                    <a href="https://pre-healix.jeje.work" target="_blank" rel="noopener noreferrer" className="text-healix-navy-hover hover:underline">pre-healix.jeje.work </a>
                    도메인으로 이전 예정이니 참고해주세요! <br/>
                </p>
                <hr className="my-8 border-gray-300"/>
                <h2 className="text-2xl font-semibold text-center text-healix-blue">힐릭스 개발진</h2>
                <p className="text-center">
                    힐릭스는 이번 해커톤을 통해 만들어진 서비스로, 이제는 더이상 사용하실 수 없습니다.<br/>
                    하지만, 이 경험을 통해 더 좋은 서비스를 만들어 여러분께 도움을 드리는 사람이 되겠습니다!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
                    <div className="space-y-2">
                        <h3 className="font-semibold">팀장/기획/FE</h3>
                        <a href="https://github.com/kim-jaeyeon" target="_blank" rel="noopener noreferrer" className="text-healix-navy-hover hover:underline">김재연</a>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-semibold">BE 리더</h3>
                        <a href="https://github.com/bb2002" target="_blank" rel="noopener noreferrer" className="text-healix-navy-hover hover:underline">김수빈</a>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-semibold">BE</h3>
                        <a href="https://github.com/KMWH" target="_blank" rel="noopener noreferrer" className="text-healix-navy-hover hover:underline">김원호</a>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-semibold">BE</h3>
                        <a href="https://github.com/treasure-sky" target="_blank" rel="noopener noreferrer" className="text-healix-navy-hover hover:underline">이진호</a>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-semibold">FE 리더</h3>
                        <a href="https://jeje.work/github" target="_blank" rel="noopener noreferrer" className="text-healix-navy-hover hover:underline">조준환</a>
                    </div>
                    <div className="space-y-2">
                        <h3 className="font-semibold">FE</h3>
                        <a href="https://github.com/hyeseon-cpu" target="_blank" rel="noopener noreferrer" className="text-healix-navy-hover hover:underline">최혜선 (hyeseo_n_n)</a>
                    </div>
                    <div className="sm:col-span-2 space-y-2">
                        <h3 className="font-semibold">로고 제작 및 애니메이션</h3>
                        <div className="flex justify-center space-x-8">
                            <a href="https://www.instagram.com/yan__2403" target="_blank" rel="noopener noreferrer" className="text-healix-navy-hover hover:underline">김양정</a>
                            <a href="https://www.instagram.com/ssin.hyn" target="_blank" rel="noopener noreferrer" className="text-healix-navy-hover hover:underline">신현지</a>
                        </div>
                    </div>
                </div>
                <hr className="my-8 border-gray-300"/>
                <h2 className="text-2xl font-semibold text-center text-healix-blue">소스코드</h2>
                <p className="text-center">
                    하지만 힐릭스는 오픈소스로 공개되어 있으니, 관심있으신 분들은 아래 링크를 통해 확인해보세요!<br/>
                    <a href="https://github.com/jjh4450/healix-frontend" target="_blank" rel="noopener noreferrer" className="text-healix-navy-hover hover:underline">Frontend 소스코드</a><br/>
                    <a href="https://github.com/bb2002/healix-backend" target="_blank" rel="noopener noreferrer" className="text-healix-navy-hover hover:underline">Backend 소스코드</a><br/>
                    해커톤 특성상 코드가 너무나도 이쁜건 비밀... ㅎ...
                </p>
            </div>
        </section>
    );
}

export default Start;
