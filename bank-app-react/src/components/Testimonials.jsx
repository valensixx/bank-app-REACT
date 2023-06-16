import React from "react";
import {feedback} from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
    return (
        <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
            <div />
            <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
                <h1>
                    What people are <br />
                    saying about us
                </h1>
            </div>
        </section>
    )
}

export default Testimonials