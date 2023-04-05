function Ico(props: { h: string }) {
  return (
    <img
      src={props.h}
      className="border-0 border-gray-600 w-5 h-5 rounded-full inline-block relative fleft-[-25px] ftop-[5px] mr-2 my-2"
    />
  );
}

export function Sidebar(props: { allTags?: string[] }) {
  return (
    // shadow sidebar:
    // <div className="lg:bg-gradient-to-r from-white/[0] from-[95%] via-black/[0.07] via-[95%] to-white/[0] pr-4">
    // <div>
    <aside
      className="relative top-[0px] lxg:border-l-[1px] border-zinc-900 !text-zinc-300 p-4 opacity-50"
      style={{
        backgroundSize: "cover",
      }}
    >
      <div className={"py-4 pl-4 sidebar text-sm pt-0"}>
        <h3 className="font-medium border-b-0 border-gray-200 mb-2 rounded-l-md">
          Me elsewhere
        </h3>
        <a href="https://twitter.com/fikisipi">
          <Ico h="https://abs.twimg.com/responsive-web/client-web/icon-ios.b1fc727a.png" />
          @fikisipi on Twitter
        </a>
        <a href="https://github.com/fikisipi">
          <Ico h="https://github.com/fluidicon.png" />
          fikisipi on Github
        </a>
        <h3 className="font-medium border-b-0 border-gray-200 mb-2 rounded-l-md">
          My projects
        </h3>
        <a href="https://twitter.com/mkrobot/status/1165955815389433856">
          <Ico h="/vl3.png" />
          VL3 - car tracking via video feed
        </a>
        <a href="https://github.com/fikisipi/elkai">
          <Ico h="https://github.com/fluidicon.png" />
          elkai - a TSP solver {/*<small>a travelling salesman solver</small>*/}
        </a>
        <a href="https://polartask.com">
          <Ico h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAADlQTFRFAAAAUFBQn5+fz8/P////T09P39/fgICAf39/sLCwr6+v4ODg8PDw0NDQEBAQoKCgYGBg7+/vMDAwQqu2ygAAALBJREFUeJzVkkESgyAMRaOkWkpD1PsftkQHQhC67fRvnPE9ICQA/Fum2SGimx8DvGDOMnX4inWeN+7R5vV1vWS15984oqkjWBbeUul4A4qR7BbccICY9mAVxEfPyiGmpjgV5H/yN+XSUjQCyXcz3Ar7cRo1rwQqBlScmltkI/P6FlcfLqNw08pQDOWhM4v9UG5nUaa5F85g074HD23si2jXn3XozEPvTYrC0jHiAf5ZPveFCLnbWGr3AAAAAElFTkSuQmCC" />
          PolarTask
        </a>
        <a href="/cv.pdf">
          <Ico h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAjRJREFUWEftV0GIqVEYPffNwoKVzczaXxbKwmI0iEwjpaxM08SCWUhKKRbohY28LckrK2VlMZpYsJMF0UzJwsJClNWjKFua5n/dW6NMzfymJ3rl2/33fp1z7vnPd+sSAD84jvvJ87wPwAUOU1NCyO/RaPSLcBwX5Xk+cRjebRZCSIzIZLI/Bzz5x3NOqQD+GKd/5zwJODlwcuD/cUClUkGv14MQgk6ng5eXFzbKt7e36PV6GI/HW9fJzc0Nlsslut3ul9fMTg74/X7c39+jWCzi9fUVdrsdj4+PyGazSKVSWK1WiEQiGyKRSITn52cEAgE0Go1/EyCXy1Eul2GxWDCZTBiYQqHA09MTNBoNlEol0uk0rq6usF6v2b7ZbEYikYBOp2OCvypBB7xeLyNyuVxbOA6HA/V6HfP5HM1mE7FYjH3TymQymM1mSCaTgre8oIB4PA6JRIJQKPQpWDgcxvn5OYLBIMRiMbP/7u4Og8FgPwIoKCX5rOhvKpVKUKvVzH6PxwOr1SpIThsEHfD5fLi8vMTDw8MWIM0EnYTFYsHWK5UKcrkcbDYbm5J8Pr8fATRwNPF0rKbTKQPlOA61Wo2FjGaAFs2IyWQCHVej0bhZF1Ih6AAFiEajMBgMKBQKODs7g9PpRLVaZSP4XlKpFO12G61WC263W4h3s7+TANp9fX0NrVaLt7c3RkKT/7Go/cPhEP1+f/8Cdkb8ZuPODnwTd+f2k4CTAycHjv80O/rj9NjP87+dXu/L6LNd8wAAAABJRU5ErkJggg==" />
          My CV/Resume
        </a>
        <h3 className="font-medium border-b-0 border-gray-200 mb-2 rounded-l-md">
          Blogs/sites I like
        </h3>
        <a href="https://metaculus.com">
          <Ico h="https://d3s0w6fek99l5b.cloudfront.net/static/icon128.b1632c72a01c.png" />
          Metaculus
        </a>
        <a href="https://theoatmeal.com">
          <Ico h="https://s3.amazonaws.com/theoatmeal-img/favicons/favicon-96x96.png" />
          The Oatmeal
        </a>
        <a href="https://gwern.net">
          <Ico h="https://www.gwern.net/static/img/logo/logo-favicon-small.png" />
          gwern.net
        </a>
        <a href="https://xkcd.com">
          <Ico h="https://xkcd.com/s/919f27.ico" />
          xkcd.com
        </a>
        <a href="https://news.ycombinator.com/news">
          <Ico h="https://news.ycombinator.com/favicon.ico" />
          Hacker News
        </a>
        <a href="https://astralcodexten.substack.com/">
          <Ico h="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F8c00a032-defa-44b7-9ab7-b7cc6d88db75%2Ffavicon-32x32.png" />
          AstralCodexTen (SSC)
        </a>
        <a href="https://scottaaronson.blog/">
          <Ico h="https://149663533.v2.pressablecdn.com/wp-content/uploads/2021/10/cropped-Jacket-192x192.gif" />
          Shtetl-Optimized
        </a>
        <a href="https://www.youtube.com/c/georgehotzarchive">
          <Ico h="https://www.youtube.com/s/desktop/f06ee14b/img/favicon_48x48.png" />
          George Hotz hacking vlogs
        </a>
        <a href="https://www.youtube.com/user/jblow888/videos">
          <Ico h="https://www.youtube.com/s/desktop/f06ee14b/img/favicon_48x48.png" />
          Jonathan Blow
        </a>
        <h3 className="font-medium border-b-0 border-gray-200 mb-2 rounded-l-md">
          Filter tags
        </h3>
        <div>
          {props.allTags
            ? props.allTags.map((x) => (
                <a
                  href={"/tag/" + x}
                  key={x}
                  className="border-b-2 border-zinc-400 !inline mr-2"
                >
                  {x}
                </a>
              ))
            : null}
        </div>
      </div>
    </aside>
    // </div>
  );
}
