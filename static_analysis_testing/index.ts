interface Participant {
  firstName: string;
  lastName: string;
  age: number;
  attending: boolean;
  favouriteColor: string;
}

var participant: Participant = {
  firstName: "John",

  lastName: "Doe",
  age: 25,

  attending: true,

  favouriteColor: "green",
};

console.log(participant);
