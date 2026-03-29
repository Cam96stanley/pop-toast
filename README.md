# @cam96stanley/pop-toast

A lightweight, customizable React toast notification library for stacking and timed alerts. No Tailwind required — styles are bundled in.

**[Installation](#installation) · [Setup](#setup) · [Usage](#usage) · [API](#api) · [Contributing](#contributing) · [Coming Soon](#coming-soon)**

## Installation

```bash
npm install @cam96stanley/pop-toast
```

## Setup

Add `<NotificationContainer />` once at the root of your app (e.g. `App.tsx`):

```tsx
import { NotificationContainer } from '@cam96stanley/pop-toast';

function App() {
  return (
    <>
      <NotificationContainer position="top-right" />
      {/* rest of your app */}
    </>
  );
}
```

## Usage

Import `toast` and call it from anywhere in your app:

```tsx
import { toast } from '@cam96stanley/pop-toast';

toast.success('Changes saved!');
toast.error('Something went wrong.');
toast.warning('Low disk space.');
toast.info('A new update is available.');
```

Toasts automatically dismiss after 5 seconds, or can be closed manually by clicking the X.

## API

### `<NotificationContainer />`

| Prop       | Type                                                                  | Default       | Description                       |
|------------|-----------------------------------------------------------------------|---------------|-----------------------------------|
| `position` | `"top-right"` \| `"top-left"` \| `"bottom-right"` \| `"bottom-left"` | `"top-right"` | Where toasts appear on the screen |

### `toast`

| Method                  | Description                  |
|-------------------------|------------------------------|
| `toast.success(message)` | Shows a green success toast |
| `toast.error(message)`   | Shows a red error toast     |
| `toast.warning(message)` | Shows a yellow warning toast |
| `toast.info(message)`    | Shows a blue info toast     |

Each method accepts an optional second argument to override position:

```tsx
toast.success('Done!', 'bottom-right');
```

## Contributing

Contributions are welcome! To get started locally:

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/pop-toast.git
   cd pop-toast
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a new branch for your changes:
   ```bash
   git checkout -b your-feature-name
   ```
5. Make your changes in the `src/` directory
6. Build the package to verify everything compiles:
   ```bash
   npm run rollup
   ```
7. Push your branch and open a pull request against the `develop` branch

## Coming Soon

- **Animations** — Entrance and exit animations for notifications
- **Custom duration** — Control how long each toast stays on screen
- **Pause on hover** — Auto-dismiss timer pauses when hovering over a toast
- **Promise toast** — Automatically show a loading, success, or error toast based on the result of a promise — great for API calls and form submissions:

```tsx
toast.promise(saveData(), {
  loading: 'Saving...',
  success: 'Saved successfully!',
  error: 'Failed to save.',
});
```

## License

ISC
