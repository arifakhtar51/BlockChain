/**
 * v0 by Vercel.
 * @see https://v0.dev/t/qcykS7OGbsK
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex items-center min-h-screen px-4">
      <div className="mx-auto w-full max-w-sm space-y-4">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-gray-500 dark:text-gray-400">Enter your information to create an account</p>
        </div>
        <div className="space-y-2">
          <Input id="name" placeholder="Name" required />
          <Input id="email" placeholder="Email" required type="email" />
          <Input id="password" placeholder="Password" required type="password" />
        </div>
        <Button className="w-full">Sign Up</Button>
      </div>
    </div>
  )
}


