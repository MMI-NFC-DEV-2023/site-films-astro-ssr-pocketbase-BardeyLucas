/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("gszrzpjtn80zvk1")

  // add field
  collection.fields.addAt(7, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text2317003210",
    "max": 0,
    "min": 0,
    "name": "Lieu_de_deces",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("gszrzpjtn80zvk1")

  // remove field
  collection.fields.removeById("text2317003210")

  return app.save(collection)
})
