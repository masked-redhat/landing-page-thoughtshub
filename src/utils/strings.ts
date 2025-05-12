const capitalize = (val: string): string => {

    val = val.toLowerCase()
    if ([0, 1].includes(val.length)) return val.toUpperCase();

    val = val.slice(0, 1).toUpperCase() + val.slice(1);

    return val;
}

const title = (val: string): string => {
    let words = val.split(" ")

    words = words.map(w => capitalize(w))

    let joined = words.join(" ")

    return joined;
}

const strings = {
    capitalize,
    title
}

export default strings