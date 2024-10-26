import { useState } from "react";

function Form(){

    var[country,setCountry] = useState("");
    var[gender,setGender] = useState("");

    var[bahubali,setBahubali] = useState(false);
    var[KGF,setKgf] = useState(false);
    var[Animal,setanimal] = useState(false);

    function handleCountry(e){
        setCountry(e.target.value);
    }

    function handleGender(e){
        setGender(e.target.value);
    }

    function handleBahubali(e){
        if(e.target.checked == true){
            setBahubali(true);
            return;
        }
        setBahubali(false);
    }

    function handlekgf(e){
        if(e.target.checked == true){
            setKgf(true);
            return;
        }

        setKgf(false)
    }

    function handleanimal(e){
        if(e.target.checked == true){
            setanimal(true);
            return;
        }

        setanimal(false);
    }

    return(
        <div className="container">
            <h3>Form</h3>
            <div className="row">
                <div className="col-4">
                    <h4>Drop down</h4>
                    <div>
                        <label>Country</label>
                        <select className="form-select" onChange={e => handleCountry(e)}>
                            <option value="India">India</option>
                            <option value= "USA">USA</option>
                            <option value = "Germanay">Germanay</option>
                            <option value = "Australia">Australia</option>
                        </select>
                    </div>
                </div>
                <div className="col-4">
                    <label>Gender</label>
                    <div class="form-check">
                        <input class="form-check-input" onChange={e=> handleGender(e)} type="radio" name="Gender" value="Male" />
                        <label class="form-check-label" >
                            Male
                        </label>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" onChange={e=> handleGender(e)} type="radio" name="Gender" value={"Female"}/>
                        <label class="form-check-label">
                            Female
                        </label>
                        </div>                    
                </div>
                 <div className="col-4">
                 <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Bahubali" onChange={e => handleBahubali(e)} />
                        <label class="form-check-label" >
                            Bahubali
                        </label>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="KGF" onChange={e => handlekgf(e)}  />
                        <label class="form-check-label" >
                            KGF
                        </label>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="Animal" onChange={e => handleanimal(e)}  />
                        <label class="form-check-label" >
                            Animal
                        </label>
                        </div>
                </div>                
                
                    <div className="row mt-5" >
                        <div className="col-4">

                            <h5>Country : {country}</h5> <br/>
                            <h5>Gender : {gender}</h5> <br/>
                            <h5>bahubali : {bahubali.toString()}</h5> <br/>
                            <h5>KGF : {KGF.toString()}</h5>  <br/>
                            <h5>Animal : {Animal.toString()}</h5> <br/>

                        </div>
                    </div>      
            </div>
        </div>
    )

}

export default Form;