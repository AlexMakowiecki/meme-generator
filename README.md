# Meme generator
## Introduction
It's a website that gives you a random meme image whenever you press a button, and let you write a top phrase and a bottom phrase on that image.
This project was done to learn new concepts of React, and practice the ones learned previously. 
### React concepts learned in the course
  - <details>
      <summary><b>Use of event listeners</b></summary>
      <br/>

      - <details>
          <br/>
          <summary>You can create and attach and event listener writting it as an attribute in the element you want to attach it, like in HTML, but you have to write them in Camel Case.  </summary>
  
          ```JSX
          function Main(){
            return (
              <main onClick={handleClick} onMouseEnter={handleMouseEnter}></main>
            )
          }
          ```
        </details>
      - <details>
          <summary>Then, you can write the functions that run when the event happen, like in any other javascript code</summary>

          ```JSX
          function Main(){
            function handleClick(){
              console.log("Click handled")
            }
            function handleMouseEnter(){
              console.log("Mouse Enter handled")
            }
            return (
              <main onClick={handleClick} onMouseEnter={handleMouseEnter}></main>
            )
          }          
          ```
      </details>

    </details>
  - <details>
      <summary><b>Use of State</b></summary>
      <br/>
    
      - If you want your component to re-render when a value in your code updates, you have to use State.
        - For example, in this project when you write on the upper-text input, the upper text of the meme image changes too.
        - That happens because I store the value you write in a variable that I create using State
          
      <br/>
    
      - <details>
          <summary><b>Setting a State</b></summary>
          <br/>
        
          - To use a State, you have to write `React.useState("value")`. The "value" you pass, will be the first value of your variable.
          - That function will return an array with two value inside. The first is the actual value of your variable, the second it's the function you have to use to update that value.
          - Knowing that useState() will return an array, you can deconstruct it at the same time you create the variable.
          - **Tip!** to normalize the names, you can name the function that will update the value like this: "set" + "variableName" = setVariableName
          <br/>
          
          ```JSX
          function Main(){
            const stateArray = React.useState("first value")
            // Or, the better way
            const [value, setValue] = React.useState("first value")
            // Where value is the value, and setValue is the function to update that value.
          }
          ```  
        </details>  
      - <details>
          <summary>Updating State</summary>
          <br/>
   
          - If you dont need to use the previous value, you only have to pass the new value as parameter to the setter function.
          - If you need to use the previous value, you have to pass a function as parameter. That function will receive the previous value as default.
   
          ```JSX
          ```
        </details>
    </details>    
    

