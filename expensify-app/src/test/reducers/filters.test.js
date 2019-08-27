import moment from 'moment'
import filterReducer from '../../reducers/filters'

test('should set up default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})

test('should ser sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const action = {
        type: 'SORT_BY_DATE'
    }
    const state = filterReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})