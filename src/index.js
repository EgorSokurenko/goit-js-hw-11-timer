import './sass/main.scss';

// Не уверен правильно ли таким методом
const refs = {
    days: document.querySelector('[data-value="days"]'),
    hours: document.querySelector('[data-value="hours"]'),
    minutes: document.querySelector('[data-value="mins"]'),
    seconds: document.querySelector('[data-value="secs"]')
}
// создал класс с созданием таймера
class CountdownTimer{
    // принимает селектор(хз зачем) и дату события
    constructor({selector,targetDate}){
        this.targetDate = targetDate
    }
    // метод класса для создание самого таймера
    start(){
        // интервал с обновлением таймера
        setInterval(()=>{
            
            const date = Date.now();    
            let time = this.targetDate.getTime() - date;
            let timeComponents = this.getTimeComponents(time)
            
            this.updateTimer(timeComponents)
        },1000)
        
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
 
        const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    
    
        const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    
    
        const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    
    
        const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
        return {days,hours,mins,secs}
    }
    
}
// создаем новый экземпляр
const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Sep 5, 2021'),
  });
// вызываем метод
timer.start()

// функция по добавлению нуля в начало если число единичное 
function pad(value){
    return String(value).padStart(2,'0')
}
