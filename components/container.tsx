export function Container(props: { children: any, enableGrid?: boolean } & Record<string, any>) {
  let { children, ...extra } = props;
  return (
    <div
      className="text-gray-800 bg-[#090909] border-t-[1px] border-zinc-800"
      {...extra}
    >
      <div className={"mx-auto container lg:grid-cols-bb " + (props.enableGrid === false ? "" : "grid")}>{children}</div>
    </div>
  );
}
