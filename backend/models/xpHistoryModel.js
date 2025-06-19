const { supabase } = require('../supabaseClient');

async function addXP(userId, courseId, xp, cb) {
  try {
    const { data, error } = await supabase
      .from('xp_history')
      .insert({ user_id: userId, course_id: courseId, xp })
      .select()
      .single();
    if (error) return cb(error, null);
    cb(null, data.id);
  } catch (err) {
    cb(err, null);
  }
}

async function getHistoryByUser(userId, cb) {
  try {
    const { data, error } = await supabase
      .from('xp_history')
      .select('*')
      .eq('user_id', userId)
      .order('ts', { ascending: false });
    if (error) return cb(error, null);
    cb(null, data);
  } catch (err) {
    cb(err, null);
  }
}

async function getEntryById(id, cb) {
  try {
    const { data, error } = await supabase
      .from('xp_history')
      .select('*')
      .eq('id', id)
      .single();
    if (error) return cb(error, null);
    cb(null, data);
  } catch (err) {
    cb(err, null);
  }
}

async function updateEntry(id, userId, courseId, xp, cb) {
  try {
    const { error } = await supabase
      .from('xp_history')
      .update({ user_id: userId, course_id: courseId, xp })
      .eq('id', id);
    if (error) return cb(error);
    cb(null);
  } catch (err) {
    cb(err);
  }
}

async function deleteEntry(id, cb) {
  try {
    const { error } = await supabase
      .from('xp_history')
      .delete()
      .eq('id', id);
    cb(error || null);
  } catch (err) {
    cb(err);
  }
}

module.exports = {
  addXP,
  getHistoryByUser,
  getEntryById,
  updateEntry,
  deleteEntry
};
