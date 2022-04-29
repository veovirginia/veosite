import Head from "next/head";
import Navbar from "../components/Navbar";

const team = [{
    name: "Max Nardi",
    role: "Frontend/Backend Developer",
    image: "/bears/nathan_bear.svg",
    linkedIn: "",
    github: "",
    website: ""
}, {
    name: "Alex Becker",
    role: "Frontend Designer/Developer",
    image: "https://ventureatbrown.com/bears/smiling_red_bear.svg",
    linkedIn: "https://www.linkedin.com/in/alexandermbecker/",
    github: "",
    website: ""
}, {
    name: "Jason He",
    role: "Frontend Developer",
    image: "https://ventureatbrown.com/bears/experienced_pink.svg",
    linkedIn: "https://www.linkedin.com/in/jasonjche/",
    github: "",
    website: ""
}, {
    name: "David Xiang",
    role: "Project Manager",
    image: "https://ventureatbrown.com/bears/experienced_green.svg",
    linkedIn: "https://www.linkedin.com/in/david-xiang-4891371a6/",
    github: "",
    website: ""
}]

const About = () => {
    const buttonStyle = "text-gray-400 hover:text-gray-300 focus:text-gray-200 transition-all duration-200"
    return <>
        <Head>
            <title>About | v1@Virginia</title>
        </Head>
        <div className="max-w-3xl mx-auto px-4 my-24">
            <Navbar/>
            <h1 className="text-5xl font-bold text-gray-900 font-display">About</h1>
            <section>
                <p className="text-xl text-gray-400 my-4">
                    v1 is the community for ambitious student builders at the University of Virginia. At our core, we support students who are working on side-projects and startups — those who are looking to build their v1: the first version of their product and onwards.
                </p>
                <a className="red-link text-xl" href="https://ui2cyosbr6d.typeform.com/to/IRWOc7Fk?utm_source=xxxxx&">Join and build with v1 &rarr;</a>
            </section>
            <section className="mt-16">
                <h2 className="font-display text-2xl font-semibold mb-4 text-gray-800">Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {team.map((person, index) => <div className="font-medium leading-tight" key={index}>
                        <img className="h-56 w-full object-cover rounded-lg shadow-sm"
                               alt=""
                               src={person.image}/>
                        <h3 className="text-xl font-semibold text-gray-700 mt-4">{person.name}</h3>
                        <h4 className="text-lg text-gray-400">{person.role}</h4>
                        <div className="flex justify-start items-center space-x-4 mt-2 text-xl">
                            <a className={buttonStyle} href={person.linkedIn} target="_blank">
                                <i className="fab fa-linkedin"/>
                            </a>

                            <a className={buttonStyle} href={person.github} target="_blank">
                                <i className="fab fa-github"/>
                            </a>

                            <a className={buttonStyle} href={person.website} target="_blank">
                                <i className="fas fa-globe-americas"/>
                            </a>
                        </div>
                    </div>)}

                </div>
            </section>
            <div className="font-display text-gray-400 my-3">Graphics and illustrations by <a className="red-link" href="https://www.janicekhang.com/">Janice Khang</a></div>
        </div>
    </>
}

export default About
