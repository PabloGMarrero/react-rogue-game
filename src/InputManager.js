class InputManager{
    observers = [];

    subscribe(fn){
        this.observers.push(fn);
    }

    unsubscribe(fn){
        this.observers = this.observers.filter(sub => sub !== fn);
    }

    broadcast(action, data){
        this.observers.forEach(sub => sub(action, data));
    }

    handleInput = e => {
        e.preventDefault();

        switch (e.keyCode){
            case 37:
                this.broadcast("move", {x:-1, y:0});
                break;
            case 38:
                this.broadcast("move", {x:0, y:1});
                break;
            case 39:
                this.broadcast("move", {x:1, y:0});
                break;
            case 40:
                this.broadcast("move", {x:0, y:-1});
                break;
            default:
                break;
        }
    }

    bindInputKey(){
        document.addEventListener('keydown', this.handleInput);
    }

    unbindInputKey(){
        document.removeEventListener('keydown', this.handleInput)
    }
}

export default InputManager;