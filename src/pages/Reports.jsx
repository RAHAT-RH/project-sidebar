import React from "react";
import './Reports.css';

export const Reports = () => {
  return (
    <div className='reports'>
      <h1>Reports</h1>
    </div>
  );
};

export const ReportsOne = () => {
  return (
    <div className='reports'>
      <div class="container px-1 py-5 mx-auto">
        <div class="row d-flex justify-content-center">
          <div className="col-md-6">
            <div class="">

              

                <form class="form-card" onsubmit="event.preventDefault()">
                  <div class="row justify-content-between text-left">
                    <div class="form-group col-md-6  flex-column d-flex"> <label class="form-control-label ">Personal code<span class="text-danger"> *</span></label> <input type="text" id="fname" name="fname" placeholder="Enter your first name" onblur="validate(1)" /> </div>
                    <div class="form-group col-md-6  flex-column d-flex"> <label class="form-control-label ">Address<span class="text-danger"> *</span></label> <input type="text" id="lname" name="lname" placeholder="Enter your last name" onblur="validate(2)" /> </div>
                  </div>
                  <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label ">Card No  email<span class="text-danger"> *</span></label> <input type="text" id="email" name="email" placeholder="" onblur="validate(3)" /> </div>
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label ">Phone number<span class="text-danger"> *</span></label> <input type="text" id="mob" name="mob" placeholder="" onblur="validate(4)" /> </div>
                  </div>
                  <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label ">Job title<span class="text-danger"> *</span></label> <input type="text" id="job" name="job" placeholder="" onblur="validate(5)" /> </div>
                  </div>
                  <div class="row justify-content-between text-left">
                    <div class="form-group col-12 flex-column d-flex"> <label class="form-control-label ">What would you be using Flinks for?<span class="text-danger"> *</span></label> <input type="text" id="ans" name="ans" placeholder="" onblur="validate(6)" /> </div>
                  </div>
                  <div class="row justify-content-end">
                    <div class="form-group col-sm-6"> <button type="submit" class="btn-block btn-primary">Request a demo</button> </div>
                  </div>
                </form>
              
            </div>
          </div>
          <div className="col-md-6">

          </div>
        </div>
      </div>
    </div>
  );
};

export const ReportsTwo = () => {
  return (
    <div className='reports'>
      <h1>Reports/reports2</h1>
    </div>
  );
};

export const ReportsThree = () => {
  return (
    <div className='reports'>
      <h1>Reports/reports3</h1>
    </div>
  );
};