import ProfilePicture from "./ProfilePicture";
import Card from "./ui/Card";
import PrimaryButton from "./ui/PrimaryButton";
import { Textarea } from "./ui/Textarea/Textarea";

export default function NewPost() {


  function publishPost() {
    console.log('ok');
  }


  return <>
    <Card>
      <div className="flex space-x-4 overflow-hidden">
        <ProfilePicture link='https://randomuser.me/api/portraits/med/men/42.jpg' />
        <div className="flex-1">
          <Textarea />
        </div>
        <div className="self-center">
          <PrimaryButton onClick={publishPost}>Post it</PrimaryButton>
        </div>
      </div>
    </Card>
  </>
}