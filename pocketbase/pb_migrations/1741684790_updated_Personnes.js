/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("gszrzpjtn80zvk1")

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "select820812177",
    "maxSelect": 1,
    "name": "Metiers",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Son",
      "Lumière",
      "Remplissage"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("gszrzpjtn80zvk1")

  // remove field
  collection.fields.removeById("select820812177")

  return app.save(collection)
})
