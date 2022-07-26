import React, { useEffect } from 'react';
import Loading from '../../utils/loading.gif';


const CarDog = ({ image, index }) => {
    const dogName = image[index]?.split('/')[4];
    const dogNameSplit = dogName?.split('-')[0];
    const randomNumber = Math.floor((Math.random() * 9) + 1);


    useEffect(() => {
        const loading = document.querySelector('.card-dog-loading');
        setTimeout(() => {
            loading.style.display = 'none';
        }, 3000);
    }, []);

    const splitName = () => {
        return dogName?.includes('-') ? dogNameSplit : dogName;
    };
    
  return (
    <div className='card-dog'>
        <h1 className='card-dog-name'>{ splitName()} { randomNumber } </h1>

            <img className='card-dog-loading' src={Loading} alt="loading"/>
            <img className='card-dog-image' src={image[index]} alt={dogNameSplit}/>
        <div className='card-dog-description'>
            { dogNameSplit === 'bulldog' ? 'The Bulldog is a British breed of dog.' : ''}
            { dogNameSplit === 'chihuahua' ? 'The Chihuahua is a graceful dog.' : ''}
            { dogNameSplit === 'chow' ? 'Chows are powerful.' : ''}
            { dogNameSplit === 'labrador' ? 'Labrador is a British breed of retriever gun dog.' : ''}
            {
                (dogNameSplit !== 'bulldog' && dogNameSplit !== 'chihuahua' && dogNameSplit !== 'chow' && dogNameSplit !== 'labrador' ) ? 'A very nice dog!' : ''
            }
        </div>

        
    </div>
  )
}

export default CarDog;

