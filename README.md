## Live result
https://test-horizontal-list-andrei-2p1njsjmr-andrey9300s-projects.vercel.app/


## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes
I spent about 2 hours on this and realized there’s much more to do with the app than I currently have time for. If you want, we can discuss the next steps together.

You can also check out my own project related to advertising:

GitHub: https://github.com/Andrey9300/adTech

Live result: https://andreilopatin.com/

Next improvements that needed to do:
- Refine the logic to be more accurate 
- Add automated tests 
- Integrate react-window to handle a large number of elements efficiently

## Answer for: Frontend Architecture & State Management
- Global state: Redux / RTK Query (preferences, content, navigation focus)
- Local state: Component state for transient UI/focus 
- Remote navigation: Central controller + focus slices 
- Screen modules: Feature-based components + focusable elements 
- Scroll/animation: scrollIntoView + CSS transitions