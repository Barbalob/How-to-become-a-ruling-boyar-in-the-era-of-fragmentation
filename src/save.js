export function SaveTr(save){
localStorage.setItem('trophy_save',save);
}
export function GetTr(){
    let save = localStorage.getItem('trophy_save');
    if(save){
        return save;
    }
    else{
        return false
    }
}