import { Html, Head, Main, NextScript } from 'next/document'


let social: any[] = []

export  function Footer() {
  return (
    <footer className="">
      <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <div className="mt-8 flex justify-center space-x-6 text-indigo-200">
          <a className="px-3" href="">Privacy</a>
          <a className="px-3" href="">Contact</a>
          <a className="px-3" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" className="inline-block align-middle w-3 h-3 mr-1" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
</svg>
            Go to top

          </a>
          {null &&
            social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2022 @fikisipi
        </p>
      </div>
    </footer>
  );
}


export function Header() {
  return (
    <div
      className={
        "sticky py-4 w-full top-0 border-b-[1px] border-[#ffffff28] z-40 bg-[#00000090]"
      }
      style={{
        backgroundf:
          "radial-gradient(at center top, #4e4363a0, #1D1726A0, #000000a0)",
        backdropFilter: "blur(3px)",
        "-webkit-backdrop-filter": "blur(3px)",
      }}
    >
      <div
        className={
          "container mx-auto px-4 font-semibold text-slate-300 text-xl flex justify-between"
        }
      >
        <a href="/">
          <img src={"/logo2.svg "} className="h-[35px]" />
        </a>
        <div className="flex text-sm font-normal items-center">
          <form className="relative">
            <input
              placeholder="Search"
              className="w-[120px] text-white placeholder-gray-300 md:w-[180px] px-2 border-[0px] bg-[#333] fbg-[#ffffff40] py-1 border-gray-500 rounded-xl"
            />
            <button className="absolute top-1 right-[5px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </form>
          <a
            href=""
            className="ml-1 bg-blue-500 text-white rounded-xl py-1 px-2 font-light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block align-middle mr-1 w-4 h-4 text-white"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
      <div className={`min-h-[100vh] text-white `}>

        <Header/>
        <Main />
        <Footer/>
        </div>
        <NextScript />
      </body>
    </Html>
  )
}
