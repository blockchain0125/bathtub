import { useEffect, useState } from "react";
import {
  WorkingPlace,
  WaterControl,
  Button,
  WaterAmount,
  Tub,
  Is,
  IsNot,
  Window,
} from "./styledBathtub";

const Bathtub = () => {
  const [water, setWater] = useState<number>(0);
  const [direction, setDirection] = useState<boolean>(false);
  const [active, setActive] = useState(false);
  const handleDirection = (d: boolean) => {
    setActive(true);
    setDirection(d);
  };
  useEffect(() => {
    let interval: any = null;
    if (active && ((direction && water <= 80) || (!direction && water >= 20))) {
      interval = setInterval(() => {
        setWater((water) => water + 20 * (direction ? 1 : -1));
      }, 2000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [direction, water, active]);

  return (
    <Window>
      <WorkingPlace>
        <WaterControl>
          <div>
            <Button
              onClick={() => {
                handleDirection(true);
              }}
            >
              increaseWaterLevel
            </Button>
          </div>
          <div>
            <WaterAmount>{water}</WaterAmount>
          </div>
          <div>
            <Button
              onClick={() => {
                handleDirection(false);
              }}
            >
              reduceWaterLevel
            </Button>
          </div>
        </WaterControl>
        <Tub>
          {water > 80 ? <Is></Is> : <IsNot></IsNot>}
          {water > 60 ? <Is></Is> : <IsNot></IsNot>}
          {water > 40 ? <Is></Is> : <IsNot></IsNot>}
          {water > 20 ? <Is></Is> : <IsNot></IsNot>}
          {water > 0 ? <Is></Is> : <IsNot></IsNot>}
        </Tub>
      </WorkingPlace>
    </Window>
  );
};

export default Bathtub;
