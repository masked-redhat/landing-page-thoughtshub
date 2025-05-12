/**
 * String empty after trimming spaces 
 */
const stringEmptyATrim = (val: string | undefined): boolean => {
    if (val === undefined) return true;

    val = val.trim();
    return val.length === 0;
}

const checks = { stringEmptyATrim };

export default checks;