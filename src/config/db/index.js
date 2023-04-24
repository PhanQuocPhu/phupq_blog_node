const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.set('strictQuery', true);
        await mongoose.connect('mongodb://127.0.0.1/phupq_blog_dev');
        console.log('Connect successfully')
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = { connect };