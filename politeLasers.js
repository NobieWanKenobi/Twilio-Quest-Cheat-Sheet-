function getLaserSetting(currentSetting){
    if (currentSetting == 'please'){
        return 'OFF'
    }else{
        return 'ON'
    }
}
   

const currentSetting = getLaserSetting();
console.log ('The current laser setting is:' + currentSetting)