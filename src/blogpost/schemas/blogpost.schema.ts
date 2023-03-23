import * as mongoose from 'mongoose';

export const BlogspotSchema = new mongoose.Schema({
    id: 'Number',
    name: String,
    time: String,
    publication: String,

});