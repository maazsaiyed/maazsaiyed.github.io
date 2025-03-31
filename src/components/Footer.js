import { Typography } from "antd";

const { Text } = Typography;

export default function Footer() {
    return (
        <div style={{ textAlign: "center", backgroundColor: "black" }}>
            <Text style={{ color: "white" }}>
                * Website in beta mode. Built using React, Ant Design and Motion and hosted on github.
            </Text>
        </div>
    );
}