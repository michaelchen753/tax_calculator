import React, {useState, useEffect } from 'react'
import { useStateMachine } from "little-state-machine";
import updateAction from "../Calculator/updateAction";
import './Breakdown.scss';
export default function Breakdown(props) {
    const { state } = useStateMachine(updateAction);
    const income = state.income;    
    
    const level1 = 0;    
    const [level2, setLevel2]= useState(0);
    const [level3, setLevel3]= useState(0);
    const [level4, setLevel4]= useState(0);
    const [level5, setLevel5]= useState(0);
    const total = level1 + level2 + level3 + level4 + level5;
    const taxCalculatorBreakdown = (number)=>{
            if(number >= 180001){
            setLevel2(5092); 
            setLevel3(29467); 
            setLevel4(51667);
            setLevel5((number - 180000)* 0.45);            
           }else if(number >=120001) {
            setLevel2(5092); 
            setLevel3(29467); 
            setLevel4((number-120000) *0.37);
            setLevel5(0);            
           }else if(number >=45001) {
            setLevel2(5092); 
            setLevel3((number-45000) *0.325); 
            setLevel4(0);
            setLevel5(0);      
           
           }else if(number >=18201) {
            setLevel2((number-18000) *0.19); 
            setLevel3(0); 
            setLevel4(0);
            setLevel5(0);             
           } else {
             return  0;
           }       
    };

    useEffect(()=>{
        taxCalculatorBreakdown(income);
    }, [income])
    
    return (
        <main className='breakdown'>
            <article>
                <h4>Your estimated taxable income is:</h4>
                <h2>${total}</h2>
                <p className='breakdown__title'>Breakdown</p>
                <div className='breakdown__1'>
                    <div className='b_1'><p>Tax Bracket<br></br>$0-$18200</p></div>              
                    <span>${level1}</span>
                </div>
                <div className='breakdown__2'>
                    <div className='b_2'><p>Tax Bracket<br></br>$18201-$45000</p></div>              
                    <span>${level2}</span>
                </div>
                <div className='breakdown__3'>
                    <div className='b_3'><p>Tax Bracket<br></br>$45001-$120000</p></div>              
                    <span >${level3}</span>
                </div>
                <div className='breakdown__4'>
                    <div className='b_4'><p>Tax Bracket<br></br>$120001-$180000</p></div>              
                    <span>${level4}</span>
                </div>
                <div className='breakdown__5'>
                    <div className='b_5'><p>Tax Bracket<br></br>$180000+ </p></div>              
                    <span>${level5}</span>
                </div> 
            </article>
        </main>
    )
}
