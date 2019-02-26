const setSymbolFor = (symbolKey, source, payload) => {
    if (!payload) {
        return source;
    }

    const symbol = Symbol.for(symbolKey);
    source[symbol] = payload;
    return source;
}

const getSymbolFor = (symbolKey, payload) => {
    if (!payload) {
        return undefined;
    }

    const symbol = Symbol.for(symbolKey);
    return payload[symbol];
}

export default {
    setSymbolFor,
    getSymbolFor
}