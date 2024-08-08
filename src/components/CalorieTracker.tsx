import CalorieDisplay from "./CalorieDisplay";
import { useActivity } from "../hooks/useActivity";


export default function Calorietracker() {

  const {caloriesConsumed,
    netCalories,
    caloriesBurned} = useActivity()



  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">
        Resumen de calorias
      </h2>
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
        <CalorieDisplay calories={caloriesConsumed} text={"Consumidas"} />
        <CalorieDisplay calories={netCalories} text={"Diferencia"} />
        <CalorieDisplay calories={caloriesBurned} text={"Quemadas"} />
      </div>
    </>
  );
}
