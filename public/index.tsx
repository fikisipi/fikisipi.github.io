import {
  LocationProvider,
  Router,
  Route,
  lazy,
  ErrorBoundary,
  prerender as ssr,
} from "preact-iso";
import Home from "./home";
import { tw } from "twind";
import withTwind from "@twind/wmr";
import { BlogContext } from "./home";
import { blogPosts } from "./post";
import PostComponent from "./post";
import { PrerenderResult } from "preact-iso/prerender";
import { toStatic } from "hoofd/preact";
import LogoSvg from "./logo2.svg";

function Header() {
  return (
    <div
      tw={
        "sticky py-4 w-full top-0 border-b-[1px] border-[#ffffff28] z-40 bg-[#00000080]"
      }
      style={{
        backgroundf:
          "radial-gradient(at center top, #4e4363a0, #1D1726A0, #000000a0)",
        backdropFilter: "blur(3px)",
        "-webkit-backdrop-filter": "blur(3px)",
      }}
    >
      <div
        tw={
          "container mx-auto px-4 font-semibold text-slate-300 text-xl flex justify-between"
        }
      >
        <a href="/">
          <img src={LogoSvg} tw="h-[35px]" />
        </a>
        <div tw="flex text-sm font-normal items-center">
        <form tw="relative">
          <input placeholder="Search" tw="w-[120px] md:w-[180px] px-2 bg-transparent border-[0px] bg-[#ffffff40] py-1 border-gray-500 rounded-xl"/>
          <button tw="absolute top-1 right-[5px]">
<svg xmlns="http://www.w3.org/2000/svg" tw="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

          </button>
        </form>
        <a href="" tw="ml-1 bg-blue-500 text-white rounded-xl py-1 px-2 font-light">
          <svg xmlns="http://www.w3.org/2000/svg" tw="inline-block align-middle mr-1 w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
</svg>

            Contact</a>
        </div>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div tw="container mx-auto px-8 py-6 rounded-lg bg-white text-black mt-10">
      Not found.
    </div>
  );
}

export function App() {
  let routes = (
    <>
      {blogPosts.map((v) => {
        return (
          <Route
            key={v.slug}
            path={v.url}
            component={() => <PostComponent post={v} />}
          />
        );
      })}
    </>
  );

  return (
    <LocationProvider>
      <style>{`.ppost ul {list-style-type: square; margin-left: 20px;} `}</style>
            
      <div className={tw`min-h-[100vh] app text-white`}>
        <BlogContext.Provider value={blogPosts}>
          <Header />
          <ErrorBoundary>
            <Router>
              <Route path="/" component={Home} />
              {routes}
              <Route default component={NotFound} />
            </Router>
          </ErrorBoundary>
          <Footer />
        </BlogContext.Provider>
      </div>
    </LocationProvider>
  );
}

const navigation = {
  social: [
    {
      name: "Instagram",
      href: "https://instagram.com/fikisipi",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/fikisipi",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/fikisipi",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

function Footer() {
  return (
    <footer tw="">
      <div tw="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <div tw="mt-8 flex justify-center space-x-6">
          Privacy | Contact | Go to top
          {null && navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              tw="text-gray-400 hover:text-gray-500"
            >
              <span tw="sr-only">{item.name}</span>
              <item.icon tw="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p tw="mt-8 text-center text-base text-gray-400">
          &copy; 2022 @fikisipi
        </p>
      </div>
    </footer>
  );
}

const { hydrate, prerender: P } = withTwind(
  {
    theme: {
      extend: {
        gridTemplateColumns: {
          aa: "170px 1fr",
          bb: "1fr 300px"
        },
      },
    },
  },
  (data) => <App {...data} />
);

async function prerender(data: any): Promise<PrerenderResult> {
  let a: any = await P(data);
  const head = toStatic();
  const elements = new Set([
    ...head.links.map((props) => ({ type: "link", props })),
    ...head.metas.map((props) => ({ type: "meta", props })),
    ...head.scripts.map((props) => ({ type: "script", props })),
  ]);
  a = {
    ...a,
    head: {
      lang: head.lang,
      title: head.title,
      elements,
    },
  };
  console.log(a);
  return a;
}

hydrate(<App />);

export { prerender };