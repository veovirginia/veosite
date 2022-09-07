import Head from "next/head";
import Navbar from "../components/Navbar";

const team = [{
    name: "David Xiang",
    role: "VEO Builder",
    image: "/bears/nathan_bear.svg",
    linkedIn: "https://www.linkedin.com/in/david-xiang-4891371a6/",
    github: "",
    website: ""
}, {
    name: "Alex Becker",
    role: "VEO Builder",
    image: "https://ventureatbrown.com/bears/smiling_red_bear.svg",
    linkedIn: "https://www.linkedin.com/in/alexandermbecker/",
    github: "",
    website: "https://amb.horse"
}, {
    name: "Jason He",
    role: "VEO Builder",
    image: "https://ventureatbrown.com/bears/experienced_pink.svg",
    linkedIn: "https://www.linkedin.com/in/jasonjche/",
    github: "",
    website: ""
}, {
    name: "Max Nardi",
    role: "VEO Builder",
    image: "/bears/nathan_bear.svg",
    linkedIn: "https://www.linkedin.com/in/maxwellnardi/",
    github: "",
    website: "https://dribbble.com/maxwellnardi"
}, {
    name: "Shaurya Bedi",
    role: "VEO Builder",
    image: "https://ventureatbrown.com/bears/experienced_green.svg",
    linkedIn: "https://www.linkedin.com/in/shaurya-bedi-29060b190/",
    github: "",
    website: ""
}]

const About = () => {
    const buttonStyle = "text-blue hover:text-violet focus:text-violet transition-all duration-200"
    return <>
        <Head>
            <title>About | VEO</title>
        </Head>
        <div className="max-w-3xl mx-auto px-4 my-24">
            <Navbar/>
            <h1 className="text-5xl font-bold text-white font-display">About</h1>
            <section>
                <p className="text-xl text-white my-4">
                    VEO is the community for ambitious student builders at the University of Virginia. At our core, we support students who are working on side-projects and startups — those who are looking to build their first version of their product and onwards.
                </p>
                <a target="__link" className="red-link text-xl" href="https://ui2cyosbr6d.typeform.com/to/IRWOc7Fk?utm_source=xxxxx&">Join and build with VEO &rarr;</a>
            </section>
            <section className="mt-16">
                <h2 className="font-display text-2xl font-semibold mb-4 text-white">Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {team.map((person, index) => <div className="font-medium leading-tight" key={index}>
                        <img className="h-56 w-full object-cover rounded-lg shadow-sm"
                               alt=""
                               src={person.image}/>
                        <h3 className="text-xl font-semibold text-white mt-4">{person.name}</h3>
                        <h4 className="text-lg text-white">{person.role}</h4>
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
            <div className="font-display text-white my-3">Special thanks to <a target="__link" className="red-link" href="https://ventureatbrown.com/">Venture@Brown</a></div>
        </div>
    </>
}

export default About
