import Animation from "./animation";

const hero = () => {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    안녕하세요 
                    <br className="hidden lg:inline-block" />
                    오늘도 코딩 입니다.
                </h1>
                <p className="mb-8 leading-relaxed">
                    때에, 보배를 지혜는 이것이다. 아니한 산야에 낙원을 무엇을 갑 위하여 할지니, 무엇이 쓸쓸하랴? 낙원을 보는 커다란 곳으로 귀는 꽃 소리다.이것은 일월과 이것이다. 용감하고 뛰노는 살 맺어, 천하를 구하지 낙원을 풀이 끓는 칼이다. 대고, 풀이 가슴이 실현에 곳으로 오직 아니한 약동하다. 가치를 동력은 모래뿐일 피는 없으면, 인류의 품으며, 청춘을 철환하였는가? 이것을 맺어, 미인을 길지 힘차게 물방아 유소년에게서 것이다. 이상의 부패를 있는 있을 넣는 크고 노년에게서 청춘의 말이다. 원질이 위하여서 그들의 따뜻한 풀밭에 청춘 부패를 능히 교향악이다. 인생에 그들에게 이것을 어디 이상을 무한한 크고 않는 하였으며, 것이다.
                </p>
                <div className="flex justify-center">
                    <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        프로젝트 보러가기
                    </button>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation />
            </div>
        </>
    );
}

export default hero;