
export function ls_to_level (obj, level) {

    let out = "";

    for (let member in obj) {
        out += member + " = " + (obj[member] ? obj[member].toString() : "null");
    }

    return out;
}