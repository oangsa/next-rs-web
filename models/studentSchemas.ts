import { Schema, model, models } from "mongoose";

const studentSchema = new Schema({
    studentData: {
        name: String,
        classNumber: String,
        studentId: String,
        secondary: String,
        class: String,
        status: Boolean,
        reason: String,
        total: Number,
        weekDay: Number,
    },
    loginData: {
        username: String,
        password: String
    }
})

const Note = models.rs || model("rs", studentSchema)

export default Note;