import './service.css'
import './articles.css'

function Article(){
    return(
  
        
  <div className="a1">

        <div className="s1"><h1 style={{paddingTop:20}}><b>Check out our latest articles</b></h1>
       
        </div> 

        <div className="s2">
          <div className="box2">
            <img src='ai3.jpeg' height={200} width={200} ></img>
            <h5 style={{ paddingTop:40}}><b>Diease, detection, check up in the laboratory</b></h5>
            <p>vssxgd bxdhbc bchdbc bhdbc dbcchdb cbdhcb dhbchdbc cbhdcbh chdhbch dcbhdbc chhdbch cb dhbc njabj abx bh h hbx hj hbsxb </p>
           
          </div>
            <div className="box2">
            <img src='ai2.jpeg' height={200} width={200}></img>
            <h5 style={{ paddingTop:40}}><b>Herbal medicines that are safe for consumption</b></h5>
            <p>vssxgd bxdhbc bchdbc bhdbc dbcchdb cbdhcb dhbchdbc cbhdcbh chdhbch dcbhdbc chhdbch cb dhbc njabj abx bh h hbx hj hbsxb </p>
           
            </div>
            <div className="box2">
            <img src='ai1.jpeg' height={200} width={200}></img>
            <h5 style={{ paddingTop:40}}><b>Natural care for healthy facial skin</b></h5>
            <p>vssxgd bxdhbc bchdbc bhdbc dbcchdb cbdhcb dhbchdbc cbhdcbh chdhbch dcbhdbc chhdbch cb dhbc njabj abx bh h hbx hj hbsxb </p>
           
            </div>
            
        </div>
        <button className='button5' >View all</button>
  </div>
 
    )
}
export default Article