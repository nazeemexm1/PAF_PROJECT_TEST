const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const expensesSchema = new Schema({

    NameOfTheCompany : {
        type : String,
        //required : true
    },

    Quentity : {
        type : String,
        //required : true
    },

    FoodType : {
        type : String,
        //required : true
    },

    Contct : {
        type : String,
        //required : true
    },

    Location : {
        type : String,
        //required : true
    },

    PickupData : {
        type : String,
        //required : true
    },
    
    PickupTime : {
        type : String,
        //required : true
    }

})

const sponser = mongoose.model("SponserS",sponsersSchema);

module.exports = sponser;