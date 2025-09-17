<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Cool Shot Systems Portfolio

This contains Heritage Oladoye's professional portfolio showcasing projects, skills, and contact information.

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install --legacy-peer-deps`
2. Run the app:
   `npm run dev`

## Features

- **Projects Showcase**: Display of various web applications and projects
- **Skills Overview**: Technical skills and expertise areas
- **Support Contact**: Telegram bot integration for direct communication
- **Neumorphic Design**: Modern UI with neumorphic design elements

## Contact

The support page integrates with a Telegram bot for direct communication. Messages sent through the contact form are forwarded to the configured Telegram account.

**Note for Production**: The current implementation makes direct API calls to Telegram from the browser, which may be blocked by CORS policies. For production deployment, consider:
- Setting up a backend proxy service to handle Telegram API calls
- Using a CORS proxy service 
- Implementing server-side form handling

## Build and Deploy

To build for production:
```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.
