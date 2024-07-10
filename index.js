function animateDesignTitle() {
    /* title animation */

    const titles = ["Full Stack Developer", "AI Engineer", "Data Engineer", "Python Developer"];
    const animationTime = 50;
    const spanTitle = document.querySelector("#design-title");
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
            var idx = 0;
            var animationInterval = setInterval(addChar, animationTime);

            function addChar() {
                try {
                    if (idx < spanTitle.children.length) {
                        const charSpan = spanTitle.children[idx];
                        charSpan.classList.add("fade");
                        idx++;
                    } else {
                        removeInterval(animationInterval);
                        setTimeout(animateOut, 1000);
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
                        const charSpan = spanTitle.children[idx];
                        charSpan.classList.remove("fade");
                        idx--;
                    } else {
                        removeInterval(animationInterval);
                        spanTitle.textContent = "";
                        // animate next title
                        setTimeout(animateIn(titles[++titleIdx % titles.length]), 100);
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
        animateIn(titles[titleIdx]);
    }
}