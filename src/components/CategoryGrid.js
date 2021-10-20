import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import CategoryGridItem from './CategoryGridItem';

const CategoryGrid = ({category}) => {
    const {data:images,loading}= useFetchGifs(category);

    return (
        <>
        <h3 className='card-grid animate__animated animate__bounce'> {category} </h3> 
        {loading && <p>Cargando..</p>}
        <div className='card-grid animate__animated animate__fadeInUp'>
        {images.map((img)=>
            <CategoryGridItem 
            key={img.id} 
            {...img}
            />
        )}
        </div>
        
        </>
    )
}

export default CategoryGrid
