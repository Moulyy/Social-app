import { useState } from "react";
import Modal from "./ui/Modal";

export default function PictureGallery({pictures}) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleOpenModal() {
    setIsModalVisible(true);
  }

  function handleOnClose() {
    setIsModalVisible(false);
  }

  if (pictures && pictures.length > 0) {
    return (
      <div>
        <div className="flex flex-wrap gap-4">
          {pictures.map((picture, index) => {
            return index < 2 ? <img key={index} className="rounded-lg hover:brightness-50 cursor-pointer" src={picture} title={index}></img> : null
          })}
          <div class="rounded-lg bg-muted text-white border border-slate-300 hover:brightness-50 w-300 h-350 flex items-center justify-center" onClick={handleOpenModal}>
            <div className="rounded-full w-20 h-20 border border-white flex items-center justify-center">
              <span>+{pictures.length - 2}</span>
            </div>
          </div>
        </div>
        <Modal onClose={handleOnClose} title="Pictures" visible={isModalVisible}>
          <div className="flex flex-wrap gap-4">
            {pictures.map((picture, index) => {
              return <img key={index} className="rounded-lg" src={picture} title={index}></img>
            })}
          </div>
        </Modal>
      </div>
    )
  } else {
    return null;
  }
}