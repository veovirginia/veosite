import Link from "next/link";

export default function Navbar({isLanding}) {
    const linkStyling = `text-white hover:text-blue focus:text-blue ${!isLanding && "hidden sm:inline"}`

    return <div className="absolute top-0 right-0 p-4 w-full flex justify-between items-center font-display bg-black z-50">
        <Link href="/">
            <a className="font-semibold text-white text-2xl">
                VEO
            </a>
        </Link>
        <div className="space-x-4 md:space-x-6">
            <Link href="/about">
                <a className={linkStyling}>About</a>
            </Link>
            <Link href="/resources">
                <a className={linkStyling}>Resources</a>
            </Link>
            {!isLanding && <Link href="/survey">
                <a className="red-link">Take the survey! &rarr;</a>
            </Link>}

        </div>

    </div>
}
