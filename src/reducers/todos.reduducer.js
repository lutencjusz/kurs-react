const todos = (state = [1,2,3], action) => { //defoultowa otrzymuje state i action, state musi mieÄ wartoÅÄ poczÄtkowÄ
    switch (action.type) {
        case 'ADD_TODO':
            return [];
        default:
            return state; // zwraca to co otrzymaÅ, jeÅ¼eli jego nie dotyczy, bo wywoÅujÄ siÄ wszystkie reducery
    }
}

export default todos;