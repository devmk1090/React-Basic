import { useRef } from "react";
import useFetch from "../hooks/useFetch";

export default function CreateWorld() {

    const days = useFetch("http://localhost:3001/days");

    function onSubmit(e) {
        e.preventDefault();

        console.log(engRef.current.value)
        console.log(korRef.current.value)
        console.log(dayRef.current.value)
    }

    const engRef = useRef(null)
    const korRef = useRef(null)
    const dayRef = useRef(null)

    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="React" ref={engRef} />
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="리액트" ref={korRef} />
            </div>
            <div className="input_area">
                <label>Day</label>
                <select ref={dayRef}>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>
                            {day.day}
                        </option>
                    ))}
                </select>
            </div>
            <button>저장</button>
        </form>
    );
} 