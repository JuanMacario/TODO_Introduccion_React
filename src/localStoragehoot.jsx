import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)
  let parsedItem;


  React.useEffect(() => {
    setTimeout(() => {
      const localStoreItem = localStorage.getItem(itemName)

      if (!localStoreItem) {
        parsedItem = []
        localStorage.setItem(itemName, JSON.stringify(initialValue))
      } else {
        parsedItem = JSON.parse(localStoreItem)
        setItem(parsedItem)
      }

      setLoading(false)
    }, 500)
  }, [])

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return {
    item,
    saveItem,
    loading,
    error
  }

}

export { useLocalStorage }
