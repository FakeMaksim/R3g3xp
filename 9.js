var addresses = require('./addresses');

var result = [];

for (var i = 0; i < addresses.length; i++){
    result[i]= {
        "street": "Улицы нет",
        "house": "Дома нет",
        "flat": "Квартиры нет"
    }

    var regStreet = /([А-Я][а-я]+\s?[А-Я]?[а-я]+|\b\d+\-[а-я]+\s?[А-Я]?[а-я]+|[А-Я][.]?\s?[А-Я]?[а-я]+)/;
    var timeArray = regStreet.exec(addresses[i]);
    var addressesHouseFlat = addresses[i].replace(/\s?(ул|пл|пр\Sт|пер)?[.]?\s?([А-Я][а-я]+\s?[А-Я]?[а-я]+|\b\d+\-[а-я]+\s?[А-Я]?[а-я]+|[А-Я][.]?\s?[А-Я]?[а-я]+)\s?[,]?\s?(дом|пер|)?[.]?(\s+)?/, "");
    result[i].street = timeArray[0];
    var regHouse = /[0-9?]+[-]?[А-Я]?[а-я]?/;
    var addressesFlat = addressesHouseFlat.replace(/[0-9?]+\/?[-]?[А-Я]?[а-я]?(,\sкв.\s)?\s?/, "");
    addressesFlat=addressesFlat.replace(/[\s?]+/, "");
    if (!addressesHouseFlat) {
        continue;
    } else {
        checkEmpty = addressesHouseFlat;
    }
    if (!addressesFlat) {
        addressesHouseFlat=addressesHouseFlat.replace(/[\s?]+/, "");
        result[i].house = addressesHouseFlat;
        continue;
    } else {
        checkEmpty = addressesHouseFlat;
    }
    var timeArrayHouse = regHouse.exec(addressesHouseFlat);
    result[i].house = timeArrayHouse[0];
    var checkEmpty;
    result[i].flat=addressesFlat;
    var timeArray = "",
        a = "";
}
//console.log(JSON.stringify(result, null, 2));
module.exports = result;

/*
 приклад структури масиву result
 >>> result
 [
 ...
 {
 "street": 'Юности', //string
 "house": '25',      //string
 "flat": '6'         //string
 }
 ...
 ]
 */