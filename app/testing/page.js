/**
 * v0 by Vercel.
 * @see https://v0.dev/t/5QJg5ws2C1f
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { AvatarImage, Avatar, AvatarFallback } from "@/components/ui/avatar"
import { CardTitle, CardDescription, CardHeader, CardContent, Card, CardFooter } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="bg-[#121212] min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center border-b border-gray-600 pb-4">
          <div>
            <Button className="bg-[#ffa000] text-black">Premium</Button>
          </div>
          <div className="text-sm">
            In an effort to fight COVID-19, from now until a limited time only, users residing in India can enjoy
            discount on both monthly and annual subscriptions!
          </div>
          <div>
            <BellIcon className="text-gray-400" />
            <UserCircleIcon className="text-gray-400 ml-4" />
            <Button className="bg-[#ffa000] text-black ml-4">Premium</Button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 py-6">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center justify-between bg-[#333333] p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <TrophyIcon className="text-[#ffa000]" />
                <div>
                  <div className="text-[#ffa000]">in 8 days</div>
                  <div>Join our Contest Biweekly Contest 124</div>
                </div>
              </div>
              <XIcon className="text-gray-400" />
            </div>
            <div className="flex items-center justify-between bg-[#333333] p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <TrophyIcon className="text-[#ffa000]" />
                <div>
                  <div className="text-[#ffa000]">in 2 days</div>
                  <div>Join our Contest Weekly Contest 384</div>
                </div>
              </div>
              <XIcon className="text-gray-400" />
            </div>
            <div className="bg-[#1c1c1c] p-4 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Avatar>
                  <AvatarImage alt="im_Moronic11" src="/placeholder.svg?height=40&width=40" />
                </Avatar>
                <div>
                  <div className="text-sm text-gray-400">2 days ago</div>
                  <div className="font-medium">im_Moronic11 posted How is sharding different from partitioning?</div>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                You're hosting a massive dinner party, but instead of one long table, you decide to go all out and have
                multiple smaller tables scattered around your house. Now, sharding and...
              </p>
            </div>
            <div className="bg-[#1c1c1c] p-4 rounded-lg">
              <div className="flex items-center space-x-3 mb-4">
                <Avatar>
                  <AvatarFallback>An anonymous user</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm text-gray-400">3 days ago</div>
                  <div className="font-medium">An anonymous user posted Google | Interview Experience | SDE-III</div>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Here is my interview experience with Google. will try to keep it crisps and clear. Verdict - Rejected
                Quick Background College - Tier-3 (2020 grad) Current Role - Backend Developer at FinTech...
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <Card className="bg-[#333333] w-full">
              <CardHeader>
                <CardTitle>LeetCode's Interview Crash Course:</CardTitle>
                <CardDescription>System Design for Interviews and Beyond</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-[#00a8ff]">Start Learning</Button>
              </CardContent>
            </Card>
            <Card className="bg-[#333333] w-full">
              <CardHeader>
                <CardTitle>LeetCode's Interview Crash Course:</CardTitle>
                <CardDescription>Data Structures and Algorithms</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-[#9c27b0]">Start Learning</Button>
              </CardContent>
            </Card>
            <Card className="bg-[#1c1c1c] w-full">
              <CardHeader>
                <CardTitle>Want to contribute?</CardTitle>
                <CardDescription>Help the community, earn up to 1000 LeetCoins</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-end">
                <Button className="bg-[#4caf50]">Contribute</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function BellIcon(props) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function TrophyIcon(props) {
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
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}


function UserCircleIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
    </svg>
  )
}


function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
