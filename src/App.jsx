///import '../css/App.css';
//import profilepic from '../static/images/Photo.jpeg';
const contentNode = document.getElementById('contents');

const component = (
    <div>
        <h1 className="heading">Arthkumar Patel</h1>
        <img className="profile-pic" src="./images/Arth.jpg" alt="Profile-pic" height="202"></img>
        <p className="paragraph" >
            Hello, my name is Arthkumar, data enthusiast currently working as Data Science Intern at RipeMetrics. I love to travel because not only it is the ultimate adventure but it also exposes you to new types of people, different ways of living, and opens up your mind. Every day I push myself to learn something new, whether that be about Machine Learning, Software Engineering, or a random interesting fact.
        </p>
        <a href='https://github.com/arthpatel98/assignment1.git'>
            <button className="button1">View My GitHub Repo</button>
        </a>
    </div>
);


ReactDOM.render(component, contentNode);