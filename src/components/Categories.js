import './Categories.css';
import bell from '../assets/images/bell.png';
import elipse from '../assets/images/elipse.png';
import polygon from '../assets/images/polygon.png';
import trash from'../assets/images/trash.png';
import vector from '../assets/images/Vector.png';
function Categories() {
  return (
    <div>
      {/* <div class="sidenav">
        <img src={logo}></img>
      </div> */}
      <div style={{margin: '20px 40px'}}>
      <div className="d-flex justify-content-between" >
        <div>
          <h1>Categories</h1>
        </div>
        <div className="d-flex justify-content-around">
          <div style={{marginRight: '28px', marginTop:'13px'}}>
            <img src={bell}></img>
          </div>
          <div>
          <img src={elipse}></img>
          </div>
          <div style={{marginLeft:'5px',marginTop:'8px'}}>
          <img src={polygon}></img>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between flex-wrap"  >
        {/* left side */}
        <div  id="left-side">
                <div className="d-flex header">
                   <div class="form-check">
                     <input type="checkbox" className="form-check-input check" id="exampleCheck1"/>
                     <label className="form-check-label check-right" for="exampleCheck1">CATEGORIES</label>
                   </div>
                   <div className="text-center header-one"> 
                     <p>Available for Questionnaire bank</p>
                   </div>
                   <div className="text-center header-two"> 
                     <p>Available for Documents bank</p>
                   </div>
                   <div className="text-center header-three"> 
                     <p>Delete</p>
                   </div>
                </div>
        {/* card */}

        <div className="d-flex card" id="myCard">
        <div className="d-flex justify-content-between header">
                   <div class="form-check">
                     <input type="checkbox" className="form-check-input check1" id="exampleCheck1"/>
                     <label className="form-check-label check-right-card" for="exampleCheck1">Category Name</label>
                   </div>
                   <div className="text-center " style={{}}> 
                   <div class="form-check">
                     <input type="checkbox" className="form-check-input check1 second-check-form" id="exampleCheck1"/>
                   </div>
                   </div>
                   <div className="text-center " style={{}}> 
                   <div class="form-check">
                     <input type="checkbox" className="form-check-input check1 third-check-form" id="exampleCheck1"/>
                   </div>
                   </div>
                   <div className="text-right" style={{}}> 
                   
                   <img src={vector}></img>
                   <img src={trash} style={{marginLeft:'29px'}}></img>
                   </div>
                </div>
        </div>
        {/* card */}

        {/* card */}
        <div className="d-flex card">
        <div className="d-flex justify-content-between header">
                   <div class="form-check">
                     <input type="checkbox" className="form-check-input check1" id="exampleCheck1"/>
                     <label className="form-check-label check-right-card" for="exampleCheck1">Category Name</label>
                   </div>
                   <div className="text-center " style={{}}> 
                   <div class="form-check">
                     <input type="checkbox" className="form-check-input check1 second-check-form" id="exampleCheck1"/>
                   </div>
                   </div>
                   <div className="text-center " style={{}}> 
                   <div class="form-check">
                     <input type="checkbox" className="form-check-input check1 third-check-form" id="exampleCheck1"/>
                   </div>
                   </div>
                   <div className="text-right" style={{}}> 
                   
                   <img src={vector}></img>
                   <img src={trash} style={{marginLeft:'29px'}}></img>
                   </div>
                </div>
        </div>
        {/* card */}
        {/* card */}
        <div className="d-flex card">
        <div className="d-flex justify-content-between header">
                   <div class="form-check">
                     <input type="checkbox" className="form-check-input check1" id="exampleCheck1"/>
                     <label className="form-check-label check-right-card" for="exampleCheck1">Category Name</label>
                   </div>
                   <div className="text-center " style={{}}> 
                   <div class="form-check">
                     <input type="checkbox" className="form-check-input check1 second-check-form" id="exampleCheck1"/>
                   </div>
                   </div>
                   <div className="text-center " style={{}}> 
                   <div class="form-check">
                     <input type="checkbox" className="form-check-input check1 third-check-form" id="exampleCheck1"/>
                   </div>
                   </div>
                   <div className="text-right" style={{}}> 
                   
                   <img src={vector}></img>
                   <img src={trash} style={{marginLeft:'29px'}}></img>
                   </div>
                </div>
        </div>
        {/* card */}
        {/* card */}
        <div className="d-flex card">
        <div className="d-flex justify-content-between header">
                   <div class="form-check">
                     <input type="checkbox" className="form-check-input check1" id="exampleCheck1"/>
                     <label className="form-check-label check-right-card" for="exampleCheck1">Category Name</label>
                   </div>
                   <div className="text-center " style={{}}> 
                   <div class="form-check">
                     <input type="checkbox" className="form-check-input check1 second-check-form" id="exampleCheck1"/>
                   </div>
                   </div>
                   <div className="text-center " style={{}}> 
                   <div class="form-check">
                     <input type="checkbox" className="form-check-input check1 third-check-form" id="exampleCheck1"/>
                   </div>
                   </div>
                   <div className="text-right" style={{}}> 
                   
                   <img src={vector}></img>
                   <img src={trash} style={{marginLeft:'29px'}}></img>
                   </div>
                </div>
        </div>
        {/* card */}
        </div>
        {/* left-side */}
        {/* right side */}
        <div  id="right-side">
                <div className="d-flex justify-content-between header2" id="bottom-distance">
                   <div class="form-check">
                     <input type="checkbox" className="form-check-input check" id="exampleCheck1"/>
                     <label className="form-check-label check-right" for="exampleCheck1">SUBCATEGORIES</label>
                   </div>
                   
                   <div className="text-center header-three"> 
                     <p>Delete</p>
                   </div>
                </div>
        {/* card */}

        <div className="d-flex card" id="myCard">
        <div className="d-flex justify-content-between header">
                   <div class="form-check">
                     <input type="checkbox" className="form-check-input check1" id="exampleCheck1"/>
                     <label className="form-check-label check-right-card" for="exampleCheck1">Category Name</label>
                   </div>
                   
                   <div > 
                   
                   <img src={vector}></img>
                   <img src={trash} style={{marginLeft:'29px'}}></img>
                   </div>
                </div>
        </div>
        {/* card */}

         {/* card */}

         <div className="d-flex card" id="myCard">
        <div className="d-flex justify-content-between header">
                   <div class="form-check">
                     <input type="checkbox" className="form-check-input check1" id="exampleCheck1"/>
                     <label className="form-check-label check-right-card" for="exampleCheck1">Category Name</label>
                   </div>
                   
                   <div > 
                   
                   <img src={vector}></img>
                   <img src={trash} style={{marginLeft:'29px'}}></img>
                   </div>
                </div>
        </div>
        {/* card */}
         {/* card */}

         <div className="d-flex card" id="myCard">
        <div className="d-flex justify-content-between header">
                   <div class="form-check">
                     <input type="checkbox" className="form-check-input check1" id="exampleCheck1"/>
                     <label className="form-check-label check-right-card" for="exampleCheck1">Category Name</label>
                   </div>
                   
                   <div > 
                   
                   <img src={vector}></img>
                   <img src={trash} style={{marginLeft:'29px'}}></img>
                   </div>
                </div>
        </div>
        {/* card */}
         {/* card */}

         <div className="d-flex card" id="myCard">
        <div className="d-flex justify-content-between header">
                   <div class="form-check">
                     <input type="checkbox" className="form-check-input check1" id="exampleCheck1"/>
                     <label className="form-check-label check-right-card" for="exampleCheck1">Category Name</label>
                   </div>
                   
                   <div > 
                   
                   <img src={vector}></img>
                   <img src={trash} style={{marginLeft:'29px'}}></img>
                   </div>
                </div>
        </div>
        {/* card */}
         {/* card */}

         <div className="d-flex card" id="myCard">
        <div className="d-flex justify-content-between header">
                   <div class="form-check">
                     <input type="checkbox" className="form-check-input check1" id="exampleCheck1"/>
                     <label className="form-check-label check-right-card" for="exampleCheck1">Category Name</label>
                   </div>
                   
                   <div > 
                   
                   <img src={vector}></img>
                   <img src={trash} style={{marginLeft:'29px'}}></img>
                   </div>
                </div>
        </div>
        {/* card */}
         {/* card */}

         <div className="d-flex card" id="myCard">
        <div className="d-flex justify-content-between header">
                   <div class="form-check">
                     <input type="checkbox" className="form-check-input check1" id="exampleCheck1"/>
                     <label className="form-check-label check-right-card" for="exampleCheck1">Category Name</label>
                   </div>
                   
                   <div > 
                   
                   <img src={vector}></img>
                   <img src={trash} style={{marginLeft:'29px'}}></img>
                   </div>
                </div>
        </div>
        {/* card */}
         {/* card */}

         <div className="d-flex card" id="myCard">
        <div className="d-flex justify-content-between header">
                   <div class="form-check">
                     <input type="checkbox" className="form-check-input check1" id="exampleCheck1"/>
                     <label className="form-check-label check-right-card" for="exampleCheck1">Category Name</label>
                   </div>
                   
                   <div > 
                   
                   <img src={vector}></img>
                   <img src={trash} style={{marginLeft:'29px'}}></img>
                   </div>
                </div>
        </div>
        {/* card */}
        </div>
        {/* right side */}
      </div>
      </div>
    </div>
    
  );
}


export default Categories;
