# react-timer-hooks

## Usage

```javascript
import { useTimeout, useInterval } from "react-timer-hooks";

const TestTimeout = () => {
  // instead of setTimeout()
  useTimeout(() => {
    console.log("test timeout");
  }, 1000);

  return {
      ...
  }
};

const TestInterval = () => {
  // instead of setInterval()
  useInterval(() => {
    console.log("test interval");
  }, 1000);

  return {
      ...
  }
};
```
