
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex justify-center">
    <div className="w-full max-w-3xl space-y-8 ">
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-500 dark:text-gray-400" htmlFor="title">
          Title
        </label>
        <Input id="title" placeholder="Enter the title" />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-500 dark:text-gray-400" htmlFor="content">
          Content
        </label>
        <Textarea className="min-h-[150px]" id="content" placeholder="Enter the content" />
      </div>
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-500 dark:text-gray-400" htmlFor="image">
          Image
        </label>
        <Input id="image" placeholder="Select an image" type="file" />
      </div>
      <Button type="submit">Submit</Button>
    </div>
    </div>
  )
}

