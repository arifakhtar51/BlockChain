/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mYmlWsJnIRm
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="text-center space-y-2">
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
        <CardDescription>Enter your email below to login to your account.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="m@example.com" required type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" required type="password" />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button className="mt-auto">Login</Button>
        <Button className="mt-auto" variant="outline">
          Login with Google
        </Button>
      </CardFooter>
      <CardFooter className="text-center text-sm">
        Don't have an account?
        <Link className="underline ml-1" href="#">
          Sign up
        </Link>
      </CardFooter>
    </Card>
  )
}

