function animateDesignTitle() {
    /* title animation */

    const titles = ["Full Stack Developer", "Python Developer", "Data & AI Engineer"];
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
            const n = spanTitle.children.length;
            var idx = Math.floor(n / 2);
            var animationInterval = setInterval(addChar, animationTime);

            function addChar() {
                try {
                    if (idx < n) {
                        spanTitle.children[idx].classList.add("fade");
                        spanTitle.children[n - idx - 1].classList.add("fade");
                        idx++;
                    } else {
                        removeInterval(animationInterval);
                        setTimeout(animateOut, 1500);
                    }
                } catch (error) {
                    removeInterval(animationInterval);
                    throw error;
                }
            }
        }

        function animateOut() {
            /* Removes the word to the span title. */
            const n = spanTitle.children.length;
            var idx = spanTitle.children.length - 1;
            var animationInterval = setInterval(removeChar, animationTime);

            function removeChar() {
                try {
                    if (Math.floor(n / 2) < idx) {
                        spanTitle.children[idx].classList.remove("fade");
                        spanTitle.children[n - idx - 1].classList.remove("fade");
                        idx--;
                    } else {
                        removeInterval(animationInterval);
                        spanTitle.textContent = "";
                        // animate next title
                        setTimeout(animateIn(titles[++titleIdx % titles.length]), 700);
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