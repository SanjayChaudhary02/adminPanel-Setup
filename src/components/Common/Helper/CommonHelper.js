export const capitalize = (s) => (s && s[0].toUpperCase() + s.slice(1).toLowerCase()) || '';
export const getId = (obj, name) => {
    let id;
    if (typeof obj === 'object' && typeof obj[name] === 'object') {
        id = obj[name]?.id || obj[name]?.name;
    } else {
        id = (Number.isNaN(obj[name]) ? obj[name] : parseInt(obj[name], 10));
    }
    return id;
};

export const removeUnusedKeys = (keyList, obj) => {
    const res = { ...obj };
    Object.keys(obj).forEach((item) => {
        if (keyList.indexOf(item) < 0) {
            delete res[item];
        }
    });
    return res;
};