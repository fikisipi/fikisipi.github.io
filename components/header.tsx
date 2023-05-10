export function Header() {
  return (
    <div
      className={
        "sticky py-4 w-full top-0 border-b-[1px] border-[#ffffff28] z-40 bg-[#00000075]"
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
            <img
              src={"/logo2.svg"}
              width="105"
              height="35"
              className="h-[35px] pointer-events-none"
              alt="fikisipi"
            />
          </a>
        </div>
        <div className="flex justify-end">
          {/* <div className="flex text-sm font-normal items-center">
            <form className="relative" action="/search">
              <input
                name="q"
                id="headerSearch"
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
          </div> */}
        </div>
      </div>
    </div>
  );
}
