

describe('Wifi settings', () => {
    it('Click on wifi icon and go to wifi settings ',async () => {
     //await $('//android.widget.ImageView[@resource-id="com.meldcx.agentm.service.onboarding:id/wifi_status_image"]').waitForDisplayed({ timeout: 3000 })
      await $('//android.widget.ImageView[@resource-id="com.meldcx.agentm.service.onboarding:id/wifi_status_image"]').click()
      await $('//android.widget.LinearLayout[@content-desc="MAPLE IT SOLUTIONS 1,Connected,Wifi three bars.,Secure network"]/android.widget.LinearLayout[1]/android.widget.RelativeLayout').click()
      await $('//android.widget.Button[@resource-id="com.android.settings:id/button1"]').click()
      await $('//android.widget.TextView[@text="MAPLE IT SOLUTIONS 1"]').click()
      await $('//android.widget.EditText[@resource-id="com.android.settings:id/password"]').addValue('MapleBangladesh#1')
      await $('//android.widget.Button[@resource-id="android:id/button1"]').click()
      await $('//android.widget.ImageButton[@content-desc="Navigate up"]').click()
    })
})
