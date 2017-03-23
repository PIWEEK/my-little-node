const pg = require("pg");

let pool = new pg.Pool({
  host: "localhost",
  database: "my-little-node",
});


exports.createPage = async function(page) {
  try {
    let result = await pool.query(
      "INSERT INTO pages(path, title, slots) VALUES ($1, $2, $3) RETURNING id;",
      [page.path, page.title, page.slots]
    );
    page.setId(result.rows[0].id);
    return page;
  } catch (err) {
    throw err;
  }
}


exports.getPage = async function(id, page_restore) {
  try {
    let result = await pool.query(
      "SELECT id, path, title, slots FROM pages WHERE id=$1;",
      [id]
    );
    return page_restore(result.rows[0]);
  } catch (err) {
    throw err;
  }
}


exports.updatePage = async function(page) {
  try {
    let result = await pool.query(
      "UPDATE pages SET path = $1, title = $2, slots = $3 WHERE id = $4",
      [page.path, page.title, page.slots, page.id]
    );
  } catch (err) {
    throw err;
  }
}


exports.deletePage = async function(id) {
  try {
    let result = await pool.query(
      "DELETE FROM pages WHERE id = $1",
      [id]
    );
  } catch (err) {
    throw err;
  }
}
