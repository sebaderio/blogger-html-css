const getElement = (selector) => {
    const element = document.querySelector(selector);

    if (element) return element;
    throw Error(
        `Please double check your class names, there is no ${selector} class`
    );
};

const nav = getElement(".nav");
const toggleCollapse = getElement(".toggle-collapse");

toggleCollapse.addEventListener("click", () => {
    console.log(toggleCollapse);
    nav.classList.toggle("collapse");
});
