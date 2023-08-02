// import { useState } from "react"
import { AddButton } from "../../components/button";
import './projects.scss';


const Projects = () => {
  // const [open, setOpen] = useState(false);

  return (
    <>
      <div className="projects">
        <div className="info">
          <h1>案件情報</h1>
          <AddButton/>
        </div>
        
      </div>
    </>
  )
}

export default Projects