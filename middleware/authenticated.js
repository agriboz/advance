export default function ({
  store,
  error
}) {
  console.log(store.state.manager.authUser)
  if (!store.state.manager.authUser) {
    error({
      message: 'selam connected',
      statusCode: 403
    })
  }
}
