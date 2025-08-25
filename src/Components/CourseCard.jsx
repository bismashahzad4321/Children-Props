const CourseCard = ({ title, children }) => {

    {/* Function */ }
    function btn() {
        console.log(`${title}`)
    }
    return (
        <div>
            {/* Child Component */}
            <div className="MainCourseCard">
                <div>
                    <h1>{title}</h1>
                    {children}
                </div>
                <button onClick={btn}>Click Me</button>
            </div>
        </div>
    )
}
export default CourseCard;