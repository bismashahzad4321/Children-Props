import CourseCard from "./Components/CourseCard";
import "./App.css"
function App() {
    return (
        <div>
            <CourseCard title="Welcome To React Course">
                
                <p>Learn the fundamentals of React including components, props, and state.</p>
            </CourseCard>
            {/* // HTMl */}
            <CourseCard title="Welcome To HTML Course">
                <p>Learn the fundamentals of HTML including components, props, and state.</p>

            </CourseCard>
            {/* Css */}
            <CourseCard title="Welcome To CSS Course">
                <p>Learn the fundamentals of CSS including components, props, and state.</p>
            </CourseCard>
            {/* Javascript */}
            <CourseCard title="Welcome To JAVASCRIPT Course">
                <p>Learn the fundamentals of Javascript including components, props, and state.</p>
            </CourseCard>
        </div>

    )
}
export default App;