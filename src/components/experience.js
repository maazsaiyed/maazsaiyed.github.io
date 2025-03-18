import { AnimationOnScroll } from "react-animation-on-scroll";
import { experienceData } from "../resources/experiencedata";
import { Divider, Space, Timeline, Typography } from "antd";

const { Text, Title } = Typography;

const titleCSS = { margin: 0 }
const expCSS = { maxWidth: 450 }

export default function Experience() {

    const timelineItems = experienceData
        .sort((edA, edB) => (edA.id < edB.id) ? 1 : -1)
        .map((ed, idx) => ({
            key: ed.id,
            children: (
                <AnimationOnScroll
                    animateIn={
                        (idx % 2 === 0)
                            ? "animate__animated animate__fadeInRight"
                            : "animate__animated animate__fadeInLeft"
                    }
                    animateOnce={true}
                >
                    <Space
                        direction="vertical"
                        size="small"
                        style={expCSS}
                    >
                        <Title level={4} style={titleCSS}>{ed.title}</Title>
                        <Title level={5} style={titleCSS}>{ed.company} | {ed.timeline}</Title>

                        <Divider style={titleCSS} />

                        <Text>{ed.description}</Text>
                    </Space >
                </AnimationOnScroll>
            )
        }));

    return (
        <div style={{ minHeight: "100vh" }}>

            <Title style={{ textAlign: "center" }}>Experience</Title>

            <br />

            <Timeline
                mode="alternate"
                items={timelineItems}
            />
        </div>
    );
}