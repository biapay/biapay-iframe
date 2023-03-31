function biapay(url) {
    const container = document.querySelector("#iframe-container");
    const iframe = createIframe(url);
    container.appendChild(iframe);
}

function createIframe(url) {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("src", url);
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("allow", "autoplay; encrypted-media");
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    return iframe;
}

module.exports = {
    biapay: biapay
};