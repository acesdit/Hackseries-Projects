let Clock = () =>{

    let time = new Date();

    return <>
<h1>Bharat Clock</h1>
<h3>The current time is {time.toLocaleDateString()} - {time.toLocaleTimeString()}</h3>


</>
    
}

export default Clock; 