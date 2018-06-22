const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

module.exports = (() => {
    const PetSchema = new mongoose.Schema({
        _id : Schema.Types.ObjectId,
        name: {
            type: String, 
            required: [true, 'Name is required'], 
            minlength: [3, 'Name must be greater than 3 characters'],
            unique: [true, 'This name already exists'],
            dropDups: true
        },
        pettype: {
            type: String, 
            required: [true, 'Type is required'], 
            minlength: [3, 'Type must be greater than 3 characters']
        },
        description: {
            type: String, 
            required: [true, 'Description is required'], 
            minlength: [3, 'Description must be greater than 3 characters']
        },
        skill1 : {
            type: String,
            default: ''
        },
        skill2 : {
            type: String,
            default: ''
        },
        skill3 : {
            type: String,
            default: ''
        },
        likes: {
            type: Number,
            default: 0
        }
    }, {timestamps: true});
    
    
    PetSchema.plugin(uniqueValidator, { message: 'The {PATH} {VALUE} already exists.' });
    mongoose.model('Pet', PetSchema);
})();