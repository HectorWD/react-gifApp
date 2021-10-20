import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {
    const [category, setCategory] = useState('');
    const reset=()=>{
        setCategory('');
    }
    const handleAdd=(e)=>{
        setCategory(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(category!==''){
            setCategories(cats=>[category,...cats]);
            reset();
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={category}
            onChange={handleAdd}
            placeholder='Escribe una categoria'
            />
        </form>
    )
}

export default AddCategory

AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired

};
