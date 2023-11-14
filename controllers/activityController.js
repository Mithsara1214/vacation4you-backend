import Activity from '../models/Activity.js';

export const addActivity = async (req, res) => {
  const activity = req.body;
  const newActivity = new Activity(activity);
  try {
    await newActivity.save();
    return res.status(201).json({
      success: true,
      data: newActivity,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const getActivities = async (req, res) => {
  try {
    const activities = await Activity.find();
    return res.status(200).json({
      success: true,
      data: activities,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const getOneActivity = async (req, res) => {
  try {
    const { id } = req.params;
    const activity = await Activity.findById(id);
    if (!activity) {
      return res.status(404).json({
        success: false,
        message: 'Activity not found',
      });
    }
    return res.status(200).json({
      success: true,
      data: activity,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export const deleteActivity = async (req, res) => {
  try {
    const { id } = req.params;
    const activity = await Activity.findByIdAndDelete(id);
    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }
    res.status(200).json({ message: 'Activity deleted', data: activity });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
