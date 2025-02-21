/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // update field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "gszrzpjtn80zvk1",
    "hidden": false,
    "id": "relation3239031081",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "Scenariste",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_91977388")

  // update field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "gszrzpjtn80zvk1",
    "hidden": false,
    "id": "relation3239031081",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "Realisateur",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
