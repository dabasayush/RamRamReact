// const heading = document.createElement("h1");
// heading.innerHTML = "Ram Ram Bhai";
// const root = document.getElementById("root");
// root.appendChild(heading);


// const reactHeading = React.createElement("h1", {}, "Ram Ram");
// const reactRoot = ReactDOM.createRoot(document.getElementById("react-root"));
// reactRoot.render(reactHeading)

const parent = React.createElement("div", {id: "parent"}, (
    React.createElement("div", {id: "child"}, [
        React.createElement("div", {}, [
            React.createElement("h1", {}, "Ram Ram"),
            React.createElement("p", {}, "Ram Ram Bhai"),
        ]),
        React.createElement("h1", {}, "Ram Ram Bhai")
    ])
));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);