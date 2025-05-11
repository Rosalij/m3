
//package requirements
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//connect mongodb database
mongoose.connect("mongodb+srv://rosalij:YgaIDYj9uWcPcEwr@cluster0.uzxnqit.mongodb.net/moment3?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.log("Error connecting to database: " + error);
});

const app = express();
//if no specified port, use port 3000
const port = process.env.PORT || 3000;

//middlewares used
app.use(cors()); app.use(express.json());



let experienceSchema = new mongoose.Schema({
    company: { type: String, required: true },
    jobtitle: { type: String, required: true },
    location: { type: String, required: true }
});

const experience = mongoose.model("Experience", experienceSchema)


// Routes
app.get("/experiences", async (req, res) => {
    try {
        let result = await experience.find({});
        if (result.length === 0) {
            return res.status(404).json({ message: "no experiences added" })
        }
        return res.json(result);
    } catch (error) {
        return res.status(500).json(error);
    }
})


//create row in database with POST
app.post("/experiences", async (req, res) => {
    try {
        //get data from request body
        const { company, jobtitle, location } = req.body;
        const newExperience = new experience({
            company,
            jobtitle,
            location
        });
        //save data to database
        const saved = await newExperience.save();
        return res.json(saved);
    } catch (error) {
        return res.status(500).json({ error: "something went wrong" + error });
    };
});


//update row in database
app.put("/experiences/:_id", async (req, res) => {
    try {
        const { company, jobtitle, location } = req.body;
        const updated = await experience.findByIdAndUpdate(req.params._id, {
            company,
            jobtitle,
            location
        },
            { new: true });

        res.json(updated);
    }
    catch (error) { return res.status(500).json({ error: "something went wrong" + error }); };


});
//delete row in database
app.delete("/experiences/:_id", async (req, res) => {
    try {
        await experience.findByIdAndDelete(req.params._id);
        res.json({ message: "Experience deleted", id: req.params._id });
    } catch (error) {
        res.status(500).json({ error });
    }
});
//tell express to start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

