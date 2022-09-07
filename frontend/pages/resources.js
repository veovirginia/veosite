import Head from "next/head";
import Navbar from "../components/Navbar";
import Link from "next/link";
import {useRouter} from "next/router";
import {surveyQuestions} from "../data/surveyQuestions";
import {resourceTrees} from "../data/resourceTrees";

const Resources = () => {
    const trees = {surveyQuestions: surveyQuestions, resources: resourceTrees}
    const router = useRouter()
    const sorted = Object.values(trees.resources).sort((a, b) => (a.title > b.title) ? 1 : -1)


    const {display} = router.query
    const disValues = display && JSON.parse(display)
    const values = Array.isArray(disValues) ?
        disValues.map(item => sorted.find(element => element.id === item)) : sorted


    const linkPillStyle = `py-1 hover:bg-violet hover:border-violet hover:text-white
    focus:bg-violet focus:border-violet focus:text-white
    transition-all duration-200
    px-2 text-sm text-white md:text-base border border-white shadow-sm rounded-full inline-block mb-2 mr-2`

    return <>
        <Head>
            <title>Resources | V1</title>
        </Head>
        <div className="max-w-3xl mx-auto px-4 my-24">
            <Navbar/>
            <Link href="/suggest">
                <a className="red-link uppercase text-lg hover:text-violet">Suggest a resource</a>
            </Link>

            <h1 className="text-5xl font-bold text-white font-display">Resources</h1>
            <section className="my-6">
                <h2 className="font-display text-2xl font-semibold mb-4 text-white">Categories</h2>
                {values.map(resTree => <a className={linkPillStyle}
                                          href={`#${resTree.id}`}>{resTree.title}</a>)}
                {Array.isArray(disValues) && <Link href="/resources">
                    <a className={linkPillStyle}>See more resources</a>
                </Link>}




            </section>
            {values.map(resourceTree => (<section key={resourceTree.id} id={resourceTree.id} className="mt-8">
                    <h2 className="font-display text-2xl font-semibold text-blue">{resourceTree.title}</h2>
                    <ul className="divide-y divide-white mt-2">
                        {resourceTree.resources.map(resource => (
                            <li key={resource.id} className="py-3">
                                <a className="group" href={resource.url} target="_blank">
                                    <h2 className="text-base font-medium text-white group-hover:text-violet group-focus:text-violet">
                                        {resource.name}
                                    </h2>
                                    <p className="text-white group-hover:text-violet group-focus:text-violet text-sm">
                                        {resource.description}
                                    </p>
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}


        </div>
    </>


}

export default Resources
