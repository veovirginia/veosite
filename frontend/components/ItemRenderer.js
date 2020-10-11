import {useState} from "react";
import {surveyQuestions} from "../data/surveyQuestions";
import ResourceCard from "./ResourceCard";
import QuestionCard from "./QuestionCard";
import CombinedResourceCard from "./CombinedResourceCard";
import {motion, AnimatePresence} from "framer-motion"

export default function () {
    const [displayMode, setDisplayMode] = useState("question")
    const [currentItem, setCurrentItem] = useState("1A")
    const item = surveyQuestions[currentItem]

    function navigateForward(choice) {
        if (choice.segue === "resource") {
            setDisplayMode("resource")
            setCurrentItem(choice.leadsTo)
        } else {
            setDisplayMode("question")
            setCurrentItem(choice.leadsTo)
        }
    }

    function navigateBackwards() {
        setCurrentItem(item.derivesFrom)
    }

    function resetSurvey() {
        setCurrentItem("1A")
        setDisplayMode("question")
    }

    if (displayMode === "question") {
        // Renderer for displaying a question
        return <QuestionCard item={item} onNavigateForward={navigateForward} onBack={navigateBackwards}/>
    } else {
        // Renderer for displaying resources
        return <CombinedResourceCard currentItem={currentItem} resetSurvey={resetSurvey}/>
    }

}