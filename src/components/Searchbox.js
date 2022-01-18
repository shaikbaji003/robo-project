import React from "react";

function SearchBox({handleChange}){
    return(
        <div>
        <input  type="text" 
        placeholder="search robots"  
        className="pa3 ba b--green bg-lightest-blue input-box"
         onChange={(e)=>handleChange(e.target.value)}/>
</div>
    )
}
export default SearchBox;