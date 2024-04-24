"use strict";

exports.showHome = (req, res) => {
    res.render("index");
}
exports.showtransportation = (req, res) => {
    res.render("transportation");
};
exports.showSignUp = (req, res) => {
    res.render("contact");
};
exports.postedSignUp = (req, res) => {
    res.render("thanks");
};

var courses = [
    {
        title: "Event Driven Cakes",
        cost: 50
    },
    {
        title: "Asynchronous Artichoke",
        cost: 25
    },
    {
        title: "Object Oriented Orange Juice",
        cost: 10
    }
];
exports.showRenderedtransportation = (req, res) => {
    res.render("transportation", {
        offeredtransportation: transportation // 코스 배열 데이터를 뷰로 전달
    });
};