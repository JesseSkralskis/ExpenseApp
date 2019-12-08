import moment from 'moment';



export default  [
  {
    id: "1",
    description: "im a boss",
    note: "",
    amount: 195,
    createdAt: 0
  },
  {
    id: "2",
    description: "im a baller",
    note: "",
    amount: 109500,
    //to get useful test times we must use moment and subtract
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf()
  },
  {
    id: "3",
    description: "credit card",
    note: "",
    amount: 4500,
    createdAt: moment(0)
      .add(4, "days")
      .valueOf()
  }
];
