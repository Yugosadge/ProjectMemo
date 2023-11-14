export var conn = 0;
/**
 * 
 * @param {string} key 
 * @returns 
 */
export function getData(key){
    return JSON.parse(localStorage.getItem(key)) ?? []
}
/**
 * 
 * @param {string} key 
 * @param {array}} data 
 */
 export function saveData(key, data){
    localStorage.setItem(key, JSON.stringify(data))
}
//get formJSON then save if register. login if 
export function getFormData(form){
            const data = new FormData(event.target)
            const formJSON = Object.fromEntries(data.entries())
            return formJSON
}

export function checkPassw(data){
    if (data.password == data.passwordR){
        return true;
    }else{
        return false;
    }
}

