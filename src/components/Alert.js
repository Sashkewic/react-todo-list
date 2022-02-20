import React, {useContext} from "react";
import { AlertContext } from "../context/alert/alertContext";

export const Alert = () => {
    const {alert, hide} = useContext(AlertContext)

    if (!alert.visible) {
        return null
    }

    return (
        <div class={`alert alert-${alert.type || 'warning'} alert-dismissible fade show`}>
            <strong>Внимание! </strong><span>Создана заметка: {alert.text}</span>
            <button type="button" className="btn-close" aria-label="Close" onClick={hide}></button>
        </div>
    )
}