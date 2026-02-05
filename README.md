# 💖 Valentine Proposal App

An interactive Valentine's Day web application that playfully asks "Will you be my Valentine?" with a cheeky twist - the "No" button tries to avoid being clicked!

## ✨ Features

- **Playful Interaction**: The "No" button dodges user attempts for 4 tries before allowing a click
- **Smooth Animations**: Falling hearts background and smooth button transitions
- **IP-Based Tracking**: Each visitor can only make one choice, stored by IP address
- **Response Logging**: All interactions (attempts, timing, final choice) are logged
- **Personalized Messages**: Different messages based on how quickly the user responds
- **Mobile & Desktop Support**: Touch and mouse event handling for cross-platform compatibility
- **Memory-Based Storage**: Choices persist during server runtime, reset on restart

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Styling**: Custom CSS with animations and responsive design

## 🚀 Getting Started

1. Clone the repository
   ```bash
   git clone <your-repo-url>
   cd valentine-project/backend
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the server
   ```bash
   node app.js
   ```

4. Open your browser to `http://localhost:3000`

## 📝 How It Works

1. User visits the page and sees the Valentine's proposal
2. If they hover/click "No", the button moves to a random position (up to 4 times)
3. After 4 dodge attempts, the "No" button becomes clickable
4. Once a choice is made, the user's IP is locked and they see their response on subsequent visits
5. All interactions are logged to `log.txt` with timestamps

## 🎯 Use Cases

- Valentine's Day proposals
- Fun interactive web experiences
- Learning project for DOM manipulation and event handling
- Example of IP-based session management

## 📦 Deployment

This app can be easily deployed on:
- AWS EC2 (t2.micro works great)
- Heroku
- DigitalOcean
- Any Node.js hosting platform

See deployment instructions in the docs for AWS EC2 setup with PM2 and Nginx.

## 📄 License

MIT License - feel free to use this for your Valentine's Day shenanigans! 💕

## 🤝 Contributing

Feel free to fork this project and add your own creative twists!

---

Made with ❤️ for Valentine's Day 2026
