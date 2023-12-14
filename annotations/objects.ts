// Object annotations and inference 
interface Person {
  name: string;
  age: number;
}


const user = {
  firstName: '',
  dob: 30,
  location: {
    city: 'Novato',
    stage: 'CA'
  },
  greet(){
    
  }
}

const {firstName, dob}: {dob: number, firstName: string} = user;