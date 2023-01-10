export default function Badge({bgColor = 'primary', children}) {

  return (
    <div className={`w-6 h-6 bg-${bgColor} rounded-full text-white text-center`}>
      {children}
    </div>
  )
}