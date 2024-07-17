# Meme generator
## Introduction
It's a website that gives you a random meme image whenever you press a button and lets you write a top phrase and a bottom phrase on that image.
This project was done to learn new concepts of React and practice the ones learned previously. 
## React concepts learned in the course
  - <details>
      <summary><b>Use of event listeners</b></summary>
      <br/>

      - <details>
          <br/>
          <summary>You can create and attach an event listener by writing it as an attribute in the element you want to attach it, like in HTML, but you have to write them in Camel Case.  </summary>
  
          ```JSX
          function Main(){
            return (
              <main onClick={handleClick} onMouseEnter={handleMouseEnter}></main>
            )
          }
          ```
        </details>
      - <details>
          <summary>Then, you can write the functions that run when the event happens, like in any other javascript code</summary>

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
          - That function will return an array with two values inside. The first is your variable's actual value; the second is the function you will have to use to update that value.
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
          <summary><b>Updating State</b></summary>
          <br/>
   
          - If you don't need to use the previous value, you only have to pass the new value as a parameter to the setter function.
          - If you need to use the previous value, you have to pass a function as a parameter. That function will receive the previous value as default. 
            - **Tip!** to normalize the names, you can name that previous value like this: "prev" + "variableName" = prevVariableName
          - To update a variable correctly, you have to create a new instance of that variable, so React can detect a change and re-render.
            - For example, if you want to change a property of an object, you have to return a new object with that property changed in the setter function.  
   
          <br/>
          
          ```JSX
          function Main(){
            const [name, setName] = React.useState("a name")
            
            /* - New independent value - */
            setName("another name") 
            console.log(name) // "another name"
          
            /* - A value that use the previous one - */
            setName((prevName) => prevName + " with other things")
            console.log(name) // "a name with other things"

            /* - With objects - */          
            const [object, setObject] = React.useState({prop1: 1, prop2: 2))
          
            /* - Simple - */
            setObject((prevObject) => {
              const newObject = {...prevObject}
              newObject.prop1 = "one"
              return newObject
            })
          
            /* - Simplified - */
            setObject((prevObject) => {
              return {...prevObject, prop1:"one"}
            })
          }
          ```
        </details>
    </details>
  - <details>
      <summary><b>Forms with React</b></summary>
      <br/>
    
      - <details>
          <summary>To handle forms, the best way is to use an object that stores the state of each input. If you don't do that, you will have to create a State for each input</summary>
        
          ```JSX
          function Main(){
            const [formData, setFormData] = React.useState({input1:value, input2:value})
            return (
              <form>
                <input>
                <input>
              </form>
            )
          }
          ```
        </details>
      - <details>
          <summary>To know which property to update, you have to use the same name for the property of your object, and the "name" attribute of your input</summary>
        
          ```JSX
          function Main(){
            const [formData, setFormData] = React.useState({input1:value, input2:value})
            return (
              <form>
                <input name="input1">
                <input name="input2">
              </form>
            )
          }
          ```
        </details>
      - <details>
          <summary>Then, you can select the property using "[propertyName]" (computed property names feature) to change the value. </summary>
        
          ```JSX
          function Main(){
            const [formData, setFormData] = React.useState({input1:value, input2:value})

            function handleChange(e){
              const input = e.target
              setFormData(prevFormData => {
                return ({
                  ...prevFormData,
                  [input.name]: input.value
                })
              })
            }
          
            return (
              <form>
                <input name="input1" onChange={handleChange} value="">
                <input name="input2" onChange={handleChange} value="">
              </form>
            )
          }
          ```
        </details>
      - <details>
          <summary>The best practice is also to have "controlled inputs": The value of the inputs and the form object must be the same. The best way to achieve this is to set the value of the "value" attribute to the value of the correspondent property</summary>
        
          ```JSX
          function Main(){
            const [formData, setFormData] = React.useState({input1:value, input2:value})

            function handleChange(e){
              const input = e.target
              setFormData(prevFormData => {
                return ({
                  ...prevFormData,
                  [input.name]: input.value
                })
              })
            }
          
            return (
              <form>
                <input name="input1" onChange={handleChange} value={formData.input1}>
                <input name="input2" onChange={handleChange} value={formData.input2}>
              </form>
            )
          }
          ```
        </details>
      - <details>
          <summary>You need to take into account other types of inputs that don`t have the same structure as text inputs, like checkboxes</summary>
        
          ```JSX
          function Main(){
            const [formData, setFormData] = React.useState({input1:value, input2:value, checkbox:false})

            function handleChange(e){
              const input = e.target
              setFormData(prevFormData => {
                return ({
                  ...prevFormData,
                  [input.name]: (input.type === checkbox) ? input.checked : input.value
                })
              })
            }
          
            return (
              <form>
                <input name="input1" onChange={handleChange} value={formData.input1}>
                <input name="input2" onChange={handleChange} value={formData.input2}>
                <input type="checkbox" onChange={handleChange} value={formData.checkbox}>
              </form>
            )
          }
          ```
        </details>         
    </details>
  - <details>
      <summary><b>Conditional rendering</b></summary>
      <br/>

      - You can set AND conditions for the elements to render, or OR conditions to select between two.
      - You have to use short-circuit evaluation (&& or ||) to write the conditions.
      - You can also use the conditional ternary operator ((cond) ? ifTrue:ifFalse).

      <br/>
      
      ```JSX
          function Main(){
            const condition = false;
            return (
              {condition && <h1>Title</h1>}
              {(condition) ? <h1>Title</h1> : <h1>Another title</h1>}
            )
          }      
      ```  
    </details>
  - <details>
      <summary><b>Side Effects</b></summary>
      <br/>

      - When a React component re-render, the code inside will run again. If you want a part of your code not to re-run each renderization, you can use React.useEffect()
      - React.useEffect() will accept two parameters, one is a function containing your code, and the second is an array of "dependencies"
      - These dependencies will be the variables you want React to follow. React will run the code inside the function whenever the value of these variables changes.
      - If you don't provide an array of dependencies, the code inside your function will run every render.
      - If you provide an empty array, the code inside your function will run only once.
      - In the function you provide, you can also return another function. This function will act as a cleanup function to, for example, remove event listeners that you added off-side React.
        - The cleanup function will run in the next useEffect call (when the value of the dependency changes or the component is removed from DOM). 
      - **Theory tip!** React.useEffect runs after render.

      <br/>
      
      ```JSX
        function Main(){
          const [name, setName] = React.useState("a name");
          const [age, setAge] = React.useState("an age")
          
    
          /* This will run every time name changes */
          React.useEffect(
            () => console.log("Name run"),
            [name]
          )

          /* This will run every time age changes */
          React.useEffect(
            () => console.log("Age run"),
            [age]
          )

          /* This will run only once */
          React.useEffect(
            () => console.log("Once run"),
            []
          )

          /* Cleanup function example */

          React.useEffect(
            () => {
                    const randomEvent = () => console.log("Random")
                    const clickButton = document.getElementById("click-button")
                    clickButton.addEventListener("click", randomEvent)
                    return (() => clickButton.removeEventListener(randomEvent))
                  },
            []
          )
          return (
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <button id="click-button">Click!</button>
          )
        }      
      ```  

      
    </details>
## Preview
![meme-generator](https://github.com/user-attachments/assets/cbfc903a-1bda-4047-bb95-9c9d7e3ecab0)
## About Scrimba

At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜
If we succeed with this, it will give anyone who wants to become a software developer a realistic shot at succeeding, regardless of where they live and the size of their wallets 🎉
The Frontend Developer Career Path aims to teach you everything you need to become a Junior Developer, or you could take a deep-dive with one of our advanced courses 🚀

