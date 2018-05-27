import visibilityFilter from './visibilityFilter'
import { VisibilityFilters, SET_VISIBILITY_FILTER } from '../actions'

describe('visibilityFilter reducer', () => {
    it('should handle initial state', () => {
        expect(
            visibilityFilter(undefined, {})
        ).toEqual(VisibilityFilters.SHOW_ALL)
    })

    it('should handle SET_VISIBILITY_FILTER', () => {
        expect(
            visibilityFilter(VisibilityFilters.SHOW_ALL, {
                type: SET_VISIBILITY_FILTER,
                filter: VisibilityFilters.SHOW_ACTIVE
            })
        ).toEqual(VisibilityFilters.SHOW_ACTIVE)
    })
})