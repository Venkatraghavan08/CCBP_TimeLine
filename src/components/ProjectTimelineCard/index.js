// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimeLineCard = props => {
  const {data} = props
  return (
    <div className="card-container">
      <img className="image" alt="project" src={data.imageUrl} />
      <div className="title-duration-container">
        <h1 className="title">{data.projectTitle}</h1>
        <div className="calender-duration">
          <AiFillCalender />
          <p className="duration">{data.duration}</p>
        </div>
      </div>
      <p className="project-description">{data.description}</p>
      <a className="visit-link" href={data.projectUrl}>
        {' '}
        Visit{' '}
      </a>
    </div>
  )
}
export default ProjectTimeLineCard
