import React from 'react';

const Blog = () => {
    return (
        <div>
            <p>1. props vs state</p>
            <h4>Ans:
                (i). state: State is updateable structure whice is used to store data. State is changable. It is the heart of the react component. It definds that how a component rander. State modified inside the component or directly by the component.
                <br />
                (ii). Props: Props is only readable. Props can not be changed. Props renders an object. It stored tags attribute and works as a HTML attribute. Props allows to pass data one component to other.
            </h4>
            <p>2. How does useState work?</p>
            <h4>Ans: useState is a React hook. It allows to add state to a functional component. useState returns an array. There is two values. first is current state and second is a function. hook takes a vlaue in an argument and returns an updated value when the function is called. we get the updated value from first.</h4>
            <p>3. Purpose of useEffect other than fetching data.</p>
            <h4>Ans: useEffect usually used for fetching data. It can also used for other purposes. useEffect is also used for update title of the webpage. it also used for manage animation. to set a timer, useEffect is used. useEffect can be used in many different ways to manage side effects of our react component.</h4>
            <p>4. how does react work?</p>
            <h4>Ans: React is a javaScript library. which is known named JSX. React allows developer to build fast and dynamic user intreface. React works by virtual DOM. when the components state changed, react use its diff algorithm to compare the difference between current DOM and the new virtual DOM. Then it changed only the parts which is updated.</h4>
        </div>
    );
};

export default Blog;