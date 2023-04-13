import {Node} from "./node";

export class SalaryList {
    head : Node | null;
    tail : Node | null;
    size : number;

    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    insertFirst(month:string,money:number){
        let node = new Node(month,money);
        node.next = this.head;
        this.head=node;
        if (!this.tail){
            this.tail=node
        }
        this.size++
    }
    insertLast(month:string,money:number) {

        if (!this.head) {
            this.insertFirst(month, money)
        } else {
            let node = new Node(month, money);
            if (this.tail !== null) {
                this.tail.next = node
            }
            this.tail = node;
            this.size++
        }
    }
    showList(){
        let arr =[];
        let current = this.head;
        while (current){
            arr.push({month:current.month,money:current.money})
            current=current.next
        }
        return arr
    }
    totalSalary(){
        let current=this.head
        let totalSalary = 0
        while (current){
            totalSalary += current.money
            current=current.next
        }
        return totalSalary
    }
maxSalary(){
        let current = this.head;
        let arr = []
        let maxSalary :number = -Infinity
    while (current){
            if (current.money>maxSalary){
                maxSalary=current.money
            }
            current=current.next
    }
    current=this.head;
        while (current){
            if (current.money===maxSalary){
                arr.push({month:current.month,money:current.money})
            }
            current=current.next
        }return arr
}
}

let salary = new SalaryList()
salary.insertLast('1',12)
salary.insertLast('2',13)
salary.insertFirst('3',22)
salary.insertFirst('4',10)
console.log(salary.maxSalary())