import { SearchIcon } from "lucide-react";

export default function App() {
  return (
    <>
      <header className="w-full">
        <nav className="flex justify-between p-6 items-center w-full">
          <a href="" className="font-bold">
            Logo
          </a>
          <ul className="flex font-semibold space-x-12">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
          <a href="/auth/login">
            <button
              type="button"
              aria-label="login"
              className="rounded-full bg-darkSlateGray text-white font-bold px-5 py-2"
            >
              Login
            </button>
          </a>
        </nav>
      </header>
      <main className="w-full px-6 pb-6 flex flex-col justify-center items-center">
        <section className="w-full flex flex-col justify-center items-center">
          <div className="w-full text-center">
            <h1 className="font-bold text-[64px] leading-snug pt-20">
              Smart Learning <br /> Achieving Briliant Achievements
            </h1>
            <h3 className="pt-4 text-2xl font-medium">
              Achieve Briliant Achievements with Interactive Quizzes and
              Discussions
            </h3>
          </div>
          <div className="flex mt-16 space-x-3">
            <div className="relative flex justify-center items-center">
              <SearchIcon className="absolute text-gray-600 left-4" />
              <input
                type="text"
                placeholder="Find your needs"
                className="border-2 pl-12 w-96 h-11 placeholder:text-gray-700 font-medium border-darkSlateGray rounded-full"
              />
            </div>
            <button
              type="button"
              aria-label="search"
              className="bg-darkSlateGray text-white font-bold rounded-full px-5"
            >
              Search
            </button>
          </div>
        </section>
        <section className="flex space-x-10 justify-between items-center w-full mt-28 mb-24">
          <div className="flex flex-col  pb-3">
            <img src="/images/brain.svg" alt="" width={50} />
            <div className="mt-6">
              <h4 className="font-bold text-xl">Interactive and Engaging</h4>
              <p className="mt-2 font-medium">
                Study with crash quizzes and polls that make learning more fun
              </p>
            </div>
          </div>
          <div className="border-x-2 border-gray-600 flex flex-col px-8 pb-3">
            <img src="/images/online-lesson.svg" alt="" width={50} />
            <div className="mt-6">
              <h4 className="font-bold text-xl">
                Holistic Learning Experience
              </h4>
              <p className="mt-2 font-medium">
                An integrated combination of materials, quizzes, and discussions
                provides an engaging learning experience
              </p>
            </div>
          </div>
          <div className="flex flex-col  pb-3">
            <img src="/images/science.svg" alt="" width={50} />
            <div className="mt-6">
              <h4 className="font-bold text-xl">Easy Access</h4>
              <p className="mt-2 font-medium">
                Materials and features can be accessed anytime and anywhere,
                supporting flexible learning
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
