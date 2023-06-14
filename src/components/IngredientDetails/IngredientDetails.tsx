import { useMemo, FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../services/hooks';
import { useParams } from 'react-router-dom';
import { ingredientsAsync } from '../../services/asyncActions/ingredients';


const IngredientDetails: FC = () => {

    const dispatch = useAppDispatch();
    const { ingredientId } = useParams<{ ingredientId: string }>()
    const ingredients = useAppSelector(store => store.ingredientsReducer.ingredients)
    const currentIngredient = ingredients.find((item) => item._id === ingredientId)

    useMemo(() => {
        dispatch(ingredientsAsync())
    }, [])

    return (
        <>
            {currentIngredient && 
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
            </>}
        </>
    )
}

export default IngredientDetails;