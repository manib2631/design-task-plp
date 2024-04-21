import ProductGrid from '../ProductGrid';
import IdealForContent from '../IdealForContent'

import React, { useState } from 'react';

import './index.css';
import Recommended from '../Recommended';

function ProductContainer(){
    const [isIdealForVisible, setIsIdealForVisible] = useState(false);

    const toggleIdealForVisibility = () => {
        setIsIdealForVisible(!isIdealForVisible);
    };

    const [isFilterVisible, setIsFilterVisible] = useState(true);

    const toggleFilterVisibility = () => {
        setIsFilterVisible(!isFilterVisible);
    };

    const [isRecommededVisible, setIsRecommededVisible] = useState(false);

    const toggleRecommededVisibility = () => {
        setIsRecommededVisible(!isRecommededVisible);
    };

    
    return(
        <div className='product-container'>
            <hr/>
            <div className='recomended-content'>
                <div className='hide'>
                    <p className='recomended-item hide'>3425 ITEMS</p>
                    <img className='hide-arrow-img' src="assets/arrow-left.svg" alt="arrow"/>
                    <p className='hide-title' onClick={toggleFilterVisibility}>
                        {isFilterVisible ? 'HIDE FILTER' : 'SHOW FILTER'}
                    </p>
                    <p className='hide-title hide-on-desktop' onClick={toggleFilterVisibility}>
                        {isFilterVisible ? 'FILTER' : 'SHOW FILTER'}
                    </p>
                </div>
                <div className='recomended-title' onClick={toggleRecommededVisibility}>
                    <p className='recomended-item'>RECOMMENDED</p>
                    <img className='recomended-img' src="assets/arrow-left.svg" alt="arrow"/>
                    {isRecommededVisible  && (
                        <Recommended/>
                    )}
                </div>
            </div>
            <hr/>

            <div className='img-product-container'>
                {isFilterVisible && (
                    <div className='customizble-block'>
                        <div className='custum-content'>
                            <img className="box" src='assets/Checkbox.svg' alt="ckeck-box"/>
                            <p className='heading'>CUSTOMIZBLE</p>
                        </div>
                        <hr/>
                        <div className='item-block'>
                            <div className='each-item' onClick={toggleIdealForVisibility}>
                                
                                    <h1 className='heading'>IDEAL FOR</h1>
                                    <img className='recomended-img' src="assets/arrow-left.svg" alt="arrow"/> 
                                
                            </div>
                            <p>All</p>
                            {isIdealForVisible && (
                                <IdealForContent/>
                            )}
                        </div>
                        <hr/>
                        
                        <div className='item-block'>
                            <div className='each-item'>
                                <h1 className='heading'>OCCASION</h1>
                                <img className='recomended-img' src="assets/arrow-left.svg" alt="arrow"/> 
                            </div>
                            <p>All</p>
                        </div>
                        <hr/>
                        <div className='item-block'>
                            <div className='each-item'>
                                <h1 className='heading'>WORK</h1>
                                <img className='recomended-img' src="assets/arrow-left.svg" alt="arrow"/> 
                            </div>
                            <p>All</p>
                        </div>
                        <hr/>
                        <div className='item-block'>
                            <div className='each-item'>
                                <h1 className='heading'>FABRIC</h1>
                                <img className='recomended-img' src="assets/arrow-left.svg" alt="arrow"/> 
                            </div>
                            <p>All</p>
                        </div>
                        <hr/>
                        <div className='item-block'>
                            <div className='each-item' >
                                <h1 className='heading'>SEGMENT</h1>
                                <img className='recomended-img' src="assets/arrow-left.svg" alt="arrow"/> 
                            </div>
                            <p>All</p>
                        </div>
                        <hr/>
                        <div className='item-block'>
                            <div className='each-item'>
                                <h1 className='heading'>SUITABLR FOR</h1>
                                <img className='recomended-img' src="assets/arrow-left.svg" alt="arrow"/> 
                            </div>
                            <p>All</p>
                        </div>
                        <hr/>
                        <div className='item-block'>
                            <div className='each-item'>
                                <h1 className='heading'>ROW MATERIAL</h1>
                                <img className='recomended-img' src="assets/arrow-left.svg" alt="arrow"/> 
                            </div>
                            <p>All</p>
                        </div>
                        <hr/>
                        <div className='item-block'>
                            <div className='each-item'>
                                <h1 className='heading'>PATTERN</h1>
                                <img className='recomended-img' src="assets/arrow-left.svg" alt="arrow"/> 
                            </div>
                            <p>All</p>
                        </div>
                        <hr/>
                    </div>
                )}
                <div >
                    <div >
                        <p>NEW PRODUCT</p>
                        <ProductGrid/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductContainer