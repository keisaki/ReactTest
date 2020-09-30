 let obj = Array.from(arr).reduce((obj, [key, value]) => (
    Object.assign(obj, { [key]: value })
  ), {});