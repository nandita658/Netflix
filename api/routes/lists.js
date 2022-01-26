const router = require("express").Router();
const List = require("../models/List");
const verify = require("../verifyToken");

//CREATE
router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newList = new List(req.body);

        try {
            const savedLsit = await newList.save();
            res.status(200).json(savedLsit)
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json("You are not allowed!")
    }
})

//DELETE
router.delete("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await List.findByIdAndDelete(req.params.id);
            res.status(200).json("List has been deleted!")
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("You are not allowed!")
    }
})

//GET
router.get("/", verify, async (req, res) => {
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;
    let list = [];
    try {
        if(typeQuery) {
            if(genreQuery) {
                list = await List.aggregate([
                    {$sample: {size: 10}},
                    {$match: {type: typeQuery, genre: genreQuery}},
                ]);
            } else {
                list = await List.aggregate([
                    {$sample: {size: 10}},
                    {$match: {type: typeQuery}}
                ])
            }
        } else {
            list = await List.aggregate([{$sample: {size: 10}}]);
        } 
        res.status(200).json(list)   
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET RANDOM
router.get("/random", verify, async (req, res) => {
    const type = req.query.type;
    let movie;
    try {
        if(type==="series") {
            movie=await Movie.aggregate([
                { $match: {isSeries: true}},
                {$sample: {size: 1}},
            ]);
        } else {
            movie=await Movie.aggregate([
                { $match: {isSeries: false}},
                {$sample: {size: 1}},
            ]);
        }
        res.status(200).json(movie);
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET ALL
router.get("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const movies = await Movie.find();
            res.status(200).json(movies.reverse());
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json("You are not allowed!")
    }
})

//GET USER STATS
router.get("/stats", async (req, res) => {
    const today = new Date();
    const lastYear = today.setFullYear(today.setFullYear() - 1);

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    try {
        const data = await User.aggregate([
            {
                $project: {
                    month: {$month: "$createdAt"}
                }
            }, {
                $group: {
                    _id: "$month",
                    total: {$sum: 1}
                }
            }
        ]);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;