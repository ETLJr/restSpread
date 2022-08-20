const filterOutOdds = (...args) => args.filter(v => v % 2 ===0)

const findMin = (...args) => Math.min(...args)

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

const doubleAndReturnArgs = (arr, ...args) => {[arr, ...args.map(v => v * 2)]}

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0,idk), ...items.slice(idx + 1)]
}

const extend = (arr1, arr2) => [...arr1, arr2]

const addKeyVal = (obj, key, val) =>{
    let newObj = {...obj};
    newObj[key] = val;
    return newObj
}

const removeKey = (obj, key)=>{
    let newObj = {...obj};
    delete newObj[key];
    return newObj
}

const combine = (obj1, obj2)=>{
    let newObj = {...obj1, obj2}
    return newObj
}

const update = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key]= val;
    return newObj
}