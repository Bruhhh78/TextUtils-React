import React, { useState } from 'react';


const Textform = (props) => {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newUText = text.toUpperCase();
        setText(newUText);
        props.showAlert("Converted to UpperCase", "secondary")
    }

    const handleLowerClick = () => {
        let newLText = text.toLowerCase();
        setText(newLText);
        props.showAlert("Converted to LowerCase", "info")
    }

    const handleAlternatetext = () => {
        let newText = '';
        for (let i = 0; i < text.length; i++) {
            if (i % 2 === 0) {
                newText += text.charAt(i).toLowerCase();
            } else {
                newText += text.charAt(i).toUpperCase();
            }
        }
        setText(newText);
        props.showAlert("Converted to Alternate text", "primary")
    }

    const handleClearClick = () => {
        setText("");
        props.showAlert("Text Cleared", "info")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const wordCount = text.split(/\s+/).filter((word) => word !== "").length;

    return (
        <>
            <div className="container my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h1>{props.heading}</h1>

                <div className="mb-3">
                    <textarea
                        className="form-control"
                        placeholder='Enter text here'
                        style={{
                            backgroundColor: props.mode === "light" ? "white" : "grey",
                            color: props.mode === "light" ? "black" : "white"
                        }}
                        onChange={handleOnChange}
                        value={text}
                        id="exampleFormControlTextarea1"
                        rows="6"
                    ></textarea>

                </div>

                <button className="btn btn-dark" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-dark mx-2" onClick={handleLowerClick} >Convert to Lower Case</button>
                <button className="btn btn-dark " onClick={handleAlternatetext}>aLtErNaTe TeXt</button>
                <button className="btn btn-dark mx-2" onClick={handleClearClick}>Clear Text</button>

            </div>
            <div className="container2 my-3 mx-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
                <h2>Your Text Summary</h2>
                {text.length > 0 && (
                    <><p>{wordCount} Words and {text.length} Characters</p><p>{0.008 * wordCount} Minutes read</p></>
                )}
                <h2>Previewing Your Upper Text Here</h2>
                <p>{text.length > 0 ? text : "Enter Something to Preview it here"}</p>
            </div>
        </>
    )
}

export default Textform
