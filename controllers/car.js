var Car = require('../models/car');
// List of all cars
exports.car_list = async function (req, res) {
    try {
        theCars = await Car.find();
        res.send(theCars);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// exports.car_list = function(req, res) {
//  res.send('NOT IMPLEMENTED: car list');
// };
// for a specific car.
exports.car_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: car detail: ' + req.params.id);
};
// Handle car create on POST.
exports.car_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: car create POST');
};
// Handle car delete form on DELETE.
exports.car_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: car delete DELETE ' + req.params.id);
};
// Handle car update form on PUT.
exports.car_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: car update PUT' + req.params.id);
};
// List of all cars
exports.car_list = async function (req, res) {
    try {
        thecars = await Car.find();
        res.send(thecars);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// VIEWS
// Handle a show all view
exports.car_view_all_Page = async function (req, res) {
    try {
        thecars = await Car.find();
        res.render('car', { title: 'car Search Results', results: thecars });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle cars create on POST.
exports.car_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Car();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"cars_type":"goat", "cost":12, "size":"large"}
    document.carName = req.body.carName;
    document.carcolor = req.body.carcolor;
    document.carcount = req.body.carcount;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific cars.
exports.car_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Car.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
//Handle car update form on PUT.
// Handle car update form on PUT.
exports.car_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Car.findById(req.params.id)
        // Do updates of properties
        if (req.body.carName)
            toUpdate.carName = req.body.carName;
        if (req.body.carcolor) toUpdate.carcolor = req.body.carcolor;
        if (req.body.carcount) toUpdate.carcount = req.body.carcount;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
};

// Handle Costume delete on DELETE.
exports.car_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Car.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.car_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
        result = await Car.findById(req.query.id)
        res.render('cardetail', { title: 'Car Detail', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.car_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('carcreate', { title: 'Car Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a costume.
// query provides the id
exports.car_update_Page = async function (req, res) {
    console.log("update view for item " + req.query.id)
    try {
        let result = await Car.findById(req.query.id)
        res.render('carupdate', { title: 'Car Update', toShow: result });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


// Handle a delete one view with id from query
exports.car_delete_Page = async function (req, res) {
    console.log("Delete view for id " + req.query.id)
    try {
        result = await Car.findById(req.query.id)
        res.render('cardelete', {
            title: 'car Delete', toShow:
                result
        });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};