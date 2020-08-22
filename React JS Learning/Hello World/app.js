

// React.createElement();


// let where = document.getElementById('app');

// let h1 = React.createElement('h1', null, "Hello React JS");

// ReactDOM.render(h1, where);

















// let where = document.getElementById('app');

// let h1 = React.createElement('h1', { id: 'heading', title: 'Hello World in React JS' }, "Hello React JS");
// let p = React.createElement('p', null, 'A quick brown fox jumps over the lazy dog.');

// let div = React.createElement('div', null, h1, p);

// ReactDOM.render(div, where);
















let where = document.getElementById('app');

let stName = React.createElement('h1', null, 'Haider Ali');
let rollNumber = React.createElement('p', null, '2643');
let courseName = React.createElement('p', null, `You are enrolled in React JS course.`);

let div = React.createElement('div', null, stName, rollNumber, courseName);

class Student extends React.Component {
    render() {
        return div;
    }
}

let StudentElement = React.createElement(Student, {});


ReactDOM.render(StudentElement, where);