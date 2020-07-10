export const increaseVote = (id) => {
    console.log(id)
    return {
        type: "INCREASE_VOTE",
        payload: {
            id
        }
    }
}

export const decreaseVote = (id) => {
    console.log(id)

    return {
        type: "DECREASE_VOTE",
        payload: {
            id
        }
    }
}