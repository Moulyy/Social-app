export default function OutlineButton(props) {
  const {onClick, children} = props;
  return (
    <button className="w-fit px-4 py-2 rounded-xl bg-white border border-slate-300 text-muted hover:bg-muted hover:border hover:border-white hover:text-white h-auto" onClick={() => {onClick()}}>
      {children}
    </button>
  )
}