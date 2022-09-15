import TimeAgo from "react-timeago";
import ProfileIcon from "./ProfileIcon";

function ChatBubble({
  loggedIn,
  message,
  timestamp,
  profileIcon,
  discussion,
  currentThread,
  currentUser,
  profile,
  profilePhoto
}) {
  if (discussion === currentThread && loggedIn) {
    return (
      <div className="">
        <div className="flex justify-end items-center space-x-2 mr-16 mb-[.2rem]">
          <p className="text-sm font-medium">{profile}</p>
          <TimeAgo className="text-xs text-gray-500" date={timestamp} />
        </div>
        <div className="flex justify-end">
          <p className="max-w-sm bg-green-500 rounded-3xl mx-2 mb-4 flex justify-end text-white text-xl py-3 px-4">
            {message}
          </p>
          <ProfileIcon profilePhoto={profilePhoto} />
        </div>
      </div>
    );
  } else if (discussion === currentThread && !loggedIn) {
    return (
      <div className="ml-6">
        <div className="flex items-center space-x-2 ml-16 mb-[.2rem]">
          <p className="text-sm font-medium">breakfastboi</p>
          <TimeAgo className="text-xs text-gray-500" date={timestamp} />
        </div>
        <div className="flex">
          <ProfileIcon profileIcon={profileIcon} />
          <p className="max-w-sm bg-gray-200/75 rounded-3xl mx-2 mb-4 flex justify-end text-xl py-3 px-4">
            {message}
          </p>
        </div>
      </div>
    );
  }

  // <div>
  //   {discussion === currentThread && (
  //     <div className={`${!loggedIn ? "flex justify-end" : "flex"}`}>
  //       <div>
  //           <TimeAgo className="border border-black text-xs text-gray-500" date={timestamp} />
  //           <div className="flex">
  //               <p
  //                 className={`${
  //                   loggedIn
  //                     ? "max-w-sm bg-green-500 rounded-3xl mx-2 mb-4 flex justify-end text-white text-xl py-3 px-4"
  //                     : "max-w-sm bg-gray-200/75 rounded-3xl mx-2 mb-4 flex justify-end text-xl py-3 px-4"
  //                 }`}
  //               >
  //                 {message}
  //               </p>
  //               <ProfileIcon loggedIn={loggedIn} />
  //           </div>
  //       </div>
  //     </div>
  //   )}
  // </div>
  //   );
}

export default ChatBubble;
