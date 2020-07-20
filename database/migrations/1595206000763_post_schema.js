'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments()
      table.timestamps()

      table.string('titulo').notNullable();
      table.string('texto');
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostSchema
