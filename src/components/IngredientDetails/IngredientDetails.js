import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import styles from './IngredientDetails.module.scss';

function IngredientDetails() {
    const { ingredientId } = useParams()
    const ingredients = useSelector(store => store.ingredientsReducer.ingredients)
    const currentIngredient = ingredients.find(item => item._id === ingredientId)
    
    return (
        <>
            <img src={currentIngredient.image} alt={currentIngredient.name} />
            <h3>{currentIngredient.name}</h3>
            <section>
                <div>
                    <span>Калории,ккал</span>
                    <span>{currentIngredient.calories}</span>
                </div>
                <div>
                    <span>Белки, г</span>
                    <span>{currentIngredient.proteins}</span>
                </div>
                <div>
                    <span>Жиры, г</span>
                    <span>{currentIngredient.fat}</span>
                </div>
                <div>
                    <span>Углеводы, г</span>
                    <span>{currentIngredient.carbohydrates}</span>
                </div>
            </section>
        </>
    )
}

// IngredientDetails.propTypes = {
//     currentIngredient: PropTypes.shape({
//         image: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         calories: PropTypes.number.isRequired,
//         fat: PropTypes.number.isRequired,
//         carbohydrates: PropTypes.number.isRequired,
//         proteins: PropTypes.number.isRequired,
//     }.isRequired)
// }

export default IngredientDetails;