import React from "react";

function CategoryFilter({categories, onButton, selectedCategory}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categories.map(category => 
      <button key={category} className={onButton===category?'selected':''} onClick={()=>selectedCategory(category)}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;
