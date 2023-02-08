import PropTypes from 'prop-types';

function IngredientDetails({ currentIngredient}) {
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

IngredientDetails.propTypes = {
    currentIngredient: PropTypes.shape({
        image: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        calories: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
        proteins: PropTypes.number.isRequired,
    })
}

export default IngredientDetails;