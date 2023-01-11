import React from 'react';
import { ImCross } from "react-icons/im";

export default function Modal({visible, onClose, title, children}) {

  function handleOnClose(e) {
    if (e.target.id === 'modal-container') onClose();
  }

  if (!visible) return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center' id="modal-container" onClick={handleOnClose}>
      <div className="bg-white p-4 rounded min-w-50pc max-w-50pc">
        <div className="flex items-center">
          <span className='flex-1 text-3xl text-muted'>{title}</span>
          <ImCross className="cursor-pointer text-muted" onClick={onClose} />
        </div>
        <div className='mt-4'>
          {children}
        </div>
      </div>
    </div>
  )
}
