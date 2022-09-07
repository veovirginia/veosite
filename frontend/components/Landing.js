import Link from 'next/link';
import Navbar from "./Navbar";

export default function () {

    return <div className="font-display max-w-screen-sm">
        <Navbar isLanding/>
        <img src="/images/altdarklogo.svg" className="rounded-lg mb-6 h-64 mx-auto"/>
        <div className="text-center">
            <h1 className="text-3xl sm:text-5xl font-bold text-blue">VEO</h1>
            <p className="text-xl text-white">Discover the entrepreneurial resources around Charlottesville.</p>
            <div className="mt-4">
                <Link href="/survey">
                    <a className="bg-blue block md:inline-block font-medium text-lg rounded-lg py-3 font-display transition-all duration-200 font-medium hover:bg-violet focus:bg-violet px-12 mt-8 text-white">
                        Let's get started
                    </a>
                </Link>
            </div>
        </div>
    </div>
}
