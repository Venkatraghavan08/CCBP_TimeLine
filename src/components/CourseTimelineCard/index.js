// Write your code here
import {AiFillClockCircle} from "react-icons/ai"
import index.css

const CourseTimeLineCard=props=>{
    const {data}=props
    return(
        <div className="card-container">
            <div className="title-duration-container">
                <h1 className="title">{data.courseTitle}</h1>
                <div className="calender-duration">
                    <AiFillClockCircle/>
                    <p className="duration">{data.duration}</p>
                </div>
            </div>
            <p className="project-description">{data.description}</p>
            <div className="tags-container">
                {data.tagsList.map(eachItem=>(
                <p className="tags" key={eachItem.id}>{eachItem.name}{' '}
                </p>
                ))}
            </div>
        </div>
    )
}
export default CourseTimeLineCard
