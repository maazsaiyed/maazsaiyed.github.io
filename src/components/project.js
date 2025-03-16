import { Card, Flex, Typography } from "antd";

const { Text, Title } = Typography;

export default function Project() {
    return (
        <Flex vertical gap="large" style={{ minHeight: "100vh", padding: "0 20%" }}>
            <Title style={{ textAlign: "center" }}>Projects</Title>

            <Card title="Image Gender Classification">
                <Text>Gender classification from an image.</Text>
            </Card>

            <Card title="Spell Checker">
                <Text>
                    Spell checker is a feature which detects a misspelled words and possibly suggest you what should be the
                    correct words. You can find spell checkers in search engines, word writer, email client, dictionary.
                </Text>
            </Card>

            <Card title="Food Network">
                <Text>Food delivery app. Built using Flutter and Firebase.</Text>
            </Card>
        </Flex>
    );
}