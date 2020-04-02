class EventEmitter {
    constructor() {
        this.eventMap = {};
    }

    addEventEmitter(event, listener) {
        if (!this.eventMap[event]) {
            this.eventMap[event] = [];
        }

        this.eventMap[event].push(listener);
    }

    on(event, listener) {
        this.addEventEmitter(event, listener);
    }

    removeEventListener(event, listener) {
        if (!this.eventMap[event]) {
            return;
        }
        
        if (!listener) {
            this.eventMap[event] = [];
            return;
        }

        this.eventMap[event] = this.eventMap[event].filter(item => item !== listener);
    }

    once(event, func) {
        const listener = (...rest) => {
            func(...rest);
            this.eventMap[event] = [];
        }
        this.addEventEmitter(event, listener);
    }

    removeAllListeners() {
        Object.keys(this.eventMap).forEach(item => {
            this.eventMap[item]= [];
        });
    }

    emit(event, ...reset) {
        if (!this.eventMap[event]) {
            return;
        }
        this.eventMap[event].forEach(item => {
            item(...reset);
        });
    }
}