const errdata = {
  errlist (err) {
    err.showToast({
      icon: 'none',
      title: err,
      duration: 3000
    })
  }
}

export { errdata }
