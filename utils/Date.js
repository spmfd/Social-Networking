const Date = (timestamp) => {
    const date = new Date (timestamp);

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return months[date.getMonth()] + '' + date.getDate() + ',' + date.getFullYear();
};

module.exports = Date;