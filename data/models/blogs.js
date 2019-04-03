import blogs from "~/data/blogs.json"


//
// Get all blogs
//

const getAll = function() {
    return blogs
}


// 
// Get single post
// 

const get = function(slug) {
    return blogs.find(blog => blog.slug === slug)
}


//
// Get blogs with matched category
//

const getAllWithCategory = function(category) {
    let results = blogs.filter(blog => {
        return blog.categories.includes(category)
    })

    return results
}


// 
// Get recent blogs
// 

const getRecent = function() {
    let default_count = 5
    if (blogs.length < 5) {
        return getAll()
    } 
    else {
        let recent = []

        do { recent.push(blogs.pop()) } 
        while (--default_count)

        return recent
    }
}


export default {
    getAll,
    get,
    getAllWithCategory,
    getRecent
}