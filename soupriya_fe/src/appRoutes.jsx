import { Routes, Route } from "react-router";

import App from "./App";
import { Home } from "./containers/home";
import { Priya } from "./containers/priya";
import { Sourav } from "./containers/sourav";

export const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="sourav" element={<Sourav />} />
        <Route path="priya" element={<Priya />} />
      </Route>
    </Routes>
  );
};
