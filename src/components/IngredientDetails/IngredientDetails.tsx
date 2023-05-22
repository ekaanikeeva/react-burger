import PropTypes from 'prop-types';
import { useMemo, FC } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import styles from './IngredientDetails.module.scss';
import { ingredientsAsync } from '../../services/asyncActions/ingredients';
import { IRootState } from '../../services/reducers/rootReducer';
import { TAppDispatch } from "../../utils/tsUtils";

const IngredientDetails: FC = () => {

    const dispatch: TAppDispatch = useDispatch();
    const { ingredientId } = useParams()
    const ingredients = useSelector((store: IRootState) => store.ingredientsReducer.ingredients)
    const currentIngredient = ingredients.find((item: any) => item._id === ingredientId)

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