function calculate(args){
	let result;
	if(args.op==="+"){
		result=args.n1+args.n2;
	}
	else if(args.op==="-"){
		result=args.n1-args.n2;
	}
	else{
		result="Not supported";
	}
	return result;
}

//first argument
const myArgs={
	op:"-",
	n1:5,
	n2:9
}

//second argument
class myOtherArgs{
	constructor(operator,num1,num2){
		this.op=operator;
		this.n1=num1;
		this.n2=num2;
	}
}

//first argument result example
console.log(calculate(myArgs));

//second argument result example
newArgs=new myOtherArgs("+",1,5);
console.log(calculate(newArgs));


