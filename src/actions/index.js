//2 компонет для работы Redux
//Action возвращает обьект который не надо прописывать в ручную каждый раз
const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    };
};
const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED',
    };
};

export {
    menuLoaded,
    menuRequested
};