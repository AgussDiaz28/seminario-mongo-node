let faker = require('faker');

function createBSONs(){

let mybigobj = [];

for (i=0;i<=40;i++){
    var randomName = faker.name.findName(); // Rowan Nikolaus
    var country = faker.address.country(); // random contact card containing many properties
    var year = faker.random.number();
    var duration = faker.random.number();
    var review = faker.lorem.paragraph();
    var revenew = faker.random.number();
    var studio = faker.company.companyName();
    var actors = [];
    for (j=0;j<=4;j++){
    	actors.push(faker.name.findName());
    }
    var myobj = {actors:actors,duration:duration, revenew:revenew, name: randomName,review:review, studio:studio , country: country, year:year  };
    mybigobj.push(myobj);
}

return mybigobj;
}

console.log(createBSONs());
