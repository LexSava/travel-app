import { IRating } from "../interfaces"

export const onGetSightRatings = (curRatings: IRating[]) => (
    {type: 'ADD_RATINGS', curRatings}
)
