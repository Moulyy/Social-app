import { useEffect } from "react";

// Mise à jour de la taille du textArea lorsque le contenu change.
const useAutosizeTextArea = (textAreaRef,value) => {
  useEffect(() => {
    if (textAreaRef) {
      // On reset la taille temporairement pour avoir la bonne valeur de scrollHeight du textArea
      textAreaRef.style.height = "0px";
      const scrollHeight = textAreaRef.scrollHeight;
      textAreaRef.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, value]);
};

export default useAutosizeTextArea;