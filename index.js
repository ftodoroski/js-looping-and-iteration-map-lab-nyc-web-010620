// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    return drivers.map(function (driver) {
        return driver.toLowerCase()
    })
}

function nameToAttributes(drivers) {
    return drivers.map(function (driver) {
        const driverName = driver.split(' ')
        const driverFullName = {
            firstName: driverName[0],
            lastName: driverName[1]
        }

        return driverFullName
    })
}

function attributesToPhrase(drivers) {
    return drivers.map(function (driver) {
        return `${driver.name} is from ${driver.hometown}`
    })
}