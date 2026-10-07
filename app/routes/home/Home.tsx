import { Suspense, lazy } from "react";
import FirstComponent from "./FirstComponent";
import ForthComponent from "./ForthComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
const GetInTouch = lazy(() => import("../../components/GetInTouch"));
const FiftComponent = lazy(() => import("./FifthComponent"));

export default function Home() {
  return (
    <main>
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <ForthComponent />
      <Suspense fallback={"loading"}>
        <GetInTouch />
      </Suspense>
      <Suspense fallback={"loading"}>
        <FiftComponent />
      </Suspense>
    </main>
  );
}
