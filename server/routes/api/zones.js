const {Zone, validateZone} = require('../../models/zone');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// @route   GET api/zones
// @Desc    Get all Active zones
// @access  Public
router.get('/', async (req, res) => {
  console.log("jeff in get zones");
    const zones = await Zone
        .find()                            // { zoneActive: true }
        .sort({zoneName: 1});
    res.json(zones);
});

// does not have to be active
router.get('/:all', async (req, res) => {
    const zones = await Zone
        .find()
        .sort({zoneName: 1});
    res.json(zones);
});

router.get('/:id', async (req, res) => {
    console.log("jeff in get zones by ID");
    const zone = await Zone.findById(req.params.id);
  
    if (!zone) return res.status(404).send('The zone with the given ID was not found.');
  
    res.send(zone);
});

// @route   POST api/zones
// @Desc    Create New Zone
// @access  Public

router.post('/', async (req, res) => {
    //const { error } = validateZone(req.body); 
    //if (error) return res.status(400).send(error.details[0].message);
  
    let zone = new Zone({ 
        zoneName: req.body.zoneName,
        zoneCode: req.body.zoneCode,
        zoneActive: req.body.zoneActive
    });
    zone = await zone.save();
    
    console.log("Zone Created:", zone.zoneCode, zone.zoneName );
    res.send(zone);
});

router.put('/:id', async (req, res) => {
    //const { error } = validateZone(req.body); 
    //if (error) return res.status(400).send(error.details[0].message);
  
    const zone = await Zone.findByIdAndUpdate(req.params.id, 
        { zoneName: req.body.zoneName,
          zoneActive: req.body.zoneActive,
          zoneCode: req.body.zoneCode }, 
        { new: true
    });
  
    if (!zone) return res.status(404).send('The zone with the given ID was not found.');
    
    console.log("Zone Updated:", zone.zoneCode, zone.zoneName);

    res.send(zone);
});
  
router.delete('/:id', async (req, res) => {
    const zone = await Zone.findByIdAndRemove(req.params.id);
  
    if (!zone) return res.status(404).send('The zone with the given ID was not found.');
  
    res.send(zone);
});

module.exports = router;