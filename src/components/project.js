import { Card, Flex, Typography } from "antd";
import { AnimationOnScroll } from "react-animation-on-scroll";

const { Text, Title } = Typography;

export default function Project() {
    return (
        <Flex vertical gap="large" style={{ minHeight: "100vh", padding: "0 20%" }}>
            <Title style={{ textAlign: "center" }}>Projects</Title>

            <AnimationOnScroll animateIn="animate__animated animate__fadeInUp" animateOnce>
                <Card title="Image Gender Classification" className="glass">
                    <Text>Gender classification from an image.</Text>
                </Card>
            </AnimationOnScroll>


            <AnimationOnScroll animateIn="animate__animated animate__fadeInUp" animateOnce>
                <Card title="Spell Checker" className="glass">
                    <Text>
                        Spell checker is a feature which detects a misspelled words and possibly suggest you what should be the
                        correct words. You can find spell checkers in search engines, word writer, email client, dictionary.
                    </Text>
                </Card>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__animated animate__fadeInUp" animateOnce>
                <Card title="Food Network" className="glass">
                    <Text>Food delivery app. Built using Flutter and Firebase.</Text>
                </Card>
            </AnimationOnScroll>
        </Flex>
    );
}