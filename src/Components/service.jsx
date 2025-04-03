import './service.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass, faTruckMedical, faPrescriptionBottle, faFileLines, faPager, faFileWord} from "@fortawesome/free-solid-svg-icons"; 

function Service(){
    return(
<div className="s0">

        <div className="s1"><h2><b> Our services</b></h2>
           <p>dxgfvhjbjhvu gch vhvv jfnvje gughui bh vhv vhv vhvhj jhio jhi lm kln njpo nknp xxvjv jhvv rtrs zeareaebn waear edz  bjvfbv jkdfvb jdffdj dbvjfb bcbdf b fb b vfdb bkfv bhhf bcbk dbvhb jfvbhvb jbfb </p>
        </div> 

        <div className="s2">
          <div className="box1"><FontAwesomeIcon icon={faMagnifyingGlass} size="5x" color="blue"/> 
            <h5 style={{marginTop:5, paddingTop:40}}><b>Search doctors </b></h5>
            <p> vxd bcjcb dbbhf nvkk kngkn  mj nci d dnki lwwo qks axj axxj axsnsn x jb xc dhbhc dc h
            </p>
          </div>
            <div className="box1"><FontAwesomeIcon icon={faPrescriptionBottle} size="5x" color="blue" />
            <h5 style={{marginTop:5, paddingTop:40}}><b>Online pharmacy</b></h5>
            <p> vxd bcjcb dbbhf nvkk kngkn  mj nci d dnki lwwo qks axj axxj axsnsn x jb xc dhbhc dc h
            </p>
            </div>
            <div className="box1"><FontAwesomeIcon icon={faFileLines} size="5x" color="blue"/>
            <h5 style={{marginTop:5, paddingTop:40}}><b>Consultations</b></h5>
            <p> vxd bcjcb dbbhf nvkk kngkn  mj nci d dnki lwwo qks axj axxj axsnsn x jb xc dhbhc dc h
            </p>
            </div>
        </div>

        <div className="s2">
            <div className="box1"><FontAwesomeIcon icon={faPager} size="5x" color="blue" />
            <h5 style={{marginTop:5, paddingTop:40}}><b>Details info</b></h5>
            <p> vxd bcjcb dbbhf nvkk kngkn  mj nci d dnki lwwo qks axj axxj axsnsn x jb xc dhbhc dc h
            </p>
            </div>
            <div className="box1"><FontAwesomeIcon icon={faTruckMedical} size="5x" color="blue"/>
            <h5 style={{marginTop:5, paddingTop:40}}><b>Emergency care</b></h5>
            <p> vxd bcjcb dbbhf nvkk kngkn  mj nci d dnki lwwo qks axj axxj axsnsn x jb xc dhbhc dc h
            </p>
            </div>
            <div className="box1"><FontAwesomeIcon icon={faFileWord} size="5x" color="blue" />
            <h5 style={{marginTop:5, paddingTop:40}}><b>Tracking</b></h5>
            <p> vxd bcjcb dbbhf nvkk kngkn  mj nci d dnki lwwo qks axj axxj axsnsn x jb xc dhbhc dc h
            </p>
            </div>
          
        </div>
        <button className='button2' >Learn more</button>
    </div>

    )
}
export default Service