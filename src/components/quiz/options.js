import React,{useState} from 'react'
export default function Options(props){
    const [isSelected, setIsSelected] = useState(false)
    function handleOptionClick() {
        setIsSelected(true);
        props.Selected();
      }
    const optionStyles = {
        display: "inline-block",
        padding: "0.5rem 1rem",
        backgroundColor: isSelected? "black":"white",
        color: isSelected?"white":"black",
        border: "1px solid black",
        margin: "1rem 1rem 0 0"
    }
    return(
        <div style={optionStyles}
        onClick={handleOptionClick}>
            {props.children}
        </div>
    )
}