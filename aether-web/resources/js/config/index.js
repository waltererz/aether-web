function config(path) {
    if (typeof path != 'string' || path.length < 1) {
        return '';
    }

    const pathArray = path.split('.');
    const configFile = pathArray.shift();
    let currentPointer = null;
    
    try {
        currentPointer = require('./' + configFile).default;
    } catch {
        console.log('config 파일을 불러오는데 오류가 발생했습니다. [config/' + configFile + '.js]');
    }
    
    if (!currentPointer) {
        return '';
    }

    for (let i = 0; i < pathArray.length; i++) {
        if (pathArray[i] in currentPointer) {
            currentPointer = currentPointer[pathArray[i]];
        } else {
            console.log(configFile + ' 설정파일에 ' + pathArray[i] + ' 설정값이 존재하지 않습니다. [' + configFile + '.' + pathArray.toString().replace(',', '.') + ']');
            return '';
        }
    }

    return currentPointer;
}

export default config;