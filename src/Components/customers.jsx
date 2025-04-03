import './customers.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

function Customer(){
return(
    <div className='c0'>
        <h1><b>What our customers are saying</b></h1>
        <div className='c1'>
          <div className='c2'>
            <div className='c21'>
          <FontAwesomeIcon icon={faUser} size="8x" color="blue" />
          </div>
          <div className='c22'>
            <h3>Edward Newgate</h3>
            <p>Founder Circle</p>
            </div>

          </div>
          <div className='c3'>
           <p> dsgchhjkklxnxljch  dhs cb j b j   j nkln  b jfb j bfb jdb fkj nj bfjbv b jfb bhfb vcdhb jdsn klsdncjldsb jd bvckhsbjsb ndx dxn bkshb jsxbsxbdbdsj bdn xn sh vkds dcbdbcj bcjdbc </p>
          </div>
        </div>
    </div>

)

}
export default Customer