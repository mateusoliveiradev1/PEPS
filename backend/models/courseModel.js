const { supabase } = require('../supabaseClient');

async function createCourse(title, description, cb) {
  try {
    const { data, error } = await supabase
      .from('courses')
      .insert({ title, description })
      .select()
      .single();
    if (error) return cb(error, null);
    cb(null, data.id);
  } catch (err) {
    cb(err, null);
  }
}

async function getCourseById(id, cb) {
  try {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('id', id)
      .single();
    if (error) return cb(error, null);
    cb(null, data);
  } catch (err) {
    cb(err, null);
  }
}

async function listCourses(cb) {
  try {
    const { data, error } = await supabase.from('courses').select('*');
    if (error) return cb(error, null);
    cb(null, data);
  } catch (err) {
    cb(err, null);
  }
}

async function updateCourse(id, title, description, cb) {
  try {
    const { error } = await supabase
      .from('courses')
      .update({ title, description })
      .eq('id', id);
    if (error) return cb(error);
    cb(null);
  } catch (err) {
    cb(err);
  }
}

async function deleteCourse(id, cb) {
  try {
    const { error } = await supabase.from('courses').delete().eq('id', id);
    cb(error || null);
  } catch (err) {
    cb(err);
  }
}

module.exports = {
  createCourse,
  getCourseById,
  listCourses,
  updateCourse,
  deleteCourse
};
