migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vjx165tr20kbhww")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vjx165tr20kbhww")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
