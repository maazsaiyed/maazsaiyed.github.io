import { ReactSVG } from "react-svg";
import { skillsData } from "../resources/skillsdata";
import { Divider, Flex, Space, Typography } from "antd";

const { Text, Title } = Typography;

function displaySkill(skill) {
    return (
        <Flex gap="middle" direction="horizontal" align="center">
            <ReactSVG
                src={skill.icon}
                beforeInjection={(svg) => {
                    svg.classList.add('svg-class-name')
                    svg.setAttribute('style', 'width: 32px; max-height: 32px')
                }}
            />
            <Text style={{ fontSize: "1.2em" }}> {skill.displayName} </Text>
        </Flex >
    );
}

export default function Skills() {
    return (
        <div style={{ minHeight: "100vh" }}>
            <Title style={{ textAlign: "center" }}>Skills</Title>

            <Flex wrap justify="space-between" style={{ padding: "0 10%" }}>
                {
                    skillsData.map(skill => (
                        <Space
                            size="medium"
                            direction="vertical"
                            className="glass"
                            style={{ padding: "1em 2em", marginTop: 25, width: "25%" }}
                        >
                            <Title level={3} >{skill.displayName}</Title>
                            <Divider />
                            <Space size="large" direction="vertical">
                                {
                                    skill.skills.map(s => displaySkill(s))
                                }
                            </Space>
                        </Space>
                    ))
                }
            </Flex>
        </div>
    );
}