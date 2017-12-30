export default function ({
  store,
  error
}) {
  console.log(store.state.employee)
  if (!store.state.employee) {
    error({
      message: 'selam connected',
      statusCode: 403
    })
  }
}
