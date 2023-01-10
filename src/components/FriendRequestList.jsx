import { useState } from "react"
import FriendRequest from "./FriendRequest";
import Badge from "./ui/Badge";

export default function FriendRequestList() {
  const [friendRequests, setFriendRequests] = useState([
    {
      id: 1,
      firstname: 'Agnieszka',
      lastname: 'Stopa'
    },
    {
      id: 2,
      firstname: 'Louis',
      lastname: 'Berteloot'
    }
  ]);
  return <>
    <div>
      <div className="flex justify-between mb-4">
        <span className="font-bold text-slate-400">Requests</span>
        <Badge bgColor='primary'>{friendRequests.length}</Badge>
      </div>
      {friendRequests.map(request => {
        return <div key={request.id} className="mb-4">
          <FriendRequest firstname={request.firstname} lastname={request.lastname} />
        </div>
      })}
    </div>
  </>
}