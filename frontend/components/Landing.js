import Link from 'next/link';
import Navbar from "./Navbar";

export default function () {

    return <div className="font-display max-w-screen-sm">
        <Navbar isLanding/>
        <img src="/bears/smiling_red_bear.svg" className="rounded-lg mb-6 h-64 mx-auto"/>
        <div className="text-center">
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-900">V1<span className="font-sans text-gray-400 font-light">@</span>Virginia</h1>
            <p className="text-xl text-gray-500">Discover the entrepreneurial resources around Charlottesville.</p>
            <div className="mt-4">
                <Link href="/survey">
                    <a className="bg-red-600 block md:inline-block font-medium text-lg rounded-lg py-3 font-display transition-all duration-200 font-medium hover:bg-red-400 focus:bg-red-400 px-12 mt-8 text-white">
                        Let's get started
                    </a>
                </Link>
            </div>
        </div>
    </div>
}
