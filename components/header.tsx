
export function Header() {
    return (
      <div
        className={
          "sticky py-4 w-full top-0 border-b-[1px] border-[#ffffff28] z-40 bg-[#00000090]"
        }
        style={{
          // backgroundf:
          //   "radial-gradient(at center top, #4e4363a0, #1D1726A0, #000000a0)",
          backdropFilter: "blur(3px)",
          WebkitBackdropFilter: "blur(3px)",
        }}
      >
        <div
          className={
            "container mx-auto px-4 font-semibold text-slate-300 text-xl grid grid-cols-2"
          }
        >
          <div className="flex justify-end">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                document.location = "/";
              }}
              className="relative left-[50px]"
            >
              <img src={"/logo2.svg "} className="h-[35px] pointer-events-none" alt="fikisipi" />
            </a>
          </div>
          <div className="flex justify-end">
            <div className="flex text-sm font-normal items-center">
              <form className="relative" action="/search">
                <input
                  name="q"
                  placeholder="Search"
                  className="w-[140px] focus:ring-[#8858db] max-[400px]:w-[100px] md:w-[180px] text-white outline-none placeholder-[#888] border-2 md:border-[1px] border-[#66666680] ring-2 ring-[#000]/[0.5] px-2 pl-7 bg-[#00000050] py-1 rounded-xl"
                />
                <span className="absolute top-[7px] left-[7px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-[#999]"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </span>
              </form>
              <a
                href=""
                className="ml-1 bg-blue-500 text-white rounded-xl py-1 px-2 font-light hidden"
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
      </div>
    );
  }