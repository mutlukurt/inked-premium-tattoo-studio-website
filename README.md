# Inked | Premium Tattoo Studio Website

[![Deploy with Vercel](https://vercel.com/button)](https://inked-premium-tattoo-studio-website.vercel.app/)

[**Live Demo**](https://inked-premium-tattoo-studio-website.vercel.app/)

A high-end, visually immersive web experience for **Inked**, a premier tattoo studio. This project showcases a modern, dark-themed aesthetic designed to highlight the artist's portfolio and streamline the client booking process.

## 🎨 Project Overview

This application serves as the digital storefront for a master tattoo artist. It distinguishes itself from standard portfolio sites through its cinematic visual language, interactive utilities, and seamless user experience.

### Key Features

*   **Premium Visual Identity**: A sophisticated dark mode interface with gold accents (`#d4af37`), featuring glassmorphism effects and smooth transitions to evoke a luxury studio atmosphere.
*   **Dynamic Portfolio System**: An interactive gallery showcasing diverse tattoo styles (Realism, Neo-Traditional, Fine Line, Geometric) across various placements (Back, Arm, Leg, Chest, Face, etc.). Includes category filtering for easy exploration.
*   **Smart Pricing Calculator**: A custom utility that provides clients with instant price estimates based on:
    *   **Size**: Interactive slider input (cm).
    *   **Style**: Multiplier logic for Black & Grey vs. Full Color.
*   **Booking Integration**: A streamlined form for clients to secure appointments directly, pre-filled with their estimated service details.
*   **Performance Optimized**: All visual assets are high-resolution yet optimized WebP format to ensure rapid load times without compromising quality.
*   **Responsive Design**: Fully adaptive layout that maintains its premium feel across mobile, tablet, and desktop devices.

## 🛠️ Technology Stack

Built with a focus on performance, modularity, and clean code principles.

*   **Core**: [React 18](https://reactjs.org/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: Vanilla CSS3 with extensive use of:
    *   CSS Variables (Theming)
    *   Flexbox & CSS Grid (Layouts)
    *   Media Queries (Responsiveness)
*   **Typography**: Google Fonts (Cinzel for headings, Lato for body).

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites
*   Node.js (v14 or higher)
*   npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/tattoo-studio.git
    cd tattoo-studio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  Open your browser and navigate to `http://localhost:5173`.

## 📂 Project Structure

```
src/
├── assets/          # Optimized WebP images and static resources
├── components/      # Reusable UI components
│   ├── Navbar       # Sticky navigation with scroll effects
│   ├── Hero         # Cinematic landing section
│   ├── ArtistBio    # Profile and experience section
│   ├── Portfolio    # Filterable image gallery
│   ├── Pricing      # Interactive cost estimator
│   └── Footer       # Site information and contacts
├── App.jsx          # Main application layout
├── index.css        # Global styles, variables, and resets
└── main.jsx         # Application entry point
```

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
*Crafted with precision for the art of tattooing.*
