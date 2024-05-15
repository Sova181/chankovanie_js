function chunk(array, chunkSize) {
    //Пустой массив, в который будем добавлять куски
    let result = [];
  
    for (let i = 0; i < array.length; i += chunkSize) {
      // Вырезаем кусок массива заданного размера и добавляем его в полученный массив
      result.push(array.slice(i, i + chunkSize));
    }

    return result;
  }
  
module.exports = chunk