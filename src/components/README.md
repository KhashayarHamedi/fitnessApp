# GlowingLogo Component

A reusable React + TypeScript component that renders logos with dynamic UISMESH-style glow effects and Dota-style spark particles.

## Features

- 🎨 **Dynamic Mesh Gradients**: Animated blurred mesh gradient background with radial and conic gradients
- 🌟 **Bloom Effects**: Multiple drop-shadow layers for strong bright edge effects
- 💫 **Smooth Animations**: Slow rotation and subtle breathing animations
- 🎛️ **Configurable Colors**: Customizable 3-color gradient system
- ✨ **Dota-Style Sparks**: Animated particle system with glowing embers/sparks
- 📱 **Responsive Design**: Works perfectly on all screen sizes
- ♿ **Accessibility**: Full accessibility support with proper alt text
- 🎯 **Performance Optimized**: No external dependencies, pure CSS animations + Canvas

## Installation

1. Copy `GlowingLogo.tsx` to your components directory
2. Copy `glow.css` to your styles directory
3. Import and use the component

## Usage

```tsx
import GlowingLogo from './components/GlowingLogo';

// Basic usage with sparks
<GlowingLogo
  src="/path/to/your/logo.png"
  alt="Your Brand Logo"
/>

// Custom configuration with all effects
<GlowingLogo
  src="/path/to/your/logo.svg"
  alt="Your Brand Logo"
  size={500}
  colors={['#FF6B35', '#FFD700', '#FF1493']}
  intensity={0.8}
  showRing={true}
  showSparks={true}
  className="my-custom-class"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | **required** | Image source URL (supports PNG, SVG, JPG) |
| `alt` | `string` | **required** | Accessible alt text for the image |
| `size` | `number` | `680` | Width in pixels (height scales automatically) |
| `colors` | `[string, string, string]` | `['#FFB347', '#FFD700', '#FF1493']` | Array of 3 hex colors for the gradient |
| `intensity` | `number` | `0.75` | Glow strength (0-1) |
| `showRing` | `boolean` | `true` | Whether to show the outer animated ring |
| `showSparks` | `boolean` | `true` | Whether to show the spark particle system |
| `className` | `string` | `''` | Additional CSS classes for the container |

## CSS Variables

The component uses CSS custom properties that can be overridden:

```css
.glowing-logo-container {
  --glow-color-1: #FFB347;    /* First gradient color */
  --glow-color-2: #FFD700;    /* Second gradient color */
  --glow-color-3: #FF1493;    /* Third gradient color */
  --glow-intensity: 0.75;     /* Overall glow strength */
}
```

## Spark Particle System

The component includes a sophisticated particle system that creates Dota-style spark effects:

### Features:
- **Dynamic Spawning**: Sparks spawn randomly around the logo
- **Realistic Movement**: Particles drift outward with varying speeds and directions
- **Life Cycle**: Each spark has a life span with fade-out effect
- **Color Variation**: Sparks use the configured gradient colors
- **Size Variation**: Particles range from 1-4px for realism
- **Performance Optimized**: Uses requestAnimationFrame for smooth 60fps animation

### Technical Details:
- **Canvas-based**: Uses HTML5 Canvas for optimal performance
- **Blend Modes**: Uses 'lighter' composite mode for authentic glow
- **Responsive**: Canvas automatically resizes with the container
- **Accessibility**: Disabled when `prefers-reduced-motion` is enabled

## Animations

- **Mesh Rotation**: 25s linear infinite rotation
- **Mesh Breathing**: 12s ease-in-out scale and rotation
- **Ring Rotation**: 20s linear infinite counter-rotation
- **Bloom Pulse**: 6s ease-in-out opacity and scale changes
- **Spark Animation**: 60fps particle system with requestAnimationFrame

## Browser Support

- ✅ Chrome 88+
- ✅ Firefox 87+
- ✅ Safari 14+
- ✅ Edge 88+

## Accessibility

- Proper `alt` text support
- Reduced motion support via `prefers-reduced-motion`
- High contrast mode support
- Screen reader friendly
- Focus states for keyboard navigation

## Performance

- No external dependencies
- Hardware-accelerated CSS animations
- Efficient Canvas rendering
- Optimized particle system
- Minimal DOM manipulation

## Examples

### Default Configuration with Sparks
```tsx
<GlowingLogo
  src="/logo.png"
  alt="Brand Logo"
/>
```

### Custom Colors with Enhanced Sparks
```tsx
<GlowingLogo
  src="/logo.svg"
  alt="Brand Logo"
  colors={['#4A90E2', '#9B59B6', '#E91E63']}
  intensity={0.9}
  showSparks={true}
  showRing={true}
/>
```

### Without Outer Ring (Sparks Only)
```tsx
<GlowingLogo
  src="/logo.png"
  alt="Brand Logo"
  showRing={false}
  showSparks={true}
  intensity={0.8}
/>
```

### Without Sparks (Ring Only)
```tsx
<GlowingLogo
  src="/logo.png"
  alt="Brand Logo"
  showSparks={false}
  showRing={true}
  intensity={0.7}
/>
```

### High Intensity (All Effects)
```tsx
<GlowingLogo
  src="/logo.png"
  alt="Brand Logo"
  intensity={1.0}
  colors={['#FF6B35', '#FFD700', '#FF1493']}
  showSparks={true}
  showRing={true}
/>
```

### Minimal Configuration
```tsx
<GlowingLogo
  src="/logo.png"
  alt="Brand Logo"
  showSparks={false}
  showRing={false}
  intensity={0.6}
/>
```

## Customization

### Changing Animation Speeds
Modify the animation durations in `glow.css`:

```css
.mesh-gradient-bg {
  animation: meshRotate 25s linear infinite, meshBreathing 12s ease-in-out infinite;
}

.outer-glow-ring {
  animation: ringRotate 20s linear infinite;
}
```

### Adjusting Spark Parameters
Modify the particle system constants in the component:

```tsx
// Particle system constants
const MAX_SPARKS = 50;           // Maximum number of sparks
const SPAWN_RATE = 0.3;          // Sparks per frame
const SPARK_SPEED = 0.5;         // Movement speed
const SPARK_SIZE_RANGE = { min: 1, max: 4 };  // Size range
const SPARK_LIFE_RANGE = { min: 60, max: 120 }; // Life span in frames
```

### Adjusting Blur Amounts
```css
.mesh-gradient-bg {
  filter: blur(45px); /* Increase for more blur */
}

.bloom-layer-1 {
  filter: blur(20px); /* Adjust bloom layers */
}
```

### Custom Color Schemes

#### Fiery Theme
```tsx
colors={['#FF6B35', '#FFD700', '#FF1493']}
```

#### Ocean Theme
```tsx
colors={['#4A90E2', '#9B59B6', '#E91E63']}
```

#### Forest Theme
```tsx
colors={['#2ECC71', '#27AE60', '#16A085']}
```

#### Sunset Theme
```tsx
colors={['#FF4500', '#FF8C00', '#FFD700']}
```

## Troubleshooting

### Logo Not Loading
- Ensure the `src` path is correct
- Check that the image file exists
- Verify the image format is supported

### Performance Issues
- Reduce `intensity` value
- Disable sparks for lower-end devices
- Reduce `MAX_SPARKS` constant
- Disable animations for users with `prefers-reduced-motion`

### Glow Too Strong/Weak
- Adjust the `intensity` prop (0-1)
- Modify CSS variables for fine-tuning
- Use different color combinations

### Sparks Not Visible
- Ensure `showSparks={true}`
- Check that the canvas is properly sized
- Verify that `prefers-reduced-motion` is not enabled
- Check browser console for any errors

## License

This component is provided as-is for use in your projects.
