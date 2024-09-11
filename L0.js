const employees=[
    {name:"John Doe",age:30,department:"HR",salary:50000},
    {name:"Jane Smith",age:28,department:"Finance",salary:60000},
    {name:"Alex Johnson",age:35,department:"IT",salary:70000},
];

const highestPaid=(employees)=>{
    let highestSalary=0;
    let highestPaidEmployee={};
    for(let i=0;i<employees.length;i++){
        if(employees[i].salary>highestSalary){
            highestSalary=employees[i].salary;
            highestPaidEmployee=employees[i];
        }
    }
    return highestPaidEmployee;
}
console.log(highestPaid(employees));

const destructuringToswap=(employees)=>{
    [employees[0],employees[employees.length-1]]=[
        employees[employees.length-1],
        employees[0],
    ];
    return employees;
};
console.log(destructuringToswap(employees));
