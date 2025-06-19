const { supabase } = require('../supabaseClient');

async function createUser(name, email, xp = 0, cb) {
  try {
    const { data, error } = await supabase
      .from('users')
      .insert({ name, email, xp })
      .select()
      .single();
    if (error) return cb(error, null);
    cb(null, data.id);
  } catch (err) {
    cb(err, null);
  }
}

async function getUserById(id, cb) {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .single();
    if (error) return cb(error, null);
    cb(null, data);
  } catch (err) {
    cb(err, null);
  }
}

async function listUsers(cb) {
  try {
    const { data, error } = await supabase.from('users').select('*');
    if (error) return cb(error, null);
    cb(null, data);
  } catch (err) {
    cb(err, null);
  }
}

module.exports = {
  createUser,
  getUserById,
  listUsers
};
