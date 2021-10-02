/**
 * @return {Object}
 * */
function initCopyTable() {
  const orgTable = {
    hexToRGB: `1`,
    rgbToHex: `2`
  }

  const arr = Object.entries(orgTable).map(([key, val]) => {
      return [key.toLowerCase(), val]
    }
  )
  return Object.fromEntries(arr)
}


(() => {
  window.addEventListener("load", () => {
    alert("double click copy is ready!")
    console.log("double click copy is ready")
    const copyTable = initCopyTable()

    /* 有些網站您所看到的文字很特殊，透過這樣的選取，取得道的文字和你看到的不同，所以不能這樣做
    document.addEventListener("dblclick", (mouseEvent) => {
      const selectContent = window.getSelection().toString()
      navigator.clipboard.writeText(copyTable[selectContent.trim()]).then(() => {
      })
    })
     */

    document.addEventListener("keydown", async (keyboardEvent) => {
      // const selectContent = window.getSelection().toString()
      if (keyboardEvent.key === "F4") {
        const key = await navigator.clipboard.readText()
        const value = copyTable[key.toLowerCase().trim()]
        navigator.clipboard.writeText(value).then(() => {
        })
      }
    })
  })
})()
