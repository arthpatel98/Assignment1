"use strict";

///import '../css/App.css';
//import profilepic from '../static/images/Photo.jpeg';
var contentNode = document.getElementById('contents');

var component = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        { className: "heading" },
        "Arthkumar Patel"
    ),
    React.createElement("img", { className: "profile-pic", src: "./images/Arth.jpg", alt: "Profile-pic", height: "202" }),
    React.createElement(
        "p",
        { className: "paragraph" },
        "Hello, my name is Arthkumar, data enthusiast currently working as Data Science Intern at RipeMetrics. I love to travel because not only it is the ultimate adventure but it also exposes you to new types of people, different ways of living, and opens up your mind. Every day I push myself to learn something new, whether that be about Machine Learning, Software Engineering, or a random interesting fact."
    ),
    React.createElement(
        "a",
        { href: "https://github.com/arthpatel98/assignment1.git" },
        React.createElement(
            "button",
            { className: "button1" },
            "View My GitHub Repo"
        )
    )
);

ReactDOM.render(component, contentNode);