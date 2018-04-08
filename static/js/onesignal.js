var OneSignal = window.OneSignal || []
if (!window.OneSignal_Initialized) {
  OneSignal.push(function() {
    OneSignal.init({
      appId: '8e067b5e-0309-4726-b855-d7c0aac698d7',
			autoRegister: false,
      notifyButton: {
        enable: true,
      },
    })
    window.OneSignal_Initialized = true
  })
}
