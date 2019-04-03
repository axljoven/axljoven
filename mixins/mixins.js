// 
// Sort array from latest to oldest
// 

const sortToLatest = function(arr, sortBy) {
    return arr.sort(function(current, next) {
        if (current[sortBy] < next[sortBy]) { return 1 }
        if (current[sortBy] > next[sortBy]) { return -1 }
        return 0
    })
}

export default {
    sortToLatest
}