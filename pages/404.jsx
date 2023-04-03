export default function NotFound() {
    return <div
    style={{
      fontFamily:
        'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
      height: "100vh",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <div>
      <h1
        className="next-error-h1 border-r-2 border-white"
        style={{
          display: "inline-block",
          margin: "0 20px 0 0",
          paddingRight: 23,
          fontSize: 24,
          fontWeight: 500,
          verticalAlign: "top",
          lineHeight: "49px"
        }}
      >
        404
      </h1>
      <div style={{ display: "inline-block", textAlign: "left" }}>
        <h2 style={{ fontSize: 14, fontWeight: 400, lineHeight: "49px", margin: 0 }}>
          This page could not be found{/* */}.
        </h2>
      </div>
    </div>
  </div>;
}  