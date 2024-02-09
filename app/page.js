import Link from "next/link"
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center px-4 py-2 border-b justify-between sm:px-6">
        <div className="flex items-center space-x-4">
          <Link className="font-bold" href="#">
            Home
          </Link>
          <nav className="space-x-4">
            <Link className="font-medium" href="#">
              Pricing
            </Link>
            <Link className="font-medium" href="#">
              Features
            </Link>
            <Link className="font-medium" href="#">
              Contact Us
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link className="inline-block text-sm underline font-medium" href="#">
            Sign in
          </Link>
          <Link
            className="inline-block text-sm font-medium rounded-full border border-gray-200 border-gray-200 py-2 px-6 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-50"
            href="#"
          >
            Sign up
          </Link>
        </div>
      </header>
      <main className="flex-1 grid min-h-screen items-center justify-center gap-10 p-4 md:gap-0 lg:grid-cols-2 xl:gap-0">
        <div className="flex-1 flex flex-col items-center justify-center space-y-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Breaking News: An Asteroid is Approaching Earth</h1>
            <p className="max-w-2xl text-gray-500 dark:text-gray-400">
              Scientists have discovered a new asteroid that is rapidly approaching Earth. The asteroid, named
              "Doomsday," is estimated to be 10 kilometers in diameter and poses a significant threat to our planet.
            </p>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="grid max-w-[600px] gap-4">
            <div className="grid gap-2">
              <Link className="flex items-center space-x-2 font-medium" href="#">
                <time className="text-sm font-semibold">2 hours ago</time>
                <h1 className="text-base font-semibold">New Asteroid "Doomsday" Threatens Earth</h1>
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Astronomers around the world are closely monitoring the trajectory of the asteroid and are working to
                determine the likelihood of impact. While initial calculations suggest that the asteroid will pass...
              </p>
            </div>
            <div className="grid gap-2">
              <Link className="flex items-center space-x-2 font-medium" href="#">
                <time className="text-sm font-semibold">3 days ago</time>
                <h1 className="text-base font-semibold">
                  The Search for Extraterrestrial Life: Are We Alone in the Universe?
                </h1>
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                The question of whether life exists beyond our planet has fascinated scientists and the public for
                centuries. While definitive evidence of extraterrestrial life has remained elusive, ongoing
                discoveries...
              </p>
            </div>
            <div className="grid gap-2">
              <Link className="flex items-center space-x-2 font-medium" href="#">
                <time className="text-sm font-semibold">1 week ago</time>
                <h1 className="text-base font-semibold">
                  Uncovering the Mysteries of the Deep Sea: The Fascinating World Beneath the Waves
                </h1>
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                The ocean covers more than 70% of the Earth's surface, yet much of it remains unexplored. The deep sea,
                in particular, is a realm of mystery and wonder, home to a wide variety of fascinating creatures and...
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
