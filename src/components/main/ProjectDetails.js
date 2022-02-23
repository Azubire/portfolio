import { useState, useEffect, Fragment } from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBBtn} from 'mdb-react-ui-kit';
import { useParams } from 'react-router-dom';


const ProjectDetails = ({ projectList }) => {
    const [state, setstate] = useState({
        name: '',
        desc: '',
        img: '',
        stack: [{icon:'',name:'',}],
        address: ''
    });
    const url = useParams();
    const projectId = parseInt(url.id);
    
    useEffect(() => {
        const getId = async (id) => {
            const project = await projectList.find((item)=>(item.id === id));
             setstate(()=>(project));
            //  console.log(project);
        }   
        getId(projectId);
    },[projectId]);

        const {name,desc,img,address,stack} = state;
        // console.log(name);
        // console.log(stack);

  return (
    <>
      <MDBContainer className="py-5 h-100">
        <MDBRow>
          <MDBCol
            md="6"
            sm="12"
            className="d-flex flex-column  text-center"
          >
            <h1 className="display-3 fw-bold">{name}</h1>
            <p className="fs-6 text-start">{desc}</p>
            <div className="d-sm-flex my-5 justify-content-center align-content-center">
              <MDBBtn color="primary mx-2 mt-3" className=" py-2">
                View Project
              </MDBBtn>
              <MDBBtn color="warning mx-2 mt-3" className=" py-2">
                View On Github
              </MDBBtn>
            </div>
          </MDBCol>
          <MDBCol className="hover-zoom">
            <img src={img} alt={name} height="290" className="fit w-100" />
          </MDBCol>
        </MDBRow>

        <MDBRow className='justify-content-center'>
            <h1 className='text-center py-4'>
              <span className='hero-text text-danger'>Technologies</span> Used
            </h1>
                {stack.map((item,index)=>{
                    const {icon,name} = item;
                    return (
                      <MDBCol
                        key={index}
                        className="col-md-2 col-3 d-flex flex-column justify-content-center align-items-center align-content-center"
                      >
                        {icon}
                        <p className="m-0">{name}</p>
                      </MDBCol>
                    );
                })}
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default ProjectDetails;
