let form__input = document.getElementById('password-input');

let password_count = 0

function show_hide_password(target){
    password_count += 1
    if(password_count == 2){
        password_count = 0
    };
    if(password_count == 0){
        target.classList.add('view');
        form__input.setAttribute('type', 'password')
    }else{
        target.classList.remove('view');
        form__input.setAttribute('type', 'text')
    };
}
export default show_hide_password;