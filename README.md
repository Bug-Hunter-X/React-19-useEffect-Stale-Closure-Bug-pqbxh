# React 19 useEffect Stale Closure Bug

This repository demonstrates a subtle bug related to stale closures within `useEffect` hooks in React 19 when dealing with asynchronous operations.  The issue arises when an asynchronous operation (like `setInterval`) uses values from the component's state that might be outdated by the time the asynchronous operation completes.

## Problem

The `MyComponent` example uses `setInterval` to increment a counter. Due to the stale closure, the callback function within `setInterval` continues to reference the initial value of `prevCount` leading to an incorrect count.

## Solution

The solution involves ensuring that the callback function within `setInterval` always accesses the latest state value.