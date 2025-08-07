# Gmail Setup for Contact Form

To enable email sending from your contact form, you need to set up a Gmail App Password.

## Steps to Set Up Gmail App Password:

### 1. Enable 2-Factor Authentication
- Go to your Google Account settings: https://myaccount.google.com/
- Navigate to "Security" → "2-Step Verification"
- Follow the steps to enable 2FA if not already enabled

### 2. Generate App Password
- Go to Google Account settings: https://myaccount.google.com/
- Navigate to "Security" → "App passwords"
- Select "Mail" as the app and "Other" as the device
- Enter "Portfolio Contact Form" as the device name
- Click "Generate"
- Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)

### 3. Update Environment Variables
- Open `.env.local` file in your project root
- Replace `your-gmail-app-password-here` with the generated app password
- Make sure `GMAIL_USER` is set to `aigberuan6@gmail.com`

### 4. Example .env.local Configuration:
```
GMAIL_USER=aigberuan6@gmail.com
GMAIL_APP_PASSWORD=abcd efgh ijkl mnop
```

### 5. Security Notes:
- Never commit the `.env.local` file to version control
- The app password is different from your regular Gmail password
- You can revoke app passwords anytime from your Google Account settings

### 6. Testing:
- Restart your development server after updating the environment variables
- Test the contact form to ensure emails are being sent to aigberuan6@gmail.com

## Troubleshooting:
- If emails aren't sending, check the browser console and server logs for errors
- Ensure 2FA is enabled on your Google account
- Verify the app password is correctly copied (no spaces)
- Make sure the environment variables are loaded (restart the server)
