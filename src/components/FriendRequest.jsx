import ProfilePicture from "./ProfilePicture";
import Card from "./ui/Card";
import PrimaryButton from "./ui/PrimaryButton";
import OutlineButton from "./ui/OutlineButton";

export default function FriendRequest(props) {
  const {firstname, lastname} = props;
  return (
    <Card>
      <div className="flex space-x-4">
        <ProfilePicture />
        <div className="flex flex-col">
          <div className="font-bold text-muted">{firstname} {lastname}</div>
          <div>wants to add you to friends</div>
        </div>
      </div>
      <div className="flex justify-around mt-4">
        <PrimaryButton>Accept</PrimaryButton>
        <OutlineButton>Decline</OutlineButton>
      </div>
    </Card>
  )
}