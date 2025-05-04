import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store";

export const Movie = () => {
    const filters = useSelector((state: RootState) => state.movieFilters.movie);
    const dispatch = useDispatch();
    return <div>
        <div>
            {filters.map((filter, index) => (
                <div key={index}>
                    {filter.primaryTitle}
                </div>
            ))}
        </div>
    </div>
}