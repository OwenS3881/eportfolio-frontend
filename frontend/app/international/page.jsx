import React from "react";

import styles from "@/app/styles/International.module.css";
import PictureAndCaption from "@/app/components/PictureAndCaption";
import Link from "next/link";

export const metadata = {
    title: "Study Abroad",
};

//Page for all of the information from my study abroad experience
const InternationalPage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.titleText}>Study Abroad</h1>
            <h2 className={styles.subTitleText}>
                UF in Cape Town: Software Engineering and UX Design Internship
                Abroad
            </h2>
            <div className={styles.quoteContainer}>
                <h3 className={styles.quoteText}>
                    "Education is the most powerful weapon which you can use to
                    change the world."
                </h3>
                <h3 className={styles.quoteNameText}>&ndash; Nelson Mandela</h3>
            </div>

            <div className={styles.captionsContainer}>
                <PictureAndCaption
                    imgSrc={"/abroad-pics/good-hope.jpg"}
                    text={
                        <p>
                            During the Summer of 2025, I had the amazing
                            opportunity to particpate in the UF in Cape Town:
                            Software Engineering and UX Design Internship Abroad
                            program. The program lasted 5 weeks and had us
                            focusing on developing applications to assist local
                            community organizations in the work that they are
                            doing. Under the guidance of our amazing professor{" "}
                            <Link
                                href="https://www.eng.ufl.edu/about/contact/college-directory/name/sanethia-thomas/"
                                target="_blank"
                            >
                                Dr. Sanethia Thomas
                            </Link>
                            , I learned so much about software engineering and
                            was able to see my work from a global perspective.
                        </p>
                    }
                />

                <PictureAndCaption
                    imgSrc={"/abroad-pics/safe-cities-meeting.jpg"}
                    text={
                        <p>
                            Shortly after arriving in Cape Town, we set out to
                            meet with our various companies. My company,{" "}
                            <Link
                                href="https://safecitiessa.com/"
                                target="_blank"
                            >
                                Safe Cities
                            </Link>{" "}
                            is a community driven organization with a variety of
                            programs designed to uplift the members of their
                            community through activities such as skills
                            development, leadership workshops, and empowering
                            women in the community. For my internship I was
                            tasked to work with Safe Cities' permaculture
                            program. They were incredibly grateful to have a
                            team of interns willing to work with them and were
                            very eager to meet us. In our first meeting, they
                            told us all of their ideas for what they wanted in
                            their permaculture app to help manage their program.
                        </p>
                    }
                />
                <PictureAndCaption
                    imgSrc={"/abroad-pics/safe-cities-farm.jpg"}
                    text={
                        <p>
                            Safe Cities had some ambitious ideas. They wanted an
                            app that would allow for communication and
                            management of their program. This included an
                            information storage system for Safe Cities to share
                            the knowledge they have gained over the years, a
                            marketplace for farmers to sell their crops and
                            communicate with one another, a scheduler system so
                            that farmers could keep track of their tasks and
                            what needs to get done, and a full admin management
                            dashboard so that they had full control over the
                            platform. It was an ambitious list with only a
                            limited amount of time for development but our team
                            was determined to deliver the best product we could.
                        </p>
                    }
                />
                <PictureAndCaption
                    imgSrc={"/abroad-pics/mid-dev-pics.png"}
                    text={
                        <p>
                            Once planning was over, we were able to start the
                            development process. The team and I worked
                            diligently throughout the program, whether it was
                            when we went into the office or during our down time
                            in between our various cultural experiences and
                            activities, we maximized the limited development
                            time we had on the program. We worked closely with
                            our professor and the Safe Cities team to deliver a
                            quality product that would work for their unique
                            situation. On this page, you can see some pictures
                            taken during the development process of the app.
                        </p>
                    }
                />

                <PictureAndCaption
                    imgSrc={"/abroad-pics/final-presentation.jpeg"}
                    text={
                        <p>
                            After 5 weeks of hard work on the project, we were
                            finally ready to present it to the client. During
                            the presentation we did a full live demo of the app
                            and explained how every part of it worked. Safe
                            Cities was ecstatic. They had been looking for a
                            solution like this for years and they were so
                            grateful to have a product like ours. It was
                            incredibly rewarding to see their reactions and has
                            made all of the long hours spent on the project
                            completely worth it. I had an amazing time working
                            with Safe Cities and I'm so excited to see how our
                            app is able to impact their work for years to come.
                        </p>
                    }
                />
                <PictureAndCaption
                    imgSrc={"/abroad-pics/penguin-selfie.jpg"}
                    text={
                        <p>
                            In between our work on the project, we had plenty of
                            opportunities to explore South Africa. We got to see
                            some of the beautiful scenery of Cape Town including
                            Table Mountain, Lion's Head, Chapman's Peak, and
                            Cape Point. We saw countless wildlife including
                            penguins, elephants, hippos, antelope, lions, and
                            many more. We got to learn about the cultural
                            history of South Africa through important
                            experiences such as visting the Slave Lodge,
                            speaking with Lionel Davis, visting the township of
                            Khayelitsha, and seeing the District Six Museum. On
                            our free days, we planned some exciting adventures
                            including paragliding off of Signal Hill, sand
                            boarding on the dunes, and riding ATVs.
                        </p>
                    }
                />
                <PictureAndCaption
                    imgSrc={"/abroad-pics/paragliding.jpg"}
                    text={
                        <p>
                            Overall, this program has been one of the most
                            valuable experiences of my college journey so far. I
                            was able to learn so much more about software
                            engineering, myself, and the world in such a short
                            amount of time. Whether it be through the endless
                            adventures we went on, the deeply impactful
                            historical and cultural experiences, or the
                            countless personal interactions with the local
                            people, I became forever changed by this program.
                            Going forward, I plan to take the new knowledge and
                            experiences that I have gained and incorporate it
                            into everything I do from my programming, to my
                            interactions with people, to my persepctive on the
                            world. I would also like to thank the following
                            people and organizations for making this program
                            possible: Dr. Sanethia Thomas, Ping Neo, Naomi
                            Harrell, EDU Africa, and Safe Cities.
                        </p>
                    }
                />
            </div>
        </div>
    );
};

export default InternationalPage;
