import * as actions from '../actions/actions'
import { financeRequest } from '../requests/financeRequest'

export const getFinanceRequest = () => async (dispatch) => {
  dispatch(actions.startAction('FINANCE', 'GET')())
  try {
    const result = await financeRequest()
    dispatch(actions.successAction('FINANCE', 'GET')(result))
  } catch (e) {
    dispatch(actions.failureAction('FINANCE', 'GET')('Error'))
  }
}
