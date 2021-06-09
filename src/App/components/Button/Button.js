import React,{useState} from 'react';
import PropTypes  from 'prop-types';
import  './Button.css';
function Button(props) {
    console.log(props);
    const [clicked, setclicked] = useState({clicked:false,disabled:false});
    return <button onClick={evt=>{
                    //    alert('j\'ai cliqué sur : '+evt.target.innerText);
                       setclicked({...clicked,clicked:true, disabled:true});
                       //remise a false de l'etat cliqué du button au bout de 300 ms 
                       setTimeout(()=>{
                        setclicked({...clicked,clicked:false});
                       },300);
                       setTimeout(()=>{
                        setclicked({...clicked,disabled:false});
                       },1000);
                       console.warn(evt);
                       props.lorsqueJeClickeraiSurLeButton(evt.target.innerText);
                    }} 
                    className={"Button"+(clicked.clicked ? ' click':'')} 
                    disabled={clicked.disabled?'disabled':''}
                    style={{
                        backgroundColor:props.bgcolor,
                        fontStyle:(props.isItalic?'italic':'normal')
                    }}
            >{props.children}</button>;
}
Button.propTypes={
    children:PropTypes.any.isRequired,
    bgcolor:PropTypes.string.isRequired,
    lorsqueJeClickeraiSurLeButton:PropTypes.func.isRequired
}
Button.defaultProps={
    bgcolor:'Aquamarine',
    isItalic:true,
    lorsqueJeClickeraiSurLeButton:()=>{}
}
export default Button;