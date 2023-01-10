import ProfilePicture from "./ProfilePicture";

export default function Contact({firstname, lastname, time}) {
  return <>
    <div className="flex space-x-4 items-center">
      <ProfilePicture></ProfilePicture>
      <div>
        <div className="font-bold text-muted">
          {firstname} {lastname}
        </div>
        {time ? <div className="text-slate-400">{time}</div> : null}
      </div>
    </div>
  </>
}