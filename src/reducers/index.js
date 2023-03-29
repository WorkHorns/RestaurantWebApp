//1 компонет для работы Redux
//Хранит какое-то состояние.
const initialState = {
    //Для проверки отображения можно передать данные из db сюда
    menu: [],
    loading: true

}
//Функция котороя принимает какой-то state и action
const reduser = (state = initialState, action) => {
    console.log(state);
    switch(action.type) {
        case 'MENU_LOADED':
            return {
                menu: action.payload,
                loading: false
            };
        case 'MENU_REQUESTED':
            return {
                menu: state.menu,
                loading: true
            };
        default:
            return state;
    }   
}

export default reduser;