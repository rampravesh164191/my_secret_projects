const VehicleModel = require("../models/vehicle.model")

//get all vehicle
const getVehicle = async (req, res)=>{
    try{
        const vehicles = await VehicleModel.find();
        res.status(200).json({message : "List all vehicle", vehicles});
    }catch(error){
        res.status(500).json({message : "error fetching vehicle", error : error.message})
    }
}

//add vehicle
const addVehicle = async (req, res)=>{
    try{
        const vehicle = await VehicleModel.create(req.body);
        res.status(201).json({message : "new vehicle created", vehicle});
    }catch(error){
        res.status(500).json({message : "couldn't add vehicle", error : error.message})
    }
}

//update vehicle
const updateVehicle = async (req, res)=>{
    try{
        const {id} = req.params;
        const updated = await VehicleModel.findByIdAndUpdate(id, req.body,{new:true, runValidators:true})
        if(!updated){
            return res.status(400).json({message : "vehicle not found"})
        }
        res.status(201).json({message : "vehicle updated", updated})
    }catch(error){
        res.status(500).json({message : "error updating vehicle", error : error.message})
    }
}

// delete vehicle
const deleteVehicle = async (req, res)=>{
    try{
        const {id} = req.params;
        const vehicle = await VehicleModel.findByIdAndDelete({_id:id})
        if(!vehicle) return res.status(400).json({message : "vehicle not found"})
        res.status(200).json({message : "vehicle deleted"})
    }catch(error){
        res.status(500).json({message: "error deleting vehicle", error : error.message});
    }
}

//add a trip
const addTrip = async (req, res)=>{
    try {
        const {id} = req.params;
        const vehicle = await VehicleModel.findById({_id:id});
        if(!vehicle) return res.status(404).json({message : "vehicle not found"})
        
        const trip = req.body;
        vehicle.trips.push(trip);
        // await VehicleModel.save(); wrong
        await vehicle.save();

        res.status(201).json({message : "vehicle trip added"})
    }catch(error){
        res.status(500).json({message : "error adding a trip", error : error.message})
    }
}

//update a trip
const updateTrip = async (req, res)=>{
    try{
        const {id, tripId} = req.params;
        let updated = req.body;
        const vehicle = await findById(id);
        if(!vehicle)return res.status(404).json({message : "vehicle not found"});

        let trip = vehicle.trips.id(tripId);
        if(!trip) return res.status(404).json({message : "trip not found"})
        
        Object.assign(trip, updated);
        // vehicle.trips.push(trip);
        await vehicle.save();

        res.status(201).json({message : "trip updated"})
    }catch(error){
        res.status(500).json({message : "trip updated"})
    }
}

module.exports = {addVehicle, getVehicle, updateVehicle, deleteVehicle, addTrip, updateTrip};