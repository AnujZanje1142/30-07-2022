
const person = {
    firstName: 'Anuj',
    lastName: 'Zanje',
    contactNo: "9624479810",
    isAvailable:true,
    showPersonDetails() {
        const accepting = this.isAvailable ? "Yes he is." : "Nope, he is not.";
        document.write("The "+ this.firstName +" "+ this.lastName +" ("+this.position+") - "+ this.contactNo +" is available:"+ accepting+" age of a founder is:"+ this.age);
    }
};
try{

const founder = Object.create(person);
founder.position = "Founder & Executive Chairman";
founder.showPersonDetails();

const coFounder=Object.create(founder);
coFounder.showPersonDetails();

const coFounder2=Object.create(coFounder);
founder.age = 19;
coFounder.showPersonDetails();
}
catch (err) {
    document.write(err);
  }

const roles = {
	founder: 'Anuj Zanje',
	coFounder: 'Ashwin ',
	managingDirector: 'Tejas',
};


const keys = Object.keys(roles);
document.write("<br/>"+keys);


const values = Object.values(roles);
document.write("<br/>"+values);


Object.keys(roles).forEach(key => {
    let value = roles[key];
    document.write("<br/>"+key+":"+value);
});





const nestedRoles = Object.entries(technicalRoles);
document.write("<br/>"+nestedRoles);


nestedRoles.forEach(nestedRole => {
    let key = nestedRole[0];
    let value = nestedRole[1];

    document.write("<br/>"+key+":"+value);
});


const personName = {
    firstName: 'Anuj',
    lastName: 'Zanje'
};




const profile = Object.assign(personName, personRole);
document.write("<br/>"+JSON.stringify(profile));


const profileSpread = {...personName, ...personRole}
document.write("<br/>"+JSON.stringify(profileSpread));



const user = {
	
    username: 'anujzanje@gmail.com',
	password: 'Anuj2003'
};


const newUser = Object.freeze(user);

newUser.password = '*******';
newUser.active = true;

document.write("<br/>"+JSON.stringify(newUser));



const userRecord = {
	username: 'anujzanje@gmail.com',
	password: 'Anuj2003'
};


const newUserRecord = Object.seal(userRecord);

newUserRecord.password = '*******';
newUserRecord.active = true;

document.write("<br/>"+JSON.stringify(newUserRecord)+"<br/>");


const persons = ['ABC', 'DEF', 'GHI', 'JKL'];
document.write("<br/>"+Object.getPrototypeOf(persons)===Array.prototype);