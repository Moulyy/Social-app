export default function Card(props) {
  const {children, enablePadding = true} = props;
  return <>
    <div className={`bg-white rounded-lg overflow-hidden ${enablePadding ? "p-4" : ""}`}>
      {children}
    </div>
  </>
}