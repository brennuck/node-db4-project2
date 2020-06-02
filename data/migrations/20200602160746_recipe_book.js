
exports.up = function(knex) {
  return knex.schema.createTable('recipe', tbl => {
      tbl.increments();

      tbl.string('name', 128).notNullable().unique();
  })
  .createTable('ingredients', tbl => {
      tbl.increments();

      tbl.string('name', 256).notNullable();
      tbl.float('amount', 250).notNullable();
      tbl.string('measurement', 256).notNullable();

      tbl.integer('ingredient_id').unsigned().references('id').inTable('recipe').onDelete("RESTRICT")
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipe")
};
