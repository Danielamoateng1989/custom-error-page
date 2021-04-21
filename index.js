const { response, request } = require('express')
const express = require ('express')
const app = express ()


app.use(express.static('public'))




app.get('/', (request, response) => {
    return response.send()

})
app.all('*', (request, response) => {
    return response.sendFile(__dirname + '/public/404.html');


})
app.listen(3000, () => {
    console.log('Starting...');
}) 