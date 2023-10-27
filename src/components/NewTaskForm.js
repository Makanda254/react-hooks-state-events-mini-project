import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [details, setDetails] = useState();
  const [selectOption, setSelectOption] = useState()
  

  const optionCategories= categories.filter(category => category !== "All")
  
  function handleDetails(e){
    setDetails(e.target.value)
    //console.log(details)
  }
  function handleOptions(e){
    setSelectOption(e.target.value)
  }

  function handleSubmit(e){
     e.preventDefault();
     const formData = {text : details, category: selectOption}
     onTaskFormSubmit(formData)
  }

  

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={(e)=> handleDetails(e)} value={details}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleOptions}>
          {/* render <option> elements for each category here */}
          {
            optionCategories.map((category => <option key={category} value={selectOption}>{category}</option>))
          }

        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
