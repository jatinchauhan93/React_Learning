function customRender(element, container) {
    const domElement = document.createElement(element.type);

    domElement.innerHTML = element.children;

    for (const prop in element.quality) {
        domElement.setAttribute(prop, element.quality[prop]);
    }

    container.appendChild(domElement);
}

const element = {
    type: "a",
    quality: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "I am Google link"
};

const mainContainer = document.querySelector("#root");

customRender(element, mainContainer);