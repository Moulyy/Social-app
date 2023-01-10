import ProfilePicture from "./ProfilePicture";
import Card from "./ui/Card";

export default function ProfileCard(props) {
  const {firstname, lastname, nickname, link} = props;

  return (
      <Card>
        <div className="flex space-x-4">
          <ProfilePicture link={link} />
          <div className="grow">
            <div className="font-bold text-muted">{firstname} {lastname}</div>
            <div className="text-sm text-slate-500">@{nickname}</div>
          </div>
        </div>
      </Card>
  )
}