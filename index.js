// Code your solution here
function findMatching(array, name) {
    return array.filter(driver => 
       driver.toLowerCase() === name.toLowerCase()
    )
}

function fuzzyMatch(array, name) {
    return array.filter(driver => 
        driver.toLowerCase().indexOf(name.toLowerCase()) === 0
     )
}

function matchName(array, string) {
    return array.filter(driver => driver.name === string)
}