const schedule = require('node-schedule') 


schedule.scheduleJob('0 8 * * 1',()=>{
    console.log('Increase weight by 2.5% or increase reps')

})