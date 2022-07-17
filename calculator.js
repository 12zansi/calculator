var screen = document.querySelector("#screen")
var btn = document.querySelectorAll(".btn")
var prev = screen.value
var memory=[]
var sMemory=''
for(item of btn){
    item.addEventListener('click',(e)=>{
        btntext=e.target.innerText;
        if(btntext=='×'){
            btntext='*';
        }
        if(btntext=='÷'){
            btntext='/';
        }
        if(btntext == '.'){
            // console.log(btntext)
            if(screen.value.indexOf('.') >= 0){
                return false;
            }
        }
        screen.value+=btntext
        // sMemory = btntext;
        this.memory.push(btntext)
        // this.memory.concat(btntext)
        // let dfr = memory.join()
    })
}
function result(){
    let result='';
    for (let i = 0; i < memory.length; i++) {
        result = result.concat(memory[i]);
    }
    this.memory = [result]
    console.log(this.memory)
}
// function sin(){
//     screen.value=Math.sin(screen.value)
// }
// function cos(){
//     screen.value=Math.cos(screen.value)
// }
// function tan(){
//     screen.value=Math.tan(screen.value)
// }
// function pow(){
//     screen.value=Math.pow(screen.value,2)
// }
// function sqrt(){
//     screen.value=Math.sqrt(screen.value,2)
// }
// function log(){
//     screen.value=Math.log(screen.value)
// }
// function pi(){
//     screen.value=3.14159265359;
// }
// function e(){
//     screen.value=2.71828182846;
// }
// function fact(){
//     var i,num,f;
//     f=1;
//     num=screen.value
//     for(i=1;i<=num;i++){
//         f=f*i;
//     }
//     i=i-1;
//     screen.value=f
// }

function backspac(){
    screen.value=screen.value.substr(0,screen.value.length-1)
}

function a(event){
    var dots = 0;
    var screen1 = screen.value
    // var length = screen.value.length
    var char = event.which;
    if(char > 31 && char != 32 && (char < 65 || char > 90)&&(char < 97 || char > 122)){
        if(event.keyCode === 46){
            if((screen.value) && (screen.value.indexOf('.') >= 0)){
                return false;
            }
            else{
                return true;
            }
        }
        else{
            return true;
        }
    }
    // && this.value.split('.').length === 2
    else{
        return false;
    }
}
// const calc = {
//     symbols:['+','-','*','/','='],
//     memory:[],
//     sMemory:'',

//     key:function(numb){
//     document.querySelector('#screen').value += numb
//     //   screen.innerHTML += numb;
//       this.sMemory += ''+numb;
//     //   screen.innerHTML = this.sMemory
//     },

//     keySymbols:function(symbol){
//         document.querySelector('#screen').value += symbol
//         this.memory.push(this.sMemory)
     
//         this.memory.push(symbol)
//         // console.log(this.memory)
//         this.sMemory = '';

//     },
//     clear:function(){
//         this.memory =[];
//         this.sMemory = '';
//         document.querySelector('#screen').value = ''
//     },
//     backspace:function(){
      
//       screen.value=screen.value.substr(0,screen.value.length-1)
//     },
//     resul:function(){
//         this.memory.push(this.sMemory);
//         for(i=0;i<=this.memory.length;i++){
//             if (this.memory[i] === this.symbols[0]){
//               let res = Number(this.memory[i-1])+Number(this.memory[i+1]);
//               screen.value=res
//               this.sMemory=res
//               this.memory=res
//               console.log(this.memory)
//             }
//         }
//     }
//     }

// }
