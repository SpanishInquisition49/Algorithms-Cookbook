class List{
    constructor(v = null){
        this.listItem =  {value: v, next: null};
    }

    add = (v, index = this.listItem) => {
        if(index.next == null){
            if(index.value == null)
                index.value = v
            else
                index.next = (new List(v).listItem)
            return;
        }
        this.add(v, index.next)
    }

    addToHead(v){
        let tmp = new List(v).listItem
        tmp.next = this.listItem;
        this.listItem = tmp;
    }
    
    remove = (v, index = this.listItem) => {
        if(index.value == v)
            return true;
        else if(index.next != null && this.remove(v, index.next)){
            index.next = index.next.next;      
            return true
        }
        return false  
    }

    remove = (v, equalF, index = this.listItem) => {
        if(equalF(v, index.value))
            return true;
        else if(index.next != null && this.remove(v, equalF, index.next)){
            index.next = index.next.next;      
            return true
        }
        return false 
    }

    contains = (v, index = this.listItem) => {
        if(index.next == null)
            return index.value == v;
        return v == index.value || this.contains(v, index.next)
    }

    contains = (v, equalF, index = this.listItem) => {
        if(index.next == null)
            return equalF(v, index.value);
        return equalF(v, index.value) || this.contains(v, equalF, index.next)
    }

    moveToHead = (v) => {
        if(this.remove(v))
            this.addToHead(v)
    }

    moveToHead = (v, equalF) => {
        if(this.remove(v, equalF))
            this.addToHead(v)
    }

    get = (index, l = this.listItem) => {
        for(let i = 0; i<index; i++)
            if(l.next == null)
                return undefined;
            else
                l = l.next
        return l.value;
    }

    print = (index = this.listItem) => {
        if(index.next == null){
            console.log(index.value)
            return;
        }
        console.log(index.value);
        this.print(index.next)
    }
}
var ls = new List();
console.log("-LastCalls-")
ls.addToHead({contact:"Anna", lastCall: (new Date(Date.now() - (1000 * 60 * 2))).toLocaleString('it-IT', { timeZone: 'Europe/Paris' })});
ls.add({contact:"Marco", lastCall: (new Date(Date.now() - (1000 * 60 * 3))).toLocaleString('it-IT', { timeZone: 'Europe/Paris' })});
ls.add({contact:"Lorenzo", lastCall: (new Date(Date.now() - (1000 * 60 * 40))).toLocaleString('it-IT', { timeZone: 'Europe/Paris' })});
let d = {contact:"Marco", lastCall:(new Date(Date.now())).toLocaleString('it-IT', { timeZone: 'Europe/Paris' })}
ls.moveToHead(d, (x, y) => { return x.contact == y.contact })
ls.print();
console.log("----END----")
let c = "Lorenzo";
console.log("Contact " + c + " is " + (ls.contains(c, (x, y) => { return x == y.contact }) ? "":"not ") + "present in -LastCalls-")
console.log("Call with index 1: " + ls.get(1).contact)