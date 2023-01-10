export default function PrimaryButton(props) {
  const {onClick, children} = props;

  return (
    <button className="w-fit px-4 py-2 rounded-xl bg-primary text-white h-auto hover:bg-white hover:border hover:border-primary hover:text-primary" onClick={() => {onClick()}}>
      {children}
    </button>
  )
}