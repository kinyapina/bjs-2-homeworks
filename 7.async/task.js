class AlarmClock {
  constructor(alarmCollection, id) {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(timeToStart, callback) {
    if (!timeToStart || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }

    if (this.alarmCollection.some((alarm) => alarm === timeToStart)) {
      console.warn('Уже присутствует звонок на это же время')
    }

    this.alarmCollection.push(
      {
        callback: callback,
        time: timeToStart,
        canCall: true,
      }
    )
  }

  removeClock(timeToDelete) {
    //console.log(this.alarmCollection, "1", timeToDelete);
    //console.log(this.alarmCollection, "2");

    //this.alarmCollection = this.alarmCollection.filter((alarm) => alarm.time !== timeToDelete);

    this.alarmCollection = this.alarmCollection.filter(({ time }) => time !== timeToDelete);

    //console.log(this.alarmCollection, "3");
  }

  getCurrentFormattedTime() {
    const date = new Date();
    //console.log(date.getHours(), date.getMinutes());
    return (`${date.getHours()}:${date.getMinutes()}`);
  }


  start() {
    if (this.intervalId) {
      return;
    }

    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((alarm) => {
        if (alarm.time === this.getCurrentFormattedTime() && alarm.canCall) {
          alarm.canCall = false;
          alarm.callback();
        }
      })
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((alarm) => alarm.canCall = true);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}