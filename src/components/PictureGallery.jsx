export default function PictureGallery({pictures}) {
  if (pictures && pictures.length > 0) {
    return (
      <div className="flex flex-wrap gap-4">
        {pictures.map((picture, index) => {
          return index < 2 ? <img key={index} className="rounded-lg hover:brightness-50 cursor-pointer" src={picture} title={index}></img> : null
        })}
        <div class="rounded-lg bg-muted text-white border border-slate-300 hover:brightness-50 w-300 h-350 flex items-center justify-center">
          <div className="rounded-full w-20 h-20 border border-white flex items-center justify-center">
            <span>+{pictures.length - 2}</span>
          </div>
        </div>
      </div>
    )
  } else {
    return null;
  }
}