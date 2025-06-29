# Phoenix Tower - 360° Panoramic View

## 🏢 Project Overview

This project is a Marzipano-based 360° virtual tour of the outside view of Phoenix Tower. It allows users to explore multiple panoramic scenes, switch between different viewpoints, and enjoy an immersive, accessible experience.

## 🌟 Features

- **Interactive 360° Panoramas**: Navigate through multiple rooms and spaces
- **Multiple Viewpoints**: Explore different angles and perspectives in each room
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Navigation**: Intuitive controls for panning, zooming, and scene switching
- **Auto-rotation**: Optional automatic rotation for hands-free viewing
- **Fullscreen Mode**: Immersive viewing experience
- **Accessible Controls**: Keyboard shortcuts, ARIA live region, and skip link for accessibility

## 🏠 Available Spaces

The virtual tour includes the following areas:

1. back view
2. northlight
3. street
4. front view
5. barzi
6. street.
7. corner

## 🛠️ Technology Stack

- **Marzipano**: 360° panorama viewer library
- **HTML5/CSS3**: Modern web standards
- **JavaScript**: Interactive functionality
- **Responsive Design**: Mobile-first approach

## 🚀 Live Demo

[Add your live demo link here, if available.]

## 📱 How to Use

1. **Navigation**: Use mouse/touch to drag and explore the panorama
2. **Zoom**: Use scroll wheel or pinch gestures to zoom in/out
3. **Scene Switching**: Click on room names in the sidebar to switch between spaces
4. **Auto-rotation**: Toggle the play button for automatic rotation
5. **Fullscreen**: Click the fullscreen button for immersive viewing
6. **Keyboard Shortcuts**:
   - Arrow keys: Look around
   - +/-: Zoom in/out
   - F: Toggle fullscreen
   - A: Toggle autorotate
   - S: Toggle scene list

## 🏗️ Project Structure

```
[project-root]/
├── index.html            # Main application file
├── index.js              # Application logic
├── data.js               # Scene and panorama data
├── style.css             # Styling and layout
├── img/                  # UI icons and images
├── tiles/                # Panoramic image tiles
│   ├── [scene-folders]/
├── vendor/               # Third-party libraries
│   ├── marzipano.js      # Panorama viewer
│   ├── bowser.min.js     # Browser detection
│   └── screenfull.min.js # Fullscreen API
├── LICENSE.txt           # License file
└── README.md             # Project documentation
```

## 📍 Location

Phoenix Tower, [Add address or location here]

## 🎯 Use Cases

- **Real Estate**: Virtual property tours for potential buyers/renters
- **Interior Design**: Showcase design and layout concepts
- **Marketing**: Interactive property presentations
- **Documentation**: Visual record of apartment features and condition

## 🔧 Development

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/Abdalkaderdev/out.git
   cd out
   ```

2. Open `index.html` in a web browser or serve locally:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

3. Visit `http://localhost:8000/` in your browser

### Customization

- **Add New Scenes**: Modify `data.js` to include additional panoramic scenes
- **Update Images**: Replace tiles in the `tiles/` directory with new panoramic images
- **Styling**: Customize appearance by editing `style.css`

## 📄 License

This project is open source and available under the [MIT License](LICENSE.txt).

## 👨‍💻 Author

Abdalkaderdev - [GitHub Profile](https://github.com/Abdalkaderdev)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For questions or support, please open an issue on GitHub or contact the developer.

---

*Experience the future of virtual property tours with Phoenix Tower's immersive 360° panoramic view.* 