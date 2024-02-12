// 랜덤번호 지정
let computerNum = 0
function pickRandomNu(){
    computerNum = Math.floor(Math.random()*100+1) 
    console.log("정답!",computerNum)
}

pickRandomNu()


//유저가 번호를 입력한다 그리고 go 라는 버튼을 누름
//만약에 유저가 랜덤번호를 맞추면, 맟췄습니다!
//랜덤번호가 < 유저번호 Down!!
//랜덤번호가 > 유저번호 Up!!
let playBtn=document.getElementById("play_button")
let userInput=document.getElementById("user_input")
let resultArea=document.getElementById("result_area")

playBtn.addEventListener("click",play)

function play(){
    let userValue=userInput.value;

    if(userValue<1 || userValue>100){
        resultArea.textContent="1과 100사이 숫자를 입력해주세요"
        return;
    }//유저가 1~100 범위 밖에 숫자를 입력시 알려준다. 기회를 감소시키지 않는다.
    
    if(history.includes(userValue)){
        resultArea.textContent="이미 입력한 숫자입니다. 다른 숫자를 입력해주세요."
        return      
    }//유저가 이미 입력한 숫자를 또 입력하면, 알려준다

    chances -- //5번의 기회 로직
    console.log("chance",chances)//5번의 기회 로직 : 기회 횟수 보이기
    chanceArea.textContent=`남은기회 : ${chances}번`//5번의 기회 로직
    if(userValue<computerNum){
        resultArea.textContent="Up!!!"
    }else if(userValue>computerNum){
        resultArea.textContent="Down!!!"
    }else{
        resultArea.textContent="맞췄습니다!!!"
        gameOver=true
    }
    
    history.push(userValue)
    console.log(history)////유저가 이미 입력한 숫자를 또 입력했는지 알기 위한 유효성검사


    //5번의 기회 로직
    if(chances<1){
        gameOver=true
    }//기회가 0일 때 game over가 참
    if(gameOver==true){
        playBtn.disabled=true
    }//game over가 참이면 플레이버튼이 비활성화시키기
}


//reset 버튼을 누르면 게임이 리셋

let resetButton=document.getElementById("reset_button")

resetButton.addEventListener("click",reset)

function reset(){
    // user input창이 깨끗하게 정리되고
    userInput.value=""
    //새로운 번호가 생성되고
    pickRandomNu()

    resultArea.textContent="결과값이 여기 나옵니다!"
}
//5번의 기회를 다 쓰면 게임이 끝난다.(더이상 추측 불가, 버튼이 disabled)
let chances=10
let gameOver=false
let chanceArea=document.getElementById("chance_area")
 //유저가 이미 입력한 숫자를 또 입력하면, 알려준다. 기회를 감소시키지 않는다.
let history=[]

// 유저가 input창에 입력시에 새로운 칸으로 노출시키기
userInput.addEventListener("focus",function()
    {userInput.value=""
})
