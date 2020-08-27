import { CREATE_POST } from "./types"
import { showAlert } from "./actions"

const forbidden = ["hi", "bye"]

export const forbidddenWordsMiddleware = ({ dispatch }) => next => action => {
    if (action.type === CREATE_POST) {
        const found = forbidden.filter(w => action.payload.title.includes(w))

        if (found.length) {
            dispatch(showAlert("Spammer"))
        }
    }

    return next(action)
}