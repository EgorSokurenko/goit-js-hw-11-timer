import './sass/main.scss';

// Не уверен правильно ли таким методом
const refs = {
    stop: document.querySelector('#stop-button'),
    date: document.querySelector('#calendar'),
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    minutes: document.querySelector('[data-value="mins"]'),
    seconds: document.querySelector('[data-value="secs"]')
}
let date = refs.date

// создал класс с созданием таймера
class CountdownTimer{
    // принимает селектор(хз зачем) и дату события
    constructor({targetDate}){
        this.targetDate = targetDate
        this.timerId = null
    }
    // метод класса для создание самого таймера
    start(){
        // интервал с обновлением таймера
        this.timerId = setInterval(()=>{
            
            const date = Date.now();   
            let time = this.targetDate.getTime() - date;
            let timeComponents = this.getTimeComponents(time)
            
            this.updateTimer(timeComponents)
        },1000)
        
    }
    stop(){
        clearInterval(this.timerId)
    }
    // метод по замене самого текста таймера
    // Не уверен что нужно именно таким способом
    updateTimer({days,hours,mins,secs}){
        refs.days.textContent = days;
        refs.hours.textContent = hours;
        refs.minutes.textContent = mins;
        refs.seconds.textContent = secs;
    }
    // метод подсчёта времени
    getTimeComponents(time){
 
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    
    
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    
    
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    
    
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return {days,hours,mins,secs}
    }
    // функция по добавлению нуля в начало если число единичное 
    pad(value){
        return String(value).padStart(2,'0')
    }
    
}

refs.date.addEventListener('input', setDate)
refs.stop.addEventListener('click', ()=>{
    alert(timer) 
    if(timer)
    {timer.stop()}
})

let timer
function setDate(evt){
    alert(timer)
    alert(date)
    if(timer){
        console.log('stop');
        timer.stop()
    }
    if(evt){
        console.log('change data');
      date.value = evt.currentTarget.value  
    }
    
    console.log(date.value);
    
    let newDate = date.value
    // создаем новый экземпляр
    timer = new CountdownTimer({
        targetDate: new Date(`${newDate}`),
        });  
    // вызываем метод
    return timer.start()
}




 





