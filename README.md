# SEP Major Data Portal

Responsive vanilla HTML/CSS/JavaScript portal for Sheikh Fareed Auliya Da'wa College, Odamala.

## Configure services

Firebase project `work-34b9a` and the Cloudinary cloud `da6fjyirm` with unsigned upload preset `sep_major` are configured in the client modules.

Before using the portal with live data:

1. Enable Email/Password Authentication and Firestore in Firebase.
2. Deploy `dist/firestore.rules` with Firebase CLI.
3. Ensure the Cloudinary `sep_major` preset is unsigned and restricted to JPG, JPEG, PNG, WebP and PDF.

Never place a Cloudinary API secret or Firebase Admin credential in frontend files.

## Preview

Serve `dist` with any static web server. Entry points are `index.html`, `login.html`, `portal.html`, and `admin/login.html`.
