const capitalize = (val: string): string => {

    val = val.toLowerCase()
    if ([0, 1].includes(val.length)) return val.toUpperCase();

    val = val.slice(0, 1).toUpperCase() + val.slice(1);

    return val;
}

const strings = {
    capitalize
}

export default strings