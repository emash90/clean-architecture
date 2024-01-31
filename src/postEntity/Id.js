const makeId = () => {

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();

    const uniqueId = `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`;
    return uniqueId;
}

module.exports = makeId;