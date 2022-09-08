import Link from 'next/link';
import Navbar from "./Navbar";

export default function () {

    return <div className="font-display max-w-screen-sm">
        <Navbar isLanding/>
        {/*<img src="/images/altdarklogo.svg" className="rounded-lg mb-6 h-64 mx-auto fill-transparent color-change"/>*/}
        <svg className="rounded-lg mb-0 h-64 mx-auto fill-transparent color-change" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
          <g>
          <clipPath id="logoclip" clipPathUnits="objectBoundingBox">
            <path d="M0.16518 0.311615C0.115515 0.228588 0.0939366 0.13959 0.0893555 0.105469L0.732908 0.778408C0.669724 0.749814 0.519562 0.673959 0.424403 0.599272C0.305454 0.505914 0.22726 0.415398 0.16518 0.311615Z" fill="#C5C5C5"/>
            <path d="M0.161863 0.276072C0.140449 0.244322 0.0997816 0.146224 0.0893555 0.105469L0.732908 0.778408C0.688838 0.762292 0.516339 0.652348 0.43625 0.585529C0.263632 0.44151 0.203092 0.337206 0.161863 0.276072Z" fill="white"/>
            <path d="M0.506323 0.6565C0.385859 0.743697 0.334771 0.755545 0.256104 0.777821L0.893967 0.101562C0.852743 0.203452 0.806301 0.30534 0.731902 0.416232C0.667599 0.512067 0.56556 0.61362 0.506323 0.6565Z" fill="#DEDEDE"/>
            <path d="M0.438316 0.685407C0.389459 0.720556 0.320314 0.756016 0.256348 0.777813L0.894201 0.101562C0.880019 0.146293 0.778309 0.326456 0.717442 0.405332C0.578116 0.585888 0.504188 0.638016 0.438316 0.685407Z" fill="white"/>
          </clipPath>
          </g>
        </svg>







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
