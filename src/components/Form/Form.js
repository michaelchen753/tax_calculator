import React from "react";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import { withRouter } from "react-router-dom";
import updateAction from "./updateAction";

import { AiOutlineExclamationCircle } from 'react-icons/ai';

import "./Form.scss";

 function Form(props) {
  const { register, handleSubmit, formState: { errors }} = useForm();
  const { actions } = useStateMachine({ updateAction });
  const onSubmit = data => {
    actions.updateAction(data);
    props.history.push("./result");
  };
  return (
      <div className='cal'>
        <h2>Calculate your tax</h2>
        <h5> <AiOutlineExclamationCircle/> Fields marked with * are mandatory </h5>
        <form  className='cal__form' onSubmit={handleSubmit(onSubmit)}>
          <label>Select your country of residence *: </label>          
            <select {...register("country",{required:true})}>
                  <option value="Australia">Australia</option>
                  <option value="UK">UK</option>
                  <option value="USA">USA</option>
                  <option value="Others">Others</option>
              </select>
              {errors.country && errors.country.type === "required" && <span>This is required</span>}
          
          <label> Select an income year *: </label>         
              <select {...register("year",{required:true})}>
                  <option value="2020-2021">2020-2021</option>
                  <option value="2019-2020">2019-2020</option>
                  <option value="2018-2019">2018-2019</option>                
              </select>
              {errors.year && errors.year.type === "required" && <span>This is required</span>}
          
          <label>Enter your total taxable income for the income year *:</label>         
          <input type="number" placeholder ='$ Amount' step = '1' min='0' {...register("income",{required:true})} />
          {errors.income && errors.income.type === "required" && <span>This is required</span>} 
                   
          <input className='cal__submit' type="submit" value="Calculate"/>
        </form>
      </div>
  
  );
}
export default withRouter(Form);