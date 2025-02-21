/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("gszrzpjtn80zvk1")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "8hpx6nx2",
    "maxSelect": 1,
    "name": "Nationalite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "FR",
      "US",
      "UK",
      "CA"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("gszrzpjtn80zvk1")

  // update field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "8hpx6nx2",
    "maxSelect": 1,
    "name": "Nationalite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "FR",
      "US",
      "UK"
    ]
  }))

  return app.save(collection)
})
