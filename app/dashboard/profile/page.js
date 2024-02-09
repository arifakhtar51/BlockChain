/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1WxynlJ73pv
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { AvatarImage, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import reactDom from "react-dom"

export default function Component() {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="px-4 py-2 flex items-center border-b border-gray-700">
        <ArrowLeftIcon className="text-white mr-4" />
        <div>
          <div className="text-xl font-bold">Abhiraj Dixit</div>
          <div className="text-sm text-gray-400">0 posts</div>
        </div>
      </div>
      <div className="flex flex-col items-center pt-6 pb-4">
        <Avatar>
          <img alt="Profile picture" src="./placeholder.png" />
        </Avatar>
        <div className="text-2xl font-bold">Abhiraj Dixit</div>
        <div className="text-sm text-gray-400">@AbhirajDixit12</div>
        <div className="flex space-x-4 mt-2">
          <div className="text-center">
            <div className="font-bold">0</div>
            <div className="text-sm text-gray-400">Following</div>
          </div>
          <div className="text-center">
            <div className="font-bold">0</div>
            <div className="text-sm text-gray-400">Followers</div>
          </div>
        </div>
        <div className="text-sm text-gray-400 mt-2">Joined September 2021</div>
      </div>
      <div className="border-t border-gray-700 pt-4 px-4">
        <div className="flex justify-around">
          <Button className="hov">
            Posts
          </Button>
          <Button className="hov">
            Replies
          </Button>
          {/* <Button className="text-gray-400" variant="ghost">
            Highlights
          </Button> */}
          <Button className="hov">
            Media
          </Button>
          {/* <Button className="text-gray-400" variant="ghost">
            Likes
          </Button> */}
        </div>
      </div>
    </div>
  )
}

function ArrowLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}