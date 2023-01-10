import Contact from "./Contact";
import Card from "./ui/Card";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import PictureGallery from "./PictureGallery";

export default function Post({firstname, lastname, time, text, pictures}) {
  const [isLike, setIsLike] = useState(false);

  function handleLikeClick(evt) {
    evt.stopPropagation();
    setIsLike(!isLike);
  }
  return <>
    <Card>
      <Contact firstname={firstname} lastname={lastname} time={time}></Contact>
      <div className="my-6">
        {text}
      </div>
      <div>
        <PictureGallery pictures={pictures} />
      </div>
      <div className="mt-6 text-muted text-lg inline-block">
        <div className="flex items-center space-x-1 cursor-pointer" onClick={(evt) => handleLikeClick(evt)}>
          {isLike ? <span className="text-red-800"><AiFillHeart /></span> : <AiOutlineHeart />}
          <span className="select-none">Like</span>
        </div>
      </div>
  </Card>
  </>
}