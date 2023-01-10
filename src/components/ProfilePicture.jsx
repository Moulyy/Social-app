import { useEffect, useState } from "react"

export default function ProfilePicture({link}) {
  const [picture, setPicture] = useState("");
  const url = "https://randomuser.me/api/";
  useEffect(() => {
    if (!link) {
      (async () => {
        const response = await fetch(url);
        const data = await response.json();
        setPicture(data.results[0].picture.medium)
      })();
    } else {
      setPicture(link)
    }
  }, [])
  return <img className="rounded-lg w-12 h-12" src={picture} alt="Photo de profil" />
}