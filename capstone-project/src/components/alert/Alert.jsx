const schedule = require('node-schedule') 


schedule.scheduleJob('* 8 * * 1',()=>{
    alert('Increase weight by 2.5% or increase reps')

})