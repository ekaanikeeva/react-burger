import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { TAppDispatch } from '../utils/tsUtils';
    import type { RootState } from './store';

    export const useAppDispatch = () => useDispatch<TAppDispatch>();
    export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;