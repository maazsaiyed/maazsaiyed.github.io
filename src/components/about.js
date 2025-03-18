import { theme as antdTheme, Flex, Space, Typography } from "antd";
import { useRef } from "react";
import { ReactSVG } from "react-svg";
import { headlineTitles } from "../resources/headline";

const { Text, Title } = Typography;
const { useToken } = antdTheme;

const titleCSS = { margin: 0, marginTop: 10, padding: 0 };

const svgFunc = (svg) => {
    svg.classList.add('svg-class-name')
    svg.setAttribute('style', 'width: 32px; max-height: 32px')
}

const socialNavigation = function (icon) {
    let url = undefined;
    if (icon === "linkedin") url = "https://www.linkedin.com/in/maaz-saiyed";
    else if (icon === "github") url = "https://github.com/maazsaiyed";
    else if (icon === "leetcode") url = "https://leetcode.com/u/maazsaiyed34/";

    if (url !== undefined) window.open(url, "_blank");
}

export default function AboutMe() {

    const titleRef = useRef(null);

    const { token: theme } = useToken()

    function animateDesignTitle() {
        /* title animation */
        const animationTime = 50;
        const spanTitle = titleRef.current;
        var titleIdx = 0;

        if (spanTitle) {

            function removeInterval(interval) {
                /* Clears interval and set to null */
                clearInterval(interval);
                interval = null;
            }

            function animateIn(word) {
                /* Add the word to the span title. */
                spanTitle.innerHTML = word.split("").map(ele => `<span>${ele}</span>`).join("");
                const n = spanTitle.children.length;
                var idx = 0;
                var animationInterval = setInterval(addChar, animationTime);

                function addChar() {
                    try {
                        if (idx < n) {
                            spanTitle.children[idx]?.classList.add("fade");
                            idx++;
                        } else {
                            removeInterval(animationInterval);
                            setTimeout(animateOut, 3000);
                        }
                    } catch (error) {
                        removeInterval(animationInterval);
                        throw error;
                    }
                }
            }

            function animateOut() {
                /* Removes the word to the span title. */
                var idx = spanTitle.children.length - 1;
                var animationInterval = setInterval(removeChar, animationTime);

                function removeChar() {
                    try {
                        if (-1 < idx) {
                            spanTitle.children[idx]?.classList.remove("fade");
                            idx--;
                        } else {
                            removeInterval(animationInterval);
                            spanTitle.textContent = "";
                            // animate next title
                            setTimeout(animateIn(headlineTitles[++titleIdx % headlineTitles.length]), 700);
                        }
                    } catch (error) {
                        removeInterval(animationInterval);
                        throw error;
                    }
                }
            }


            // remove text
            spanTitle.textContent = "";
            // animate starting word
            animateIn(headlineTitles[titleIdx]);
        } else {
            setTimeout(animateDesignTitle, 3000);
        }
    }

    animateDesignTitle();

    return (
        <Flex
            vertical
            justify="center"
            style={{
                minHeight: "100vh",
                padding: "0 20%"
            }}>

            <Title level={5} style={titleCSS}>Hi, I am</Title>

            <Title className="animate__animated animate__fadeInUp" style={{ ...titleCSS, ...{ fontSize: 70 } }}>Maaz Saiyed</Title>

            <Title
                id="design-title"
                ref={titleRef}
                level={2}
                style={{
                    ...titleCSS, ...{
                        fontSize: 50,
                        overflow: "hidden",
                        textWrap: "nowrap",
                        color: theme.colorPrimary
                    }
                }}
            >
                &nbsp;
            </Title>

            <Text className="animate__animated animate__fadeInUp animate__delay-2s" style={titleCSS}>
                Software Developer, specialising in web development, artificial intelligence, and data pipelines.
            </Text>


            <Space className="animate__animated animate__fadeInUp animate__delay-2s" size="large" style={{ marginTop: 25 }}>
                <ReactSVG className="social-icon" src="icons/social-icons/linkedin.svg" beforeInjection={svgFunc} onClick={_ => socialNavigation("linkedin")} />
                <ReactSVG className="social-icon" src="icons/social-icons/github.svg" beforeInjection={svgFunc} onClick={_ => socialNavigation("github")} />
                <ReactSVG className="social-icon" src="icons/social-icons/leetcode.svg" beforeInjection={svgFunc} onClick={_ => socialNavigation("leetcode")} />
            </Space>
        </Flex >
    );
}