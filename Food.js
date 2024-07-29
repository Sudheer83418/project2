import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const defaultCategoryImage = 'https://cdn-icons-png.flaticon.com/256/159/159606.png';

const Food = () => {
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState(null);
    const [meals, setMeals] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => {
                setCategories(res.data.categories);
            })
            .catch(error => {
                console.error('Error fetching categories: ', error);
            });
    }, []);

    const fetchMealsByCategory = (categoryName) => {
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
            .then(res => {
                setMeals(res.data.meals);
                setCategory(categoryName);
            })
            .catch(error => {
                console.error(`Error fetching meals for category ${categoryName}: `, error);
            });
    };

    const resetCategorySelection = () => {
        setCategory(null);
        setMeals([]);
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const filteredMeals = meals.filter(meal => {
        return meal.strMeal.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div className='container-fluid' style={{ backgroundColor: "#212529", minHeight: '100vh', color: 'white' }}>
            {category ? (
                <>
                    <button className='btn btn-outline-light bg-info my-3' onClick={resetCategorySelection}>
                        BACK TO MENU
                    </button>
                    <h1 className='text-center text light'><b>Food API STORE</b></h1>
                    <h2 className="text-center mb-4">{category} Menu</h2>
                    <div className='row mb-3 justify-content-center'>
                        <div className='col-md-6'>
                            <input
                                type='text'
                                placeholder='Search meals...'
                                className='form-control'
                                value={search}
                                onChange={handleSearchChange}
                            />
                        </div>
                    </div>
                    <div className='row justify-content-center'>
                        {filteredMeals.map(meal => (
                            <div key={meal.idMeal} className='col-md-3 mb-4'>
                                <div className="card text-center" style={{ height: '100%', backgroundColor: '#343a40', color: 'white' }}>
                                    <img
                                        src={meal.strMealThumb || defaultCategoryImage}
                                        className='card-img-top img-fluid'
                                        alt={meal.strMeal}
                                        style={{ objectFit: 'cover', height: 250, borderRadius: '50%' }}
                                    />
                                    <div className="card-body">
                                        
                                        <h5 className="card-title">{meal.strMeal}</h5>
                                        <a href="#" className="btn text-dark mt-auto align-self-center" style={{ backgroundColor: 'white', width: '150px' }}><b>BUY NOW</b></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div className='row justify-content-center'>
                    
                      <h1 className='text-center text light text-info'><b>Food API STORE</b></h1>
                      <br/>
                    {categories.map(category => (
                        <div key={category.idCategory} className='col-md-3 mb-4'>
                            
                            <button
                                className="card-title text-dark"
                                onClick={() => fetchMealsByCategory(category.strCategory)}
                                style={{ color: 'white' }}
                            >
                                <img
                                    src={category.strCategoryThumb || defaultCategoryImage}
                                    className='card-img-top'
                                    alt={category.strCategory}
                                    style={{ objectFit: 'cover', height: 250, borderRadius: '30%' }}
                                />
                                <h5 className='mt-2'>{category.strCategory}</h5>
                                <a href="#" className="btn text-light mt-auto align-self-center" style={{ backgroundColor: 'black', width: '150px' }}><b>View now</b></a>
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Food;
