import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import CategoryGrid from './components/CategoryGrid';

const GifApp = () => {
    const [categories, setCategories] = useState([]);

    return (
        <div>
            <h2>Gif App</h2>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {categories.map((category) =>
                    <CategoryGrid 
                     key={category}
                     category={category} 
                     />
                )}
            </ol>
        </div>
    );
}

export default GifApp
