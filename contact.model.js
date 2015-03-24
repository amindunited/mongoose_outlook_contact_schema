'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Outlook fields Contact Schema
 */
var ContactSchema = new Schema({

    First_Name: {
        type: String,
        default: '',
        trim: true
    }, 
    Middle_Name: {
        type: String,
        default: '',
        trim: true
    }, 
    Last_Name: {
        type: String,
        default: '',
        trim: true
    }, 
    Title: {
        type: String,
        default: '',
        trim: true
    }, 
    Suffix: {
        type: String,
        default: '',
        trim: true
    }, 
    Initials: {
        type: String,
        default: '',
        trim: true
    }, 
    Web_Page: {
        type: String,
        default: '',
        trim: true
    }, 
    Gender: {
        type: String,
        default: '',
        trim: true
    }, 
    Birthday: {
        type: Date
    }, 
    Anniversary: {
        type: Date
    }, 
    Location: {
        type: String,
        default: '',
        trim: true
    }, 
    Language: {
        type: String,
        default: '',
        trim: true
    }, 
    Internet_Free_Busy: {
        type: String,
        default: '',
        trim: true
    }, 
    Notes: {
        type: String,
        default: '',
        trim: true
    }, 
    Email_Address: {
        type: String,
        default: '',
        trim: true
    }, 
    Email_2_Address: {
        type: String,
        default: '',
        trim: true
    }, 
    Email_3_Address: {
        type: String,
        default: '',
        trim: true
    }, 
    Primary_Phone: {
        type: String,
        default: '',
        trim: true
    }, 
    Home_Phone: {
        type: String,
        default: '',
        trim: true
    }, 
    Home_Phone_2: {
        type: String,
        default: '',
        trim: true
    }, 
    Mobile_Phone: {
        type: String,
        default: '',
        trim: true
    }, 
    Pager: {
        type: String,
        default: '',
        trim: true
    }, 
    Home_Fax: {
        type: String,
        default: '',
        trim: true
    }, 
    Home_Address: {
        type: String,
        default: '',
        trim: true
    }, 
    Home_Street: {
        type: String,
        default: '',
        trim: true
    }, 
    Home_Street_2: {
        type: String,
        default: '',
        trim: true
    }, 
    Home_Street_3: {
        type: String,
        default: '',
        trim: true
    }, 
    Home_Address_PO_Box: {
        type: String,
        default: '',
        trim: true
    }, 
    Home_City: {
        type: String,
        default: '',
        trim: true
    }, 
    Home_State: {
        type: String,
        default: '',
        trim: true
    }, 
    Home_Postal_Code: {
        type: String,
        default: '',
        trim: true
    }, 
    Home_Country: {
        type: String,
        default: '',
        trim: true
    }, 
    Spouse: {
        type: String,
        default: '',
        trim: true
    }, 
    Children: {
        type: String,
        default: '',
        trim: true
    }, 
    Manager_s_Name: {
        type: String,
        default: '',
        trim: true
    }, 
    Assistant_s_Name: {
        type: String,
        default: '',
        trim: true
    }, 
    Referred_By: {
        type: String,
        default: '',
        trim: true
    }, 
    Company_Main_Phone: {
        type: String,
        default: '',
        trim: true
    }, 
    Business_Phone: {
        type: String,
        default: '',
        trim: true
    }, 
    Business_Phone_2: {
        type: String,
        default: '',
        trim: true
    }, 
    Business_Fax: {
        type: String,
        default: '',
        trim: true
    }, 
    Assistant_s_Phone: {
        type: String,
        default: '',
        trim: true
    }, 
    Company: {
        type: String,
        default: '',
        trim: true
    }, 
    Job_Title: {
        type: String,
        default: '',
        trim: true
    }, 
    Department: {
        type: String,
        default: '',
        trim: true
    }, 
    Office_Location: {
        type: String,
        default: '',
        trim: true
    }, 
    Organizational_ID_Number: {
        type: String,
        default: '',
        trim: true
    }, 
    Profession: {
        type: String,
        default: '',
        trim: true
    }, 
    Account: {
        type: String,
        default: '',
        trim: true
    }, 
    Business_Address: {
        type: String,
        default: '',
        trim: true
    }, 
    Business_Street: {
        type: String,
        default: '',
        trim: true
    }, 
    Business_Street_2: {
        type: String,
        default: '',
        trim: true
    }, 
    Business_Street_3: {
        type: String,
        default: '',
        trim: true
    }, 
    Business_Address_PO_Box: {
        type: String,
        default: '',
        trim: true
    }, 
    Business_City: {
        type: String,
        default: '',
        trim: true
    }, 
    Business_State: {
        type: String,
        default: '',
        trim: true
    }, 
    Business_Postal_Code: {
        type: String,
        default: '',
        trim: true
    }, 
    Business_Country: {
        type: String,
        default: '',
        trim: true
    }, 
    Other_Phone: {
        type: String,
        default: '',
        trim: true
    }, 
    Other_Fax: {
        type: String,
        default: '',
        trim: true
    }, 
    Other_Address: {
        type: String,
        default: '',
        trim: true
    }, 
    Other_Street: {
        type: String,
        default: '',
        trim: true
    }, 
    Other_Street_2: {
        type: String,
        default: '',
        trim: true
    }, 
    Other_Street_3: {
        type: String,
        default: '',
        trim: true
    }, 
    Other_Address_PO_Box: {
        type: String,
        default: '',
        trim: true
    }, 
    Other_City: {
        type: String,
        default: '',
        trim: true
    }, 
    Other_State: {
        type: String,
        default: '',
        trim: true
    }, 
    Other_Postal_Code: {
        type: String,
        default: '',
        trim: true
    }, 
    Other_Country: {
        type: String,
        default: '',
        trim: true
    }, 
    Callback: {
        type: String,
        default: '',
        trim: true
    }, 
    Car_Phone: {
        type: String,
        default: '',
        trim: true
    }, 
    ISDN: {
        type: String,
        default: '',
        trim: true
    }, 
    Radio_Phone: {
        type: String,
        default: '',
        trim: true
    }, 
    TTY_TDD_Phone: {
        type: String,
        default: '',
        trim: true
    }, 
    Telex: {
        type: String,
        default: '',
        trim: true
    }, 
    User_1: {
        type: String,
        default: '',
        trim: true
    }, 
    User_2: {
        type: String,
        default: '',
        trim: true
    }, 
    User_3: {
        type: String,
        default: '',
        trim: true
    }, 
    User_4: {
        type: String,
        default: '',
        trim: true
    }, 
    Keywords: {
        type: String,
        default: '',
        trim: true
    }, 
    Mileage: {
        type: String,
        default: '',
        trim: true
    }, 
    Hobby: {
        type: String,
        default: '',
        trim: true
    }, 
    Billing_Information: {
        type: String,
        default: '',
        trim: true
    }, 
    Directory_Server: {
        type: String,
        default: '',
        trim: true
    }, 
    Sensitivity: {
        type: String,
        default: '',
        trim: true
    }, 
    Priority: {
        type: String,
        default: '',
        trim: true
    }, 
    Private: {
        type: String,
        default: '',
        trim: true
    }, 
    Categories: {
        type: String,
        default: '',
        trim: true
    }
});

mongoose.model('Contact', ContactSchema);
