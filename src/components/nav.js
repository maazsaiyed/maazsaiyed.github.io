import { Flex, Space, Typography } from "antd";

const { Text } = Typography;

export default function NavBar(props) {

    const scrollIntoView = section => {
        let dom = undefined;
        if (section === "about") dom = props.aboutMeRef?.current;
        else if (section === "skills") dom = props.skillsRef?.current;
        else if (section === "experience") dom = props.experienceRef?.current;
        else if (section === "projects") dom = props.projectRef?.current;

        if (dom) dom.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    return (
        <Flex justify="space-between" align="center" className="navbar">
            <Text onClick={_ => scrollIntoView("about")} className="navbar-item">Mααȥ</Text>
            <Space size="large">
                <Text onClick={_ => scrollIntoView("skills")} className="navbar-item">Skills</Text>
                <Text onClick={_ => scrollIntoView("experience")} className="navbar-item">Experience</Text>
                <Text onClick={_ => scrollIntoView("projects")} className="navbar-item">Projects</Text>
            </Space>
        </Flex>
    );
}